"use client"

export const tts = (text: string) => {
  const tts = window.speechSynthesis

  const utterance = new SpeechSynthesisUtterance(text)

  utterance.lang = "de-DE"

  tts.speak(utterance)
}