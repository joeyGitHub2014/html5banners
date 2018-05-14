(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Metro_atlas_", frames: [[730,0,150,68],[0,0,728,91]]}
];


// symbols:



(lib._1200pxLametrosvg = function() {
	this.spriteSheet = ss["Metro_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["Metro_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.rapid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2BeQgRgXAAgoQAAgVAGgPQAFgQALgMQAKgLANgGQAOgFANAAQAMAAAKACQALADALAGIAAhHIAbAAIAADjIgbAAIAAgRQgMAKgNAGQgNAFgOAAQgeAAgRgWgAgegOQgNAPAAAeQAAAdAKAPQAKAPAWAAQALAAAMgFQAMgFALgJIAAhcQgMgFgJgCQgJgCgKAAQgWAAgNAQg");
	this.shape.setTransform(76.6,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNBuIAAijIAbAAIAACjgAgPhQIAAgdIAeAAIAAAdg");
	this.shape_1.setTransform(63.7,21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhHByIAAjfIAbAAIAAARQALgJAOgGQAOgGAOAAQAeAAARAWQAQAWAAAoQAAAUgFAPQgHARgKALQgKALgNAGQgNAGgOAAQgMAAgKgDQgLgDgLgFIAABEgAgVhSQgMAFgLAIIAABcQANAFAIACQAIACALAAQAWAAANgPQAMgQAAgdQABgegLgPQgKgOgUAAQgLAAgNAFg");
	this.shape_2.setTransform(50.8,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1BHQgPgOAAgXQgBgSAJgMQAIgKAOgHQAPgGAVgDQAVgDAXgBIAAgEQAAgJgDgGQgDgGgGgEQgGgDgJgCQgIgBgIAAQgLAAgNADQgNADgPAGIgBAAIAAgdIAYgEQAPgDAOAAQARAAAMADQAOADAJAGQAJAIAFAKQAEALABAQIAABtIgcAAIAAgRIgJAHIgMAHQgIAEgIACQgJACgMAAQgVAAgQgPgAANgBQgRABgJACQgMADgHAIQgIAGAAANQAAAOAJAHQAIAIASAAQANgBAMgFQAMgGAKgIIAAgsIgdACg");
	this.shape_3.setTransform(31.3,24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA0BtIhIhXIgoAAIAABXIgdAAIAAjZIA9AAQATAAANADQANACAKAHQAMAHAHAMQAHALAAARQAAAYgMAQQgMAPgVAHIBSBggAg8gBIAdAAQAOAAAKgCQAJgDAHgHQAHgFADgIQADgJAAgMQAAgJgDgIQgDgHgIgFQgGgEgIgCQgJgBgLAAIgiAAg");
	this.shape_4.setTransform(14,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rapid, new cjs.Rectangle(0,0,88.7,40.5), null);


(lib.metro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._1200pxLametrosvg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.metro, new cjs.Rectangle(0,0,150,68), null);


(lib.clickPlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.989);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.clickPlay, new cjs.Rectangle(0,0,728,90), null);


(lib.buss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// detail
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("A8xAFIUcAAAAAgFIcyAA");
	this.shape.setTransform(210.6,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// mirror
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#8E0A0A").ss(2,1,1).p("AhlAAIDLAA");
	this.shape_1.setTransform(426.2,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EE1111").ss(2,1,1).p("AghghIA9A9IAGAG");
	this.shape_2.setTransform(439.8,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#EE1111").ss(0.5,1,1).p("AAPggQAABAAAABQABAGgOABQgEAAgEgDQgJgIAAgUIAAgoQAAABAFgGQAAgBABAAQAJgFAPAKg");
	this.shape_3.setTransform(443.8,24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE1111").s().p("AgGAlQgJgIAAgUIAAgoIAFgFIABgBQAJgFAPAKIAABBQABAGgOABIgBAAQgDAAgEgDgAgFgfIgFgFg");
	this.shape_4.setTransform(443.8,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// text
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKATQgDgFAAgIQgBgEACgCQABgEACgCIAFgDIAEgBIAFAAIAEACIAAgOIAFAAIAAAsIgFAAIAAgDIgFADIgFABQgFAAgEgEgAgFgCQgCACAAAGQAAAGACADQABADAEAAIAEgBIAFgDIAAgSIgEgBIgEAAQgDAAgDADg");
	this.shape_5.setTransform(370.8,9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCAWIAAggIAFAAIAAAggAgCgPIAAgGIAFAAIAAAGg");
	this.shape_6.setTransform(368.2,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAXIAAgsIAFAAIAAADIAFgDIAFgBQAGAAADAFQADAEAAAIIgBAGQgBAEgCACIgEADIgGABIgEAAIgEgCIAAAOgAgDgQIgFADIAAASIAEABIAEAAQAEAAACgDQADgDAAgFQAAgGgCgDQgCgDgEAAIgEABg");
	this.shape_7.setTransform(365.6,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKAOQgDgDAAgEQAAgEACgCQABgCADgBIAHgCIAJAAIAAgBIgBgDIgCgCIgDgBIgDAAIgFAAIgFACIAAgGIAEgBIAGAAIAGAAIAEACIADAEIABAFIAAAVIgFAAIAAgDIgCABIgDACIgDABIgDAAQgFAAgDgDgAACAAIgEAAIgEACQAAABgBAAQAAABAAAAQAAAAAAABQgBABAAAAQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQACABAEAAQACAAACgBIAFgDIAAgIIgHAAg");
	this.shape_8.setTransform(361.8,9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALAWIgOgSIgJAAIAAASIgFAAIAAgrIAMAAIAGABIAEABQADACABACQABADABADQgBAFgCADQgCACgEACIAQATgAgMAAIAHAAIAEAAIADgCIACgDIAAgEIgBgDIgBgCIgDgCIgEAAIgHAAg");
	this.shape_9.setTransform(358.3,9.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKANQgEgFAAgIQAAgHAEgFQAEgEAGAAQAHAAAEAEQAEAFAAAHQAAAIgEAFQgEAEgHAAQgGAAgEgEgAgGgJQgCAEAAAFQAAAGACADQADADADAAQAEAAADgDQACgDAAgGQAAgFgCgEQgDgDgEAAQgEAAgCADg");
	this.shape_10.setTransform(352,9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAQIAAgfIAFAAIAAAEIAFgDIAFgBIACAAIACAAIAAAGIAAAAIgDgBIgCAAIgFABIgEADIAAAWg");
	this.shape_11.setTransform(349.2,9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAEAVQgEAAgDgCQgDgDAAgGIAAgQIgDAAIAAgFIADAAIAAgJIAGAAIAAAJIAKAAIAAAFIgKAAIAAAOIAAAEIAAACIACACIADABIADgBIACAAIAAAAIAAAEIgDABIgDAAg");
	this.shape_12.setTransform(346.5,9.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKANQgEgFAAgIQAAgHAEgFQAFgEAGAAQAGAAAEADQAEAEAAAHIAAACIgYAAIABAGIADADIAEADIADAAIAHgBIAFgDIAAAGIgGACIgGABQgHAAgFgEgAgGgJQgCACgBAEIASAAQAAgEgBgCQgDgDgFAAQgCAAgEADg");
	this.shape_13.setTransform(343.5,9.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAOAWIAAglIgMAZIgDAAIgMgZIAAAlIgFAAIAAgrIAIAAIAKAXIALgXIAIAAIAAArg");
	this.shape_14.setTransform(339.2,9.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKATQgDgFgBgIQABgEABgCQABgEACgCIAEgDIAFgBIAFAAIAEACIAAgOIAFAAIAAAsIgFAAIAAgDIgFADIgEABQgHAAgDgEgAgFgCQgDACABAGQAAAGABADQACADAEAAIAEgBIAFgDIAAgSIgEgBIgEAAQgDAAgDADg");
	this.shape_15.setTransform(100.2,40.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCAWIAAggIAFAAIAAAggAgCgPIAAgGIAFAAIAAAGg");
	this.shape_16.setTransform(97.6,41);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNAXIAAgsIAFAAIAAADIAFgDIAFgBQAGAAADAFQADAEAAAIIgBAGQgBAEgCACIgEADIgGABIgEAAIgEgCIAAAOgAgDgQIgFADIAAASIAEABIAEAAQAEAAACgDQADgDAAgFQAAgGgCgDQgCgDgEAAIgEABg");
	this.shape_17.setTransform(95,42.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKAOQgDgDAAgEQAAgEACgCQABgCADgBIAHgCIAIAAIAAgBIgBgDIgBgCIgDgBIgDAAIgEAAIgGACIAAgGIAFgBIAFAAIAGAAIAEACIADAEIABAFIAAAVIgGAAIAAgDIgCABIgCACIgDABIgDAAQgFAAgDgDgAADAAIgFAAIgEACQAAABgBAAQAAAAAAABQAAAAAAABQgBABAAAAQAAABABABQAAAAAAABQAAAAABABQAAAAABABQABABADAAQACAAADgBIAEgDIAAgIIgFAAg");
	this.shape_18.setTransform(91.2,41.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAKAWIgNgSIgIAAIAAASIgGAAIAAgrIAMAAIAFABIAGABQACACABACQACADgBADQABAFgDADQgDACgEACIARATgAgLAAIAFAAIAGAAIACgCIACgDIAAgEIgBgDIgCgCIgBgCIgFAAIgGAAg");
	this.shape_19.setTransform(87.7,41);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKANQgEgFAAgIQAAgHAEgFQAEgEAGAAQAHAAAEAEQAEAFAAAHQAAAIgEAFQgEAEgHAAQgGAAgEgEgAgGgJQgCAEAAAFQAAAGACADQADADADAAQAEAAADgDQACgDAAgGQAAgFgCgEQgDgDgEAAQgEAAgCADg");
	this.shape_20.setTransform(81.4,41.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJAQIAAgfIAFAAIAAAEIAFgDIAFgBIACAAIACAAIAAAGIAAAAIgDgBIgCAAIgFABIgEADIAAAWg");
	this.shape_21.setTransform(78.6,41.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAEAVQgEAAgDgCQgDgDAAgGIAAgQIgDAAIAAgFIADAAIAAgJIAGAAIAAAJIAKAAIAAAFIgKAAIAAAOIAAAEIAAACIACACIADABIADgBIACAAIAAAAIAAAEIgDABIgDAAg");
	this.shape_22.setTransform(75.9,41.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKANQgEgFAAgIQAAgHAEgFQAFgEAGAAQAHAAADADQAEAEAAAHIAAACIgYAAIACAGIACADIADADIAFAAIAGgBIAFgDIAAAGIgGACIgFABQgIAAgFgEgAgFgJQgDACgBAEIATAAQgBgEgCgCQgCgDgEAAQgEAAgCADg");
	this.shape_23.setTransform(72.9,41.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAOAWIAAglIgMAZIgDAAIgMgZIAAAlIgFAAIAAgrIAIAAIAKAXIALgXIAIAAIAAArg");
	this.shape_24.setTransform(68.6,41);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgaAvQgJgMAAgUQAAgKADgHQADgIAFgGQAFgFAGgDQAHgDAGAAQAHAAAEABQAFABAGADIAAgjIAOAAIAABxIgOAAIAAgJQgGAFgGADQgHADgGAAQgPAAgIgLgAgPgHQgGAHAAAPQAAAPAFAHQAFAIALAAQAFAAAGgDQAGgCAFgEIAAguIgKgEIgKgBQgKAAgHAIg");
	this.shape_25.setTransform(357.2,57.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGA3IAAhRIANAAIAABRgAgHgnIAAgPIAPAAIAAAPg");
	this.shape_26.setTransform(350.7,57.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjA5IAAhvIAOAAIAAAJQAFgFAHgDQAHgDAHAAQAOAAAJALQAIAMAAATQAAAKgDAIQgDAHgFAGQgFAGgGACQgHADgHAAQgFAAgGgBQgFgBgFgDIAAAigAgKgoQgFACgGAEIAAAuIAKADIAJABQALAAAGgIQAHgHAAgOQAAgPgFgIQgGgHgJAAQgGAAgGADg");
	this.shape_27.setTransform(344.3,60.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaAkQgIgIAAgLQAAgJAEgGQAEgFAIgDQAHgDALgCIAVgBIAAgCQAAgFgBgDIgFgFIgHgCIgIgBIgMACQgHABgHADIAAAAIAAgOIALgDIAPgBQAIAAAGABQAHACAEADQAFAEACAFQADAFAAAIIAAA3IgOAAIAAgJIgFAEIgGADIgIADQgDABgGAAQgLAAgIgHgAAGAAIgMABQgGACgEADQgDAEAAAGQAAAHAEAEQAEADAJAAQAGAAAGgDQAGgCAFgEIAAgWIgPABg");
	this.shape_28.setTransform(334.5,59.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAaA3IgjgsIgVAAIAAAsIgOAAIAAhsIAeAAQAKAAAGABQAHABAFADQAGAEADAGQADAFAAAJQAAAMgGAIQgFAHgLAEIApAwgAgeAAIAPAAIAMgBQAEgCAEgDQADgCACgFQABgEAAgGQAAgFgBgDQgCgEgEgDQgDgBgDgBIgLgBIgRAAg");
	this.shape_29.setTransform(325.8,57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// rims
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#333333").ss(3,2,1).p("AWLBiIAAgRQAAhLA0gzQA1g1BKAAIABAAQBKAAA0A1QA1AzAABLIAAARAgkBjIAAgSQAAhKAzgzQA1g1BKAAIABAAQBKAAA0A1QA1AzAABKIAAASA7xBiIAAgRQAAhLA0gzQA1g1BKAAIAAAAQBLAAA0A1QA1AzAABLIAAAR");
	this.shape_30.setTransform(228.1,56.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// doors
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2,1,1).p("ANijfQAAgHAEgEQADgEAIAAIBmAAQAIAAAEAEQADAEABAGIAAEeIAACcQAAAPgQAAIhmAAQgPAAAAgPQgBAPgPAAIhmAAQgQAAAAgPIAAm4QAAgIAEgEQAEgEAIAAIBmAAQAIAAAEAEQAEAEAAAHgANiDaIAAicIAAkdAthjZQAAgHAEgEQAEgEAIAAIBmAAQAIAAAEAEQADADAAAFIAAEgIAACbQAAAQgPAAIhmAAQgPAAgBgPQAAAPgPAAIhnAAQgPAAAAgQIAAm3QAAgIAEgEQAEgEAHAAIBnAAQAIAAADAEQAEAEAAAHgAthDgIAAicIAAkd");
	this.shape_31.setTransform(208.8,39.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AhhjyIAsAAQAMAAAeACQAiADALAEIAIANIAiA9IAlBBIAAFCQAAAPgPAAIjDAAQgPAAAAgPIAAnHQAAgPAPAAgAhbjYIADDrIA0AAQA/AHBAAfIAAiLQAAgBhLiFgAgnA/IAfAIQApAOA3AcIAABdQAAAPgPAAIiPAAQgPAAAAgPIAAiFQAAgKAuAAg");
	this.shape_32.setTransform(420.1,41.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4A4A4A").s().p("AWeDvQgPAAAAgQIAAiEQAAgLAuAAIAfAIQAqAOA3AcIAABdQAAAQgQAAgAW/AlIgzgBIgDjrIBsAAIBKCGIAACMQg/gghBgGgA29BBIAAkeIAAEeIiBAAIAAkpIB+AAIAIAAIB9AAIADAAIAAAIQAAgFgDgDQADADAAAFIAAEhgA29jdQABgHAEgEQgEAEgBAHQAAgHgDgEQADAEAAAHIAAAAgAEGA6IAAkdIAAEdIiCAAIAAkoIB+AAQAEAEAAAHQAAgHAEgEIB9AAQADAEABAGQgBgGgDgEIAEAAIAAAKIAAEegAEGjjQAAgHgEgEIAIAAQgEAEAAAHIAAAAgAECjug");
	this.shape_33.setTransform(269.2,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).wait(1));

	// windows
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(2,1,1).p("AWOiLIGoAAQAPAAAAAPIAAD4QAAAQgPAAImoAAQgQAAAAgQIAAj4QAAgPAQAAgARPiLID4AAQAPAAAAAPIAAD4QAAAQgPAAIj4AAQgQAAAAgQIAAj4QAAgPAQAAgAE2iLID5AAQAPAAAAAPIAAD4QAAAQgPAAIj5AAQgPAAAAgQIAAj4QAAgPAPAAgAgJiLID4AAQAPAAAAAPIAAD4QAAAQgPAAIj4AAQgPAAAAgQIAAj4QAAgPAPAAgAqvh/IB6AAQAQAAAAAPIAADSQAAAPgQAAIh6AAQgPAAAAgPIAAjSQAAgPAPAAgA2TiEIE0AAQAPAAAAAPIAAChQAAAPgPAAIk0AAQgPAAAAgPIAAihQAAgPAPAAgA81iEIE0AAQAPAAAAAPIAAChQAAAPgPAAIk0AAQgPAAAAgPIAAihQAAgPAPAAg");
	this.shape_34.setTransform(212.2,29.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4A4A4A").s().p("AWOCLQgQAAAAgPIAAj3QAAgPAQgBIGoAAQAPABAAAPIAAD3QAAAPgPAAgARPCLQgQAAAAgPIAAj3QAAgPAQgBID4AAQAPABAAAPIAAD3QAAAPgPAAgAE2CLQgPAAAAgPIAAj3QAAgPAPgBID5AAQAPABAAAPIAAD3QAAAPgPAAgAgJCLQgPAAAAgPIAAj3QAAgPAPgBID4AAQAPABAAAPIAAD3QAAAPgPAAgAqvBxQgPABAAgQIAAjSQAAgPAPAAIB6AAQAQAAAAAPIAADSQAAAQgQgBgA2TA7QgPAAAAgPIAAihQAAgPAPAAIE0AAQAPAAAAAPIAAChQAAAPgPAAgA81A7QgPAAAAgPIAAihQAAgPAPAAIE0AAQAPAAAAAPIAAChQAAAPgPAAg");
	this.shape_35.setTransform(212.2,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34}]}).wait(1));

	// middel3
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#CCCCCC").ss(1,1,1).p("AiFkyIAAJsABDkvIAAJmAg4k6IAAJ1ACGkwIAAJq");
	this.shape_36.setTransform(183.9,34.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(1));

	// middel2
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#989898").ss(2,1,1).p("AAAFQQhNgbhGALQgVADgTAHIgOAGIAAqfIAOAGQATAHAVADQBGALBNgbIAOAGQASAHAWADQBFALBPgbIAAKfQhPgbhFALQgWADgSAHgAAAlPIAAKf");
	this.shape_37.setTransform(183.8,34.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AA2FAQgWADgSAHIgOAGIAAqfIAOAGQASAHAWADQBGALBOgbIAAKfQhOgbhGALgAiSFAQgWADgTAHIgNAGIAAqfIANAGQATAHAWADQBFALBNgbIAAKfQhNgbhFALgAAAlPg");
	this.shape_38.setTransform(183.8,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).wait(1));

	// middel1
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AjIFZIAAgcIAAgFQACgLANAAIFvAAQANAAACALIAAAFIAAAcgAi1kSQgPAAAAgPIAAg3IGOAAIAAA3QgBAPgPAAg");
	this.shape_39.setTransform(183.8,34.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// red
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#EE1111").ss(2,1,1).p("EghogCIQAAgHAHgMQALgUAYgRQBLg0CvAAMA4yAACQAjADArAPQBEAXBCAuIAaAmQAgAxAaAyQBVCcgCBrQgWgZg3gaQhvgyiiAAMg0sAAAIpGiAQgDgqAChug");
	this.shape_40.setTransform(222.2,29.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EE1111").s().p("EAgcADCQhvgziiAAMg0sAAAIpGh/QgDgqAChtQAAgIAHgLQALgVAYgQQBLg0CvAAMA4yAABQAjADArAPQBEAXBCAuIAaAmQAgAxAaAyQBVCcgCBqQgWgZg3gZg");
	this.shape_41.setTransform(222.2,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40}]}).wait(1));

	// white reflection
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ah9AAIAEAAA8zAAIWoAAAhBAAId1AA");
	this.shape_42.setTransform(210.6,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(1));

	// wheels
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#666666").ss(1,1,1).p("AblAAQAABFgxAwQgKAKgLAIQgqAfg2AAQgWAAgUgFQgdgIgZgSQgLgIgKgKQgwgwAAhFQAAhEAwgwQAhghAqgLQAUgFAWAAQBFAAAwAxQAxAwAABEgAE2AAQAABFgxAwQgKAKgLAIQgqAfg3AAQg1AAgqgfQgLgIgKgKQgwgwAAhFQAAhEAwgwQAwgxBEAAQBFAAAxAxQAxAwAABEgA2YAAQAABFgwAwQgKAKgMAIQgqAfg2AAQg2AAgqgfQgLgIgKgKQgxgwAAhFQAAhEAxgwQAwgxBFAAQBFAAAxAxQAwAwAABEg");
	this.shape_43.setTransform(228.1,62.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C9C9C9").s().p("AYWBHQgIgGgJgIQgXgXAAgiQAAghAXgXQAJgJAIgFQASgKAXAAQAhAAAYAYQAYAXAAAhQAAAigYAXQgYAYghAAQgXAAgSgKgAY4AzQgCACAAADIgBACQAAAEADADQADADAEAAQAEAAADgDQADgDAAgEQAAgFgDgCQgBgBAAAAQAAgBgBAAQgBAAAAAAQgBgBAAAAIgCAAIgBAAQgEAAgDADgAZwgFQgCAEAAADQAAAEACADQAEACAEAAQAEAAADgCQACgDAAgEQAAgDgCgEQgDgCgEAAQgEAAgEACgAX/gHIgBABQgCADAAADQAAAEACACQADAEAEAAQAFAAACgEQADgCAAgEQAAgDgDgDIAAgBQgDgCgEAAQgDAAgDACgAY4g9QgDADAAAFQAAAEADACQADADAEAAQAEAAADgDQADgCAAgEQAAgFgDgDQgDgCgEAAQgEAAgDACgABWA5QgYgXAAgiQAAghAYgXQAYgYAiAAQAhAAAYAYQAYAXAAAhQAAAigYAXQgYAYghAAQgiAAgYgYgACJAzQgCACgBADIAAACQAAAEADADQADADAEAAQAEAAACgDQAEgDAAgEQAAgFgEgCQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgDAAIAAAAQgEAAgDADgADBgFQgCAEAAADQAAAEACADQADACAFAAQAEAAACgCQADgDAAgEQAAgDgDgEQgCgCgEAAQgFAAgDACgABQgHIgBABQgCADAAADQAAAEACACQADAEAEAAQAEAAADgEQADgCAAgEQAAgDgDgDIgBgBQgCgCgEAAQgEAAgCACgACJg9QgDADAAAFQAAAEADACQADADAEAAQAEAAACgDQAEgCAAgEQAAgFgEgDQgCgCgEAAQgEAAgDACgA53A5QgYgXAAgiQAAghAYgXQAYgYAhAAQAiAAAXAYQAYAXAAAhQAAAigYAXQgXAYgiAAQghAAgYgYgA5FAzQgCACAAADIgBACQAAAEADADQADADAEAAQAFAAACgDQADgDAAgEQAAgFgDgCQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgCAAIgBAAQgEAAgDADgA4MgFQgDAEAAADQAAAEADADQADACAEAAQAEAAADgCQADgDAAgEQAAgDgDgEQgDgCgEAAQgEAAgDACgA5+gHIgBABQgCADAAADQAAAEACACQADAEAFAAQAEAAADgEQACgCAAgEQAAgDgCgDIgBgBQgCgCgEAAQgEAAgDACgA5Fg9QgDADAAAFQAAAEADACQADADAEAAQAFAAACgDQADgCAAgEQAAgFgDgDQgCgCgFAAQgEAAgDACg");
	this.shape_44.setTransform(227.9,62.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AYVChQgdgIgZgSQgLgIgKgKQgxgwAAhFQAAhEAxgwQAhghAqgLQATgFAXAAQBFAAAwAxQAxAwgBBEQABBFgxAwQgKAKgLAIQgqAfg2AAQgXAAgTgFgAYVhFQgJAFgJAIQgXAYAAAgQAAAiAXAYQAJAIAJAFQASALAWAAQAiAAAYgYQAYgYgBgiQABgggYgYQgYgYgiAAQgWAAgSALgAAwCHQgLgIgKgKQgwgwAAhFQAAhEAwgwQAwgxBFAAQBEAAAxAxQAwAwAABEQAABFgwAwQgLAKgKAIQgrAfg1AAQg2AAgqgfgABUg4QgXAYAAAgQAAAiAXAYQAZAYAhAAQAiAAAXgYQAYgYAAgiQAAgggYgYQgXgYgiAAQghAAgZAYgA6dCHQgMgIgKgKQgxgwABhFQgBhEAxgwQAwgxBFAAQBFAAAwAxQAxAwAABEQAABFgxAwQgJAKgMAIQgqAfg2AAQg2AAgpgfgA55g4QgYAYAAAgQAAAiAYAYQAYAYAhAAQAiAAAXgYQAYgYAAgiQAAgggYgYQgXgYgiAAQghAAgYAYgAY2BBQgDgDAAgEIABgCQAAgDACgCQADgCAEAAIABAAIACAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgACHBBQgDgDAAgEIABgCQAAgDACgCQADgCAEAAIABAAIACAAQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAQAEADAAAEQAAAEgEADQgBADgFAAQgEAAgDgDgA5HBBQgDgDAAgEIABgCQABgDABgCQAEgCADAAIABAAIACAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAEADgBAEQABAEgEADQgCADgFAAQgDAAgEgDgAZvAJQgCgCAAgFQAAgDACgDQADgCAEAAQAFAAACACQACADABADQgBAFgCACQgCADgFAAQgEAAgDgDgAC/AJQgCgCAAgFQAAgDACgDQADgCAFAAQAEAAADACQACADAAADQAAAFgCACQgDADgEAAQgFAAgDgDgA4OAJQgDgCAAgFQAAgDADgDQADgCAEAAQAEAAADACQADADAAADQAAAFgDACQgDADgEAAQgEAAgDgDgAX8AHQgCgCAAgFQAAgDACgDIABAAQADgDADAAQAEAAADADIABAAQACADAAADQAAAFgCACQgDADgFAAQgEAAgDgDgABNAHQgCgCAAgFQAAgDACgDIABAAQACgDAEAAQAFAAABADIABAAQADADAAADQAAAFgDACQgCADgFAAQgEAAgDgDgA6AAHQgCgCAAgFQAAgDACgDIAAAAQADgDAEAAQAEAAACADIABAAQACADABADQgBAFgCACQgDADgEAAQgEAAgDgDgAY2guQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgACHguQgDgDAAgEQAAgEADgDQADgDAEAAQAFAAABADQAEADAAAEQAAAEgEADQgBADgFAAQgEAAgDgDgA5HguQgDgDAAgEQAAgEADgDQAEgDADAAQAFAAACADQAEADgBAEQABAEgEADQgCADgFAAQgDAAgEgDg");
	this.shape_45.setTransform(228.1,62.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]}).wait(1));

	// body
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("EghrAFRIGRAAIKBAAIMXAAIIFAAIHfAAIXfAAIAPgFQAQgGAFgGQACgDgBgYQAAgYgDgBIgjg0IAAhlQgThWgohcQhPi6hpgnQhFgag7gJQhVgMikAAMg2LAAAQg2gEg6ASQhzAjgVBpIAAGtIg1AJIgBAAIAAA6IABAAg");
	this.shape_46.setTransform(221.4,34.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D7D7D7").s().p("AKiFRInfAAIoFAAIsXAAIqBAAImRAAIg5gWIgBAAIAAg6IABAAIA1gJIAAmtQAVhpBzgjQA6gSA2AEMA2LAAAQCkAABVAMQA7AJBFAaQBpAnBPC6QAoBcATBWIAABlIAjA0QADABAAAYQABAYgCADQgFAGgQAGIgPAFg");
	this.shape_47.setTransform(221.4,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.buss, new cjs.Rectangle(-1,-0.3,447.3,80.3), null);


// stage content:
(lib.Metro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{play:0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.mouseEnabled  = true;
		this.onClickPlay.addEventListener("click", playAnimation.bind(this));
		function playAnimation(){
			this.gotoAndPlay("play");
		}
	}
	this.frame_29 = function() {
		this.stop();
		this.mouseEnabled  = true;
		this.onClickPlay.addEventListener("click", playAnimation.bind(this));
		function playAnimation(){
			this.gotoAndPlay("play");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(91));

	// replay
	this.onClickPlay = new lib.clickPlay();
	this.onClickPlay.parent = this;
	this.onClickPlay.setTransform(364,45,1,1,0,0,0,364,45);
	this.onClickPlay.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.onClickPlay).wait(120));

	// boarder
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg41AG9IAAt8MBxrAAAIAAN8EA42AHAMhxrAAA");
	this.shape.setTransform(363.8,44.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Eg41gG9MBxrAAAIAAN7MhxrAAAg");
	this.shape_1.setTransform(363.8,44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1,p:{y:44.6}}]},89).to({state:[{t:this.shape_1,p:{y:44.9}}]},30).wait(1));

	// rapid
	this.instance = new lib.rapid();
	this.instance.parent = this;
	this.instance.setTransform(219.1,20.8,1,1,0,0,0,44.4,20.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({alpha:1},14).wait(91));

	// bus
	this.instance_1 = new lib.buss();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-223.8,50.3,1,1,0,0,0,221.5,39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:222.7,x:-181.8},0).wait(1).to({x:-131.4},0).wait(1).to({x:-72.1},0).wait(1).to({x:-5.7},0).wait(1).to({x:64.3},0).wait(1).to({x:133.6},0).wait(1).to({x:197.8},0).wait(1).to({x:253.6},0).wait(1).to({x:299.2},0).wait(1).to({x:333.9},0).wait(1).to({x:360},0).wait(1).to({x:382.4},0).wait(1).to({x:401.9},0).wait(1).to({x:418.8},0).wait(1).to({x:433.4},0).wait(1).to({x:446.1},0).wait(1).to({x:457},0).wait(1).to({x:466.4},0).wait(1).to({x:474.3},0).wait(1).to({x:481},0).wait(1).to({x:486.5},0).wait(1).to({x:491},0).wait(1).to({x:494.6},0).wait(1).to({x:497.4},0).wait(1).to({x:499.4},0).wait(1).to({x:500.8},0).wait(1).to({x:501.7},0).wait(1).to({x:502.2},0).wait(1).to({regX:221.5,x:501.1},0).wait(60).to({x:969.1},30).wait(1));

	// logo
	this.instance_2 = new lib.metro();
	this.instance_2.parent = this;
	this.instance_2.setTransform(127.8,38.8,1,1,0,0,0,75,34);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:78,y:37.5,alpha:1},29).wait(91));

	// RED
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE1111").s().p("AMlG9MgiTgNoIgsgRMAs1AAAIAAN5g");
	this.shape_2.setTransform(207.2,45.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33FFCC").s().p("AMlG9MgiTgNoIgsgRMAs1AAAIAAN5g");
	this.shape_3.setTransform(207.2,45.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_2}]},29).to({state:[{t:this.shape_3}]},60).to({state:[{t:this.shape_3}]},30).wait(1));

	// YELLOW
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC66").s().p("A2aG9IAAt5IJ2AAIAtASMAiSANng");
	this.shape_4.setTransform(144.1,45.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(120));

	// BLUE
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FFFF").s().p("A9mHCIAAuDMA7NAAAIAAODg");
	this.shape_5.setTransform(538.6,45.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.9,44,1174.4,91.6);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Metro_atlas_.png?1501786996579", id:"Metro_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;