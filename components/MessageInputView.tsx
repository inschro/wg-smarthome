"use client"

import { PiMicrophoneBold } from "react-icons/pi"
import { stt } from "../functions/stt"
import { tts } from "../functions/tts"
import { useEffect, useRef, useState } from "react"
import { prompt_workflow } from "@/openai_functions/promptWorkflow"
import { useRouter } from "next/navigation"

const MessageInputView = () => {

  const [textInputUSeState, setTextInputUseState] = useState('');
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()

  let textInput = textInputUSeState
  const setTextInput = (text: string) => {
    textInput = text
    setTextInputUseState(text)
  }

  useEffect(() => {
      window.scrollTo(0, document.body.scrollHeight)
  }, [])

  const handleMicrophoneClick = async () => {
    const text = await stt()
    setTextInput(text)
    formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //e.preventDefault();
    console.log(textInput)
    prompt_workflow(textInput)
    router.refresh()
    //tts(message.content)
  };

  return (
    <div className="
      flex
      flex-row
      items-center
      gap-1
    ">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
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
          value={textInputUSeState}
          onChange={e => setTextInput(e.target.value)}
        />
        <button
          className="
            hover:cursor-pointer
            hover:text-bright
            transition
          "
          type="submit"
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