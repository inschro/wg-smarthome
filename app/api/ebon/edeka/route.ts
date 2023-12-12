

export async function GET(req: Request) {

  console.log("GET request received.")

  const response =  new Response("check")
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

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