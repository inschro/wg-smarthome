import { NextResponse } from "next/server";
import OpenAI from "openai";
import { task_controller_system_message } from "./taskController";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);


export async function POST(
  req: Request
) {
  try {
    const prompt = await req.text();

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    const messages: ChatCompletionMessageParam[] = [
      {"role": "system", "content": task_controller_system_message},
      {"role": "user", "content": prompt}
    ]

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      max_tokens: 200,
      temperature: 0,
      messages: messages,
      response_format: {"type": "json_object"}
    });
    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}