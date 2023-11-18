"use client"

import { stt } from "../functions/stt"

const VoiceRecorder = () => {

  const handleClick = async () => {
    await stt().then((res) => console.log(res))
  }

  return (
    <div>
      <h1 className="text-light" onClick={handleClick}>LWVoiceRecorder</h1>
    </div>
  )
}

export default VoiceRecorder