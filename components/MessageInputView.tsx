"use client"

import { PiMicrophoneBold } from "react-icons/pi"
import { stt } from "../actions/stt"
import { tts } from "../actions/tts"
import { useState } from "react"

const MessageInputView = () => {

  const [textInput, setTextInput] = useState('');

  const handleMicrophoneClick = async () => {
    const text = await stt()
    setTextInput(text)
    tts(text)
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
          bg-primary
          rounded-full
          p-3
          text-light
          w-full
          flex
          flex-row
          justify-between
          gap-x-2
        "
      >
        <input
          className="
            bg-primary
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
          text-light
          text-5xl
          p-2
          hover:cursor-pointer
          hover:text-bright
          transition
          bg-primary
          aspect-square
          rounded-full
        "
        onClick={handleMicrophoneClick}
      />
    </div>
  )
}

export default MessageInputView