song="";
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status"),innerHTML="status:deectingobjects";

}

status="";
objects=[];
function preload(){
song=loadSound("alert.mp3");
}
function draw(){
    image(video,0,0,380,380);

if (status!=""){
    r=random(255);
    g=random(255);
    b=random(255);
    objectDetector.detect(video,gotResult);
    
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="status: object detected";
       document.getElementById("number_of_objects").innerHTML="number of objects detected are  "+objects.length;
    fill(r,g,b);
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%",objects[i].x+25,objects[i].y+25);
    noFill();
    stroke(r,g,b);
    
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    if (object[i].label=="person"){
        document.getElementById("number_of_objects").innerHTML="baby                                                              found";
        console.log("stop");
        song.stop();
    }
    else{
     
        document.getElementById("number_of_objects").innerHTML="baby                              not                               found"; 
    console.log("play");
    song.play();
    }

    }
    if (object.length==0){
        document.getElementById("number_of_objects").innerHTML="baby                              not                               found"; 
    console.log("play");
    song.play();
    }
}



}
function modelLoaded(){
    console.log("modalLoaded😀😁😁😁😁😁😀");
    status=true;
    objectDetector.detect(video,gotResult);

}
function gotResult(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
