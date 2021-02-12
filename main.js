var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var box = document.getElementById("result");
function speak(){
    box.innerHTML = "";
    recognition.start();
}
function onresult(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    speak()
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "I am sure you have finisied talking";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}