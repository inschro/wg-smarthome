
import { PDFDocument } from 'pdf-lib';

export async function POST(req: Request) {
  try {
    const isAuthenticated = checkAuthentication(req);
    if (!isAuthenticated) {
      return new Response("Unauthorized, Authentication token is incorrect", { status: 401 });
    }

    if (req.headers.get('Content-Type') !== 'application/json') {
      return new Response("Bad Request, Content-Type must be application/json", { status: 400 });
    }

    const body = await req.json();

    if (!body.filename || !body.mimeType || !body.content) {
      return new Response("Bad Request, missing filename, mimeType or content", { status: 400 });
    }

    const { filename, mimeType, content } = body;

    const pdfBuffer = Buffer.from(content, 'base64');
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Extract text (this method is very basic and may not work for all PDFs)
    let textContent = '';
    const pages = pdfDoc.getPages();
    
    textContent += pages.toString();

    return new Response(JSON.stringify({ text: textContent }), { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response("An error occurred", { status: 500 });
  }
}

function checkAuthentication(req: Request): boolean {
  const authToken = req.headers.get('Authorization')
  return authToken === 'DucksMakeTheBestPasswords'
}