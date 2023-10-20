import { useState } from 'react';

const VoiceRecorder = () => {
  const [transcript, setTranscript] = useState('');

  console.log("window: ");
  console.log(window);

  console.log("SpeechRecognition: ");
  console.log("SpeechRecognition" in window);
  console.log("webkitSpeechRecognition:");
  console.log("webkitSpeechRecognition" in window);

  /*return (
    <div className='text-light hover:text-bright hover:cursor-pointer'>test</div>
  )*/
   
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'de';

  recognition.onresult = (event: any) => {
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