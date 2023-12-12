

export async function GET(req: Request) {

  console.log("GET request received.")

  const response =  new Response("check")

  return response
/*
  const isAuthenticated = checkAuthentication(req);
  if (!isAuthenticated) {
    return { status: 401, body: 'Unauthorized' };
  }
  
  if (req.headers.get('Content-Type') !== 'application/json') {
    return { status: 400, body: 'Bad Request, Content-Type must be application/json' };
  }

  const body = await req.json();

  if (!body.filename || !body.mimeType || !body.content) {
    return { status: 400, body: 'Bad Request' };
  }

  const { filename, mimeType, content } = body;

  const pdfBuffer = Buffer.from(content, 'base64');

  return new Response("check")*/
}

function checkAuthentication(req: Request): boolean {
  const authToken = req.headers.get('Authorization');
  return authToken === 'DucksMakeTheBestPasswords';
}