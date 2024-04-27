import { IconButton } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import dynamic from "next/dynamic";



const Microphone = () => {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>This browser does not support speech recognition</p>;
  }

  if (!isMicrophoneAvailable) {
    return <p>No microphone available</p>;
  }


  const handleClick = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({
        continuous: true,
        language: "en-US",
      });
    }
  };


  return (
    <>
      <p className="text-lg">
        {transcript || "Click the button and start speaking"}
      </p>
      <IconButton
        aria-label="mic"
        onClick={handleClick}
        size="large"
        color={listening ? "success" : "error"}
      >
        <MicIcon fontSize="inherit" />
      </IconButton>
    </>
  );
}

export default dynamic(() => Promise.resolve(Microphone), {
  ssr: false,
});
