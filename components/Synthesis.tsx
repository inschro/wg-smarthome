"use client"

import { tts } from "../actions/tts"

const Synthesis = () => {
  const speak = () => {
    tts("Hallo, ich bin ein Roboter.")
  }

  return (
    <div>
      <h1 className="text-light" onClick={speak}>Synthesis</h1>
    </div>
  )
}

export default Synthesis