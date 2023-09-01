const textToRead = document.getElementById('text-to-read');
const voiceOptions = document.getElementById('voice-options');
const speakButton = document.getElementById('speak-btn');

// Load available voices
function loadVoices() {
  const voices = speechSynthesis.getVoices();
  voices.forEach(voice => {
    const option = document.createElement('option');
    option.value = voice.name;
    option.textContent = `${voice.name} - ${voice.lang}`;
    voiceOptions.appendChild(option);
  });
}

// Handle clicking the Speak button
speakButton.addEventListener('click', () => {
  const text = textToRead.value;
  const selectedVoice = voiceOptions.value;
  
  if (text === '') {
    alert('Please enter text to be read.');
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  const selectedVoiceObj = voices.find(voice => voice.name === selectedVoice);
  if (selectedVoiceObj) {
    utterance.voice = selectedVoiceObj;
    speechSynthesis.speak(utterance);
  } else {
    alert('Selected voice not available.');
  }
});

// Load voices when available
speechSynthesis.addEventListener('voiceschanged', loadVoices);
loadVoices(); // Load voices initially