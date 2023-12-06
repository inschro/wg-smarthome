import { set_light_state } from "@/functions/lightControls"
import {
  getShoppinglistItems,
  addShoppinglistItem,
  removeShoppinglistItem,
  clearShoppinglist
} from "@/functions/shoppingList"


export const prompt_workflow = async (prompt: string) => {
  console.log("prompt:", prompt)
  const response = await fetch('/api/gpt/task_controller', {
    method: 'POST',
    body: prompt,
    headers: {
      'Content-Type': 'text/plain'
    }
  })
  const message = await response.json()
  console.log("message:", message)
  const message_content = message.content
  const content = JSON.parse(message_content)
  console.log("content:", content)
  if (!content.category) {
    return
  }
  const category = content.category
  if (category === "light") {
    prompt_light_command(prompt)
  } else if (category === "shopping_list") {
    prompt_shopping_list_item(prompt)
  }
}

const prompt_light_command = async (prompt: string) => {
  const response = await fetch('/api/gpt/light_controller', {
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

const prompt_shopping_list_item = async (prompt: string) => {
  const response = await fetch('/api/gpt/shopping_list_controller', {
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
      console.log("function_name:", function_name)
      const function_args = JSON.parse(tool_call.function.arguments)
      console.log("args:", function_args)
      if (function_name === "add_shopping_list_item") {
        addShoppinglistItem(function_args.item)
      } else if (function_name === "remove_shopping_list_item") {
        removeShoppinglistItem(function_args.item)
      } else if (function_name === "clear_shopping_list") {
        clearShoppinglist()
      } else {
        return
      }
    }
  }
}