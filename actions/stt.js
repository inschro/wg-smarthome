"use client"

export const stt = () => {
  const recognition = window.webkitSpeechRecognition

  const stt = new recognition()
  
  stt.continuous = false
  stt.interimResults = false
  stt.lang = 'de-DE'

  stt.onresult = (event) => {
    console.log(event)
  }

  stt.start()
}