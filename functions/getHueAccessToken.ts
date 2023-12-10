import { createClient } from '@supabase/supabase-js'


const make_new_access_token = async (refresh_token: string) => {
  return new Promise<string>(async (resolve, reject) => {
    const hue_client_id = process.env.HUE_APPID_CLIENT_ID
    const hue_client_secret = process.env.HUE_APPID_CLIENT_SECRET

    if (!hue_client_id || !hue_client_secret) {
      console.log('No Hue Client ID or Secret')
      reject('No Hue Client ID or Secret')
    }

    const base_url = "https://api.meethue.com"
    const endpoint = "/v2/oauth2/token"
    const method = "POST"

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    }
    const body = `grant_type=refresh_token&refresh_token=${refresh_token}&client_id=${hue_client_id}&client_secret=${hue_client_secret}`
    const url = base_url + endpoint

    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: body
    })
    const json_data = await response.json()
    console.log(json_data)

    const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabase_anon_public_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase_service_role_key = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabase_url || !supabase_anon_public_key || !supabase_service_role_key) {
      reject('No Supabase URL or public key')
    }

    const supabase = createClient(
      supabase_url!,
      supabase_service_role_key!
    )

    const { data, error } = await supabase
      .from('hue_tokens')
      .insert([{
        access_token: json_data.access_token,
        refresh_token: json_data.refresh_token
      }])
      .select()

    if (error) {
      console.log(error)
      reject(error)
    }
    if (data) {
      const token = json_data.access_token
      resolve(token)
    }
  });
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
        .order('created_at', { ascending: false })
        .limit(1)
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
            const new_token = await make_new_access_token(refresh_token)
            resolve(new_token)
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