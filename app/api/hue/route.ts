import { getHueAccessToken } from "@/functions/getHueAccessToken"

const user_name = process.env.HUE_USER_NAME
const url = `https://api.meethue.com/route/clip/v2`



export async function GET(
    req: Request
) {
  try {  
    const token = await getHueAccessToken()
    const endpoint = req.headers.get("endpoint")

    if (!endpoint) {
      return new Response("endpoint is required", {
        status: 400,
      })
    }

    const full_url = url + endpoint

    const response = await fetch(full_url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "hue-application-key": user_name!,
      },
    })

    const data = await response.json()
    console.log(data)
    return new Response(JSON.stringify(data), {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    })
  }
  catch (err) {
    console.log(err)
    return new Response(JSON.stringify(err), {
      status: 500,
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    })
  }
}

export async function PUT(
  req: Request
) {
  try {
    const token = await getHueAccessToken()
    const endpoint = req.headers.get("endpoint")

    if (!endpoint) {
      return new Response("endpoint is required", {
        status: 400,
      })
    }

    const full_url = url + endpoint

    const request_body = await req.json()

    if (!request_body) {
      return new Response("request body is required", {
        status: 400,
      })
    }

    const response = await fetch(full_url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "hue-application-key": user_name!,
      },
      body: JSON.stringify(request_body)
    })

    const data = await response.json()
    console.log(data)
    return new Response(JSON.stringify(data), {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    })
  }
  catch (err) {
    console.log("an error has been caught!", err)
    return new Response(JSON.stringify(err), {
      status: 500,
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    })
  }
}

export async function POST(
  req: Request
) {
  try {
    const token = await getHueAccessToken()
    const endpoint = req.headers.get("endpoint")

    if (!endpoint) {
      return new Response("endpoint is required", {
        status: 400,
      })
    }

    const full_url = url + endpoint

    const request_body = await req.json()

    if (!request_body) {
      return new Response("request body is required", {
        status: 400,
      })
    }

    const response = await fetch(full_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "hue-application-key": user_name!,
      },
      body: JSON.stringify(request_body)
    })

    const data = await response.json()
    return new Response(JSON.stringify(data), {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    })
  }
  catch (err) {
    console.log(err)
    return new Response(JSON.stringify(err), {
      status: 500,
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    })
  }
}