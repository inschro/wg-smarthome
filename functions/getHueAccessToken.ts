import { createClient } from '@supabase/supabase-js'

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
        .select('access_token')
        .single()

      if (error) {
        console.log(error)
        reject(error)
      }
      if (data) {
        const token = data.access_token
        resolve(token)
      }

    } catch (error) {
      console.log(error)
      reject(error)
    }
  });
}