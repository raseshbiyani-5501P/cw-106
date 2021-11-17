function start(){

navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/17PiTk-Lf/model.json",modelReady)

}

function modelReady(){

classifier.classify(gotResults);

}