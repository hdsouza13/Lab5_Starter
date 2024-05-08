// explore.js

window.addEventListener('DOMContentLoaded', init);

let voices = [];

function populateVoiceList() {
  voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}

function speak(event){
  let textarea = document.querySelector('textarea');
  let input_text = textarea.value;

  let utterance = new SpeechSynthesisUtterance(input_text);
  const voiceSelect = document.getElementById("voice-select");
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterance.voice = voices[i];
    }
  }

  // open smile when speaking
  let image = document.querySelector('img')
  image.setAttribute('src', 'assets/images/smiling-open.png')

  speechSynthesis.speak(utterance);  
  
  // back to closed smile when finish speaking
  utterance.addEventListener("end", (event) => {
    image.setAttribute('src', 'assets/images/smiling.png');
  });
}

function init() {
  // populate with list of possible voices
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // convert to speech
  let submit_button = document.querySelector('button')
  submit_button.addEventListener('click', event => speak(event))
}