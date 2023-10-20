import { useState } from 'react';

const VoiceRecorder = () => {
  const [transcript, setTranscript] = useState('');
  
  if(!window) { 
    return (
      <div className='text-light hover:text-bright hover:cursor-pointer'>test</div>
    )
  }

  let recognition = null;
  if("SpeechRecognition" in window || "webkitSpeechRecognition" in window){
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
  }

  if(!recognition){
    return (
      <div className='text-light'>speech recognition is not supported</div>
    )
  }

  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'de';
  recognition.onresult = (event) => {
    let finalTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript + ' ';
      }
    }

    setTranscript(finalTranscript);
  };

  const startRecording = () => {
    recognition.start();
  };

  return (
    <div className="text-light flex gap-3">
      <button onClick={startRecording}>record</button>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceRecorder