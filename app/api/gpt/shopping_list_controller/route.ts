import { NextResponse } from "next/server";
import OpenAI from "openai";
import { shopping_list_controller_system_message, shopping_list_controller_tools } from "./shoppingListController";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

export async function PUT(
  req: Request
) {
  try {

    //check if req is plain text
    const contentType = req.headers.get("content-type")
    if (!contentType || !contentType.includes("text/plain")) {
      return NextResponse.json({error: "Content type should be text/plain"}, { status: 400 })
    }

    if (!configuration.apiKey) {
      return NextResponse.json({error: "OpenAI API Key not configured."}, { status: 500 });
    }

    const prompt = await req.text()
    const messages: ChatCompletionMessageParam[] = [
      {"role": "system", "content": shopping_list_controller_system_message},
      {"role": "user", "content": prompt}
    ]
    const tools: any[] = shopping_list_controller_tools

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
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}