var percent;
var canvas;
var container ;
            $(document).ready(function() { 
					percent=85;
					 canvas = document.getElementById("myCanvas1"); 
					 container = document.getElementById("container1"); 
					elm = document.getElementById('IDelm1');
					draw(percent, canvas, container ,elm);
					
					percent=25;
					 canvas = document.getElementById("myCanvas2"); 
					 container = document.getElementById("container2"); 
					elm = document.getElementById('IDelm2');
					draw(percent, canvas, container ,elm);
					
					percent=73;
					 canvas = document.getElementById("myCanvas3"); 
					 container = document.getElementById("container3"); 
					elm = document.getElementById('IDelm3');
					draw(percent, canvas, container ,elm);
					
					percent=5;
					 canvas = document.getElementById("myCanvas4"); 
					 container = document.getElementById("container4"); 
					elm = document.getElementById('IDelm4');
					draw(percent, canvas, container ,elm);
					
					percent=13;
					 canvas = document.getElementById("myCanvas5"); 
					 container = document.getElementById("container5"); 
					elm = document.getElementById('IDelm5');
					draw(percent, canvas, container ,elm);
					
            }); 
			
			
			function draw(percent1, canvas, container,elm) {
  end=(Math.PI*2/100*percent1)-Math.PI/2;
					
				
				 
					var ctx = canvas.getContext("2d"); 
					ctx.beginPath();  
					ctx.arc(canvas.width/2+2, canvas.width/2+3, canvas.width/2-8, 0, Math.PI*2, false);  
					ctx.strokeStyle="#eee";
					ctx.lineWidth=10;
					ctx.stroke();	 			
					 
			 
					 ctx.beginPath();  
					ctx.arc(canvas.width/2+2, canvas.width/2+3,canvas.width/2-5, -Math.PI/2, end, false);  
					ctx.strokeStyle="#e83a93";
					ctx.lineWidth=10;
					ctx.stroke();	 
					
					elm.innerHTML = "<p> "+percent1+"%</p>";
}