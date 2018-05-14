(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.colorTransform = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
			var array = ["orange","purple","blue", "magenta1","magenta2","yellowGreen"];
			var len = array.length;
			var count = 0;
		
			var element = document.getElementById(array[count]);
			var nextElement = document.getElementById(array[count + 1]);
			//var orange2 = document.getElementById("orange2");
		
			//nextElement.style.opacity = 1;
			var loop = 0;
		
		    var op = 1;  // initial opacity
		    var timer = setInterval(function () {
		        if (op <= 0.01){
		            element.style.display = "none";
		            count++;
		            loop++;
					if (count === len - 1) {
						if (loop === 5) {
							clearInterval(timer);
						}
						//count = 0;
						nextElement = document.getElementById(array[0]);
					} else if (count === len) {
						count = 0;
						nextElement = document.getElementById(array[1]);
		
					} else {
						nextElement = document.getElementById(array[count + 1]);
					}
		
					nextElement.style.opacity = 1;
					nextElement.style.display = "block";
					nextElement.style.filter = "alpha(opacity= 100 )";
					op = 1;
					element = document.getElementById(array[count]);
		        }
		        
		        element.style.opacity = op;
		        element.style.filter = 'alpha(opacity=' + op * 100 + ')';
		        
		        op -= op * 0.1;
		
		        console.log('count' +count );
		    
		    }, 200);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 970,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;