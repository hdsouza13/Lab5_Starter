// expose.js

window.addEventListener('DOMContentLoaded', init);

function select_horn(event){

  // get the horn selected from the dropdown
  let horn_type = event.target.value;

  // select the image tag and update "src" with the image path of selected horn
  let image = document.querySelector('img');
  let image_path = 'assets/images/' + String(horn_type) + '.svg';
  image.setAttribute("src", image_path);

  // select the audio tag and update the "src" with the audio path of the selected horn
  let audio = document.querySelector('audio')
  let audio_path = 'assets/audio/' + String(horn_type) + '.mp3';
  audio.setAttribute("src", audio_path)
}

function select_volume(event){
  // volume selected
  let volume_level = event.target.value; // between 0 and 100
  let volume_level_normalized = volume_level / 100; // between 0 and 1

  // seleting the appropriate icon
  let volume_type = -1;
  if (volume_level == 0){
    volume_type = 0;
  }
  else if (volume_level < 33){
    volume_type = 1;
  }
  else if (volume_level < 67){
    volume_type = 2;
  }
  else{
    volume_type = 3;
  }

  let path = 'assets/icons/volume-level-' + volume_type + '.svg';

  // set the correct volume icon
  let div_volume_control = document.getElementById('volume-controls');
  let volume_image = div_volume_control.querySelector('img');
  volume_image.setAttribute("src", path);

  // set the volume
  let audio = document.querySelector('audio');
  audio.volume = volume_level_normalized;
}

function play_audio(){
  let audio = document.querySelector('audio');
  audio.play();


  // add confetti if the party horn is selectedf
  if (audio.getAttribute('src') == 'assets/audio/party-horn.mp3'){
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
  
}

function init() {
  
  let dropdown = document.querySelector('select');
  dropdown.addEventListener('change', event => select_horn(event));

  let volume = document.getElementById('volume');
  volume.addEventListener('change', event => select_volume(event));

  let play_button  = document.querySelector('button');
  play_button.addEventListener('click', play_audio);
}