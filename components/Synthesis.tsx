"use client"


const Synthesis = () => {

    const synthesis = window.speechSynthesis
    const voices = synthesis.getVoices()
    console.log(voices)

    const speak = () => {
        const utterance = new SpeechSynthesisUtterance("Hallo, ich bin eine Sprachsynthese.")
        synthesis.speak(utterance)
    }

    return (
        <div>
            <h1 className="text-light" onClick={speak}>Synthesis</h1>
        </div>
    )
}

export default Synthesis