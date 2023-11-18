"use client"

export const stt = () => {
  return new Promise((resolve, reject) => {
    const recognition = window.webkitSpeechRecognition

    const stt = new recognition()

    stt.continuous = false
    stt.interimResults = false
    stt.lang = 'de-DE'

    stt.onresult = (event) => {
      resolve(event.results[0][0].transcript)
    }

    stt.onerror = (event) => {
      reject(event.error)
    }

    stt.start()
  })
}