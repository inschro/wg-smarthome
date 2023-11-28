"use client"

import { PiMicrophoneBold } from "react-icons/pi"
import { stt } from "../functions/stt"
import { tts } from "../functions/tts"
import { useEffect, useState } from "react"

const MessageInputView = () => {

  const [textInput, setTextInput] = useState('');

  useEffect(() => {
      window.scrollTo(0, document.body.scrollHeight)
  }, [])

  const handleMicrophoneClick = async () => {
    const text = await stt()
    console.log(text)
    const response = await fetch('/api/gpt', {
      method: 'POST',
      body: JSON.stringify({
        messages: [
          {"role": "user", "content": text}
        ]
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response)
    const message = await response.json()
    console.log(message.content)
    tts(message.content)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
  }

  return (
    <div className="
      flex
      flex-row
      items-center
      gap-1
    ">
      <form
        className="
          primary
          rounded-full
          p-3
          w-full
          flex
          flex-row
          justify-between
          gap-x-2
          h-12
        "
      >
        <input
          className="
            bg-inherit
            outline-none
            focus:border-b-light
            focus:border-opacity-50
            border-b-2
            border-transparent
            ml-2
            w-full
          "
          type="text" 
          value={textInput}
          onChange={e => setTextInput(e.target.value)}
        />
        <button
          className="
            hover:cursor-pointer
            hover:text-bright
            transition
          "
          type="submit"
          onClick={e => {
            e.preventDefault()
            tts(textInput)
          }}
        >
          Send
        </button>
      </form>
      <PiMicrophoneBold 
        className="
          primary
          h-12
          w-12
          p-2
          hover:cursor-pointer
          hover:text-bright
          transition
          aspect-square
          rounded-full
        "
        onClick={handleMicrophoneClick}
      />
    </div>
  )
}

export default MessageInputView