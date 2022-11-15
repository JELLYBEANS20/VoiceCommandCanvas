x=0;
y=0;
draw_square="";
draw_rectangle="";
draw_circle="";
draw_flower="";
draw_star="";
draw_triangle="";
draw_hexagon="";
draw_Half="";


function setup()
{
    canvas=createCanvas(900,500);
 }

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak SHAPE"; 
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event); 
   
   var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "Your Speech has been recognized as: " + content; 

    if (content=="circle" || content =="Circle")
        {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 500);
            document.getElementById("status").innerHTML = "Started drawing Circle "; 
            draw_circle = "set";
        }
     
    if (content=="rectangle" || content =="Rectangle")
        {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 500);
            document.getElementById("status").innerHTML = "Started drawing Rectangle "; 
            draw_rectangle = "set";
        }

    if (content=="square" || content =="Square")
        {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 500);
            document.getElementById("status").innerHTML = "Started drawing Square "; 
            draw_square = "set";
        }

     if (content=="flower" || content =="Flower")
        {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 500);
            document.getElementById("status").innerHTML = "Started drawing FLOWER "; 
            draw_flower = "set";
        } 
        
        if (content=="star" || content =="Star")
        {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 500);
            document.getElementById("status").innerHTML = "Started drawing a STAR "; 
            draw_star = "set";
        } 

        if (content=="triangle" || content =="Triangle")
        {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 500);
            document.getElementById("status").innerHTML = "Started drawing a TRIANGLE "; 
            draw_triangle = "set";
        }

        if (content=="hexagon" || content =="HEXAGON")
        {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 500);
            document.getElementById("status").innerHTML = "Started drawing a Half "; 
            draw_Half = "set";
        }

        if (content=="half" || content =="HEXAGON")
        {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 500);
            document.getElementById("status").innerHTML = "Started drawing a HEXAGON "; 
            draw_hexagon = "set";
        }

}

function draw(){

    if (draw_circle=="set")
    {
        radius = Math.floor(Math.random() * 100);
        fill("yellow");
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn ";
        draw_circle = "";
      }

      if (draw_rectangle=="set")
      {
          
          rect(x, y, 50,80);
          document.getElementById("status").innerHTML = "Rectangle is drawn ";
          draw_rectangle = "";
       }  

      if (draw_square=="set")
       {
           
            rect(x, y, 80,80);
           document.getElementById("status").innerHTML = "Square is drawn ";
           draw_square = "";
        } 

        if (draw_star=="set")
       {
           
        // A design for a simple star
            translate(x, y);
            fill(220,180,240);
            noStroke();
            for (let i = 0; i < 10; i ++) {
                ellipse(0, 30, 20, 80);
            rotate(PI/5);
     
            }

           document.getElementById("status").innerHTML = "Star is drawn ";
           draw_star = "";
        } 
        
        
     if (draw_flower=="set")
        {
            
            // A design for a simple flower
                translate(x, y);
                fill(20, 180, 192, 127);
                noStroke();
                for (let i = 0; i < 24; i ++) {
                    ellipse(20, 30, 20, 80);
                    rotate(PI/10); 
                }
            document.getElementById("status").innerHTML = "FLOWER is drawn ";
            draw_flower = "";
         }   
         
    if (draw_triangle=="set")
         {
             
             // A design for a Triangle
             fill(204);
             triangle(288, 118, 351, 360, 220, 360);
             document.getElementById("status").innerHTML = "TRIANGLE is drawn ";
             draw_triangle = "";
          }
         
    if (draw_hexagon=="set")
         {
             
             // A design for a simple hexagon
                 translate(x, y);
                 fill(200,100,140)
                                  
                 for (let i = 0; i < 6; i ++) 
                    {
                     rect (x, y, 30,30);
                     rotate(60); 
                    }
             document.getElementById("status").innerHTML = "HEXAGON is drawn ";
             draw_hexagon = "";
          }
     
          if (draw_Half=="set")
          {
              
              // A design for a Half-Circle
              fill(255);
                arc(479, 300, 280, 280, PI, TWO_PI);
              document.getElementById("status").innerHTML = "Half-Circle is drawn ";
              draw_Half = "";
           }     


}