"use client"

import { PiMicrophoneBold } from "react-icons/pi"
import { stt } from "../actions/stt"
import { tts } from "../actions/tts"

const MessageInputView = () => {

  const handleClick = async () => {
    const transcript = await stt()
    console.log(transcript)
    const response = await fetch("/api/gpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: [
          {"role": "user", "content": transcript},
        ]
      })
    })
    const responseJson = await response.json()
    console.log(responseJson.content)
  }

  return (
    <PiMicrophoneBold className="text-light text-4xl hover:cursor-pointer hover:text-bright transition" onClick={handleClick}/>
  )
}

export default MessageInputView