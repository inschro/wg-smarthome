import fs from 'fs'

export async function GET(req: Request) {

    const data = await fs.promises.readFile('GPTTemplates/testSystemMessage.txt', 'utf8')

    return new Response(data)
}