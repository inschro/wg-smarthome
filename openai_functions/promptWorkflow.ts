import { set_light_state } from "@/functions/lightControls"


export const prompt_workflow = async (prompt: string) => {
  const response = await fetch('/api/gpt/lightController', {
    method: 'PUT',
    body: prompt,
    headers: {
      'Content-Type': 'text/plain'
    }
  })
  const message = await response.json()
  console.log("message:", message)
  const tool_calls = message.tool_calls
  if(tool_calls) {
    for(const tool_call of tool_calls) {
      const function_name = tool_call.function.name
      if (function_name !== "set_light_state") {
        return
      }
      const function_args = JSON.parse(tool_call.function.arguments)
      console.log("args:", function_args)
      set_light_state(function_args)
    }
  }
}