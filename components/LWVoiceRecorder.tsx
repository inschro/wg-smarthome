"use client"

import { stt } from "../actions/stt"

const LWVoiceRecorder = () => {

  const handleClick = () => {
    stt()
  }

  return (
    <div>
      <h1 className="text-light" onClick={handleClick}>LWVoiceRecorder</h1>
    </div>
  )
}

export default LWVoiceRecorder