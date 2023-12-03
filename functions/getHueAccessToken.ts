import { createClient } from '@supabase/supabase-js'

const getHueRefreshToken = () => {
  return new Promise<string>(async (resolve, reject) => {
    try {

      const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabase_anon_public_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!supabase_url || !supabase_anon_public_key) {
        reject('No Supabase URL or public key')
      }

      const supabase = createClient(
        supabase_url!,
        supabase_anon_public_key!
      )

      const { data, error } = await supabase
        .from('hue_tokens')
        .select('refresh_token')
        .single()

      if (error) {
        console.log(error)
        reject(error)
      }
      if (data) {
        const refresh_token = data.refresh_token
        resolve(refresh_token)
      }

    } catch (error) {
      console.log(error)
      reject(error)
    }
  });
}

const make_new_access_token = async (refresh_token: string) => {

  const hue_client_id = process.env.HUE_APPID_CLIENT_ID
  const hue_client_secret = process.env.HUE_APPID_CLIENT_SECRET

  if (!hue_client_id || !hue_client_secret) {
    return new Response("Missing environment variables", {
      status: 500,
    })
  }

  const response = await fetch(
    `https://api.meethue.com/v2/oauth/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=refresh_token&refresh_token=${refresh_token}&client_id=${hue_client_id}&client_secret=${hue_client_secret}`
    }
  )
  console.log(response)
  const data = await response.json()
  console.log(data)

}


export const getHueAccessToken = () => {
  return new Promise<string>(async (resolve, reject) => {
    try {

      const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabase_anon_public_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!supabase_url || !supabase_anon_public_key) {
        reject('No Supabase URL or public key')
      }

      const supabase = createClient(
        supabase_url!,
        supabase_anon_public_key!
      )

      const { data, error } = await supabase
        .from('hue_tokens')
        .select('*')
        .single()

      if (error) {
        console.log(error)
        reject(error)
      }
      if (data) {
        if (data.created_at) {
          const createdAt = new Date(data.created_at);
          const sixDaysAgo = new Date();
          sixDaysAgo.setDate(sixDaysAgo.getDate() - 6);

          if (createdAt < sixDaysAgo) {
            // `created_at` is more than 6 days ago
            // Add your logic here
            console.log('Token is more than 6 days old')
            const refresh_token = data.refresh_token
            console.log(refresh_token)
            await make_new_access_token(refresh_token)
          } else {
            // `created_at` is within the last 6 days
            // Add your logic here
            const token = data.access_token
            resolve(token)
          }
        }  
      }

    } catch (error) {
      console.log(error)
      reject(error)
    }
  });
}