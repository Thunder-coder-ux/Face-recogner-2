Webcam.set({
    width:350.01,
    hieght:299.99,
    image_format:'png',
    png_quality:88.70
});

camera = document.getElementById("webcam");

Webcam.attach( "#webcam" )

function take_snapshot(){
 Webcam.snap(function(data_uri){
     document.getElementById("imga").innerHTML = '<img id="cap_image" src="' + data_uri + '">';
 });
}

console.log("ml5 version:", ml5.version);

classifier = ml5.image_classyfier('https://teachablemachine.withgoogle.com/models/R6I34BMUb/', modelLoaded);