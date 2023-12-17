

export async function POST(req: Request) {

  const isAuthenticated = checkAuthentication(req)
  if (!isAuthenticated) {
    return new Response("Unauthorized, Authentication token is incorrect", { status: 401 }) 
  }
  
  if (req.headers.get('Content-Type') !== 'application/json') {
    return new Response("Bad Request, Content-Type must be application/json", { status: 400 })
  }

  const body = await req.json()

  if (!body.filename || !body.mimeType || !body.content) {
    return new Response("Bad Request, missing filename, mimeType or content", { status: 400 })
  }

  const { filename, mimeType, content } = body

  const pdfBuffer = Buffer.from(content, 'base64')

  return new Response("check")
}

function checkAuthentication(req: Request): boolean {
  const authToken = req.headers.get('Authorization')
  return authToken === 'DucksMakeTheBestPasswords'
}