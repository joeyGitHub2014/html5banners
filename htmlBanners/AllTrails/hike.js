(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"hike_atlas_P_", frames: [[0,0,859,225],[861,0,3,2],[0,227,763,118],[0,347,765,97],[765,227,129,38]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["hike_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["hike_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["hike_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["hike_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["hike_atlas_P_"];
	this.gotoAndStop(4);
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


(lib.trail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,763,118);


(lib.textMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgLA/IAAgRIARAAIAAARgAgGADIAAgXIAAgYIgBgSIATABIgCAQIgDAXIgCAXIgCAWIgJACIAAgWg");
	this.shape.setTransform(226.4,51.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgYAsIANgDQAGgCAFgDQAGgDADgDQAEgDAAgGQAAgFgFgEQgEgDgIgFQgLgEgGgGQgHgFAAgIQAAgHAEgGQAEgFAHgGQAHgEAHgEQAJgDAJgBIAEAMIgKACIgMAEQgFADgEAEQgDADAAAFQAAAFACACIAIAGIAHADIALAGQAGAEADAEQADAEAAAGQAAAIgFAIQgHAHgKAGQgLAGgQADg");
	this.shape_1.setTransform(219.4,52.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AAZAxIgKgMIgMgPIgKgNIgGgIIAHgDIAHgGQAEgDADgEQACgFAAgGQABgEgDgDQgDgEgHgDQgIgCgPAAIAAAvIAAAHIAAALIABANIAAALIAAAFIgRAAIAAgHIAAgNIAAgPIAAgOIAAgGIAAgMIAAgIIAAgMIAAgNIAAgGIAPAAIAUABQAQACAIAHQAJAFAAALQAAAJgGAIQgGAIgLAFIAHAJIAMAMIAMAOIAHAHIgMALIgFgGg");
	this.shape_2.setTransform(210.4,52.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgiAxQgMgHgGgMQgHgLAAgNQAAgRAIgOQAIgOAOgHQAPgJATAAQAQAAAMAGQAMAGAHAMQAHAMABAQQAAAIgEALQgDAKgIAJQgHAKgMAFQgNAGgQAAQgSAAgNgHgAgVglQgKAGgGALQgFALAAAMQAAAMAFAJQAEAJAJAFQAJAGANAAQAMAAAKgGQAKgFAHgKQAGgLAAgOQAAgOgGgJQgFgJgKgFQgJgEgLgBQgNABgKAGg");
	this.shape_3.setTransform(197.1,52.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgiAxQgMgHgGgMQgHgLAAgNQAAgRAIgOQAIgOAOgHQAPgJATAAQAQAAAMAGQAMAGAHAMQAHAMABAQQAAAIgEALQgDAKgIAJQgHAKgMAFQgNAGgQAAQgSAAgNgHgAgVglQgKAGgGALQgFALAAAMQAAAMAFAJQAEAJAJAFQAJAGANAAQAMAAAKgGQAKgFAHgKQAGgLAAgOQAAgOgGgJQgFgJgKgFQgJgEgLgBQgNABgKAGg");
	this.shape_4.setTransform(183.1,52.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgwAuIABgLIAAgNIAAgLIAAgGIAAgSIAAgFIAAgJIAAgLIgBgJIAAgGIALAAIAPAAIAOABQATACAMAEQAMAFAFAHQAGAGACAGIACAKQgBAOgGALQgGALgKAIQgKAIgNAFQgMAEgNADQgOACgNAAIAAgIgAgggpIAABSQAQgCANgEQAMgFAHgHQAJgHADgIQAFgIAAgIQgBgMgHgHQgIgIgOgDQgMgDgSAAIgFAAg");
	this.shape_5.setTransform(170.4,52.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgIA2IABgHIAAgOIAAgRIAAgSIAAgQIAAgWIgOABIgOAAIgKAAIgGABIAAgPIAHABIALAAIAMABIALAAIAFAAIANAAIAFAAIAKAAIAMgBIALAAIAGgBIAAAPIgFgBIgMAAIgPAAIgMgBIAAAYIAAAXIABAWIABARIAAAIg");
	this.shape_6.setTransform(158.1,52.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgNA3QgGgBgHgEQgHgEgGgJIgFgJQgCgEgBgHIgCgRIgBgWIAAgIIAAgIIAAgIIAAgGIARAAIgBAJIAAAQIAAAKIABAUQAAAJACAGQABAGAEAFQAEAHAHAEQAHADAIAAQAKAAAHgEQAGgEAEgGQAEgGABgIIADgRIAAgWIAAgFIAAgPIgBgLIAQAAIAAAKIAAAQIAAAHIgBAZQgBAMgCAJQgEAIgGAHQgHAJgJAEQgKAEgMAAIgLgBg");
	this.shape_7.setTransform(146.5,52.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgiAxQgMgHgGgMQgHgLAAgNQAAgRAIgOQAIgOAOgHQAPgJATAAQAQAAAMAGQAMAGAHAMQAHAMABAQQAAAIgEALQgDAKgIAJQgHAKgMAFQgNAGgQAAQgSAAgNgHgAgVglQgKAGgGALQgFALAAAMQAAAMAFAJQAEAJAJAFQAJAGANAAQAMAAAKgGQAKgFAHgKQAGgLAAgOQAAgOgGgJQgFgJgKgFQgJgEgLgBQgNABgKAGg");
	this.shape_8.setTransform(132.9,52.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgIA2IABgHIAAgOIAAgRIAAgSIAAgQIAAgWIgOABIgOAAIgKAAIgGABIAAgPIAHABIALAAIAMABIALAAIAFAAIANAAIAFAAIAKAAIAMgBIALAAIAGgBIAAAPIgFgBIgMAAIgPAAIgMgBIAAAYIAAAXIABAWIABARIAAAIg");
	this.shape_9.setTransform(115.4,52.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag8AyIAHgNIALgUIANgYIANgXIAKgSIAEgJIABAAIAKASIAOAYIAQAZIANAYIAJAPIgOAIIgFgIIgGgMIgHgMIgEgGIg3ACIgCAHIgGALIgFAMIgEAHgAgEgaIgGAKIgFALIgGAJIgCAFIArgBIgDgGIgFgIIgHgLIgFgKIgCgFIgCAGg");
	this.shape_10.setTransform(105,52.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AAVA4IgNgBIgPAAIgOgBIgHAAIABgKIAAgOIAAgNIAAgHIAAgUIAAgFIAAgKIAAgLIAAgLIgBgFIAGAAIANgBIANAAIAOgBIAIgBIABANIgJAAIgNABIgLAAIgGAAIAAAlIAGAAIAIAAIAKgBIAJAAIAAAMIgHAAIgLAAIgJAAIgGgBIAAAlIAGAAIAJAAIAOAAIAMgBIAAAOIgIAAg");
	this.shape_11.setTransform(94.3,52.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AAZAxIgKgMIgMgPIgKgNIgGgIIAHgDIAHgGQAEgDADgEQACgFAAgGQABgEgDgDQgDgEgHgDQgIgCgPAAIAAAvIAAAHIAAALIABANIAAALIAAAFIgRAAIAAgHIAAgNIAAgPIAAgOIAAgGIAAgMIAAgIIAAgMIAAgNIAAgGIAPAAIAUABQAQACAIAHQAJAFAAALQAAAJgGAIQgGAIgLAFIAHAJIAMAMIAMAOIAHAHIgMALIgFgGg");
	this.shape_12.setTransform(84.5,52.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgVA7QgPgHgIgMQgIgLAAgPQgBgIAFgKQAEgKALgMQAKgLARgLQAQgKAagHIADAQQgPADgOAGQgMAGgLAJQgKAJgGAKQgGAJAAALQAAAJAGAJQAGAJAMAGQALAGARAAIALAAIAJgCIAAgeIgBgIIAAgFIARAAIAAAHIAAAHIAAANIAAAJIAAAKIAAAGIgKADIgOACIgPABQgUAAgPgHg");
	this.shape_13.setTransform(71.1,51.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AAWA4IgPgBIgPAAIgNgBIgHAAIABgKIAAgOIAAgNIAAgHIAAgUIAAgFIAAgKIAAgLIAAgLIgBgFIAHAAIAMgBIAOAAIAMgBIAJgBIAAANIgIAAIgMABIgMAAIgFAAIAAAlIAEAAIAIAAIALgBIAJAAIABAMIgHAAIgLAAIgKAAIgFgBIAAAlIAFAAIAKAAIANAAIALgBIABAOIgHAAg");
	this.shape_14.setTransform(150.9,21.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AAiA2IAAgIIAAgLIAAgLIAAgFIAAgQIhEACIAAAKIAAAIIAAANIABALIAAAHIgRAAIAAgHIAAgLIAAgNIAAgKIAAgGIAAgPIAAgGIAAgKIAAgNIAAgKIAAgFIARAAIAAAEIAAAIIgBALIAAAIIAAAFIAAALIBEgCIAAgMIAAgGIAAgKIAAgMIAAgFIARAAIAAAFIAAAMIgBANIAAAMIAAAGIAAAPIAAAEIAAAKIAAANIABAKIAAAGg");
	this.shape_15.setTransform(138.3,21.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgIA2IABgHIAAgOIAAgRIAAgSIAAgQIAAgWIgOABIgOAAIgKAAIgGABIAAgPIAHABIALAAIAMABIALAAIAFAAIANAAIAFAAIAKAAIAMgBIALAAIAGgBIAAAPIgFgBIgMAAIgPAAIgMgBIAAAYIAAAXIABAWIABARIAAAIg");
	this.shape_16.setTransform(125.8,21.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AAZAxIgKgMIgMgPIgKgNIgGgIIAHgDIAHgGQAEgDADgFQACgEAAgGQABgDgDgFQgDgDgHgCQgIgDgPgBIAAAwIAAAHIAAAMIABAMIAAALIAAAFIgRAAIAAgHIAAgNIAAgQIAAgNIAAgFIAAgNIAAgHIAAgNIAAgMIAAgHIAPAAIAUABQAQACAIAGQAJAHAAAKQAAAJgGAIQgGAIgLAFIAHAIIAMAOIAMAMIAHAIIgMALIgFgGg");
	this.shape_17.setTransform(110.8,21.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AAVA4IgNgBIgQAAIgNgBIgHAAIABgKIAAgOIAAgNIAAgHIAAgUIAAgFIAAgKIAAgLIAAgLIgBgFIAHAAIAMgBIAOAAIAMgBIAJgBIAAANIgIAAIgMABIgMAAIgFAAIAAAlIAEAAIAIAAIALgBIAJAAIAAAMIgGAAIgMAAIgJAAIgFgBIAAAlIAFAAIAJAAIAOAAIALgBIABAOIgIAAg");
	this.shape_18.setTransform(100,21.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgCA5IgFgJIgJgTIgNgZIgNgXIgKgUIgFgKIAPgIIAEAJIAHAQIAKATIAJATIAIAPIAEAIIADgIIAIgPIALgTIAKgUIAIgQIAEgIIAOAIIgGAKIgKATIgOAXIgNAYIgLAUIgFAKg");
	this.shape_19.setTransform(88.9,21.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgiAxQgMgHgGgMQgHgLAAgOQAAgQAIgNQAIgOAOgJQAPgIATAAQAQAAAMAGQAMAGAHAMQAHALABARQAAAIgEAKQgDALgIAJQgHAJgMAGQgNAGgQAAQgSAAgNgHgAgVglQgKAGgGALQgFALAAAMQAAALAFAKQAEAJAJAGQAJAFANAAQAMAAAKgFQAKgGAHgLQAGgKAAgOQAAgOgGgJQgFgJgKgFQgJgFgLABQgNAAgKAGg");
	this.shape_20.setTransform(76,21.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgJAzQgNgFgIgHQgIgHgDgIQgDgHAAgGQAAgKAFgJQAEgKAKgKQAKgJAPgHQAOgHAWgEIACAOQgNABgNAFQgMAEgHAHQgKAGgFAJQgFAIAAAJQgBAKAGAIQAGAHALAFQAMAFATAAIAKAAIAIgBIABANIgIABIgMAAQgWAAgMgFg");
	this.shape_21.setTransform(64.3,21.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgYArIAMgDQAIgBAEgDQAGgCADgEQADgEAAgFQAAgFgEgEQgEgEgIgEQgKgEgIgFQgGgGAAgJQAAgGAEgGQAEgFAHgFQAHgFAIgDQAIgEAJgCIADANIgKACIgLAEQgFADgEADQgDAEgBAFQAAAEAEADIAHAFIAHAFIAMAFQAFADADAEQADAFAAAGQAAAIgGAHQgFAIgMAGQgKAGgQAEg");
	this.shape_22.setTransform(54.6,21.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgIA2IABgHIAAgLIAAgNIAAgKIAAgGIAAgPIAAgGIAAgKIAAgNIgBgKIAAgFIARAAIgBAFIAAAKIAAAOIAAAPIAAAPIAAAOIAAAOIAAAMIAAAHg");
	this.shape_23.setTransform(47,21.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgwAuIAAgLIAAgNIAAgLIAAgGIAAgSIAAgFIAAgJIAAgLIAAgJIAAgGIALAAIAPAAIAOABQATACAMAEQAMAFAFAHQAGAGACAGIACAKQgBAOgGALQgGALgKAIQgKAIgNAFQgMAEgNADQgOACgNAAIAAgIgAgggpIAABSQARgCAMgEQAMgFAHgHQAIgHAFgIQAEgIAAgIQgBgMgHgHQgIgIgOgDQgMgDgSAAIgFAAg");
	this.shape_24.setTransform(38.2,21.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AAVA4IgOgBIgOAAIgOgBIgHAAIAAgKIAAgOIAAgNIAAgHIAAgUIAAgFIAAgKIAAgLIAAgLIAAgFIAGAAIANgBIANAAIAOgBIAIgBIABANIgJAAIgNABIgKAAIgHAAIAAAlIAGAAIAIAAIAKgBIAJAAIAAAMIgHAAIgKAAIgJAAIgHgBIAAAlIAHAAIAJAAIAMAAIANgBIAAAOIgIAAg");
	this.shape_25.setTransform(26.7,21.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AAbA6IgLgPIgNgRIgLgPIgHgKIAIgDIAIgIQAFgEACgFQADgFAAgHQABgEgDgFQgDgFgIgDQgJgDgRgBIAAA6IAAAIIABAOIAAAPIAAAMIAAAGIgRAAIAAgIIAAgPIAAgTIAAgPIAAgHIAAgPIAAgGIAAgLIAAgNIAAgKIgBgGIALAAIANABIAOABQARACAJAIQAKAHAAALQAAAMgHAJQgHAJgLAGIAGAHIAJAMIALAOIAKAMIAGAHIgOALIgFgHg");
	this.shape_26.setTransform(16.2,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textMc, new cjs.Rectangle(7,8,224.3,56.6), null);


(lib.sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFEE").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAgAAAXAXQAWAXAAAfQAAAggWAXQgXAWggAAQgfAAgXgWg");
	this.shape.setTransform(7.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sun, new cjs.Rectangle(0,0,15.5,15.5), null);


(lib.pole3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA2DQIhomKIgDgUIAOgBIgCAVg");
	this.shape.setTransform(5.4,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Agxi6IgEgUIAOgBIgBAVIBeGKg");
	this.shape_1.setTransform(5.4,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pole3, new cjs.Rectangle(-1,-1,12.8,43.7), null);


(lib.pole2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgiCAIA6kzIAIgXIgHgZIAVALIAJATIgFALIgVAPIg/ErIgUBk");
	this.shape.setTransform(5.5,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOiBIAIgXIgHgZIAVALIAJATIgFALIgVAPIg/Eqg");
	this.shape_1.setTransform(6.5,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pole2, new cjs.Rectangle(-1,-1,13,47.5), null);


(lib.pole1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABJDOIiEmFIgNgWIANAEIAAAS");
	this.shape.setTransform(7.3,20.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.pole1, new cjs.Rectangle(-1,-1,16.6,43.1), null);


(lib.pole = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAtC0IhVlXIgEgQIAPATIgLgD");
	this.shape.setTransform(4.5,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.pole, new cjs.Rectangle(-1,-1,11,38), null);


(lib.onClickPlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.onClickPlay, new cjs.Rectangle(0,0,728,90), null);


(lib.midHill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.midHill, new cjs.Rectangle(-1,-1,765,97), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#062E5F").s().p("AgCABIAFgBIAAABg");
	this.shape.setTransform(18.9,70.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7AB94E").s().p("AFKB3QgBgDgCgCIgTgNIgkgVIgsgWQg/gehJgUQg2gOg6gJIgDgBQgxgIgzgEIgGAAIgKAAIgPAAIglAAIgIAAIgKAAIgbACQgLAAgVADQgVACAAABIgKADQiGAZhpAjQgfAKgcALIgBABIggANIgGACIgXALIAOgLIA+gxQAlgeACAAQANgFAggMQA1gXA3gUIA0gSIAHgCQCagwDaAJIAKAAQAcAAAoADQAqAEAAADIAKAAQBnAOBYAcIAWAHQCPAyBmBZQARAPAPAQIAAAFIgKAAIhoADIgjAAIhaABIhbABIAAgCg");
	this.shape_1.setTransform(66,58.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#062D5E").s().p("AnrDqQDRkDDQkFQACgDAAgFQBHB3A+CBQABACAFAAQBqhFBghOQADgDAFAAQCJDOB5DeIAAACQACAEAAAFIgKgLQiDiAh+iFQgDgCAAgFQh9A2hqBJQgEACgFAAQg4hYgzhcQgCgEAAgFQg3A/hiB9QhaB1AAADIgGACIg0ASQg4AUg1AXQgfAMgNAGQAAgDAtg6g");
	this.shape_2.setTransform(65.3,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,71);


(lib.highlight1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F8F9B6").ss(0.5,1,1).p("AA7BfIgMAqAAShBQAoBAACAAQABAAAIAKAhEiIIAtAO");
	this.shape.setTransform(6.9,13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.highlight1, new cjs.Rectangle(-1,-1,15.7,29.5), null);


(lib.highlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F8F9B6").ss(0.5,1,1).p("AgTgXIAnAw");
	this.shape.setTransform(3.3,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F8F9B6").ss(1,1,1).p("AAFAFIgJgJIAAAFg");
	this.shape_1.setTransform(7.9,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8F9B6").s().p("AgCgQIACALQADAKAAACIAAAEQAAACgDADIAAABQgDAAABghg");
	this.shape_2.setTransform(10,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.highlight, new cjs.Rectangle(0.3,-0.6,10.1,30.8), null);


(lib.bird1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* play();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACFAGQAJAEAXAPQg4gDgKAFQgFACAQAQQASARAAAFQAAAGgGAHQgBACgIgCQgJgBgDABQgNAFgCAAQgKABgNgKQgkgegNgGQgEgCgDgBQgWgHgjAFIgGgJIhCAIIAUgNQAVgOAGAAQABAAgFgFQgJgIghgeQgygsAIgEQADgCADADQAEAEAEAAIAeAaIgFgfIARAXIAHgXIAPAKQAgAJAmAcQANAJAJAIQAFAFAFAEQBFAJAcAEQAQADADABg");
	this.shape.setTransform(16.5,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA/BMQgkgegNgGIgHgDQgWgHgjAFIgGgJIhCAIIAUgNQAVgOAGAAQABAAgFgFIgqgmQgygsAIgEQADgCADADQAEAEAEAAIAeAaIgFgfIARAXIAHgXIAPAKQAgAJAmAcIAWARIAKAJQBFAJAcAEQAQADADABQAJAEAXAPQg4gDgKAFQgFACAQAQQASARAAAFQAAAGgGAHQgBACgIgCQgJgBgDABIgPAFIgCABQgJAAgMgKg");
	this.shape_1.setTransform(16.5,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ACFgBQAJADAXAPQg4gDgKAFQgFADACAQQAEAWAAACQAAACgHAAQgIgBgEADQgBAAgHAMQgFAIgHgBIgKgFQgJgEgHgFQgOgMgCgOQgDgMgCgBQgEgCgDgBQgWgHgjAFIgGgJIhCAIIAUgNQAVgNAGAAQABAAgFgFQgJgJghgeQgNgLgXgSQgJgHADgBQAEgCACgBQABAAAHABIAeAhIgFgfIARAXIAHgXIAPAKQALADAXAFQAUAGAQAMQANAJAJAIQAFAFAFAEQBFAJAcAFQAQADADABg");
	this.shape_2.setTransform(16.5,9.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA9BVIgKgFQgJgEgHgFQgOgMgCgOQgDgMgCgBIgHgDQgWgHgjAFIgGgJIhCAIIAUgNQAVgNAGAAQABAAgFgFIgqgnIgkgdQgJgHADgBIAGgDIAIABIAeAhIgFgfIARAXIAHgXIAPAKIAiAIQAUAGAQAMIAWARIAKAJQBFAJAcAFQAQADADABQAJADAXAPQg4gDgKAFQgFADACAQIAEAYQAAACgHAAQgIgBgEADIgIAMQgEAHgGAAIgCAAg");
	this.shape_3.setTransform(16.5,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AB1gWQAJADAXAPQg4gDgJAFQgHADgJAQQgIAPgBAJQAAACgDAAQgDABgCADQgFAGgCACQgEADgGAAQgBAAgEgHQgDgHgCgBQgCgBgGACQgGACgDgDQgCgBgCADQgCACAAgBQgHgJAEgOQADgMgCgBQgDgBgEgBQgWgHgjAEIgGgHIhDAHIAUgNQAVgNAGgBQABAAgEgEIAAAAIgPgFQgUgSgPgDIgEAAIAFgDQABAAAHACIAeAMIgFgJIARABIAHgBIAPAKQAJACAKgNQAIgLAOAKQAEADAIgBQAHgCADADQAGAEADAEQBFAKAcAFQAQACADACg");
	this.shape_4.setTransform(18,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAiA6QgBAAgEgHQgDgHgCgBQgCgBgGACQgGACgDgDQgBgBAAAAQAAAAgBABQAAAAgBAAQAAABgBABQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAQgHgJAEgOQADgMgCgBIgHgCQgWgHgjAEIgGgHIhDAHIAUgNQAVgNAGgBIgDgEIAAAAIgPgFQgUgSgPgDIgEAAIAFgDIAIACIAeAMIgFgJIARABIAHgBIAPAKQAJACAKgNQAIgLAOAKQAEADAIgBQAHgCADADIAJAIQBFAKAcAFQAQACADACQAJADAXAPQg4gDgJAFQgHADgJAQQgIAPgBAJQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgDABgCADIgHAIQgDADgFAAIgCAAg");
	this.shape_5.setTransform(18,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("ABwgdQAJAEAXAPQg4gDgKAFQgHADgIAPQgJAPgBAJQAAADgFgBQgFgBgEADQgBABgCAMQgDAJgEAAQgBAAgEgIQgDgJgCAAQgBgBgFADQgEACgEgDQgGgGgCgFQgFgIADgLQACgJgDgBQgEgCgDgBQgXgGgjAFIgGgJIhCAIIAUgNQAVgOAGAAQABAAgFgFQgBgBgKAHQgKAHgNgLQgIgIAFACQADABAFACIgGgJIASABIAHgFIAGgBQAIACAZgJQAVgIAOAKQAFADAIgBQAHgBADACQACACADAAQADAAACABQBEAJAcAFQAQADADABg");
	this.shape_6.setTransform(18.6,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAdA8QgBAAgEgIIgEgJQgDgBgEADQgDACgFgDQgGgGgDgFQgEgIADgLQACgJgDgBIgHgDQgXgGgiAFIgGgJIhDAIIAUgNQAVgOAGAAQABAAgFgFQgBgBgKAHQgKAHgMgLQgJgIAFACIAIADIgFgJIARABIAHgFIAGgBQAIACAZgJQAVgIAPAKQAEADAIgBQAHgBADACQACACADAAIAFABQBEAJAcAFQAQADADABQAJAEAXAPQg4gDgKAFQgGADgJAPQgJAPAAAJQgBADgFgBQgFgBgEADQgBABgCAMQgDAJgEAAIAAAAg");
	this.shape_7.setTransform(18.6,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,35,19.1);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,859,225), null);


(lib.backHill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C56E21").ss(1,1,1).p("AESl2QAWgHAIAAIAhgEIAZgHIAOAEIAWAdIBBAZIBIgEICQgrIBegHICXAOQAnAEALAHIB0ASQAVAEAvgDQAzgDARACQAbACAmgBQAfgCAUgDQALgBAYgHQAZgFAaAGQAPAEA8ARQAvANAPACQAZAEB7gLIBKgLQBNgKALADQASAEArAVIAkBMIgIJ9Mg9fAAAIBemFICFhhIA9hIIAzgdIBPgLICCggIA5gLIB3AHIBBgOIA9gkIAEgIQAIgGAVAHQAQAFAUAJQAOAFALgFQAFgCAPgIQAJgGALgCIAngHIBMASIBEAAIAzgOIAZgLIAgADIAIgCQALgBAOAHIBIAkIBIAAICFggIBMAZIArAVIAVAAIAdAEIBBgLIAWgLIASgDIASgSIBLgWIAVAAIBIgdIAvgHIBLALIAWgHIAogSQAIgDAIgBgADalgIAlgPQALgEAIgD");
	this.shape.setTransform(197.2,39.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C56E21").s().p("A+zGIIBemFICFhgIA9hIIAzgdIBPgKICCghIA5gLIB3AIIBBgPIA9gkIAEgIQAIgGAVAHQAQAFAUAJQAOAFALgEIAUgLQAJgFALgDIAngHIBMASIBEAAIAzgOIAZgLIAgAEIAIgDQALgBAOAHIBIAkIBIAAICFggIBMAZIArAWIAVAAIAdADIBBgLIAWgKIASgEIASgSIBLgWIAVAAIBIgcIAvgIIBLALIAWgHIAlgOIATgIQAWgHAIAAIAhgDIAZgIIAOAEIAWAdIBBAZIBIgDICQgsIBegHICXAOQAnAEALAHIB0ASQAVAEAvgDQAzgCARABQAbADAmgCQAfgBAUgDQALgCAYgHQAZgFAaAGIBLAVQAvAOAPABQAZAEB7gLIBKgKQBNgLALADQASAEArAVIAkBMIgIJ8g");
	this.shape_1.setTransform(197.2,39.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.backHill, new cjs.Rectangle(-1,-1,396.4,80.5), null);


(lib.hiker2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.hightlight2 = new lib.highlight();
	this.hightlight2.parent = this;
	this.hightlight2.setTransform(35.4,18.1,1,1,0,0,0,5,15.7);
	this.hightlight2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.hightlight2).wait(1));

	// Layer 2
	this.instance = new lib.pole2();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,47.5,1,1,0,0,0,5.5,22.8);

	this.instance_1 = new lib.pole3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.4,47.5,1,1,0,0,0,5.4,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACDk7QAaAcgEAKQgEAKAMAVQAFAKAHAJQAEAcgGAPQgDAHAJAIQALAKABAHIAEAcQABARgDANQAAACAJAjQAHAbgUAPQgVAPgWAFQgKACgTAAQgHAAgRgEIgQgEQgTBrgPAUQgKANAEAKQABAFAEADIAVAjQAUApgFAaIAHADQAHADACAEQADAGAIAJIgTAMIgOAMIgpASIgMACQgCgEgCgEQgDgIAEgEIAagZIAKgHIgGgOQglhQgJABQgGAAgEgMQgDgNgBgCQAAgUgCgRQgDgigJADQgNAAgGAAQgKABgFALQgGALAIAaQAEANAFAOQALBjgEAEQgDACAGAIQADAEADADIgBARQgSAcgNALQgJAHgTAGQgTAGACgCQgBgEgBgEQgCgKAFgHQAJgLAIgMIAHgeIAAgJIAIgEIgIg9QgIgXgIgYQgQgwABgEQAFgUAIgTQARgmAcgUQAcgSAAgNIgFgIQADgGgBgEQgEgJgXAHQgYAHgNgCIgIgCIgwgDIgfgIIgMgXIASgUIgDgQIAOADIAKAVIAEAQIAQAAIAAgRIAIgBIAYAEIAegMIAYgiIABgSIACgMIgVgmIgNgKIgBgUIARgTIADgMIgJgGIgPADIgQgSIgHADIgEgUIgIgPQgCgGABgIQADgQASgMQAMgIASAIQAIAEAHAGIAMAQIAGAUIAGgIQAIgIADABQADAAAUgBQASAAABAMQABAWAPgYQAFgJANgLQAOgOAGAEQAJAFAagDg");
	this.shape.setTransform(20.1,36.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhyFlIgCgIQgCgLAFgGQAJgLAIgNIAHgdIAAgKIAIgDIgIg9IgQgvQgQgwABgEQAFgTAIgUQARgmAcgUQAcgTAAgMIgFgIQADgGgBgEQgEgJgXAGQgYAIgNgCIgIgCIgwgEIgfgIIgMgWIASgUIgDgQIAOADIAKAVIAEAPIAQAAIAAgQIAIgBIAYAEIAegMIAYghIABgSIACgNIgVgmIgNgKIgBgUIARgSIADgNIgJgFIgPACIgQgSIgHADIgEgUIgIgPQgCgFABgJQADgPASgMQAMgJASAJQAIADAHAGIAMAQIAGAUIAGgIQAIgHADAAIAXgCQASABABANQABAVAPgYQAFgJANgLQAOgNAGADQAJAFAagDIAaAaQAaAdgEAJQgEAKAMAWQAFAKAHAIQAEAcgGAPQgDAIAJAHQALAKABAHIAEAcQABARgDANQAAACAJAkQAHAagUAPQgVAPgWAFQgKACgTAAQgHAAgRgFIgQgDQgTBrgPAUQgKAMAEALQABAFAEADIAVAjQAUApgFAaIAHACQAHAEACAEQADAFAIALIgTAKIgOAMIgpATIgMACIgEgIQgDgIAEgFIAagYIAKgHIgGgPQglhQgJABQgGABgEgMIgEgQIgCglQgDghgJADIgTAAQgKAAgFAMQgGAMAIAZIAJAaQALBjgEAFQgDACAGAIIAGAIIgBAQQgSAcgNALQgJAHgTAGIgRAEQAAAAAAAAg");
	this.shape_1.setTransform(20.1,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hiker2, new cjs.Rectangle(-6.2,-0.6,47.6,73.5), null);


(lib.hiker1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.hightlight1 = new lib.highlight1();
	this.hightlight1.parent = this;
	this.hightlight1.setTransform(27.2,13.5,1,1,0,0,0,6.9,13.7);
	this.hightlight1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.hightlight1).wait(1));

	// Layer 2
	this.instance = new lib.pole1();
	this.instance.parent = this;
	this.instance.setTransform(8.8,37.5,1,1,0,0,0,7.3,20.6);

	this.instance_1 = new lib.pole();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.5,37,1,1,0,0,0,4.5,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_2 = new lib.Bitmap2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhWhaIADAIQADAJAAANQgBAPgGAXQgGAXgGAIQgFAHgpBjQgFAMAMAqQAGAVAHAUQAAADAIgBIgEAnIgIAIIgRAGIgSAKIgDAFQgCAFADACQAGAEAYAAIAcgPIAhABIAKgKIgEgRQgKgXgBgCIgDgQIAHgDIgThLQAAgDASgVQATgYALgDQAPgFACADIAIAPQAHARgBAJQgBANAaAjIAPAGIBXA6IAKAGIAQAdIgCAfIABAPQABAPAFAEQAEADAIAKQAHAHAEgKIANgnIASgiIAIgKQgbgdgHgCIgXgHQgKgQgOgRQgdghgUgCQgOgBgBgHIACgHQgKhigHgHQgEgEgBgXIgBgWIAXgCQApgMAEgPIAShGIgJgUQASgFABgGQAFgLACgLQAEgVgMgOQgMgNgTggIgSgcIgVgDIgIgeQgEgUgPgFQgmgOgKADQgjALgHAFQgGADgIgDQgHgEgCgBQgHgEgEgDQgJgEgHADQgPACgIAHQgQANABApIACAMIAJAFIAHAKIAEALIANABIgEAlIAIAUIAGAHIgDAXQgMAHgFACIgXAHIgWgCIgMgFIgSgSIgLgCIAAAVIAEAMIASAMIAMALIAOAIIAPAGIAeACIAQgB");
	this.shape.setTransform(20.4,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACaFYIgMgNQgFgEgCgPIAAgPIACgfIgPgdIgMgGIhWg6IgQgGQgZgjABgNQAAgJgGgRIgIgPQgCgDgPAFQgLADgTAYQgSAVAAADIATBLIgHADIACAQIAMAZIAEARIgKAKIghgBIgcAPQgYAAgFgEQgEgCACgFIADgFIASgKIARgGIAIgIIAEgnQgJABAAgDQgGgUgGgVQgLgqAEgMQAqhjAEgHQAGgIAGgXQAGgXAAgPQABgNgDgJIgDgIIgIgEIgQABIgegCIgOgGIgPgIIgMgLIgSgMIgEgMIAAgVIAMACIARASIAMAFIAWACIAXgHQAFgCAMgHIACgXIgFgHIgIgUIADglIgMgBIgEgLIgHgKIgIgFIgEgMQAAgpAQgNQAIgHAPgCQAHgDAJAEIAKAHIAKAFQAIADAFgDQAIgFAjgLQAKgDAmAOQAPAFADAUIAJAeIAUADIASAcQAVAgALANQALAOgDAVQgDALgEALQgCAGgRAFIAJAUIgSBGQgEAPgpAMIgXACIAAAWQACAXAEAEQAHAHAKBiIgCAHQAAAHAOABQAVACAdAhQAOARAKAQIAXAHQAGACAcAdIgIAKIgSAiIgOAnQgCAGgDAAQgCAAgDgDg");
	this.shape_1.setTransform(20.4,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hiker1, new cjs.Rectangle(-1,-1,42.8,71.4), null);


// stage content:
(lib.hike = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var tl = new TimelineLite();
		console.log(root.bird1.scaleX);
		console.log(root.bird2.scaleX);
		console.log(root.bird3.scaleX);
		
		
		var hiker1X 	= root.hiker1.x;
		var hiker1Y 	= root.hiker1.y;
		var hiker2X 	= root.hiker2.x;
		var hiker2Y 	= root.hiker2.y;
		var textMcX 	= root.textMc.x;
		var midHillX 	= root.midHill.x;
		var midHillY 	= root.midHill.y;
		var backHillX 	= root.backHill.x;
		var backHillY 	= root.backHill.y;
		var sunX 		= root.sun.x;
		var sunY 		= root.sun.y;
		var skyX 		= root.sky.x;
		var skyY 		= root.sky.y
		var trailX 		= root.trail.x;
		var trailY 		= root.trail.y;
		var bird1X  	= root.bird1.x;
		var bird1Y  	= root.bird1.y;
		var bird2X  	= root.bird2.x;
		var bird2Y  	= root.bird2.y;
		var bird3X  	= root.bird3.x;
		var bird3Y  	= root.bird3.y;
		var loopCount 	= 1;
		
		root.onClickPlay.addEventListener("click", playAnimation.bind(root));
		
		function playAnimation(){
			if (loopCount != 1){
				reset();
			}
			tl.to([root.hiker2, root.hiker1], 3,   {scaleX:2.5,scaleY:2.5,  y:93 , ease:Linear.easeNone})
			.to([root.hiker1], 3,   {  x:hiker1X-5 , ease:Linear.easeNone },"-=3")
			.to([root.hiker2], 3,   {  x:hiker2X-5 , ease:Linear.easeNone },"-=3")
		
			.to([root.trail],3, {scaleX:1,scaleY:1, y:100, ease:Linear.easeNone} ,"-=3")
			.to([root.midHill],3, {  x:midHillX - 60,y:midHillY + 5 , ease:Linear.easeNone} ,"-=3")
			.to([root.backHill],3, {  scale:1, x:backHillX - 10  , y:backHillY - 5 ,ease:Linear.easeNone} ,"-=3")
			.to([root.sun],3, { x:sunX - 70, y:sunY +5, scaleX:1.5 ,scaleY:1.5,  ease:Linear.easeOut} ,"-=3")
			.to([root.sky],3, { x:skyX - 60, ease:Linear.easeNone} ,"-=3")
			.to([root.hiker1.hightlight1,root.hiker2.hightlight2],3, {alpha:.8, ease:Linear.easeNone} ,"-=3")
		
			.to([root.textMc],3,{x:textMcX - 60,ease:Linear.easeNone} ,"-=3");
		
			TweenMax.to([root.bird1], 4, {scale:.2,  x:-20, y:-30,ease:Linear.easeNone, delay:.7});
			TweenMax.to([root.bird2], 4, {scale:.1,   x:50, y:-10,ease:Linear.easeNone, delay:.7});
			TweenMax.to([root.bird3], 4, {scale:.1,   x:100, y:-10,ease:Linear.easeNone, delay:.7});
			++loopCount;
		}
		
		root.onClickPlay.on("mouseout", function(){
			   //wake the ad to allow animation to complete after 15 secs
			    //ad.wake(1500);
		});
		
		function reset(){
			root.sun.scaleX = root.hiker1.scaleX = root.hiker2.scaleX = root.bird1.scaleX = 1;
			root.sun.scaleY = root.hiker1.scaleY = root.hiker2.scaleY = root.bird1.scaleY = 1;
			root.bird2.scaleX = root.bird2.scaleY = .82;
			
			root.bird2.scaleX = root.bird2.scaleY = .64;
			
			root.bird1.x = bird1X;
			root.bird1.y = bird1Y;
			root.bird2.x = bird2X;
			root.bird2.y = bird2Y;
			root.bird3.x = bird3X;
			root.bird3.y = bird3Y;
			
			root.hiker1.x  =  hiker1X;
			root.hiker1.y  = hiker1Y;
			root.hiker2.x = hiker2X;
			root.hiker2.y = hiker2Y ;
			root.textMc.x = textMcX;
			root.midHill.x = midHillX ;
			root.midHill.y  = midHillY ;
			root.backHill.x = backHillX;
			root.backHill.y = backHillY ;
			root.sun.x = sunX ;
			root.sun.y = sunY ;
			root.sky.x = skyX ;
			root.sky.y = skyY;
			root.trail.x = trailX;
			root.trail.y = trailY;	
			//console.log(root.trail.x);
		//console.log(root.trail.y);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgCAjQgCgCgBgDQgCgCAAgGIAAgjIgIAAIAAgCIAHgFIAGgHIACgIIACAAIAAASIANAAIAAAEIgNAAIAAAhQAAAGACACQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAEgBIADgDIACAAQgCAFgEADQgDADgEAAIgFgBg");
	this.shape.setTransform(712.4,79.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgSAcIAAgCQAEAAACgCIACgDIAAgFIAAgUIAAgLIgCgDIgCgBIgEABIgBgCIAQgHIADAAIAAANQAFgNAIAAQADAAACACQACACAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBIgEgCIgCACQgCACgCAFIAAAZIAAAHIADADIAFABIAAACg");
	this.shape_1.setTransform(708.8,80.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AAHAaQgCgCAAgEIgJAHIgHABQgFAAgEgDQgDgEAAgGQAAgEABgDQADgEAGgEQAGgCAMgFIAAgCQAAgIgCgDQgDgDgEAAQgDAAgCACQgDACAAACIAAAEIgBAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAIgBgFQAAgFAFgEQAFgEAJAAQAGAAAFACQADACACAEIABAKIAAASIAAAJIABACIACABIACAAIAEgFIAAAEQgGAIgGAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAgFAAQgFADgCADQgCACAAAEQAAAEADADQACADAEAAQAEAAAGgGIAAgUIgKAEg");
	this.shape_2.setTransform(704.2,80.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgCAjQgCgCgBgDQgCgCAAgGIAAgjIgIAAIAAgCIAHgFIAGgHIACgIIACAAIAAASIANAAIAAAEIgNAAIAAAhQAAAGACACQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAEgBIADgDIACAAQgCAFgEADQgDADgEAAIgFgBg");
	this.shape_3.setTransform(699.7,79.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgKAbIgDgBIgCACIgCAAIAAgUIACAAQABAJAFAEQAFAEAEAAQAEAAADgCQADgCAAgEQAAgEgDgDQgDgDgIgDQgIgEgDgDQgCgEAAgEQAAgIAEgEQAFgEAHgBIAHACIAEABIABgBIABgCIACAAIAAATIgCAAQgCgJgDgCQgEgEgEAAQgEAAgDADQgCABAAADQAAADABADIAIAFIAHAEQAMAFAAAKQAAAGgFAFQgGAFgHgBIgKgBg");
	this.shape_4.setTransform(695.8,80.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgTATQgGgIAAgLQAAgFADgIQAEgHAGgEQAHgDAFgBQAMABAIAJQAGAIAAAKQAAAHgEAHQgDAHgGAEQgGAEgHgBQgMAAgHgJgAgHgVQgDABgCAFQgCAFAAAHQAAALAFAIQAFAJAGAAQAGgBADgEQAEgFAAgLQAAgOgGgIQgFgGgFAAQgDABgDACg");
	this.shape_5.setTransform(687.4,80.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgCAjQgCgCgBgDQgCgCAAgGIAAgjIgIAAIAAgCIAHgFIAGgHIACgIIACAAIAAASIANAAIAAAEIgNAAIAAAhQAAAGACACQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAEgBIADgDIACAAQgCAFgEADQgDADgEAAIgFgBg");
	this.shape_6.setTransform(682.7,79.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AAEAqIAAgCQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAIABgCIgDgEIgPgVIANgMIAFgFIAAgBIgBgCIgDgBIAAgCIAXAAIAAACIgIABIgHAFIgNAMIANARIAIAJIAFAEIAFABIAAACgAgdAqIAAgCIAGgBIACgCIABgHIAAgwIAAgLIgCgDIgCgBIgEABIgBgCIAQgHIADAAIAAA1IAAASIABAHIACACIAGABIAAACg");
	this.shape_7.setTransform(675.1,79.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgPAVQgHgIAAgNQAAgMAIgHQAHgJAKAAQAIABAFAEQAFAEAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABIgEABQgEgBgCgBIgBgGQAAgDgCgBQgCgCgEgBQgFAAgDAFQgFAGAAAJQAAAJAFAHQAEAIAHgBQAGAAAFgDQADgDADgHIACABQgDAKgGAGQgGAGgIgBQgIABgHgIg");
	this.shape_8.setTransform(669.3,80.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgMAqIAAgCQAEAAACgBIACgDIABgGIAAgVIgBgKIgBgDIgDgBIgEABIAAgCIAPgHIACAAIAAArIABAGQAAABAAAAQABABAAAAQAAAAAAAAQABABAAAAIAGABIAAACgAgDgeQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABgBQABAAAAAAQABAAAAgBQAAAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQgBAAAAAAg");
	this.shape_9.setTransform(665,79.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgMAqIAAgCQAEAAABgBQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBQABgBAAgFIAAgwIAAgLIgBgDIgDgBIgEABIgBgCIAPgHIADAAIAABHQAAAFABABIACADIAGABIAAACg");
	this.shape_10.setTransform(661.7,79.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgPAVQgHgIAAgNQAAgMAIgHQAHgJAKAAQAIABAFAEQAFAEAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABIgEABQgEgBgCgBIgBgGQAAgDgCgBQgCgCgEgBQgFAAgDAFQgFAGAAAJQAAAJAFAHQAEAIAHgBQAGAAAFgDQADgDADgHIACABQgDAKgGAGQgGAGgIgBQgIABgHgIg");
	this.shape_11.setTransform(657.3,80.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.onClickPlay = new lib.onClickPlay();
	this.onClickPlay.parent = this;
	this.onClickPlay.setTransform(364,45,1,1,0,0,0,364,45);
	this.onClickPlay.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.onClickPlay).wait(1));

	// logo
	this.instance = new lib.logo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(56.8,28.8,0.53,0.53,0,0,0,66,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// TEXT
	this.textMc = new lib.textMc();
	this.textMc.parent = this;
	this.textMc.setTransform(288.2,48.3,1,1,0,0,0,108.1,32.3);
	this.textMc.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.textMc).wait(1));

	// birds
	this.bird3 = new lib.bird1();
	this.bird3.parent = this;
	this.bird3.setTransform(751.7,58.6,0.64,0.64,0,0,0,16.5,8.8);

	this.bird2 = new lib.bird1();
	this.bird2.parent = this;
	this.bird2.setTransform(703,62.7,0.82,0.82,0,0,0,16.4,8.9);

	this.bird1 = new lib.bird1();
	this.bird1.parent = this;
	this.bird1.setTransform(708.2,94.7,1,1,0,0,0,16.4,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bird1},{t:this.bird2},{t:this.bird3}]}).wait(1));

	// alltrails
	this.instance_1 = new lib.Bitmap5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hikers
	this.hiker1 = new lib.hiker1();
	this.hiker1.parent = this;
	this.hiker1.setTransform(419.7,42.4,1,1,0,0,0,20.4,34.7);

	this.hiker2 = new lib.hiker2();
	this.hiker2.parent = this;
	this.hiker2.setTransform(509.1,51.7,1,1,0,0,0,20.2,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hiker2},{t:this.hiker1}]}).wait(1));

	// trail
	this.trail = new lib.trail();
	this.trail.parent = this;
	this.trail.setTransform(349.6,69.1,1,1,0,0,0,380.3,58);

	this.timeline.addTween(cjs.Tween.get(this.trail).wait(1));

	// midHill
	this.midHill = new lib.midHill();
	this.midHill.parent = this;
	this.midHill.setTransform(363.5,51.1,1,1,0,0,0,381.4,47.6);

	this.timeline.addTween(cjs.Tween.get(this.midHill).wait(1));

	// backHill
	this.backHill = new lib.backHill();
	this.backHill.parent = this;
	this.backHill.setTransform(544,76.1,1,1,0,0,0,197.2,39.3);
	this.backHill.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.backHill).wait(1));

	// sun
	this.sun = new lib.sun();
	this.sun.parent = this;
	this.sun.setTransform(662.8,8.6,1,1,0,0,0,7.8,7.8);
	this.sun.alpha = 0.641;

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(1));

	// sky
	this.sky = new lib.bg();
	this.sky.parent = this;
	this.sky.setTransform(607.5,11.8,1.44,1,0,0,0,429.5,112.7);

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(332.3,-55.9,1257.7,229);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/hike_atlas_P_.png?1504723541733", id:"hike_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;