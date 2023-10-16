import { useState } from 'react';

const VoiceRecorder = () => {
  const [transcript, setTranscript] = useState('');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'de';

  recognition.onresult = (event) => {
    let interimTranscript = '';
    let finalTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript + ' ';
      } else {
        interimTranscript += transcript;
      }
    }

    setTranscript(finalTranscript);
  };

  recognition.onerror = (event) => {
    console.error(event.error);
  };

  const startRecording = () => {
    recognition.start();
  };

  const stopRecording = () => {
    recognition.stop();
  };

  return (
    <div className="text-light flex gap-3">
      <button onClick={startRecording}>| Start Recording</button>
      <button onClick={stopRecording}>| Stop Recording |</button>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceRecorder