"use client"

import Synthesis from '@/components/Synthesis'
import VoiceRecorder from '@/components/VoiceRecorder'

export default function Home() {

  const handleClick = async () => {
    const response = await fetch('/api/gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: [
          {"role": "user", "content": "How high is the Eiffel Tower?"},
        ]
      })
    })
    const data = await response.json()
    console.log(data.content)
  }

  return (
    <div>
    <div className='text-light hover:cursor-pointer' onClick={handleClick}>
      Send
    </div>
    <VoiceRecorder/>
    <Synthesis/>
    </div>
  )
}
