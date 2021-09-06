function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});

    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vKEP6jR5f/model.json'),modelReady;
}

function modelReady() 
{
    classifier.classify(gotResults);
}

function gotResults(error,results) 
{
    console.log(gotResults);
}