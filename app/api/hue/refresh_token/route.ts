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

export async function POST() {
  try {
    const refresh_token = await getHueRefreshToken()

    if (!refresh_token) {
      return new Response("No refresh token", {
        status: 400,
      })
    }

    const hue_client_id = process.env.HUE_APPID_CLIENT_ID
    const hue_client_secret = process.env.HUE_APPID_CLIENT_SECRET

    if (!hue_client_id || !hue_client_secret) {
      return new Response("Missing environment variables", {
        status: 500,
      })
    }

    const response = await fetch(
      `https://api.meethue.com/v2/oauth/token?grant_type=refresh_token&refresh_token=${refresh_token}&client_id=${hue_client_id}&client_secret=${hue_client_secret}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    console.log(response)
    const data = await response.json()
    console.log(data)

    return new Response(JSON.stringify(data), {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    })
    
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    })
  }
}