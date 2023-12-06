import { NextResponse } from "next/server"
import OpenAI from "openai"
import {
  light_controller_tools, 
  light_controller_system_message,
} from "@/app/api/gpt/light_controller/lightController"
import { ChatCompletionMessageParam } from "openai/resources/index.mjs"

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration)

export async function PUT(
  req: Request
) {
  try {

    //check if req is plain text
    const contentType = req.headers.get("content-type")
    if (!contentType || !contentType.includes("text/plain")) {
      return new NextResponse("Content type should be text/plain", { status: 400 })
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 })
    }

    const prompt = await req.text()
    const messages: ChatCompletionMessageParam[] = [
      {"role": "system", "content": light_controller_system_message},
      {"role": "user", "content": prompt}
    ]
    const tools: any[] = light_controller_tools

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: messages,
      tools: tools,
      tool_choice: "auto",
      max_tokens: 500,
      temperature: 0.2
    })
    return NextResponse.json(response.choices[0].message)
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error)
    return new NextResponse("Internal Error", { status: 500 })
  }
};