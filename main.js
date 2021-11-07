function startClassification() 
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/EMuEyM226/model.json',{probabilityThreshold:0.7},modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
    
}
var dog = 0;
var cat = 0;
var lion = 0;
var cow =0;
function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(3) + " %";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        img1 = document.getElementById('cat.gif');
        img2 = document.getElementById('cow.gif');
        img3 = document.getElementById('dog.gif');
        img4 = document.getElementById('lion-roar.gif');
        
        if(results[0].label == "meowing")
        {
            img1.src = 'cat.gif';
            cat = cat +1;
        }
        else if(results[0].label == "mooing")
        {
            img2.src = 'cow.gif';
            cow =cow +1;
        }
        else if(results[0].label == "barking")
        {
            img3.src = 'dog.gif';
            dog = dog +1;

        }
        else
        {
            img4.src = 'lion-roar.gif';
            lion = lion + 1;
        }
    }
}