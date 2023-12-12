/*
//function that sends the pdf to the api. attachment is a gmail attachment object of the pdf
function sendPdfToApi(attachment) {
  const apiEndpoint = '<this endpoint>';
  const payload = {
    filename: attachment.getName(),
    mimeType: attachment.getContentType(),
    content: Utilities.base64Encode(attachment.getBytes())
  };

  const options = {
    'method' : 'post',
    'contentType': 'application/json',
    'payload' : JSON.stringify(payload)
  };

  UrlFetchApp.fetch(apiEndpoint, options);
}
*/
export async function GET(req: Request) {

  console.log("POST request received.")

  return new Response("POST request received.")
  /*
  if (req.headers.get('Content-Type') !== 'application/json') {
    return { status: 400, body: 'Bad Request, Content-Type must be application/json' };
  }

  const body = await req.json();

  if (!body.filename || !body.mimeType || !body.content) {
    return { status: 400, body: 'Bad Request' };
  }

  const { filename, mimeType, content } = body;

  const pdfBuffer = Buffer.from(content, 'base64');


  return { status: 200 };*/
}