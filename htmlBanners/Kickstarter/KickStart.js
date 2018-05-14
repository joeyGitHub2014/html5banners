(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"KickStart_atlas_P_", frames: [[0,185,299,116],[301,185,319,44],[0,0,728,91],[923,0,98,98],[730,71,102,102],[834,71,37,58],[873,71,37,52],[912,100,37,52],[0,93,728,90],[730,0,191,69]]}
];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Bitmap1 = function() {
	this.spriteSheet = ss["KickStart_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1_1 = function() {
	this.spriteSheet = ss["KickStart_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["KickStart_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2_1 = function() {
	this.spriteSheet = ss["KickStart_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["KickStart_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["KickStart_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["KickStart_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["KickStart_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.soldier = function() {
	this.spriteSheet = ss["KickStart_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.tank = function() {
	this.spriteSheet = ss["KickStart_atlas_P_"];
	this.gotoAndStop(9);
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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,728,91), null);


(lib.soldier_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.soldier();
	this.instance.parent = this;
	this.instance.setTransform(-538,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.soldier_1, new cjs.Rectangle(-538,-39,728,90), null);


(lib.Smoke5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhbAjIgLgwQAAgnAhgRQAbgPAqAFQAoAEAeASQAhASAAAWQgBArgQAUQgeAjhVAAQgsAAgSgug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Smoke5, new cjs.Rectangle(-10.2,-8.1,20.5,16.3), null);


(lib.Smoke4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhvA3QgogmAAgdQAAhnCXAXQA3AIAxAWQAwAVAAANQAAAQgOALQgRAMgeABIACAFIAAASQAAApgWAMQgSAJhCAAQg1AAgtgqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Smoke4, new cjs.Rectangle(-15.1,-9.7,30.4,19.5), null);


(lib.Smoke3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjpBeQgygoAAgcQAAgkBBgtQBIgyBWAAQAeAAAJAUQAJAUAMAAQAlAAA/gnQAggTAbgUQAVgCAyAbQA2AeAAAZQAAA/h8BHQh/BJh2AAQhVAAg/gyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Smoke3, new cjs.Rectangle(-28.4,-14.3,56.9,28.8), null);


(lib.Smoke2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ABiDHQg3gKgMAAQgNAAgTgKQgUgKgMAAQgDAAgkAUQgjAUgaAAQgQAAgRgCIgPgDQgCgPAAgbIgFgFQgFgDgPAAQgNAAgqANQgrAMgMAAQgQAAgPgCIgMgDQgCgBAAgZQAAgLCEhkQCPhrA3AAQAKAAAWASQAVATAGANQATgDANgOIgPgVQgHgMAAgQQAAgbAzgfQAvgdBCgTQBEgTAtADQAzADAAAhQAAATg/BEQhBBDgFAIQAWAOAMAQQALANAAAGQAAAFgKARIgUAkQARABAPAIQANAHAFAGQgcAQgOATIgNAdQgMAag/AAQgNAAg3gKgACiiDQgZANguAkIAAAEQADADAPAAQARAAA4gkQA2gjAoABIAUgMIgagCQg2AAg2Acg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Smoke2, new cjs.Rectangle(-36.4,-20.9,72.9,41.9), null);


(lib.Smoke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AijC8IAHgaIgvAJQgkAIgPAAQhGAAgTgaQgGgJAAgLIABgKQAAgJAZgrIAbgvQgcgOgKgLIgEgKQAAglBrgpQB0guCIgCQAxgBCZg7QB/glAABUQABAigXAjQgYAoghAJIgDAPQAbADAOALQAMAHgBANQAAAvinBJQilBIhlAAQgvAAgDgVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Smoke, new cjs.Rectangle(-35,-20.9,70.1,41.8), null);


(lib.motorCycle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-149,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.motorCycle, new cjs.Rectangle(-149,-58,299,116), null);


(lib.frontTire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-51,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.frontTire, new cjs.Rectangle(-51,-51,102,102), null);


(lib.backTire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2_1();
	this.instance.parent = this;
	this.instance.setTransform(-49,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.backTire, new cjs.Rectangle(-49,-49,98,98), null);


(lib.kickStart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_1 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_2 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_3 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_4 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_5 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_6 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_7 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_8 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_9 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_10 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_11 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_12 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_13 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_14 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_15 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_16 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_17 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_18 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_19 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_20 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_21 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_22 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_23 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_24 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_25 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_26 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_27 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_28 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");
	var mask_graphics_29 = new cjs.Graphics().p("A4/FKIAAqTMAx/AAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-262.5,y:-5}).wait(1).to({graphics:mask_graphics_1,x:-252.1,y:-5}).wait(1).to({graphics:mask_graphics_2,x:-241.7,y:-5}).wait(1).to({graphics:mask_graphics_3,x:-231.4,y:-5}).wait(1).to({graphics:mask_graphics_4,x:-221,y:-5}).wait(1).to({graphics:mask_graphics_5,x:-210.6,y:-5}).wait(1).to({graphics:mask_graphics_6,x:-200.2,y:-5}).wait(1).to({graphics:mask_graphics_7,x:-189.8,y:-5}).wait(1).to({graphics:mask_graphics_8,x:-179.5,y:-5}).wait(1).to({graphics:mask_graphics_9,x:-169.1,y:-5}).wait(1).to({graphics:mask_graphics_10,x:-158.7,y:-5}).wait(1).to({graphics:mask_graphics_11,x:-148.3,y:-5}).wait(1).to({graphics:mask_graphics_12,x:-138,y:-5}).wait(1).to({graphics:mask_graphics_13,x:-127.6,y:-5}).wait(1).to({graphics:mask_graphics_14,x:-117.2,y:-5}).wait(1).to({graphics:mask_graphics_15,x:-106.8,y:-5}).wait(1).to({graphics:mask_graphics_16,x:-96.4,y:-5}).wait(1).to({graphics:mask_graphics_17,x:-86.1,y:-5}).wait(1).to({graphics:mask_graphics_18,x:-75.7,y:-5}).wait(1).to({graphics:mask_graphics_19,x:-65.3,y:-5}).wait(1).to({graphics:mask_graphics_20,x:-54.9,y:-5}).wait(1).to({graphics:mask_graphics_21,x:-44.5,y:-5}).wait(1).to({graphics:mask_graphics_22,x:-34.2,y:-5}).wait(1).to({graphics:mask_graphics_23,x:-23.8,y:-5}).wait(1).to({graphics:mask_graphics_24,x:-13.4,y:-5}).wait(1).to({graphics:mask_graphics_25,x:-3,y:-5}).wait(1).to({graphics:mask_graphics_26,x:7.4,y:-5}).wait(1).to({graphics:mask_graphics_27,x:17.7,y:-5}).wait(1).to({graphics:mask_graphics_28,x:28.1,y:-5}).wait(1).to({graphics:mask_graphics_29,x:38.5,y:-5}).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D3F3C").s().p("AggAyQgLgJgDgSIATgDQABALAIAHQAHAFAMAAQAOAAAGgEQAGgGAAgIQAAgGgFgEQgEgDgQgEQgUgEgJgEQgIgDgEgIQgEgGAAgJQAAgIADgGQAEgGAGgEQAEgEAIgDQAIgBAJAAQAMAAAKADQAKAEAFAGQAFAIACAKIgTADQgBgJgGgFQgHgFgKAAQgNAAgGAEQgGAFAAAGQAAAEADACQACAEAFACIAQAFQAVAFAIAEQAIACAFAHQAEAGAAAKQAAAKgFAIQgGAJgLAFQgKAEgOAAQgVABgMgKg");
	this.shape.setTransform(68.4,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D3F3C").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_1.setTransform(60,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3D3F3C").s().p("AAbA6IAAhEQAAgMgCgGQgCgGgGgDQgGgEgIAAQgLAAgJAIQgJAIAAAWIAAA9IgTAAIAAhxIARAAIAAAQQANgSAWAAQALAAAIADQAJAEAEAGQAFAGABAIIABATIAABFg");
	this.shape_2.setTransform(50.7,5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D3F3C").s().p("AglAsQgPgPAAgcQAAgcAPgQQAPgPAXAAQAWAAAPAPQAOAPAAAcIAAAFIhTAAQABASAJAKQAKAKANAAQAKABAIgGQAHgFAFgMIAUABQgEASgOAKQgMAJgUAAQgYAAgPgPgAgUgiQgKAJAAAPIA/AAQgCgPgGgGQgJgMgPAAQgNAAgIAJg");
	this.shape_3.setTransform(38.4,5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3D3F3C").s().p("AggAyQgLgJgDgSIATgDQABALAIAHQAHAFAMAAQAOAAAGgEQAGgGAAgIQAAgGgFgEQgEgDgQgEQgUgEgJgEQgIgDgEgIQgEgGAAgJQAAgIADgGQAEgGAGgEQAEgEAIgDQAIgBAJAAQAMAAAKADQAKAEAFAGQAFAIACAKIgTADQgBgJgGgFQgHgFgKAAQgNAAgGAEQgGAFAAAGQAAAEADACQACAEAFACIAQAFQAVAFAIAEQAIACAFAHQAEAGAAAKQAAAKgFAIQgGAJgLAFQgKAEgOAAQgVABgMgKg");
	this.shape_4.setTransform(26.8,5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3D3F3C").s().p("AgkAsQgPgPgBgcQABgcAPgQQAOgPAXAAQAWAAAPAPQAPAPAAAcIAAAFIhVAAQABASAKAKQAJAKAOAAQAKABAIgGQAIgFAEgMIAUABQgEASgNAKQgNAJgUAAQgYAAgOgPgAgVgiQgIAJgCAPIA/AAQgBgPgGgGQgJgMgPAAQgNAAgJAJg");
	this.shape_5.setTransform(15.2,5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3D3F3C").s().p("AgeA6IAAhxIARAAIAAARQAHgMAFgEQAFgDAHAAQAKAAAKAGIgHASQgHgEgHAAQgGAAgFADQgEAEgCAHQgEAKAAANIAAA6g");
	this.shape_6.setTransform(6.3,5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3D3F3C").s().p("AgxBQIAAicIASAAIAAAOQAGgIAIgFQAIgEAKAAQAPAAALAHQALAIAGAOQAGAOgBAQQAAARgFANQgHAOgMAIQgMAHgNAAQgJAAgIgEQgHgEgFgHIAAA4gAgWg1QgJAMAAAWQAAAVAJALQAJAKANAAQAMAAAIgKQAKgLAAgWQAAgWgJgLQgJgLgMAAQgMAAgKALg");
	this.shape_7.setTransform(-4.1,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3D3F3C").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_8.setTransform(-19.5,3.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3D3F3C").s().p("AgeA6IAAhxIARAAIAAARQAHgMAFgEQAFgDAHAAQAKAAAKAGIgHASQgHgEgHAAQgHAAgEADQgEAEgDAHQgDAKAAANIAAA6g");
	this.shape_9.setTransform(-25.5,5.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3D3F3C").s().p("AgqAyQgKgJABgOQAAgJADgGQAEgIAGgDQAHgDAHgDIASgCQAWgEALgDIAAgGQAAgMgGgEQgHgHgOABQgNgBgHAFQgGAFgEAMIgSgCQADgMAFgIQAGgHALgFQALgDAOAAQAPAAAJADQAJADAEAFQAEAGADAIIABASIAAAYQAAAbAAAHQACAIAEAGIgVAAQgDgGAAgIQgLAJgKAEQgJADgMAAQgSABgLgKgAgEAHQgLACgGACQgFACgCAEQgDAFAAAEQAAAIAGAGQAGAEALAAQAKAAAJgEQAJgFADgJQAEgHAAgMIAAgHQgLAEgUADg");
	this.shape_10.setTransform(-36.2,5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3D3F3C").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_11.setTransform(-45.2,3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3D3F3C").s().p("AggAyQgLgJgDgSIATgDQABALAIAHQAHAFAMAAQAOAAAGgEQAGgGAAgIQAAgGgFgEQgEgDgQgEQgUgEgJgEQgIgDgEgIQgEgGAAgJQAAgIADgGQAEgGAGgEQAEgEAIgDQAIgBAJAAQAMAAAKADQAKAEAFAGQAFAIACAKIgTADQgBgJgGgFQgHgFgKAAQgNAAgGAEQgGAFAAAGQAAAEADACQACAEAFACIAQAFQAVAFAIAEQAIACAFAHQAEAGAAAKQAAAKgFAIQgGAJgLAFQgKAEgOAAQgVABgMgKg");
	this.shape_12.setTransform(-54,5.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3D3F3C").s().p("AAYBPIglg7IgOAOIAAAtIgTAAIAAidIATAAIAABZIAtgtIAZAAIgrApIAvBIg");
	this.shape_13.setTransform(-64.2,3.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3D3F3C").s().p("AgiAsQgPgPAAgcQAAgSAGgOQAHgOAMgGQANgIANABQATAAAMAJQAMAJADASIgTACQgDgLgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJAKQAJAKANAAQALAAAIgGQAIgIACgOIATACQgDAVgNALQgNALgTgBQgWABgOgQg");
	this.shape_14.setTransform(-75.6,5.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3D3F3C").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
	this.shape_15.setTransform(-83.9,3.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3D3F3C").s().p("AAmBPIg4hPIgZAYIAAA3IgVAAIAAidIAVAAIAABOIBNhOIAcAAIhBBAIBEBdg");
	this.shape_16.setTransform(-92.8,3.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-28,243,56);


(lib.Leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-18,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Leg, new cjs.Rectangle(-18,-29,37,58), null);


(lib.bootMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-19,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bootMc, new cjs.Rectangle(-19,-26,37,52), null);


(lib.boot2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-19,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boot2, new cjs.Rectangle(-19,-26,37,52), null);


(lib.dirt21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#331A00").s().p("AgTAHIAAgDIABgCIAEgCIgFgDIABgBIAIADQABgDADgCQADgCAEACIgBACIAFABIAEABIALACIAAABIgBABQgHABgEgCIgDgBIgBgBIgEAAIADABIAAADIgIAAQgCAAgDACIgEADIgFgBgAgPAEIAAABIAGgDIAAAAIgCAAQgCAAgCACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dirt21, new cjs.Rectangle(-2,-0.7,4,1.6), null);


(lib.desertWarriors = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4hFPIAAqdMAxDAAAIAAKdg");
	mask.setTransform(163,18.5);

	// Layer 1
	this.instance = new lib.Bitmap1_1();
	this.instance.parent = this;
	this.instance.setTransform(31,-11);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.desertWarriors, new cjs.Rectangle(31,-11,289,44), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,728,90), null);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tank();
	this.instance.parent = this;
	this.instance.setTransform(-95.5,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-34.5,191,69);


(lib.tank_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(95.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tank_1, new cjs.Rectangle(0,0,191,69), null);


(lib.boot3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boot2();
	this.instance.parent = this;
	this.instance.setTransform(18.7,25.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgthcIACgNIAFAeIABAGQACAGACAAQACgRgBgVQgBgNAAgFQgBgDAAgEQAAgMAFgMQAKgXAWgEQAGADAGAGIAFAIIAXAMQgJAMgFAJQgKAPAAAKQAAAHABgBQAAAAAAgCIABgCQACABAGAFQAHAGAFAAQAdggAFgFQAHgEACAIIABgGIAUAHQAYAIAUAFIAAARQgHAQgUAoQgFALgEAJAAvAfQgFAPAAAIQAAARAGAOIgBACIgMABIAIgHQgJABgMAJIgGAEQgBAHAGAMIgHgBQAJAUAAACIgDgCQADAEABAEQACACAIAEIgNgDIACADQggAMgHAKIABAEQABgBAMgFIAEAAIgSALIgBAAIgjgIIgGgDQgwgWgBAAQgFAAgGgEQgIgFgFgBIgBAAQgHAAgJAEQABgPADgRQANgeAGgKQANgVAIgPIAEgIABlAAQADgCAEAAQgDAIgCAFQgIARgEACQgXAdgBABIgSASABzhGIgFAAAhhAsQADAHAKAUQAEAIAAgKQAAgCgNgoIACgGQADgFACgEAhNAqIALgHAhHBGIAAgJQgGAGgKAfQgMAigBABQAOgVANgig");
	this.shape.setTransform(19.4,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhPBrQAKgfAGgGIAAAJIgCAIQgNAigOAVIANgjgAAlhVIgIgGIgBACIAAACIgBgGQAAgKAKgPIANgVQAIAFABgHIgBAHQAXAKAAADQABgDACgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQADABABACQACADgBADIgBAGQgCgIgHAEQgGAFgcAgQgFAAgHgGg");
	this.shape_1.setTransform(18.6,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.boot3, new cjs.Rectangle(-0.3,-0.2,37,52), null);


// stage content:
(lib.KickStart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{play:1,stop:133});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop("stop");
	}
	this.frame_133 = function() {
		this.stop();	
		this.onClickPlay.addEventListener("click", playAnimation.bind(this));
		
		function playAnimation(){
			this.gotoAndPlay("play");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(133).call(this.frame_133).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape.setTransform(711.6,79);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQACgCAEAAQAGAAAFADIgFAPQgEgDgEAAQgDAAgCACQgCACgBAFQgBAFgBAPIAAATg");
	this.shape_1.setTransform(707.8,80);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXAbQgFgFAAgIQAAgFADgFQACgDAEgBQAFgDAJgCQAKgCAFgBIAAgCQAAgFgDgCQgCgCgGAAQgEAAgCACQgDACgCAEIgOgDQACgJAGgEQAGgFAMAAQAKAAAGADQAFACACAEQACAFAAAKIAAASIACAMIACAJIgQAAIgBgFIgBgCQgFAEgEACQgEACgFABQgKAAgGgGgAAAADQgHACgBACQgEACAAADQAAAEADADQACACAEAAQAEAAAEgDQADgCABgEIABgIIAAgDIgKACg");
	this.shape_2.setTransform(701.7,80.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_3.setTransform(696.3,79);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAbQgHgFgCgJIAQgDQABAFAEADQADADAFgBQAGABADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgGgBQgSgFgGgEQgHgDAAgKQAAgHAGgGQAHgGANAAQAMAAAHAFQAFADADAJIgPACQgBgDgEgCQgDgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIACAEIAOAEQANADAGAEQAFAEAAAHQAAAJgHAHQgIAFgNABQgMgBgIgFg");
	this.shape_4.setTransform(690.9,80.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAcQgHgDgEgIQgEgHAAgKQAAgIAEgIQAEgIAHgDQAIgFAIAAQAOABAJAIQAJAKAAANQAAAOgJAJQgJAKgOAAQgIgBgIgEgAgKgOQgFAGABAIQgBAJAFAFQAEAFAGAAQAGAAAFgFQAEgFAAgJQAAgIgEgGQgFgEgGAAQgGAAgEAEg");
	this.shape_5.setTransform(680.7,80.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_6.setTransform(675,79);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AALArIgPgcIgHAIIAAAUIgRAAIAAhVIARAAIAAAtIASgVIAUAAIgVAVIAXAog");
	this.shape_7.setTransform(666.6,78.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJANAAQALABAHAFQAHAEADAKIgRADQAAgFgDgCQgDgDgFABQgFAAgEADQgDAFAAAKQAAAKADAFQAEAEAFAAQAFAAADgCQADgDABgHIAQADQgCALgHAGQgHAFgMABQgNAAgIgJg");
	this.shape_8.setTransform(659.7,80.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_9.setTransform(654.6,78.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_10.setTransform(651.3,78.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaAhQgLgMABgUQAAgUALgNQALgLARAAQAPAAAKAJQAHAGACAKIgRAEQgBgHgFgDQgFgFgHAAQgIABgHAGQgFAHAAAPQAAAQAFAGQAGAIAIAAQAIgBAEgEQAGgEABgJIARAFQgEAOgIAHQgJAGgOABQgRAAgLgMg");
	this.shape_11.setTransform(645.3,78.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(134));

	// playOverlay
	this.onClickPlay = new lib.Symbol1();
	this.onClickPlay.parent = this;
	this.onClickPlay.setTransform(364,45.5,1,1,0,0,0,364,45.5);
	this.onClickPlay.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.onClickPlay).wait(133).to({alpha:0.012},0).wait(1));

	// boot
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,2,0,3).p("ADOi1QABgRgBABIgHgZIhSAVIiABIIhWAYQAKAQhBASIgfAKQggANgOAgQgvApASAWQAwA7A4gDQAdAKAOAgQACAbBXAsQAvANATgHIALgbQACgJAAgHIgZgUQhAg0AkgnQASgfAmgUQAwAJAogZQAogZA/gSIAMgNIgJgNIgfhAIgHgQg");
	this.shape_12.setTransform(244.8,36.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVDYQhYgtgBgbQgOgfgegKQg3ACgwg6QgTgXAvgoQAPggAfgNIAggKQBAgSgKgRIBWgXICBhJIBRgVIAIAZIgBARIALAgIAGARIAgA/IAIAOIgLAMQg/ASgoAZQgoAagwgKQgnAUgSAfQgjAoBAAzIAZAUQAAAIgCAIIgLAbQgHADgLAAQgTAAgdgIg");
	this.shape_13.setTransform(244.7,36.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,2,0,3).p("ADCi/QAAgRgBAAIgJgYIhQAaIh7BSIhUAdQAOARg/AUIggALQgeAOgOAhQgtAqATAWQAzA5AzgHQAdAKAOAfQACAbBXAtQAvAMAUgHIALgbQABgJABgHIgZgUQhBgzAkgoQARgfAogfQAxAGAmgbQAmgdA9gWIALgOIgJgMQglg+AAABIgHgQg");
	this.shape_14.setTransform(246.3,37.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTDiQhYgsgBgbQgOgggegKQgzAHgzg5QgTgVAtgrQAOggAfgPIAfgLQBAgUgOgQIBUgeIB7hRIBQgbIAJAZIABAQIAMAgIAIAQIAkA9IAJANIgKANQg+AXgmAcQgmAbgxgGQgnAfgSAfQgkAoBBAzIAZAUIgCAQIgLAbQgHADgMAAQgSAAgdgIg");
	this.shape_15.setTransform(246.3,37.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,2,0,3).p("AC1jJIgBgRIgLgYIhOAhIh1BaIhSAjQASAQg+AWIgfAMQgfAPgMAhQgrAtATAUQA2A3AugKQAeAJAOAgQACAbBXAtQAvAMAUgIIAKgbQACgIAAgIIgZgUQhBgzAkgnQASgfAngrQAxADAkgeQAkgfA8gbIAKgOIgLgMIgog6IgJgQg");
	this.shape_16.setTransform(248,38.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQDsQhYgsgBgbQgPgggdgJQgvAKg1g3QgUgVAsgtQAMggAegPIAfgMQA/gXgSgPIBSgkIB0haIBOggIALAYIACAQIAPAfIAJAPIAoA6IAKANIgJAOQg8AagkAfQgkAegxgCQgoAqgRAfQgkAoBBAzIAZAUQAAAHgCAJIgLAbQgHACgMAAQgTAAgcgHg");
	this.shape_17.setTransform(247.9,38.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,2,0,3).p("ACojTQgDgRAAAAIgNgWIhLAlIhuBiIhPApQAWAPg+AZIgeANQgeAQgLAhQgqAuAVAUQA3A1AqgOQAeAKAOAgQACAbBYAsQAuAMAUgIIALgbQABgJABgHIgagUQhBgzAkgoQARgfAng1QAxgBAiggQAigiA5gfIAJgOIgLgMIgsg3IgKgPg");
	this.shape_18.setTransform(249.7,39.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMD1QhYgsgCgbQgOgggegKQgqAOg3g1QgVgUAqguQALghAegQIAegNQA+gZgWgPIBPgpIBuhiIBLglIANAWIADARIARAdIAKAPIAsA3IALAMIgJAOQg5AfgiAiQgiAggxABQgnA1gRAfQgkAoBBAzIAaAUIgCAQIgLAbQgIADgLAAQgTAAgcgHg");
	this.shape_19.setTransform(249.6,39.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,2,0,3).p("ACajcIgEgRIgOgVIhIAqIhnBqIhMAvQAZANg8AbIgeAOQgdARgJAhQgoAwAVATQA5AzAmgRQAdAKAPAfQABAbBYAsQAvAMAUgIIAKgbQACgIAAgIIgZgTQhBgzAjgoQASgfAlhAQAxgFAfgiQAfgkA4gjIAHgQIgMgKIgwg0IgLgOg");
	this.shape_20.setTransform(251.5,40.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgID9QhYgsgCgbQgOgfgegKQgmARg4gzQgWgTAogwQAKghAdgRIAegOQA8gbgagNIBMgvIBnhqIBIgqIAPAVIAEARIATAcIALAOIAwA0IAMAKIgIAQQg3AjggAkQgfAigwAFIg3BfQgkAoBBAzIAaATQAAAIgCAIIgLAbQgIADgMAAQgSAAgcgHg");
	this.shape_21.setTransform(251.4,40.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,2,0,3).p("ACLjlQgFgQAAAAIgQgVIhFAwIhfBxIhIA0QAdALg7AdIgdAPQgcASgIAiQgmAxAWASQA5AxAigTQAdAJAPAfQACAbBYAsQAuALAUgHIALgbQABgJAAgHIgZgUQhBgyAjgoQARggAkhLQAwgHAdglQAcgmA1gnIAHgQIgNgKIg0gwIgMgNg");
	this.shape_22.setTransform(253.4,41.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgDEFQhYgsgCgbQgPgfgdgJQgiATg5gxQgWgSAmgxQAIgiAcgSIAdgPQA7gdgdgLIBIg0IBfhxIBFgwIAQAVIAFAQIAVAbIAMANIA0AwIANAKIgHAQQg1AngcAmQgdAlgwAHQgkBLgRAgQgjAoBBAyIAZAUIgBAQIgLAbQgIADgMAAQgTAAgbgHg");
	this.shape_23.setTransform(253.3,41.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,2,0,3).p("AB9juQgGgQgBABIgRgUQhBA1AAAAQhXB3AAABIhFA4QAhAKg5AfIgcAPQgcATgHAiQgjAyAWASQA7AuAdgVQAdAJAPAfQACAbBXArQAwAMAUgIIAKgbQACgIAAgIIgagUQhBgxAjgpQARgfAghWQAwgKAagoQAZgoAygqIAGgRIgNgIIg3gtIgNgMg");
	this.shape_24.setTransform(255.2,42.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AACEMQhXgrgDgbQgOgggegJQgcAVg8guQgWgRAkgyQAHgiAbgTIAcgQQA6geghgKIBEg5IBXh3IBCg1IARATIAGAQIAXAZIANAMIA3AtIANAJIgFAQQgyArgaAnQgaAogvAKQggBWgSAgQgjAoBCAyIAZAUQAAAHgCAJIgKAbQgIACgMAAQgTAAgcgGg");
	this.shape_25.setTransform(255.2,42.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,2,0,3).p("ABuj1IgIgPIgSgSIg+A5IhOB9IhBA+QAlAHg4AgIgbARQgbAUgFAiQgiAzAXAQQA8AsAYgXQAdAJAPAfQACAbBXArQAwAMAUgIIAKgbQACgJAAgHIgagUQhBgxAjgpQARgfAchgQAvgOAXgqQAXgpAuguIAFgRIgOgIIg6goIgOgMQgZgXABAAg");
	this.shape_26.setTransform(257.2,43.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAIERQhYgrgBgbQgPgfgegJQgYAXg8gsQgWgQAhgzQAFgiAbgUIAcgRQA4ggglgHIBAg+IBOh9IA+g5IATASIAHAPIAZAXIANAMIA6AoIAOAIIgEARQgvAugXApQgXAqguAOQgdBggRAfQgjApBCAxIAZAUIgBAQIgLAbQgIADgNAAQgSAAgcgHg");
	this.shape_27.setTransform(257.1,43.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,2,0,3).p("ABVj/QgJgPAAABIgVgQIg3A/IhACGIg5BEQAqAEg1AiIgaATQgZAVgEAiQgeA0AYAPQA+AnAPgZQAeAJAPAfQADAbBXAqQAwALAUgIIAKgbQABgJAAgHIgZgUQhEgwAkgqQARgfAUhvQAtgTASgsQATgsApgzIADgQIgPgHIg+giQgPgKAAABg");
	this.shape_28.setTransform(258.7,45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAUEZQhYgqgCgbQgQgfgdgJQgPAZg/gnQgXgPAeg0QAEgiAYgVIAagTQA1gigpgEIA5hEIBAiGIA3g/IAUAQIAJAOIAbAVIAPAJIA+AiIAPAHIgCAQQgqAzgSAsQgSAsgtATQgVBvgQAfQgkAqBDAwIAaAUIgCAQIgKAbQgIADgOAAQgSAAgbgGg");
	this.shape_29.setTransform(258.6,45.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,2,0,3).p("AA8kIQgLgNAAABIgWgOIguBFIgyCMIgxBKQAugBgyAlIgZAUQgXAWgBAiQgbA1AYANQA/AiAIgZQAeAIAPAfQADAbBYAqQAwAKATgIIAKgcQACgIgBgIIgZgTQhEgwAjgpQARggALh9QAqgYANguQAOgtAjg3IABgRIgQgFIhBgbIgQgIg");
	this.shape_30.setTransform(260.2,46.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAhEfQhYgqgDgbQgPgfgegIQgIAZg/giQgYgNAbg1QABgiAXgWIAZgUQAyglguABIAxhKIAyiMIAuhFIAWAOIALAMIAdASIAQAIIBBAbIAQAFIgBARQgjA3gOAtQgNAugqAYQgLB9gRAgQgjApBEAwIAZATQABAIgCAIIgKAcQgIADgPAAQgRAAgbgFg");
	this.shape_31.setTransform(260.2,46.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,2,0,3).p("AAikOIgMgMIgWgLIgoBKIgiCQIgpBPQAygFguAnIgXAVQgWAXABAhQgXA1AYAMQBAAeAAgaQAdAJAQAeQADAbBZApQAwAJATgIIAKgbQABgJAAgHIgagTQhEgvAjgrQAQgfAAiKQAngdAIgvQAIguAeg7IgCgRIgPgDIhEgUIgRgGg");
	this.shape_32.setTransform(261.9,47.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAvEiQhZgpgDgbQgQgegdgJQAAAahAgeQgYgMAXg1QgBghAWgXIAXgVQAugngyAFIAphPIAiiQIAohKIAWALIAMAMIAfAOIARAGIBEAUIAPADIACARQgeA7gIAuQgIAvgnAdQAACKgQAfQgjArBEAvIAaATQAAAHgBAJIgKAbQgJAEgOAAQgSAAgagFg");
	this.shape_33.setTransform(261.9,47.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,2,0,3).p("AAIkTQgMgLAAABIgZgJIgfBOIgSCUIgfBSQA1gLgrAqIgVAWQgUAXADAgQgTA2AYAKQBAAZgIgZQAdAJARAeQADAbBZAnQAwAKATgJIAJgbQACgJgBgHIgagTQhFgvAjgqQAQgggNiVQAkgiADgvQADgvAXg+IgDgRIgQgBIhGgMIgRgEg");
	this.shape_34.setTransform(263.7,48.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AA+EiQhZgngDgbQgRgegdgJQAIAZhAgZQgYgKATg2QgDggAUgXIAVgWQArgqg1ALIAfhSIASiUIAfhOIAZAJIAMAKIAhALIARAEIBGAMIAQABIADARQgXA+gDAvQgDAvgkAiQANCVgQAgQgjAqBFAvIAaATQABAHgCAJIgJAbQgJAFgQAAQgRAAgZgGg");
	this.shape_35.setTransform(263.7,48.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,2,0,3).p("AgfkWQgOgJAAAAIgagFQgWBRAAAAIgBCUIgXBVQA4gRgnAsIgTAWQgSAYAEAgQgPA1AYAIQBAAVgQgXQAdAHARAfQAEAbBZAmQAwAJATgIIAJgcQABgJAAgHIgagSQhGgvAjgqQAPgggbigQAhglgDgvQgCgwAQg/IgFgRIgQABIhHgEIgSgDg");
	this.shape_36.setTransform(266.9,49.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AA/EhQhZgngEgbQgRgegdgIQAQAXhAgVQgYgIAPg1QgEgfASgYIATgXQAngrg4ARIAXhWIABiUIAWhRIAaAGIAOAJIAgAHIASACIBHAEIAQAAIAFAQQgQBAACAvQADAwghAkQAbCggPAgQgjArBGAuIAaASIgBARIgJAbQgJAFgRAAQgRAAgYgFg");
	this.shape_37.setTransform(266.9,49.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,2,0,3).p("AhMkWIgPgHIgZgDIgOBTIAPCTIgNBYQA7gXgkAsIgRAXQgQAYAGAfQgMA0AYAGQA/ASgYgVQAeAHARAeQAEAbBZAmQAxAIATgIIAIgcQACgJgBgHIgagSQhGguAigrQAPgggqipQAcgogHgvQgIguAIhCIgGgPIgQACIhGAEIgSgBg");
	this.shape_38.setTransform(270.7,50);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AA7EeQhZgmgEgbQgRgegegIQAYAVg/gRQgYgGAMg1QgGgeAQgYIARgXQAkgtg7AXIANhXIgPiUIAOhTIAZADIAPAIIAiADIASABIBGgEIAQgDIAGAQQgIBBAIAvQAHAvgcAoQAqCpgPAgQgiArBGAtIAaASQABAIgCAIIgIAcQgKAFgRAAQgRAAgYgEg");
	this.shape_39.setTransform(270.7,50);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,2,0,3).p("AhMkQQgPgIAAAAIgagDIgPBSIANCUIgPBXQA3gWgjAvIgRAYQgQAaAIAeQgLA3AZAFQBBAQgSgWQAeAFATAdQAGAbBcAeQAxAEATgKIAGgcQABgJgBgHIgcgQQhKgoAfgtQAMgigpidQAcgogGgvQgHgvAKhBIgHgPIgQACIhGACIgRAAg");
	this.shape_40.setTransform(271.1,49.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("ABFEbQhcgegGgaQgTgegegEQASAWhBgQQgZgGALg2QgIgfAQgZIARgYQAjgvg3AWIAPhXIgNiUIAPhTIAaAEIAPAHIAiAEIARABIBGgDIAQgCIAHAQQgKBBAHAvQAGAvgcAoQApCdgMAhQgfAuBKAnIAcAQQABAHgBAJIgGAcQgNAIgcAAIgbgCg");
	this.shape_41.setTransform(271.1,49.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,2,0,3).p("AhMkLQgPgIAAAAIgagEIgQBTIAKCUQgQBXAAAAQAzgVgjAxIgRAZQgPAbAJAfQgJA4AZAFQBFAOgOgXQAfACAVAcQAIAZBeAXQAxABASgMIAEgdQAAgIgCgIIgdgNQhMgiAagwQAKgigoiRQAdgogGgvQgGgvALhBIgGgPIgQACIhGABIgRgBg");
	this.shape_42.setTransform(271.5,48.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("ABPEYQhegXgIgaQgVgbgfgDQAOAXhFgNQgZgFAJg4QgJgfAPgbIARgZQAjgygzAVIAQhXIgKiUIAQhSIAaAEIAPAIIAiAEIARABIBGgBIAQgCIAGAQQgLBBAGAvQAGAvgdAnQAoCRgKAjQgaAwBMAhIAdAOIACAQIgEAcQgRAMguAAIgEAAg");
	this.shape_43.setTransform(271.5,48.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,2,0,3).p("AhMkFQgPgJAAABIgZgFIgSBSIAHCVIgRBWQAvgTgiAzIgQAaQgPAcAKAgQgHA5AaAEQBFAMgHgYQAfAAAXAZQAKAZBgAPQAxgDAQgNIACgdQgBgJgCgHIgegLQhOgcAWgxQAHgjgmiGQAegngGgvQgFgvAMhBIgGgPIgQABIhFAAIgSgBg");
	this.shape_44.setTransform(271.9,48);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgRDrQgXgagfABQAHAYhEgMQgbgEAHg6QgJgfAOgcIARgaQAhgzgvATIARhWIgHiVIAShSIAZAFIAQAHIAhAFIASACIBFAAIAQgCIAHAQQgMBBAEAvQAGAvgeAnQAnCFgIAkQgWAxBOAbIAeALIAEAQIgCAdQgRANgxAEQhggPgKgZg");
	this.shape_45.setTransform(271.9,48.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,2,0,3).p("AhLj/QgPgJAAABIgZgFIgTBSIAFCUIgTBWQArgRghA1IgQAbQgNAeAKAfQgFA7AbADQBHAKgDgbQAegCAaAYQALAYBiAHQAxgHAPgPIAAgdQgCgIgDgHIgfgJQhQgVASgzQAEgkgjh5QAegngEgvQgEgvANhBIgGgQIgQACIhGgBIgRgCg");
	this.shape_46.setTransform(272.2,47.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgLDuQgagXgeACQADAbhHgKQgbgEAFg7QgKgfANgdIAQgbQAhg2grASIAThWIgFiVIAThRIAZAEIAPAJIAiAFIARACIBGABIAQgBIAGAQQgNBAAEAwQAEAvgeAmQAjB6gEAjQgSAzBQAWIAfAIIAFAQIAAAdQgPAOgxAHQhigHgLgYg");
	this.shape_47.setTransform(272.2,47.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,2,0,3).p("AhLj4IgOgIIgZgGIgVBSIACCUIgUBWQAngQgfA4IgPAcQgOAeANAgQgEA7AbADQBJAIACgdQAegFAcAWQAMAXBjgBQAwgLAOgQIgDgdQgCgIgEgHIgfgGQhSgPAOg0QACgkghhuQAgglgEgwQgDgvAOhAIgGgQIgQABIhFgDIgSgCg");
	this.shape_48.setTransform(272.5,46.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgFDxQgbgVgeAEQgCAdhJgHQgcgDAEg8QgMggANgeIAPgcQAgg3goAQIAVhWIgCiVIAUhRIAaAFIAOAJIAiAGIARACIBGACIAQgBIAFAQQgOBBAEAvQADAvgfAmQAgBugBAjQgOA1BRAPIAgAGQADAGACAJIADAdQgOAPgwALIgLAAQhYAAgMgWg");
	this.shape_49.setTransform(272.5,46.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,2,0,3).p("AhKjyIgOgJIgZgFIgWBRIgBCUIgVBWQAjgOgeA5IgOAdQgMAfANAgQgCA9AbACQBLAFAHgfQAdgIAdAUQAPAWBigJQAvgPANgRIgGgcQgDgJgEgGIgfgEQhTgIAKg1QgCgkgchiQAgglgCgvQgDgwAPhAIgFgQIgQABIhGgEIgRgCg");
	this.shape_50.setTransform(272.8,45.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAADyQgdgTgdAHQgHAghLgGQgbgCACg9QgNgfAMgfIAOgdQAeg5gjANIAVhVIABiVIAWhRIAZAGIAOAJIAiAGIARADIBGAEIAQgBIAFAQQgPBAADAvQACAwggAlQAcBiACAjQgKA2BTAIIAfAEQAEAGADAIIAGAdQgNAQgvAPQgcADgWAAQg0AAgLgQg");
	this.shape_51.setTransform(272.8,45.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,2,0,3).p("AgNj9QgNgLAAABIgZgJQggBOABAAIgTCTIghBSQAogKgmAzIgTAaQgRAdAIAhQgLA7AbAGQBIARAHgdQAfgBAZAYQAKAZBiAJQAxgFAPgPIABgcQgCgJgCgHIgfgKQhQgXAUgzQAFgjgQhtQAlghADgvQADgwAXg9QgDgRAAAAIgQgBIhGgNIgRgEg");
	this.shape_52.setTransform(268.1,46.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgJDvQgZgYgfACQgHAchIgQQgbgGALg8QgIghARgcIATgaQAmgzgoAJIAhhSIATiTIAfhOIAZAJIANAKIAfALIARAFIBGAMIAQACIADAQQgXA+gDAvQgDAvglAhQAQBtgFAkQgUAzBQAXIAfAJIAEAQIgBAdQgPAOgxAGQhigKgKgZg");
	this.shape_53.setTransform(268.1,46.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,2,0,3).p("AAlkEQgLgMAAAAIgXgMIgpBKIgkCPIgrBOQAsgFguAsIgWAXQgVAZADAhQgUA4AZALQBDAbAIgbQAfAEAUAdQAGAbBdAbQAxAEASgLIAGgcQAAgJgBgHIgcgQQhKgmAdguQAMgigCh2QAogcAJgvQAJguAfg6IgBgRIgQgEIhDgVIgRgGg");
	this.shape_54.setTransform(264.3,46.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("ABHEdQhdgcgGgbQgUgcgfgEQgIAahDgbQgZgKAUg4QgDgiAVgZIAWgXQAugsgsAFIArhNIAkiQIAphJIAXAMIALALIAfAPIARAHIBDAVIAQADIABARQgfA6gJAvQgJAugoAcQACB3gMAiQgdAuBKAmIAcAPIABAQIgGAcQgNAIggAAIgWAAg");
	this.shape_55.setTransform(264.3,46.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,2,0,3).p("ABEkIQgKgOAAABIgWgPIgxBEIg2CKIg0BJQAvAAg0AjIgZATQgYAVgCAiQgdAzAXAOQA+AmAIgaQAdAKAOAgQABAbBWAtQAwANAUgIIALgaQACgJAAgHIgZgVQhBgzAlgoQASgfAPh9QAsgXAOgtQAPguAmg1IABgRIgPgGIhBgdIgPgIg");
	this.shape_56.setTransform(262.7,46.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AATEeQhWgtgBgbQgOgggdgKQgIAag+gmQgXgOAdgzQACgiAYgVIAZgTQA0gjgvAAIA0hJIA2iKIAxhEIAWAPIAKANIAdATIAPAIIBBAdIAPAGIgBARQgmA1gPAuQgOAtgsAXQgPB9gSAfQglAoBBAzIAZAVQAAAHgCAJIgLAaQgIADgLAAQgTAAgegIg");
	this.shape_57.setTransform(262.7,46.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,2,0,3).p("ABgkIIgIgOIgUgRIg6A9IhGCCIg8BBQAxAIg4AbIgbAOQgbAQgIAhQgjAuAUARQA2AuAIgZQAbAPAIAiQgFAbBOA9QArAVAVgEIAQgYQADgIACgHIgVgZQg1g/ArgfQAXgbAjiDQAugRAUgrQAVgrArgxIAEgRIgPgGIg8glIgPgLg");
	this.shape_58.setTransform(261.3,45.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgiEXQhOg9AFgbQgIgigbgPQgHAZg3guQgUgRAkguQAHghAbgQIAcgOQA3gbgwgIIA7hBIBGiCIA7g9IATARIAJAOIAaAXIAOAKIA9AlIAOAHIgEAQQgrAxgUAsQgUAqguARQgjCDgYAbQgrAgA2A+IAUAZQgBAHgEAJIgQAYIgGAAQgVAAglgSg");
	this.shape_59.setTransform(261.3,45.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,2,0,3).p("AB7kBIgHgQIgRgTIhBA1IhWB5IhEA5QAyAPg6ASIgdAKQgdANgMAcQgqAoARAUQAuA0AIgYQAXATABAjQgJAaBBBKQAnAeAVAAIAUgVQAFgHADgHIgPgcQgqhIAxgXQAbgWA5iDQAvgMAagoQAZgoAxgrIAGgQIgOgJIg3gsIgNgMg");
	this.shape_60.setTransform(260.2,44.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhZEIQhAhKAJgaQgBgjgYgTQgHAYgug0QgSgUAqgoQANgcAdgNIAcgKQA7gSgygPIBEg5IBVh5IBBg1IASATIAGAQIAYAZIAMAMIA4AsIANAJIgFAQQgyArgZAoQgZAogwAMQg4CDgbAWQgyAXAqBIIAQAcQgDAHgFAHIgUAVQgWAAgngeg");
	this.shape_61.setTransform(260.2,44.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,2,0,3).p("ACTj1QgFgRAAABIgPgWIhHAtIhkBtIhKAwQAyAXg8AJIgdAFQgeAHgRAcQgvAfAOAWQAlA6AHgZQATAYgFAiQgOAYAxBVQAhAkAVAFIAYgRQAGgGAEgGIgKgfQgbhOA0gOQAggQBOiBQAxgGAegkQAeglA2glIAIgPIgNgKIgxgzIgLgOg");
	this.shape_62.setTransform(259.4,43.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AiPDzQgxhVAOgXQAFgjgTgYQgHAaglg7QgOgWAvgfQARgbAegIIAdgFQA8gIgygXIBKgxIBkhtIBHgsIAPAVIAFAQIAUAcIALANIAxAzIANAKIgIAQQg2AkgeAlQgeAlgxAFQhOCBggARQg0ANAbBPIAKAeQgEAGgGAGIgYARQgVgFghgkg");
	this.shape_63.setTransform(259.3,43.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,2,0,3).p("ACojiIgCgRIgMgXIhNAkIhwBgIhQAnQAxAfg8gBIgdAAQgeADgVAYQgyAYAKAWQAaA/AIgbQAPAbgMAhQgRAVAfBcQAaAqAUAJIAagMQAHgFAFgFIgEggQgMhTA3gDQAigKBkh6QAxAAAjggQAighA7geIAJgOIgLgMIgrg4IgJgPg");
	this.shape_64.setTransform(258.9,41.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AjCDZQgghdARgUQAMghgOgbQgIAagbg+QgKgXAzgYQAUgYAegCIAegBQA7ABgxgfIBQgnIBxhfIBMgkIAMAXIADAQIAQAeIAKAPIAqA5IALALIgJAPQg6AdgjAhQgiAhgxgBQhlB7giAKQg2ADAMBSIAEAgQgFAFgIAFIgaAMQgTgIgagqg");
	this.shape_65.setTransform(258.8,41.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,2,0,3).p("AC6jJQAAgRgBABIgJgZIhQAaQh7BRAAAAIhUAdQAuAng6gKIgdgEQgdgCgYAUQg1AQAHAYQAQBAAJgcQAJAdgSAeQgVARAOBhQASAuARAMIAcgHQAIgDAGgFIACggQAEhTA2AHQAjgDB7hxQAxAHAmgbQAmgcA+gXIALgNIgJgNIgkg9IgIgQg");
	this.shape_66.setTransform(258.7,38.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AjxC5QgOhgAVgSQASgdgJgeQgJAdgQhBQgHgYA1gPQAYgUAdABIAdAFQA6AKgugoIBUgcIB7hRIBQgaIAJAYIABARIAMAgIAIAQIAkA9IAJANIgLANQg+AWgmAcQgmAbgxgGQh7BwgjAEQg2gHgEBTIgCAgQgGAEgIAEIgcAGQgRgMgSgug");
	this.shape_67.setTransform(258.6,38.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,2,0,3).p("ADZiqQACgRgBABIgGgaIhSAQIiFBBIhXASQAqAvg2gSIgcgIQgcgHgaAQQg2AHADAYQAFBBALgdQAEAegXAaQgYAMgFBiQAJAwAPAQIAdgCQAIgCAHgDIAIgfQAThRA0ARQAjAECRhiQAvANApgXQAqgXBAgOIAMgMIgIgOIgbhBIgGgRg");
	this.shape_68.setTransform(257.3,35.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AkKCWQAFhjAXgMQAYgagEgeQgLAdgGhAQgCgZA1gGQAbgQAcAGIAbAIQA3ATgqgvIBXgTICEhAIBTgQIAGAZIgBARIAIAhIAFARIAcBBIAIAOIgMAMQhBAOgpAWQgpAXgwgMQiQBhgkgDQgzgRgUBRIgIAfQgGADgIACIgdABQgQgPgIgwg");
	this.shape_69.setTransform(257.2,35.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,2,0,3).p("AD4iIQAEgRAAAAIgDgZIhUAFIiMAwIhYAHQAkA3gygaIgZgNQgbgKgbALQg1gBgBAYQgFBAAOggQgDAfgbAUQgaAIgXBgQgBAxAMARIAdAFQAJgBAHgBIANgdQAjhNAvAbQAiAKCkhOQAuASArgSQAsgSBCgGQANgJAAAAIgFgPIgUhEIgDgRg");
	this.shape_70.setTransform(255.7,32.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AkNCvQgMgRABgyQAXhfAagIQAbgUADgfQgOAgAFhBQABgXA1ABQAbgMAbALIAZAMQAyAagkg2IBYgIICMgvIBUgGIADAaIgEARIAFAiIADARIAUBEIAFAPIgNAJQhCAGgsASQgrASgugSQikBOgigKQgvgbgjBNIgNAdIgQABgAEZgCIAAAAg");
	this.shape_71.setTransform(255.7,32.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,2,0,3).p("ADPi0QABgRgBAAIgIgYIhRAXIh+BMIhVAaQAvAxg0gQIgagIQgbgGgZAQQgzAIADAXQADAeAEgJQAEgCABAGQACAegYAZQgZAMgJBhQAGAxAOAQIAdAAQAJgCAHgCIAJgfQAXhQAzAUQAjAFCZhxQAwAIAngaQAngaA/gUIALgNIgJgNIghg/IgHgQg");
	this.shape_72.setTransform(256.8,36.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("Aj3DfQgPgQgGgxQAKhhAYgLQAZgagDgdQgBgHgDACQgEAKgEgeQgCgYAzgIQAYgPAcAFIAaAIQA0AQgwgwIBWgaIB+hNIBRgXIAIAYIAAARIALAhIAHAQIAiA+IAJANIgMANQg+AUgnAaQgnAagxgHQiYBwgkgFQgzgTgWBPIgKAfIgPAEg");
	this.shape_73.setTransform(256.8,36.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,2,0,3).p("ACgjdQgDgRgBABIgNgXIhKAoIhrBmQhOArAAABQA7Aog1gHIgbgCQgbgBgVATQgvAQAGAVQAJAeAAgOQACgEACAGQAGAegUAdQgXAOAFBiQANAwAQANIAdgEQAIgCAGgEIAFggQAMhSA1AMQAkAACGiQQAxgDAgghQAhgjA5ghIAIgPIgMgLIgug2IgKgOg");
	this.shape_74.setTransform(258.5,40.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("Aj1DIQgFhiAXgOQAUgcgGgfQgBgFgCADQgBAOgIgeQgHgUAwgRQAVgSAbAAIAaACQA1AIg6gpIBOgsIBrhmIBKgoIANAXIADAQIATAeIAKANIAuA2IALALIgIAPQg5AhggAjQghAigxACQiGCRgkAAQg0gNgMBSIgFAgIgPAHIgdADQgQgNgNgwg");
	this.shape_75.setTransform(258.5,40.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,2,0,3).p("ABvj/QgGgPgBAAIgRgTIhAA3IhTB6IhDA7QBDAegzADIgaACQgaAEgRAVQgqAXAKAUQANAbgEgPQAAgGABAGQALAcgQAfQgVASATBhQATAtASALIAcgIQAIgEAGgEIAAghQAAhTA2AFQAkgFBtitQAvgMAYgpQAZgpAwgsIAFgQQgNgJAAABIg5grIgNgMg");
	this.shape_76.setTransform(260.4,44.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AjRDrQgThhAVgSQAQgfgKgcQgCgGABAGQADAPgNgbQgKgUArgXQAQgVAagEIAagCQA0gDhDgeIBDg7IBSh6IBAg3IASATIAHAPIAYAZIANAMIA4ArIAOAIIgFAQQgxAsgYApQgZApgvAMQhtCtgjAFQg2gFAABTIgBAhQgGAEgHAEIgcAIQgSgLgUgtg");
	this.shape_77.setTransform(260.4,44.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,2,0,3).p("AitBeQAJAYgKAcQgSAVAgBdQAaAqAUAIIAagMQAHgFAGgFIgFggQgMhSA3gDQAigKBOjFQArgWAPgtQAQgtAmg1IABgRIgPgGIhAgeIgQgIIgcgTQgKgOAAAAQgVgPAAABIgyBDIg4CJIg1BIQBKARgxALIgYAGQgYAIgMAYQglAeANARQAIAKADAEQAHAIgKgPQACADABAEg");
	this.shape_78.setTransform(262.2,47.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AigEEQgghdASgVQAKgcgJgXQAHAIgKgQIADAIIgLgPQgNgRAlgeQAMgYAYgIIAYgGQAxgLhKgRIA1hIIA4iJIAyhDIAVAOIAKAOIAcATIAQAIIBAAeIAPAGIgBARQgmA1gQAtQgPAtgrAWQhODFgiAKQg3ADAMBSIAFAgIgNAKIgaAMQgUgIgagqg");
	this.shape_79.setTransform(262.2,47.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(1,2,0,3).p("AARkoQgMgMAAABIgXgKIgkBMIgZCSIgkBSQBOADgtASIgWAKQgVAMgIAZQgeAjAQAOIADADQARAZgGAiQgPAXAtBXQAfAmAVAGIAYgQQAHgGAEgGIgJgfQgXhPA0gLQAhgPAqjWQAmggAFgvQAFgvAag8IgCgRIgQgCIhFgQIgRgFg");
	this.shape_80.setTransform(264.3,50.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AhnETQgthXAPgXQAGgigRgZIgDgDQgQgOAegiQAIgZAVgMIAWgKQAtgThOgDIAkhSIAZiRIAkhNIAXAKIAMALIAgAMIARAGIBFAPIAQACIACARQgaA8gFAvQgFAvgmAgQgqDXghAOQg0ALAXBQIAJAeQgEAHgHAFIgYAQQgVgGgfgmg");
	this.shape_81.setTransform(264.3,50.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(1,2,0,3).p("AAMkoQgMgLAAABIgYgJIghBNIgUCTIgiBTQBIgFguAaIgWAPQgWAQgEAcQgbAqATANQAxAjgegdQAYAUABAjQgJAZBABLQAoAdAUABIAUgVQAFgHADgHIgQgcQgphIAxgXQAcgWAQjGQAlggADgwQAEgvAYg9IgDgRIgQgBIhFgOIgRgEg");
	this.shape_82.setTransform(264.7,50.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgqEfQhAhKAJgaQgBgigYgVQAeAdgxgjQgTgNAbgqQAEgbAWgRIAWgPQAugZhIAEIAihSIAUiUIAhhNIAYAJIAMALIAhALIARAFIBFANIAQABIADARQgYA+gEAuQgDAwglAhQgQDFgcAWQgxAXApBIIAQAcQgDAHgFAHIgUAVQgUgBgogdg");
	this.shape_83.setTransform(264.7,50.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(1,2,0,3).p("AAFkgIgMgKIgZgIIgeBOIgPCUIgfBSQA/gJgsAjIgWASQgUAVgBAeQgXAwAWAMQA6AegUgaQAbAOAJAiQgDAbBQA5QAtATAUgEIAPgZQADgIABgIIgVgXQg6g8ArgiQAWgcgFixQAkghACgwQACgvAWg+IgEgRIgQgBIhGgKIgRgFg");
	this.shape_84.setTransform(265.2,49.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AASEkQhQg5ADgbQgJgigbgNQAUAZg6geQgWgLAXgxQABgeAUgUIAWgTQAsgig/AJIAfhTIAPiTIAehPIAZAJIAMAKIAhAKIARAEIBGALIAQABIAEAQQgWA+gCAwQgCAvgkAiQAFCwgWAcQgrAiA6A8IAVAYQgBAHgDAIIgPAZIgIABQgVAAgkgQg");
	this.shape_85.setTransform(265.2,49.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(1,2,0,3).p("AgJkTQgOgKAAABIgZgIIgbBQIgKCUIgcBTQA2gNgqArIgUAXQgSAZAEAfQgRA2AYAIQBBAYgLgZQAeAHARAfQAEAaBaAlQAwAIATgJIAJgbQABgJgBgHIgagSQhGgtAhgrQAPghgTiXQAigjAAgvQABgwAUg/IgEgQIgQAAIhHgJIgRgDg");
	this.shape_86.setTransform(266.6,48.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("ABDEiQhaglgEgbQgRgegegHQALAYhBgXQgYgJARg2QgEgfASgZIAUgWQAqgsg2AOIAchUIAKiUIAbhPIAZAHIAOAKIAgAJIARAEIBHAIIAQAAIAEARQgUA/gBAvQAAAvgiAjQATCYgPAgQghArBGAtIAaASIAAAQIgJAcQgKAEgSAAQgRAAgWgDg");
	this.shape_87.setTransform(266.6,48.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(1,2,0,3).p("AgskDQgOgKAAABIgZgHIgZBQIgFCVIgZBUQAtgOglAyIgRAaQgQAcAIAhQgKA6AbAFQBGAPgBgbQAfAAAXAaQAKAZBgAOQAxgDARgNIABgdQgBgJgCgHIgegLQhOgbAWgyQAHgjgbh9QAhgkgBgvQgBgwARg/IgFgQIgQAAIhGgGIgRgDg");
	this.shape_88.setTransform(270,47.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgPDtQgXgagfABQABAahGgPQgbgFAKg6QgIggAQgdIARgZQAlgzgtAPIAZhVIAFiUIAZhQIAZAGIAOAJIAhAIIARADIBGAGIAQAAIAFAQQgRA/ABAwQABAvghAlQAbB8gHAjQgWAyBOAbIAeALIADAQIgBAdQgRANgxADQhggOgKgZg");
	this.shape_89.setTransform(270,47.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[]},1).wait(94));

	// peddel
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#999999").s().p("AitAcIAIgDQAEAJgEAEIgBABgAikAAQATgKgKAKIAEAIIgRABIgDAAQgJAAAQgJgACMgLIABgIIAMgMIAPgGQAHgBACADQAEACgDAIIgLALIgRAGIgEAAQgEAAgCgDgAiygQIAHgGQAGgCAMAGIgVAGg");
	this.shape_90.setTransform(246.7,47.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CCCCCC").s().p("Ai4AdIAAgCQgRggAJgZQAGgLALgHIAWgMQANAPARAoIgCAAQADAJgKAWQgJAPAJAPIABAAIAJgcQAGgOAAgOIBzgBQAJADAPgGQAuABBAgeIAIgBIACgBIAFgGIAlgXQANARgDAFQgFAKgfAUIgBgBQgCgFgIAFIgCABIgBABIgBAFQgmAQhAANIjHAqgAijAOIAGAKIABgBQAEgEgEgJgAibgOQgSAKAOgBIARgBIgEgIQAFgFgCAAQgCAAgKAFgACxg0IgOAGIgNAMIgBAIQAEAGAGgDIARgGIALgLQADgHgDgCQgCgDgEAAIgEAAgAiiglIgGAGIADAEIAWgFQgJgFgGAAIgEAAg");
	this.shape_91.setTransform(245.8,49.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#999999").s().p("AioAsIAHgEQAFAIgDAFIgBABgAiiAPQASgNgJAMIAFAHIgRADIgEAAQgGAAANgJgAixAAIAGgHQAHgDAMAGIgVAHgACMgYIAAgIIAMgMIANgIQAHgCADAEQAEABgDAIIgKAMIgQAHIgEACQgDAAgDgEg");
	this.shape_92.setTransform(246.7,49);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CCCCCC").s().p("AixAvIAAgCQgVggAHgZQAFgLAKgHIAWgOQANANAVAlIgCAAQADAKgHAXQgHAQAKAOIAAgBIAHgcQAFgOgBgPIBxgLQAKACAPgHQAtgDA+gjIAIgCIACgCIAEgGIAigZQAOAPgBAFQgFAKgcAXIgCgBQgCgFgHAGIgCABIgCACIAAAEQglAUg+ATIjDA7gAieAdIAHAKIABgBQADgEgEgIgAiYABQgRAMANgDIARgDIgEgHQAEgFgCAAQgCAAgJAGgAihgVIgGAHIAEADIAUgHQgIgEgFAAIgFABgACvhDIgOAIIgLANIgBAIQAFAFAGgDIAQgHIAKgNQACgHgDgCQgCgCgEAAIgEAAg");
	this.shape_93.setTransform(245.7,50.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#999999").s().p("AihA7IAHgFQAFAJgDAEIAAABgAidAdQAQgOgHANIAFAHIgRAEIgEABQgFAAAMgLgAiuAQIAGgIQAGgDANAEIgUAJgACMgkIgBgIIAKgNIAOgJQAGgDADADQAEACgBAIIgJAMIgQAJIgFACQgDAAgCgDg");
	this.shape_94.setTransform(246.7,50.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CCCCCC").s().p("AiqBAIAAgCQgYgdAFgbQADgLALgIIATgQQAPAMAYAjIgBABQAEAJgGAYQgFAQALANIAAAAIAEgeQAEgOgCgPIBvgVQALACAOgJQAsgHA7gpIAHgCIACgCIAEgGIAggdQAPANgBAGQgDALgbAZIgBgBQgDgEgHAGIgCABIgBACIAAAEQgiAZg9AXIi9BMgAiZAtIAJAJIAAgBQADgEgFgJgAiVAPQgQAOANgEIARgEIgFgHQADgGgBAAQgCAAgJAHgAiggFIgGAHIAFACIAUgIQgIgCgFAAIgGABgACrhQIgOAJIgKANIABAIQAEAFAGgEIAQgJIAJgMQABgIgEgCQAAAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgFABg");
	this.shape_95.setTransform(245.9,51.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CCCCCC").s().p("AihBRIAAgCQgagbADgbQACgMAJgJIASgRQAQALAbAgIgBABQAFAJgEAZQgEAQANAMIAAgBIABgdQADgQgEgNIBtggQAKABAOgJQAsgLA2gvIAIgDIABgBIADgHIAeggQAQANgBAFQgCALgYAcIgCgBQgDgEgGAHIgCABIgBACIAAAEQggAbg6AdIi1BdgAiRA8IAJAJIABgBQACgFgGgIgAiQAfQgPAPANgGIAQgFIgGgHQADgGgBAAQgCAAgIAJgAidAKIgFAIIAEADIAUgLIgLgCQgFAAgDACgAClheIgMALIgJAOIABAIQAGAEAFgEIAPgKIAHgOQABgIgEgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgGABg");
	this.shape_96.setTransform(246.1,52.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#999999").s().p("AiZBKIAGgGQAGAIgCAGIgBABgAiYAtQAOgRgGAOIAGAHIgQAFIgFABQgEAAALgKgAiqAgIAFgIQAFgDAOACIgUALgACJgwIgBgIIAJgNIAMgLQAHgDADADQAEABgBAIIgHANIgPALQgCACgDAAQgDAAgDgDg");
	this.shape_97.setTransform(246.9,51.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CCCCCC").s().p("AiWBhIgBgCQgcgZAAgbQACgNAIgIIAQgVQARAKAeAgIgBAAQAGAJgCAZQgDAQAOALIAAgBIgBgdQABgQgFgNIBqgpQALAAAMgLQArgPAygzIAHgDIABgDIADgGIAagiQASAKgBAGQgBALgWAdIgBAAQgEgEgFAIIgCABIgBACIABAEQgeAeg3AiIisBtgAiIBLIAJAHIABgBQADgEgIgIgAiKAtQgOARANgHIAQgGIgHgGQADgHgCAAQgBAAgIAJgAiZAaIgEAIIAFADIASgNIgIgBQgHAAgEADgACfhqIgLALIgIAPIACAIQAGAEAEgFIAOgLIAHgPQAAgHgEgBIgDgBQgDAAgEACg");
	this.shape_98.setTransform(246.4,53.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#999999").s().p("AiQBYIAGgGQAHAIgCAFIgBABgAiSA7QAOgRgFAOIAGAGIgPAHIgFACQgFAAAKgMgAikAwIAEgIQAFgFANACIgSANgACGg7IgBgIIAHgPIAMgLQAGgEADADQAEABAAAIIgGAOIgOAMQgDACgCAAQgDAAgDgCg");
	this.shape_99.setTransform(247.1,52.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#999999").s().p("AiFBmIAEgGQAIAHgBAEIgBACgAiLBJQANgSgEAOIAHAFIgPAJIgFACQgDAAAHgMgAidBAIACgJQAGgEANAAIgRAOgACChFIgCgIIAGgQIALgMQAGgEADACQAEABAAAIIgEAOIgOANQgCADgDAAIgFgBg");
	this.shape_100.setTransform(247.5,53.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#CCCCCC").s().p("AiKBwIgBgCQgegWgCgbQgBgNAIgJIAPgWQARAIAhAcIgBABQAHAJAAAYQgBARAOAJIABAAIgEgdQgBgPgGgOIBmgyQALgBALgMQApgTAtg3IAHgEIABgCIACgHIAXgkQATAJAAAFQAAALgTAfIgCAAQgEgDgFAHIgBADIgBACIABADQgaAhg0AmIiiB8gAh+BZIAKAGIABgBQABgFgHgGgAiDA7QgLASALgIIAPgIIgHgFQACgHgBAAQgCAAgHAKgAiTAqIgDAIIAEACIARgOIgCAAQgMAAgEAEgACYh2IgLAMIgGAQIADAHQAFAEAFgFIANgNIAFgOQgBgJgEAAIgCgBQgDAAgEADg");
	this.shape_101.setTransform(246.8,54.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#999999").s().p("Ah6BzIAEgHQAIAHgBAEIAAACgAiCBWQALgTgDAPIAIAFIgOAJIgFADQgDAAAGgNgAiWBPIADgJQAEgFAOAAIgQAPgAB9hPIgDgIIAFgQIAJgNQAGgFADACQAEAAACAIIgEAPIgMAOQgCADgEAAIgEAAg");
	this.shape_102.setTransform(248,54.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#CCCCCC").s().p("Ah8B+QgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQghgTgEgbQgBgNAGgKIANgXQASAHAjAZIgBABQAHAIAEAYQAAARAPAIIAAgBIgGgcQgCgQgHgMIBgg8QALgCAKgMQAogWAng8IAHgFIABgCIABgHIAUgmQATAIABAFQABALgRAhIgBAAQgFgDgEAIIgBACIAAACIABAEQgYAjgwArIiVCJgAhzBnIALAFIABgBQABgFgIgGgAh6BKQgKASALgIIAOgKIgHgFQABgGgCAAQgCAAgFALgAiMA6IgCAJIAFABIAPgQQgNAAgFAGgACPiBIgJANIgFARIAEAHQAGADAEgFIALgOIAEgPQgBgIgEAAIgDgBQgDAAgEADg");
	this.shape_103.setTransform(247.2,55.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#999999").s().p("AimAxIAHgEQAFAIgDAFIgBABgAihAUQASgOgJANIAFAHIgQADIgFABQgGAAANgKgAiwAFIAGgGQAGgDANAEIgVAIgACMgcIAAgIIALgNIANgIQAHgCADADQAEACgCAIIgKAMIgQAIIgEABQgEAAgCgDg");
	this.shape_104.setTransform(246.7,49.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#CCCCCC").s().p("AivA1IAAgCQgWggAHgYQAEgMAKgIIAVgOQAOANAWAkIgCABQAEAKgHAXQgHAQALANIAAgBIAGgdQAEgOgBgOIBwgPQAKADAPgIQAugEA8gmIAIgCIACgCIAEgGIAigaQAOAPgBAEQgEALgdAYIgBgBQgDgFgHAGIgBABIgCACIAAAEQgkAWg+AUIjABBgAidAjIAIAJIABgBQADgEgFgIgAiYAGQgQANAOgEIAQgDIgFgHQAEgGgCAAQgCAAgJAHgAihgQIgGAHIAEADIAVgHQgIgEgGAAIgFABgACthIIgNAJIgLANIAAAIQAEAEAGgCIAQgIIAKgNQACgHgEgCQgCgCgDAAIgFAAg");
	this.shape_105.setTransform(245.8,50.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#999999").s().p("ACGAwIADgHIAQgIIAPgCQAIACABADQACADgEAHIgOAHIgSABIgCAAQgFAAgCgGgAixgEIAJgBQABAJgFACIgBABgAimgVQgOgDAUgFQAVgFgMAIIABAJgAimgsIgCgFIAIgEQAHAAAJAKg");
	this.shape_106.setTransform(247.3,42);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CCCCCC").s().p("AAaBDIjKgTIgPgqIAAgCQgHgkARgUQAIgKANgCIAZgFQAHARAFArIgBABQgBAIgQATQgNAMAFARIAAgBIARgYQAKgLAFgOIBtAgQAIAHARgCQArAPBGgLIAIABIADAAIAGgEIAqgLQAHATgEAFQgHAHgkALIgBgBQAAgGgJADIgCAAIgCABIgCADQgVAEgbAAQgaAAghgEgACiAkIgPAHIgDAHQABAIAHgBIASgBIAOgIQAFgGgDgDQAAgEgIgBgAingCIADAMIABgBQAGgCgCgKgAiXgaQgUAEAOADIARAFIgCgJQAHgFgEAAIgMACgAifguIADAFIAWAAQgJgJgHAAg");
	this.shape_107.setTransform(246.3,41.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#999999").s().p("AB0BrQgGgCABgGIAGgGIARAAIAPAEQAGAFgBADQACAFgIADIgPABgAiag/IACgMIAIACQgDAKgFAAgAiIhXQgLgIAUAEQAWAEgPACIgCAIgAh+hsIAAgFIAJAAQAHADAEAMg");
	this.shape_108.setTransform(249.5,37.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#CCCCCC").s().p("AB3B6IAAgBQABgGgJgBIgCAAIgCAAIgDACQgpgMg5gfIixhjIAEgtIABgBQAJgkAXgNQAMgFAMADIAZAFQAAATgNApIgCAAQgFAJgWAKQgQAGgDARIABAAIAZgPQAOgGAKgMIBXBKQAFAJAPAFQAhAfBFATIAHAFIACAAIAIgBIAqAHQgBAVgFACQgFACgKAAQgMAAgUgDgAB/BkIgGAFQgBAGAGADIARAHIAPgCQAIgDgCgEQABgEgGgEIgPgFgAiQg5IACAAQAFAAADgJIgIgDgAh+hRIAOALIACgJQAPgCgWgEIgJgBQgHAAAHAFgAh0hqIAAAFIAUAKQgEgNgHgDg");
	this.shape_109.setTransform(248.5,36.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#999999").s().p("AB/BcQgGgDAAgGIAFgGIAQgDIAQADQAHACAAAFQABAEgGAEIgPADgAikgoIABgMIAIABQgCAKgFABgAiVhCQgNgGAVABQAWAAgOAEIgBAJgAiOhYIgBgFIAJgCQAHACAGAMg");
	this.shape_110.setTransform(248.6,38.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CCCCCC").s().p("ACDBpQAAgGgJAAIgCAAIgCABIgDACQgqgFg9gYIi9hKIgDgsIABgBQAEgmAVgPQALgHANABIAZACQADATgIAqIgBAAQgDAKgVANQgPAIgBAQIABAAIAXgRQANgJAIgMIBgA9QAHAJAPACQAmAZBGALIAIADIACAAIAHgCIArABQADAVgGADQgJAFglAAgACHBTIgFAGQAAAGAHACIARAEIAQgDQAGgFgCgDQAAgFgGgCIgQgDgAiagiIABAAQAGgCABgJIgIgCgAiMg8IAPAIIABgJQAPgEgWgBIgDAAQgRAAALAGgAiGhXIABAFIAVAHQgGgMgHgCg");
	this.shape_111.setTransform(247.6,38.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#999999").s().p("ABxBvQgGgBAAgIIAHgEIARAAIAPAFQAGAEgBAEQABAEgHAEIgQAAgAiWhFIACgMIAIACQgDAKgGAAgAiDhdQgLgIAUAFQAVAEgOACIgDAIgAh4hxIgBgFIAKAAQAGACAEAOg");
	this.shape_112.setTransform(249.8,36.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#CCCCCC").s().p("AB0B+IAAgBQABgFgJgCIgCAAIgDAAIgDACQgngNg5giIishrIAFgsIACgBQAJgkAYgMQAMgEAMADIAZAGQgBATgPApIgBgBQgGAJgWAKQgQAFgDARIAAAAIAagPQAOgFAKgLIBUBNQAEAJAQAGQAgAgBEAWIAGAFIACABIAIgBIAqAIQgBAVgGACQgEACgHAAQgNAAgWgFgAB1BtQAAAHAGACIAQAIIAQgBQAHgDgBgEQABgEgGgEIgPgGIgRAAgAiMg/IABAAQAGAAADgJIgHgDgAh5hWIANALIADgJQAOgBgVgFIgKgBQgGAAAHAFgAhuhqIAUALQgFgOgGgCIgJAAg");
	this.shape_113.setTransform(248.8,36.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#999999").s().p("AB9BfQgHgBAAgHIAGgGIARgCIAPADQAHADAAAFQACADgHAFIgQACgAiigtIABgNIAIABQgCAKgFACgAiShHQgNgHAVABQAWACgOAEIgCAJgAiKhdIgBgEIAJgCQAGACAGAMg");
	this.shape_114.setTransform(248.8,38.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#CCCCCC").s().p("ACABvIgBgCQABgGgJAAIgCAAIgCABIgDACQgqgHg8gaIi6hPIgCgtIACgBQAEgmAWgOQALgHANACIAZACQACAUgJAqIgBgBQgEAKgVANQgPAHgBAQIAAAAIAYgRQANgIAIgLIBfA/QAGAJAPADQAmAbBFAMIAHAEIADABIAHgDIArADQACAVgGADQgIAEgbAAIgLAAgACFBXIgGAGQAAAHAHACIARAEIAQgCQAHgFgCgDQAAgFgHgDIgPgDgAiZgnIACAAQAFgCACgJIgIgCgAiJhBIAOAJIACgJQAOgDgWgCIgGgBQgMAAAKAGgAiChbIABAFIAUAHQgGgMgGgCg");
	this.shape_115.setTransform(247.9,37.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#999999").s().p("AB7BiQgGgCAAgGIAFgGIARgCIAQAEQAHADgBAEQACADgHAFIgQADgAifg+IAIABQgCALgFAAIgCAAgAiQhLQgMgHAVACQAWACgPAEIgBAJgAiIhhIAAgEIAJgBQAGACAGAMg");
	this.shape_116.setTransform(248.9,38.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#CCCCCC").s().p("AB+BxIgBgBQABgFgJgBIgCAAIgCAAIgDADQgpgJg8gbIi4hUIgBgsIACgCQAFglAWgOQAMgGAMABIAaADQABAUgKAqIgBgBQgEAKgWAMQgPAHgCARIABAAIAYgRQAOgIAIgLIBdBCQAGAJAPADQAlAcBFAOIAHAEIACAAIAIgCIArAEQABAUgGADQgHAEgXAAIgQgBgACDBaIgFAGQAAAGAGACIARAGIAQgDQAHgEgCgEQABgEgHgDIgQgEgAiXgrIACgBQAFAAACgKIgIgCgAiHhFIAPAKIABgJQAPgEgWgCIgIAAQgLAAAKAFgAh/hfIAAAFIAVAIQgGgMgGgCg");
	this.shape_117.setTransform(248,37.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#999999").s().p("AB/B5IgQgHQgGgDABgGIAGgFIARAAIAPAFQAGAFgBAEQABAEgHADgAiVhIIADgMIAIACQgEAKgFAAgAiBhfQgLgJAUAFQAVAFgPACIgCAIgAh2hzIAAgFIAJAAQAHADADANg");
	this.shape_118.setTransform(250,36.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#CCCCCC").s().p("AByCAIAAgBQACgGgKgBIgCgBIgCAAIgDACQgogOg3gjIirhtIAGgsIABgBQALgkAYgMQAMgEAMADIAZAHQgCATgPApIgBgBQgGAJgWAJQgQAFgFARIABAAIAagOQAPgGAKgKIBSBOQAFAKAPAGQAfAhBEAXIAGAFIACAAIAIAAIAqAJQgCAVgGACIgKABQgMAAgYgFgAB0BvQAAAGAFADIARAIIAPAAQAIgEgBgEQABgDgHgFIgOgFIgRgBgAiKhCIABAAQAGAAADgJIgHgDgAh3hZIANAMIADgJQAPgBgVgFIgLgCQgFAAAGAFgAhshxIAAAEIAUAMQgEgOgGgDg");
	this.shape_119.setTransform(248.9,36.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#CCCCCC").s().p("AByCAIAAgBQACgGgJgBIgDgBIgCAAIgDACQgogOg3gjIirhtIAGgsIABgBQALgkAYgMQAMgEAMADIAZAHQgCATgPApIgBgBQgGAJgWAJQgQAFgFARIABAAIAagOQAPgGAKgKIBSBOQAFAKAPAGQAfAhBEAXIAGAFIACAAIAIAAIAqAJQgCAVgGACIgKABQgMAAgYgFgAB0BvQAAAGAFADIARAIIAPAAQAIgEgBgEQABgDgHgFIgOgFIgRgBgAiKhCIABAAQAGAAADgJIgHgDgAh3hZIANAMIADgJQAPgBgVgFIgLgCQgFAAAGAFgAhshxIAAAEIAUAMQgEgOgGgDg");
	this.shape_120.setTransform(248.9,36.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#999999").s().p("AicBEIAGgFQAGAIgDAFIgBAAgAibAmQAQgQgHAOIAGAHIgQAFIgFABQgFAAALgLgAisAZIAFgHQAGgEANAEIgTAKgACKgqIAAgIIAJgPIANgJQAHgDADADQAEABgCAIIgIAOIgPAJQgDACgCAAQgDAAgDgCg");
	this.shape_121.setTransform(246.8,50.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#CCCCCC").s().p("AilBJIAAgCQgZgbAEgbQACgMAKgIIATgRQAPAMAaAhIgBABQAEAJgEAZQgFAQAMAMIAAAAIADgeQADgPgDgOIBugcQAKACAOgJQAtgKA3gsIAIgDIACgBIADgHIAegeQARAMgBAHQgDAKgaAbIgBgBQgDgEgHAGIgBACIgBACIAAADQghAbg8AaIi4BWgAiUA2IAIAIIABgBQADgEgGgIgAiTAYQgPAPAOgFIAQgFIgGgHQADgGgBAAQgCAAgJAIgAifAEIgFAHIAFADIATgKIgLgCQgFAAgDACgACohYIgNAJIgJAPIAAAIQAGAEAFgEIAPgJIAIgOQACgIgEgBQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAIgGABg");
	this.shape_122.setTransform(246,52.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#999999").s().p("AiABtIAFgGQAIAGgCAFIAAABgAiGBQQALgSgDAOIAHAFIgOAJIgFACQgDAAAHgMgAiaBIIADgJQAEgFAOAAIgQAPgAB/hLIgDgHIAGgQIAKgNQAGgEAEACQAEAAAAAIIgEAPIgMANQgDADgDAAIgFgBg");
	this.shape_123.setTransform(247.8,53.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#CCCCCC").s().p("AiDB4IgBgCQgggVgDgaQAAgMAGgMIAOgVQASAHAiAbIgBABQAHAIACAYQgBARAPAJIABgBIgGgdQgBgPgHgNIBkg3QAKgCALgMQAogVAqg5IAHgFIABgCIACgHIAVglQATAIABAFQAAAMgSAgIgBAAQgFgEgEAIIgBACIgBACIABAEQgZAigyApIibCDgAh5BgIALAGIABgBQABgFgIgGgAh/BDQgKASALgIIAPgJIgIgFQACgGgCAAQgBAAgHAKgAiQAyIgCAJIAEABIARgPQgOAAgFAFgACTh8IgKANIgFAQIADAHQAGADAEgFIAMgNIAFgPQgBgIgEAAIgDgBQgDAAgEADg");
	this.shape_124.setTransform(247,55.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#CCCCCC").s().p("AhYCeIgBgCQgkgMgKgYQgEgMAEgNIAHgYQAUADAnAQIAAACQAIAGAJAWQAEARAQAEIAAgBIgMgaQgFgOgKgLIBRhPQAKgEAGgQQAigdAahDIAFgGIABgCIgBgIIALgqQAVAEACAEQADALgJAkIgBAAQgGgCgBAJIgBACIAAACIACAEQgQAnglA1IhzCngAhUCEIAMAEIAAgCQAAgFgJgFgAhhBpQgGAVAJgLIAMgMIgJgDQAAgHgBAAQgCAAgDAMgAh2BeIAAAJIAFAAIALgSQgNADgDAGgAB1iWIgGAOIgBARIAEAHQAHABADgGIAIgQIAAgPQgDgIgEABIgBAAQgEAAgDAFg");
	this.shape_125.setTransform(248.9,57.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#999999").s().p("AhaCOIADgHQAJAEAAAFIAAACgAhoB0QAGgVABAPIAIADIgLAMQgEAEgBAAQgDAAAEgNgAh9BxIAAgJQADgGAOgDIgMASgABshmIgFgHIABgRIAGgOQAEgGAFABQAEgBADAIIgBAPIgIAQQgCAFgFAAIgCAAg");
	this.shape_126.setTransform(249.6,56.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#CCCCCC").s().p("AgpC2QgmgDgQgVQgHgKABgNIABgaQATgCArAFIgBACQAKADAOAUQAJAPAQAAIAAgBIgTgWQgJgNgMgHIA6hjQAIgGACgQQAZgmAIhHIADgHIAAgDIgCgHIgBgrQAVgCADAEQAGAKABAlIgBAAQgGgBABAJIgBADIABACIADADQgFApgWA+IhEC/IgrAFIgCgBgAgqCdIAMAAIAAgCQgBgEgKgCgAg+CHQAAAVAGgNIAIgPIgJgBQgCgFgBAAQgCAAAAANgAhVCBIACAJIAFgBIAGgVQgMAHgBAGgABUivQgEAAgDAGIgCAQIAEARIAGAFQAHAAABgHIADgSIgDgPQgEgFgDAAIgCABg");
	this.shape_127.setTransform(251.7,59.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#999999").s().p("AgvCnIABgIQAKACABAEIAAACgAhDCRQAAgWAFAOIAJABIgIAPQgCAFgCAAQgCAAAAgNgAhaCLQABgGAMgHIgGAVIgFABgABKh+IgEgRIACgQQADgGAEAAQAEgCAFAGIADAPIgDASQgBAHgHAAg");
	this.shape_128.setTransform(252.2,58.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#999999").s().p("AgDCqQAKgBACAEIAAACIgKADgAgaCiQgGgVAIAMIAJgBIgEAQQgBAGgBAAQgCAAgDgMgAgyCiQgBgGAKgKIgBAWIgEACgAAmiJIgIgPIgCgQQABgHAEgBQADgDAGAFIAIAOIABASQAAAGgGACg");
	this.shape_129.setTransform(255.4,59.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#CCCCCC").s().p("AgyC3QgJgHgDgOIgGgYQASgIArgGIAAABQAKABASAQQAMAMARgEIgBgBIgYgQQgMgKgNgFIAehuQAHgIgDgQQAOgrgLhHIABgIIAAgCIgFgGIgLgqQATgIAEAEQAIAIALAjIgBABQgGABADAIIAAADIABABIAEACQAGAqgEBBIgQDLIgqAPIgCAAQgKACgLAAQgVAAgPgLgAAACgIAAAIIAMgDIgBgCQgBgDgIAAIgCAAgAgYCYQAFAUADgNIADgRIgIABQgDgEgBAAQgCAAADANgAgwCYIAEAIIAFgCIAAgWQgJAKAAAGgAAki6QgFACAAAGIACAQIAHAQIAIACQAGgCgBgGIgBgSIgHgNQgEgEgDAAIgCABg");
	this.shape_130.setTransform(255.2,60.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CCCCCC").s().p("AgxCzQgmgEgPgWQgGgKABgNIACgaQATgCArAIIgBABQAKAEANAVQAIAOAQACIAAgBIgRgXQgJgOgMgHIA+hgQAJgGADgQQAaglALhHIAEgHIAAgCIgCgHIABgrQAVgCADAFQAGAJgBAmIgBAAQgGgBAAAJIAAACIAAACIADADQgGAqgZA8IhMC8IgsADIgCgBgAgxCaIAMABIAAgCQgBgFgKgCgAhECDQgBAVAGgMIAJgPIgJgBQgBgGgBAAQgCAAgBANgAhbB8IACAJIAFgBIAHgVQgMAHgCAGgABcisQgEAAgDAGIgDAQIADARIAGAFQAHAAABgHIAEgRIgDgPQgDgGgDAAIgCABg");
	this.shape_131.setTransform(251.1,58.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#999999").s().p("Ag3CkIABgJQAKADABAFIAAABgAhJCNQABgWADAOIAJABIgJAPQgCAFgBAAQgCAAABgNgAhhCGQACgGANgHIgIAVIgFABgABPh8IgCgRIACgPQADgHAFAAQADgBAFAGIADAPIgFASQgBAGgHABg");
	this.shape_132.setTransform(251.7,57.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CCCCCC").s().p("AhnCSIgBgBQgjgPgIgaQgDgMAFgMIAKgYQATAFAmAUIgBABQAIAGAHAYQACARAQAGIAAgBIgKgbQgEgPgJgMIBYhIQALgDAHgOQAlgbAfhAIAGgGIABgCIAAgIIAPgoQAUAFABAFQADALgMAjIgBAAQgGgDgCAJIgBACIgBACIACAEQgTAmgpAxIiCCcgAhhB5IAMAEIAAgBQABgFgJgFgAhsBeQgHATAKgKIAMgLIgIgEQABgGgBAAQgCAAgFAMgAiABQIgBAJIAFABIAOgSQgOACgEAGgACAiOIgHAOIgDAQIAEAHQAHADADgHIAKgPIABgPQgCgIgEABIgCgBQgDAAgEAFg");
	this.shape_133.setTransform(248.2,56.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#999999").s().p("AhnCEIADgHQAJAFgBAFIAAABgAhyBpQAIgUgCAOIAIAEIgMALQgDAEgCAAQgCAAAFgNgAiIBkIABgJQAFgGANgCIgNASgABzheIgDgHIACgQIAIgOQAEgGAEACQAFgBACAIIgCAPIgKAPQgCAFgEAAIgEgBg");
	this.shape_134.setTransform(248.9,55.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#CCCCCC").s().p("AiVBiIgBgDQgcgYAAgbQABgNAIgJIARgUQAQAKAfAfIgCABQAGAJgBAXQgDASAOAKIAAgBIgCgdQACgQgGgNIBqgqQALAAAMgKQArgQAygyIAHgEIABgCIADgHIAagiQARALAAAFQgBALgWAeIgBAAQgEgFgFAIIgCABIgBACIABAFQgeAeg3AiIirBtgAiIBLIAKAIIABgBQACgFgHgHgAiKAuQgNAQAMgHIAQgHIgHgFQADgGgCAAQgBAAgIAJgAiZAbIgDAIIAEACIASgMIgHgBQgIAAgEADgACfhqIgLAKIgIAQIACAIQAGADAEgEIAOgMIAHgOQAAgIgEAAIgEgCQgDAAgDADg");
	this.shape_135.setTransform(246.4,53.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#999999").s().p("AiPBZIAFgGQAHAHgCAFIgBABgAiSA7QAOgRgGAOIAHAGIgQAHIgFACQgDAAAJgMgAikAwIAEgIQAFgEAOACIgSAMgACGg7IgCgIIAIgPIALgLQAGgEAEADQAEAAAAAIIgHAOIgNAMQgDADgDAAQgCAAgDgCg");
	this.shape_136.setTransform(247.2,52.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#999999").s().p("AiqAlIAHgEQAEAKgDADIgBABgAijAIQATgLgKALIAEAHIgRACIgEABQgHAAAPgKgAixgHIAGgGQAGgDANAGIgWAHgACMgTIABgIIALgMIAPgHQAHgCACAEQAEACgDAHIgKAMIgRAHIgDABQgEAAgDgEg");
	this.shape_137.setTransform(246.7,48.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#CCCCCC").s().p("Ai0AnIAAgBQgTghAIgYQAEgLALgIIAWgNQAOAOASAmIgBABQADAKgJAWQgHAQAJAOIABgBIAHgcQAGgOgBgPIBygGQAKACAPgHQAtAAA/gjIAIgBIACgBIAFgGIAjgYQANAQgBAFQgFAKgeAVIgBgBQgDgFgHAGIgCABIgBACIgBADQglATg/ARIjFA0gAigAXIAHAKIABgBQADgDgEgKgAiZgFQgSAKAOgCIARgCIgFgGQAFgGgCAAQgCAAgJAGgAiigbIgGAGIAEAEIAVgHQgJgEgGAAIgEABgACwg8IgOAHIgMAMIgBAIQAFAFAGgDIAQgHIALgLQACgIgDgCQgCgCgEAAIgEABg");
	this.shape_138.setTransform(245.7,50);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#999999").s().p("ACMA/QgHAAgBgGIADgIIAQgGIAQgBQAHACABAEQADADgGAGIgOAHgAivgPIAIAAQAAAKgEABIgCABgAikgfQgNgEAUgEQAWgDgOAGIABAJgAiig2IgCgEIAIgFQAHAAAJALg");
	this.shape_139.setTransform(247.5,41.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#CCCCCC").s().p("AAXBGIjIggIgNgpIABgCQgFgmASgTQAJgJAMgCIAagEQAGASACAsIgBAAQgBAKgSARQgNAKADARIABAAIASgXQAMgLAEgMIBsAmQAIAHAQgBQAqARBHgFIAIACIACgBIAHgDIAqgJQAGAUgEAEQgIAIgkAIIgBgCQAAgFgJACIgCAAIgCABIgCADIgVABQgkAAgygIgACoBEIAOgHQAGgGgDgDQgBgEgHgCIgQABIgQAHIgDAHQABAHAHgBgAilgLIACAMIACgBQAEgBAAgKgAiTgiQgUAEANADIAQAFIgBgJQAJgFgGAAIgLACgAiag2IACAEIAWACQgJgKgHAAg");
	this.shape_140.setTransform(246.5,40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91},{t:this.shape_90}]}).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_120},{t:this.shape_118}]},1).to({state:[{t:this.shape_120},{t:this.shape_118}]},1).to({state:[{t:this.shape_120},{t:this.shape_118}]},1).to({state:[{t:this.shape_120},{t:this.shape_118}]},1).to({state:[{t:this.shape_120},{t:this.shape_118}]},1).to({state:[{t:this.shape_120},{t:this.shape_118}]},1).to({state:[{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_130},{t:this.shape_129}]},1).to({state:[{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_138},{t:this.shape_137}]},1).to({state:[{t:this.shape_140},{t:this.shape_139}]},1).to({state:[]},1).wait(94));

	// legFront
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("Ai1DrQgDgHACgKIADgLQABgNgNgBQgNgBAAgNQABgMALgDQALgCAAgNQAAgLgIgDIgKgDQgFgDAAgKQAAgPAUgFIAAgEQABgFAMgSIAdgjIAUgdQAVghAAgYQAAgLgWgWQgegggIgMIgNgOIABgMIgBgJQAAgRAGgFIATgIIAFAAQAZgUAvgCIABgNQAJgEASABQABgcAhACQAcAAArAYQArAXAcAhQAhAkAAAhIAAABIANASQAOAXAHAWQAGASAAARQAAAlhlBcQhlBdhAATQgbAXgVAAQg+AAgKgWg");
	this.shape_141.setTransform(283.9,4.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AizDsQgDgHACgKIADgLQAAgNgNgBQgMAAAAgNQAAgNALgDQAMgCgBgNQAAgLgIgDIgKgCQgFgDAAgKQAAgPATgGIAAgEQABgFANgSIAcgkIAUgdQAVghgCgXQABgLgWgXIgngrIgMgOIAAgMIAAgKQgBgQAGgFIATgJIAEAAQAbgTAtgDIABgOQALgDARAAQAAgaAhAAQAdABAqAXQAsAXAcAgQAhAlAAAgIAAACIANARQAQAXAGAVQAGATAAARQABAkhkBdQhkBehAAUQgbAXgUAAIgDAAQg8AAgKgVg");
	this.shape_142.setTransform(284,4.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AixDtQgEgHADgKIACgLQABgMgNgBQgNgBAAgNQAAgMALgDQAMgCgBgNQgBgLgHgDIgKgDQgFgDgBgKQAAgPAUgFIAAgEQABgGAMgRIAcglIATgdQAUghgBgYQABgLgWgWIgngsIgNgOIAAgMIAAgJQgBgQAGgGIATgJIAEAAQAagTAugDIABgOQALgCAQgBQABgbAhAAQAdABAqAXQAsAXAcAgQAhAkABAgIAAABIANASQAQAXAGAVQAGATABAQQABAlhjBdQhkBghAAUQgaAXgVABIgHAAQg4AAgJgVg");
	this.shape_143.setTransform(284.2,5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AivDuQgEgGACgKIADgMQAAgMgNgBQgMAAgBgNQAAgNALgDQALgCgBgNQAAgLgHgDIgLgCQgFgDAAgKQAAgPATgGIAAgEQAAgFANgSIAbglQAMgPAHgOQAUgigBgYQAAgLgWgWQgegfgJgMIgNgOIABgMIgCgKQAAgQAGgFIATgJIAEAAQAagUAugDIAAgOQALgDARAAQAAgbAhAAQAdAAAqAXQAsAXAdAfQAhAkABAgIAAABIANASQAPAWAIAWQAGASAAARQACAkhiBfQhiBhhAAUQgaAYgVAAIgKAAQg1AAgJgUg");
	this.shape_144.setTransform(284.5,5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AiuDwQgDgHACgKIACgLQAAgNgNAAQgMgBgBgNQAAgMALgDQALgDgBgNQAAgLgIgCIgKgDQgEgDgBgKQgBgPAUgGIAAgEQAAgFAMgSIAbglIATgdQATgigBgYQAAgMgWgWQgegfgKgMIgNgOIABgMIgCgJQAAgQAGgGIATgJIAEAAQAagUAtgDIABgOQAKgDARgBQAAgbAhAAQAdAAArAXQAsAXAdAeQAhAkABAgIAAABIAOASQAPAVAIAXQAGASABARQACAjhhBgQhiBig/AVQgaAYgVABIgKAAQg1AAgKgTg");
	this.shape_145.setTransform(284.7,5.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AirDxQgEgHACgKIACgLQAAgNgNAAQgNAAAAgNQAAgNALgDQALgCgBgNQgBgLgHgDIgKgDQgFgCgBgKQgBgQAUgFIAAgEQAAgGAMgSIAaglIATgeQATgigBgYQgBgMgWgWIgogqIgNgOIAAgMIgBgJQgBgQAGgGIATgJIAEAAQAagUAugFIAAgNQAKgDARgBQAAgbAhAAQAdAAArAWQAsAWAdAfQAhAjACAfIAAACIAOASQAPAWAIAVQAHATAAAQQADAjhgBiQhhBig/AWQgaAZgUAAIgQAAQgvAAgKgSg");
	this.shape_146.setTransform(284.8,5.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AipDyQgEgHACgKIACgLQAAgNgNAAQgNAAgBgNQAAgNALgDQALgDgBgNQgBgKgHgDIgKgCQgFgDgBgKQgBgPATgGIAAgEQABgGALgSIAaglIATgeQASgjgBgXQgBgNgWgWQgfgegKgMIgNgNIABgNIgCgJQgBgQAGgFIATgKIAEAAQAagVAtgEIABgNQAKgEARgBQgBgaAhgBQAeAAAqAVQAsAXAeAeQAiAiABAgIAAACIAOASQAQAUAIAXQAHASAAAQQADAkhfBhQhfBkg/AXQgaAYgUACIgRAAQguAAgKgSg");
	this.shape_147.setTransform(285,5.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AinDzQgEgHABgKIADgLQgBgNgNAAQgMAAgBgNQgBgNALgDQALgDgBgMQgBgLgHgDIgLgCQgFgDAAgKQgCgPAUgGIAAgEQgBgFAMgTIAaglIASgfQASgigBgYQAAgOgYgVQgegegKgMIgOgNIABgMIgCgKQgBgQAGgFIATgKIAEAAQAagVAtgEIAAgOQALgDARgBQgBgbAhgBQAdAAArAVQAsAWAeAeQAiAiACAgIAAACIAOARQAQAWAIAVQAGASACARQADAjheBjQheBkg/AXQgaAZgUACIgTABQgtAAgJgSg");
	this.shape_148.setTransform(285.2,5.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AicEAQgEgGABgKIACgMQgBgMgNAAQgNABgBgNQgBgMAKgEQALgEgCgMQAAgMgJgBIgKgCQgFgDgBgKQgCgPATgHIAAgEQgBgFALgTIAYgnIARgfQAQgjgCgYQAAgzgTgZQgZgigIgOIgLgPIADgMIAAgKQACgQAGgEIAUgHIAFABQAcgQAuADIACgNQALgCARACQADgaAgAEQAeAFAnAcQAoAcAYAkQASAdAAAgIAAACIANASQAPAWAGAWQAGASAAARQAKAUhZBoQhaBog9AaQgZAbgUACQgQACgNAAQgkAAgJgQg");
	this.shape_149.setTransform(283.5,6.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AiRELQgEgHAAgKIACgLQgCgMgNAAQgMACgDgNQgBgNAKgEQALgEgCgNQgCgLgIgBIgKgCQgGgCgBgKQgDgOATgJIAAgEQgBgFAKgTIAWgoIAPggQAPgkgEgYIgBg1QAAgwgHgOIgZg1IgIgRIAFgLIACgJQAFgQAGgDIAVgDIAEABQAfgLAtALIAAAAIAAAAIAEgNQALAAARAFQAHgaAfALQAdAJAhAjQAjAjASAnQADAWgCAfIAAACIALASQANAXAGAVQAEAUgBAPQATAHhVBsQhVBsg8AdQgXAbgUAEQgUADgPAAQgeAAgKgNg");
	this.shape_150.setTransform(281.6,7.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AiEESQgFgGAAgKIABgMQgCgMgNACQgNACgCgNQgDgNALgEQAKgEgDgNQgCgLgIgBIgKgBQgGgDgCgJQgDgPASgJIAAgEQgBgFAIgUIAVgoIAOghQANglgFgXIAFhHQAGhDgEgOQgNgqgDgPIgFgSIAHgKIADgJQAHgPAIgCIAVABIAEACQAggGAqASIAGgLQAKABAQAIQAMgYAdAPQAbAPAbAnQAcAoALAqQgKANgEAfIgBABIALATQALAWADAWQAEASgDAQQAdgFhPBuQhQBwg7AgQgWAcgTAFQgZAFgRAAQgZAAgIgMg");
	this.shape_151.setTransform(279.5,8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("Ah5EiQgEgGgBgKIAAgMQgDgMgMACQgMACgEgMQgDgMAKgFQAKgFgDgNQgCgKgJgBIgKgBQgGgCgCgJQgEgPASgJIgBgEQgBgFAIgVIASgpIAMghQAMgmgGgXQACgXALhBQAPhSgCgQQgGgqAAgQIgCgTIAIgJIAFgIQAKgNAHgBIAVAEIADADQAhAAAlAYIAJgKQAKAEAOAKQAQgVAaATQAYATAUArQAVAtAFArQgYADgFAcIgBACIAJASQAJAWACAVQACARgDAOQAogPhKByQhKB0g5AjQgVAdgUAFQgbAHgSAAQgWAAgIgKg");
	this.shape_152.setTransform(277.4,7.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AhxEvQgFgGgBgKIAAgMQgDgMgNADQgMADgEgMQgEgMAKgGQAKgGgEgMQgDgKgIgBIgLAAQgFgBgDgKQgFgOASgLIgBgEQgBgFAGgUIARgrIAKghQAKgngHgXQAFgaAShMQAZhhABgQQABgqADgQIACgTIAJgHIAGgIQAMgLAIAAIATAIIADADQAfAFAiAgIAKgJQAJAFAMAMQAUgSAXAYQAUAWAMAvQANAvgDArQgigJgHAaIgBACIAIARQAHAWABATQAAAQgDAOQA0gYhFB0QhEB4g5AlQgSAegTAGQgfAKgTAAQgSAAgIgJg");
	this.shape_153.setTransform(275.8,6.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AhsE4QgGgGgBgKIgBgLQgEgMgMADQgMADgFgMQgEgMAKgGQAJgGgEgMQgDgJgJgBIgKAAQgGAAgDgKQgGgOASgMIgCgDQgCgGAHgUIAOgsIAJgiQAIgngIgWQAHgdAchVQAlhvADgPQAJgqAFgPIAEgSIALgGIAHgGQANgJAHABIASALIACAEQAfALAcAkIAMgHQAIAHAKAOQAWgPASAcQAQAZAFAwQAFAxgKApQgKAPgRgIQgVgRgEAMIgBACIAGAQQAGAUAAATQgBAPgEAMIAPAUQASAHgfA8Qg/B7g3AoQgRAegTAIQggALgUAAQgQAAgHgHg");
	this.shape_154.setTransform(274.6,5.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AhvE1QgFgGgBgKIgBgLQgEgMgMADQgMADgFgMQgDgMAJgGQAKgGgEgMQgEgKgIAAIgKAAQgGgCgDgJQgGgOASgLIgBgEQgCgFAGgVIAQgrIAJgiQAJgngIgWQAHgcAahTQAihrACgQQAIgqAEgPIAEgSIAKgHIAHgGQANgKAIACIARAKIADADQAfAKAdAjIAMgHQAIAGALAOQAWgPASAaQASAZAGAvQAHAxgJAqQgIAPgRgHQgUgPgEANIgBABIAGARQAGAVAAASQAAAQgEAMIAMAWQARAHggA8QhCB5g3AnQgRAfgUAGQgfALgTAAQgRAAgIgIg");
	this.shape_155.setTransform(274.8,6.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AhxEzQgFgGgBgKIgBgMQgEgMgMADQgMAEgEgNQgDgMAJgGQAKgFgEgNQgDgKgJgBIgKABQgGgBgDgKQgFgPASgKIgBgEQgBgFAGgVIAQgrIAKghQAKgngIgXQAGgbAYhRQAfhnACgQQAGgqAEgPIADgTIAKgHIAHgGQANgLAHACIASAJIADADQAfAIAfAjIALgIQAJAGALANQAVgQAUAaQASAYAIAvQAJAxgHAqQgngQgIAaIAAABIAGARQAHAVAAATQAAAPgEAOIAKAWQAOAIghA7QhDB5g4AmQgSAegUAGQgfAKgTAAQgSAAgHgIg");
	this.shape_156.setTransform(274.9,6.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("Ah0EwQgFgFgBgLIAAgLQgEgMgMADQgMACgEgMQgDgMAJgGQAKgFgEgMQgDgLgIAAIgKAAQgGgCgDgJQgFgPASgKIgBgEQgBgFAHgVIARgqIAKgiQAKgngHgWQAGgbAWhNQAdhkABgQQAEgrADgPIADgTIAJgHIAHgHQAMgKAIAAIATAJIACADQAgAHAgAhIAKgIQAKAGALAMQAUgQAVAYQATAYALAvQALAwgGAqQglgMgHAaIgBABIAHARQAHAWAAATQAAAQgEANQA3gZhFB0QhFB4g4AkQgTAegUAGQgeAJgSAAQgTAAgIgJg");
	this.shape_157.setTransform(275.2,6.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("Ah3EtQgFgGgBgKIAAgLQgDgNgNADQgMACgDgMQgDgMAJgFQALgGgEgMQgDgKgIgBIgLAAQgFgCgDgJQgFgPATgKIgCgEQgBgFAIgVIARgqIAMghQAKgmgHgYQAGgZAThLQAbhgABgQQACgrADgPIABgTIAKgIIAGgHQAMgLAIABIATAHIADAEQAfAFAhAgIALgJQAJAGAMAMQATgSAXAYQAUAXAMAuQANAwgEArQgigKgIAbIAAACIAHARQAHAWAAAUQABAQgEANQA0gXhIBzQhHB2g4AkQgUAegUAFQgcAIgTAAQgUAAgIgJg");
	this.shape_158.setTransform(275.4,6.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("Ah5EqQgFgGgBgKIAAgMQgCgMgNADQgMABgEgMQgDgMAKgFQALgFgEgNQgDgKgIgBIgKAAQgGgCgDgKQgEgOASgKIgBgEQgBgFAIgVIASgpIAMgiQALgmgGgXQAFgZAShIQAYhcAAgQIADg6IABgTIAJgIIAGgIQALgLAIAAIATAHIAEADQAfAFAiAeIAKgJQAKAFAMAMQAUgTAWAYQAVAWAOAtQAOAwgBAqQgggGgHAbIAAACIAHARQAHAWABAVQAAAQgDAOQAwgVhJByQhJB1g5AjQgVAdgTAFQgcAIgTAAQgUAAgIgKg");
	this.shape_159.setTransform(275.6,6.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("Ah8EnQgFgGAAgLIAAgLQgDgMgMACQgNACgDgNQgDgMALgFQAKgEgDgNQgDgLgIgBIgLAAQgFgCgDgKQgDgOASgKIgBgEQgBgGAIgTIATgqIANghQALgmgFgWQAEgZAQhFQAWhZgBgPQgBgsACgPIAAgTIAJgIIAFgIQALgMAIAAIAUAHIADADQAfADAkAdIAKgKQAKAFAMALQATgTAYAWQAVAVAQAuQARAugBArQgdgDgHAcIAAABIAHASQAJAWAAAVQABAQgDAOQAtgThLByQhMBzg5AjQgVAdgUAEQgbAHgSAAQgWAAgIgKg");
	this.shape_160.setTransform(275.9,6.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("Ah/EjQgFgHAAgKIAAgLQgDgMgMACQgMACgDgNQgDgNALgEQAKgFgDgNQgCgKgJgBIgKgBQgFgCgDgKQgDgPASgJIgBgEQgBgFAJgUIATgpIANghQANglgGgXQAEgYAPhCQAThVgBgPQgCgrAAgQIAAgTIAIgIIAFgIQALgNAIAAIAUAGIADADQAgACAkAbIAKgKQAJAFAOAKQASgUAYAWQAWAUASAtQATAuAAAqQgZABgHAbIAAACIAHASQAIAWACAVQABARgEAOQAqgQhMBxQhOBxg6AhQgWAdgTAFQgaAGgRAAQgYAAgIgLg");
	this.shape_161.setTransform(276.2,6.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AiCEfQgFgHABgKIAAgLQgCgMgNABQgMACgDgNQgCgMAKgFQAKgEgCgNQgCgKgJgCIgKgBQgFgCgDgJQgDgPATgJIgBgEQgBgGAJgTIAUgpIAOggQANgmgFgXIAQhVQARhRgCgQQgEgqABgQIgCgTIAIgJIAFgIQAKgMAIgBIAUAFIAEACQAfABAmAaIAJgKQAKAEAOAKQAQgVAaAVQAXATAUAsQATAtADArQgWADgHAcIAAACIAIASQAIAXACAVQACARgEAOQAngNhPBvQhPBxg7AgQgWAcgUAEQgYAFgRAAQgZAAgJgLg");
	this.shape_162.setTransform(276.4,7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AiGEbQgEgHAAgKIABgLQgCgNgNACQgNABgCgMQgCgNAKgEQALgEgDgNQgCgLgIgCIgKgBQgGgBgCgKQgDgPATgJIgBgEQgBgFAJgUIAWgoIAOggQAOgmgFgWIAOhSQAPhMgCgQQgGgqAAgQIgDgTIAIgJIAFgIQAJgOAIgBIAUAEIAEADQAhgBAlAZIAJgLQAKAEAOAKQAQgWAbAUQAXASAVArQAWAtAFAqQgUAGgGAdIgBACIAJASQAJAXACAVQABARgDAPQAkgKhRBtQhSBwg7AeQgWAdgUADQgXAFgQAAQgbAAgJgMg");
	this.shape_163.setTransform(276.8,7.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AiJEWQgFgGABgLIABgLQgCgMgNABQgMABgDgNQgCgMALgEQALgEgDgNQgCgKgIgDIgKgBQgGgCgBgKQgEgPAUgIIgBgEQgBgFAKgUIAWgoIAOggQAPglgEgXIAMhNQANhIgDgPQgIgqgBgQIgDgTIAIgJIAEgJQAJgNAIgCIAUADIAEADQAhgCAmAXIAIgLQALADAOAKQAPgXAbATQAZARAXArQAXArAGAqQgQAJgGAdIgBACIAJASQAJAYACAVQACARgDAPQAhgHhTBsQhTBug8AeQgWAcgVADQgWAEgQAAQgcAAgIgNg");
	this.shape_164.setTransform(277.2,7.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AiOERQgEgGAAgKIACgMQgCgMgNABQgNAAgBgMQgCgMALgFQAKgDgCgNQgBgLgJgCIgKgBQgFgCgCgKQgDgQAUgHIgBgEQAAgGAJgTIAXgnIAPggQAPglgEgXIALhJQALhEgEgPIgLg5IgDgTIAHgKIAEgIQAIgOAIgCIAUADIAEACQAhgDAnAVIAIgLQAKADAPAIQAOgXAcASQAZARAZApQAZAqAIArQgOALgFAeIgBACIAJASQAKAXACAWQACASgDAPQAegFhVBrQhVBsg8AdQgXAbgUADQgUAEgPAAQgfAAgJgOg");
	this.shape_165.setTransform(277.6,7.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AiSENQgEgHABgKIABgLQgBgNgNABQgNABgBgNQgCgNALgEQAKgDgBgNQgCgLgIgCIgKgBQgGgDgBgKQgCgPATgHIgBgEQAAgGAKgTIAXgnIAQgfQAQgkgEgYIAJhEQAJhAgEgPQgLgqgCgPIgEgSIAGgKIAEgJQAIgOAHgCIAVABIAEADQAhgFAoAUIAHgLQAKACAQAIQANgXAcAQQAaAPAaApQAbApAJAqQgJAOgGAeIAAACIAJATQAKAXACAWQACATgCAOQAbgBhXBpQhWBqg+AdQgYAagTADQgSACgOAAQgiAAgJgNg");
	this.shape_166.setTransform(278,7.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AiWEIQgDgHAAgKIACgLQgBgMgNAAQgNABgBgNQgCgNALgDQALgEgCgNQgBgKgIgDIgKgBQgGgDgBgKQgCgPATgHIAAgEQgBgFALgTIAYgnIAQgfQARgkgDgYIAGhAQAIg7gFgOQgMgqgDgPIgFgSIAGgKIADgJQAIgOAHgDIAVABIAEACQAggGApASIAHgLQALABAPAIQAMgYAdAPQAbAPAbAnQAdApALApQgHARgFAeIAAACIAJASQAKAYADAWQADATgDAOQAYAChYBoQhZBpg9AbQgZAbgTACQgSACgNAAQgjAAgJgPg");
	this.shape_167.setTransform(278.4,7.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AiZEFQgFgGACgLIACgLQgBgMgNAAQgNABgBgNQgBgNALgEQAKgDgBgNQgBgKgIgDIgKgCQgGgCgBgKQgCgPAUgHIAAgEQgBgGALgSIAYgnIARgfQASgjgDgYIAFg7QAGg2gGgPQgOgpgDgPIgGgSIAGgKIADgJQAHgPAHgCIAVgBIAEACQAggHArARIAFgMQALACAPAGQAMgYAeAOQAbAOAcAmQAeAnANApIgIAyIAAACIAKASQAKAXADAXQADATgDAPQAWAFhaBmQhbBog+AZQgZAagTACIgbACQgmAAgJgQg");
	this.shape_168.setTransform(278.8,7.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AieEDQgEgHACgKIACgLQgBgNgNAAQgMAAgCgNQAAgMAKgEQALgCgBgNQgBgLgIgDIgKgCQgFgCgBgKQgCgPAUgHIAAgEQAAgFAKgTIAagmIARgfQASgigCgYIADg3QAEgygGgOQgPgogEgPIgGgSIAFgLIACgJQAGgPAIgCIAVgBIAEABQAfgIAsAPIAGgMQAKABAPAGQALgYAeAMQAcAMAeAmQAgAmAOAoQAAAVgFAgIAAACIAKATQALAXAEAWQADATgDAPQASAIhbBlQhdBmg+AZQgZAZgUACIgWABQgqAAgKgQg");
	this.shape_169.setTransform(279.3,6.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AiiEAQgEgHACgKIACgLQgBgNgNAAQgMAAgBgNQgBgNALgDQALgDgBgNQgBgKgHgDIgLgCQgFgDAAgKQgCgPAUgGIAAgEQAAgFALgTIAagmIASgeQASgigCgYIADgyQACgtgGgOQgSgngEgPIgHgSIAFgLIACgJQAFgPAIgDIAVgCIAEABQAfgJAsANIAFgMQAKABAQAFQAJgZAgAMQAcALAfAkQAhAlAQAnQAEAZgEAeIgBACIALATQALAXAEAXQACATgBAPQAQAMheBjQheBlg/AXQgZAZgVABIgUABQgsAAgJgRg");
	this.shape_170.setTransform(279.7,6.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AidEDQgDgHAAgKIACgLQAAgNgNABQgNAAgBgNQgBgMALgEQALgDgCgNQgBgLgHgCIgLgCQgFgDgBgKQgCgPAUgHIAAgEQAAgFALgTIAZgmIARgeQASgjgDgYIAEg3QAEgygGgOQgQgogEgPIgHgSIAGgLIACgJQAGgPAIgDIAVgBIAEACQAfgIAsAPIAFgNQAKABAQAHQALgZAeANQAbAMAfAlQAgAmAOAoQAAAVgEAgIgBACIALATQALAWADAXQADATgCAPQASAIhbBlQhbBng/AZQgZAZgUACIgYABQgpAAgJgQg");
	this.shape_171.setTransform(279.4,6.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AiYEHQgEgHABgKIACgMQgBgMgNABQgNAAgBgNQgBgMALgEQAKgDgBgNQgCgLgHgCIgLgCQgFgDgBgKQgCgPATgHIAAgEQAAgFAKgTIAYgnIARgfQARgjgDgYIAFg8QAFg2gFgPQgOgogEgPIgGgSIAGgLIADgJQAGgPAIgCIAVAAIAEABQAggHAqARIAGgMQAKABAQAHQALgYAeANQAbAOAdAmQAfAnAMApIgHAxIgBACIAKATQALAXADAWQADATgCAPQAVAFhZBnQhaBpg9AaQgYAagVACQgRACgNAAQgjAAgJgPg");
	this.shape_172.setTransform(279,7.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AiTEKQgFgHACgKIABgLQgBgNgNABQgMABgDgNQgBgNALgEQAKgEgBgMQgCgLgIgCIgKgBQgFgDgCgKQgCgPATgHIAAgEQgBgGAKgTIAYgnIAQgfQAPgkgDgYIAGhAQAHg7gFgPQgNgpgCgPIgGgSIAHgLIADgJQAHgOAHgDIAVABIAEACQAggGAqASIAGgMQALACAPAHQANgYAdAPQAbAOAbAnQAdApALApQgGAQgFAfIAAACIAJASQALAYADAVQADATgDAPQAYABhWBpQhYBrg9AbQgXAbgVACQgTADgOAAQggAAgJgOg");
	this.shape_173.setTransform(278.7,7.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AiOENQgFgGABgKIABgMQgBgMgNABQgNABgCgNQgCgMALgEQAKgEgBgNQgCgKgIgDIgKgBQgGgCgBgKQgDgPATgIIgBgEQAAgFAKgUIAWgnIAPggQAQgkgEgYIAHhFQAJhAgFgPQgMgpgBgQIgFgSIAHgKIADgJQAIgOAHgCIAVABIAEACQAhgFAoAUIAHgMQALADAPAHQANgXAcAQQAbAPAaAoQAbApAKAqQgKAOgFAeIAAACIAJASQAKAYADAVQADATgDAOQAcgChVBrQhVBtg9AcQgWAcgVADQgUADgPAAQgfAAgIgOg");
	this.shape_174.setTransform(278.4,7.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AiKETQgEgGAAgLIABgLQgBgNgNACQgNABgCgNQgCgMAKgEQALgEgCgNQgDgKgHgDIgLgBQgFgCgCgKQgDgOATgJIgBgEQAAgFAJgUIAWgoIAOggQAPglgFgXIAJhKQAKhEgEgPQgKgqgBgQIgEgSIAHgKIAEgJQAIgOAHgBIAVACIAEACQAggEAoAVIAIgLQAKADAPAIQAOgXAcARQAaAQAYApQAaAqAJAqQgOALgFAeIAAACIAJASQAKAXADAWQACASgDAPQAfgGhTBtQhSBug8AeQgWAcgVAEQgVADgPAAQgdAAgKgMg");
	this.shape_175.setTransform(278.1,7.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AiFEYQgEgGAAgKIABgMQgCgMgNABQgNACgCgNQgDgMALgFQAKgEgCgNQgCgKgJgCIgKgBQgGgCgBgJQgEgPATgJIgBgEQgBgGAJgTIAVgpIAOggQANglgEgXIAKhPQAMhJgDgPQgJgqgBgQIgDgSIAHgKIAEgIQAJgOAIgBIAUACIAEADQAggCAoAVIAIgKQAKACAOAJQAPgWAcASQAZARAXAqQAYArAHAqQgQAJgGAdIAAACIAJASQAJAXADAVQACATgDAOQAhgJhPBvQhRBvg7AgQgVAcgVAEQgYAEgRAAQgZAAgJgLg");
	this.shape_176.setTransform(277.8,7.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AiAEdQgFgGAAgLIABgLQgDgMgNACQgMACgDgNQgDgNALgEQAKgFgDgMQgCgLgIgBIgLgBQgFgCgCgKQgEgPATgJIgBgEQgBgFAIgUIAUgpQAJgRAEgQQANglgFgXIAMhTQANhNgDgQQgHgqAAgQIgCgSIAHgKIAFgIQAJgNAIgCIAUAEIAEADQAggBAnAXIAIgLQAKAEAOAJQAQgVAbASQAYASAWArQAXAsAFAqQgUAGgGAdIAAACIAJASQAKAWACAWQACASgDANQAkgLhOBwQhNBxg7AhQgVAdgUAEQgZAGgRAAQgZAAgIgLg");
	this.shape_177.setTransform(277.6,7.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("Ah7EhQgFgGAAgKIAAgLQgCgNgNACQgNADgDgNQgDgNALgEQAKgFgDgNQgDgKgIgBIgLgBQgFgBgDgKQgDgPASgJIgBgEQgBgGAIgUIATgpIAMghQAMgmgGgXIAOhXQAQhSgDgPQgFgrAAgQIgCgSIAIgJIAFgJQAJgMAIgBIAUAEIAEACQAhABAlAYIAJgKQAKAEAOAKQAQgVAaATQAYATAUAsQAVAsAEArQgXADgGAdIAAABIAIASQAKAWACAVQABATgCANQAngOhLBxQhMBzg5AiQgVAdgUAFQgbAGgSAAQgWAAgIgKg");
	this.shape_178.setTransform(277.3,7.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("Ah2ElQgFgGAAgKIAAgLQgDgNgNADQgNADgDgNQgCgMAJgGQALgEgEgNQgDgKgIgCIgKAAQgGgBgDgKQgEgPASgKIgBgDQgBgGAIgUIASgqIAMghQAKgmgGgXQADgYANhDQARhWgCgQQgEgqABgQIgBgTIAIgJIAFgIQAKgMAIgBIAUAFIAEADQAhAAAjAbIAKgKQAKAEANALQARgVAZAVQAYAUASAsQAUAtACArQgaAAgGAcIgBACIAJARQAJAWACAVQABASgDANQArgRhJByQhJB1g5AkQgUAdgUAFQgcAIgSAAQgVAAgIgKg");
	this.shape_179.setTransform(277,7.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AhyEpQgFgFAAgLIgBgLQgDgMgNADQgMACgEgMQgDgMAKgGQAKgFgEgMQgCgLgJgBIgKAAQgGgBgDgKQgEgOASgLIgBgDQgBgGAGgUIASgqIALgiQAKgngHgWQAEgYANhHQAThagBgQQgDgrACgQIgBgSIAJgJIAFgIQALgMAIAAIAUAFIADADQAgADAkAbIAAAAIAAAAIAJgJQALAEAMALQASgUAZAWQAWAUARAtQARAuACArQgegDgGAcIAAACIAIARQAJAVABAVQACASgDANQAtgVhGB0QhGB3g5AkQgTAfgTAFQgeAIgSAAQgUAAgIgJg");
	this.shape_180.setTransform(276.8,7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_141}]}).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[]},1).wait(94));

	// dirt
	this.instance = new lib.dirt21();
	this.instance.parent = this;
	this.instance.setTransform(190.9,82.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(1).to({rotation:9.8,x:188.4,y:81.4,alpha:0.984},0).wait(1).to({rotation:19.6,x:185.8,y:80.5,alpha:0.968},0).wait(1).to({rotation:29.3,x:183.3,y:79.6,alpha:0.952},0).wait(1).to({rotation:39.1,x:180.8,y:78.7,alpha:0.935},0).wait(1).to({rotation:48.9,x:178.2,y:77.7,alpha:0.919},0).wait(1).to({rotation:58.7,x:175.7,y:76.8,alpha:0.903},0).wait(1).to({rotation:68.4,x:173.2,y:75.9,alpha:0.887},0).wait(1).to({rotation:78.2,x:170.6,y:75,alpha:0.871},0).wait(1).to({rotation:88,x:168.1,y:74.1,alpha:0.855},0).wait(1).to({rotation:90.9,x:167.7,y:72.5,alpha:0.839},0).wait(1).to({rotation:93.8,x:167.3,y:71,alpha:0.823},0).wait(1).to({rotation:96.7,x:166.8,y:69.5,alpha:0.806},0).wait(1).to({rotation:99.7,x:166.4,y:68,alpha:0.79},0).wait(1).to({rotation:102.6,x:166,y:66.5,alpha:0.774},0).wait(1).to({rotation:105.5,x:165.6,y:65,alpha:0.758},0).wait(1).to({rotation:108.4,x:165.2,y:63.5,alpha:0.742},0).wait(1).to({rotation:111.3,x:164.8,y:62,alpha:0.726},0).wait(1).to({rotation:114.2,x:162.8,y:60.4,alpha:0.71},0).wait(1).to({rotation:117.1,x:160.7,y:58.9,alpha:0.694},0).wait(1).to({rotation:120,x:158.6,y:57.4,alpha:0.677},0).wait(1).to({rotation:123,x:156.5,y:56,alpha:0.661},0).wait(1).to({rotation:125.9,x:154.3,y:54.7,alpha:0.645},0).wait(1).to({rotation:128.8,x:152,y:53.5,alpha:0.629},0).wait(1).to({rotation:131.7,x:149.7,y:52.4,alpha:0.613},0).wait(1).to({rotation:134.6,x:147.3,y:51.6,alpha:0.597},0).wait(1).to({rotation:137.5,x:144.8,y:51,alpha:0.581},0).wait(1).to({rotation:140.4,x:142.3,y:50.7,alpha:0.565},0).wait(1).to({rotation:143.3,x:139.7,y:50.9,alpha:0.548},0).wait(1).to({rotation:146.3,x:137.3,y:51.7,alpha:0.532},0).wait(1).to({rotation:149.2,x:135.2,y:53.1,alpha:0.516},0).wait(1).to({rotation:152.1,x:133.4,y:55,alpha:0.5},0).wait(1).to({rotation:155,x:132.1,y:57.2,alpha:0.484},0).wait(1).to({rotation:157.4,x:131.6,y:58.3,alpha:0.468},0).wait(1).to({rotation:159.8,x:130.9,y:60,alpha:0.452},0).wait(1).to({rotation:162.2,x:130.3,y:61.6,alpha:0.435},0).wait(1).to({rotation:164.6,x:129.6,y:63.3,alpha:0.419},0).wait(1).to({rotation:167.1,x:129.2,y:64.4,alpha:0.403},0).wait(1).to({rotation:169.5,x:129.3,y:66,alpha:0.387},0).wait(1).to({rotation:171.9,x:129.5,y:67.6,alpha:0.371},0).wait(1).to({rotation:174.3,x:129.7,y:69.5,alpha:0.355},0).wait(1).to({rotation:176.7,x:129.6,y:70.6,alpha:0.339},0).wait(1).to({rotation:179.1,x:129.4,y:72.4,alpha:0.323},0).wait(1).to({rotation:181.5,x:129.1,y:73.9,alpha:0.306},0).wait(1).to({rotation:183.9,x:128.9,y:75.6,alpha:0.29},0).wait(1).to({rotation:186.4,x:128.5,y:76.6,alpha:0.274},0).wait(1).to({rotation:188.8,x:127.3,y:78.1,alpha:0.258},0).wait(1).to({rotation:191.2,x:126.3,y:79.4,alpha:0.242},0).wait(1).to({rotation:193.6,x:125.3,y:80.8,alpha:0.226},0).wait(1).to({rotation:196,x:124.5,y:82,alpha:0.21},0).wait(1).to({alpha:0.194},0).wait(1).to({alpha:0.177},0).wait(1).to({alpha:0.161},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.113},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.081},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.032},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(32));

	// dirt
	this.instance_1 = new lib.dirt21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189,82.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(1).to({rotation:9.8,x:185.7,y:79.8,alpha:0.984},0).wait(1).to({rotation:19.6,x:182.4,y:77.6,alpha:0.968},0).wait(1).to({rotation:29.3,x:179.1,y:75.3,alpha:0.952},0).wait(1).to({rotation:39.1,x:175.8,y:73.1,alpha:0.935},0).wait(1).to({rotation:48.9,x:172.6,y:70.8,alpha:0.919},0).wait(1).to({rotation:58.7,x:169.3,y:68.6,alpha:0.903},0).wait(1).to({rotation:68.4,x:166,y:66.3,alpha:0.887},0).wait(1).to({rotation:78.2,x:162.7,y:64.1,alpha:0.871},0).wait(1).to({rotation:88,x:159.4,y:61.9,alpha:0.855},0).wait(1).to({rotation:90.9,x:158.4,y:61.5,alpha:0.839},0).wait(1).to({rotation:93.8,x:157.4,y:61.1,alpha:0.823},0).wait(1).to({rotation:96.7,x:156.4,y:60.7,alpha:0.806},0).wait(1).to({rotation:99.7,x:155.4,y:60.4,alpha:0.79},0).wait(1).to({rotation:102.6,x:154.4,y:60,alpha:0.774},0).wait(1).to({rotation:105.5,x:153.4,y:59.6,alpha:0.758},0).wait(1).to({rotation:108.4,x:152.4,y:59.2,alpha:0.742},0).wait(1).to({rotation:111.3,x:151.5,y:58.9,alpha:0.726},0).wait(1).to({rotation:114.2,x:150,y:57.7,alpha:0.71},0).wait(1).to({rotation:117.1,x:148.6,y:56.6,alpha:0.694},0).wait(1).to({rotation:120,x:147.1,y:55.6,alpha:0.677},0).wait(1).to({rotation:123,x:145.6,y:54.6,alpha:0.661},0).wait(1).to({rotation:125.9,x:144,y:53.7,alpha:0.645},0).wait(1).to({rotation:128.8,x:142.3,y:52.9,alpha:0.629},0).wait(1).to({rotation:131.7,x:140.5,y:52.5,alpha:0.613},0).wait(1).to({rotation:134.6,x:138.8,alpha:0.597},0).wait(1).to({rotation:137.5,x:137.2,y:53.4,alpha:0.581},0).wait(1).to({rotation:140.4,x:136.2,y:54.9,alpha:0.565},0).wait(1).to({rotation:143.3,x:135.8,y:56.7,alpha:0.548},0).wait(1).to({rotation:146.3,x:135.5,y:58.5,alpha:0.532},0).wait(1).to({rotation:149.2,y:60.3,alpha:0.516},0).wait(1).to({rotation:152.1,x:135.6,y:62.1,alpha:0.5},0).wait(1).to({rotation:155,x:135.8,y:64,alpha:0.484},0).wait(1).to({rotation:157.4,x:135.2,y:64.8,alpha:0.468},0).wait(1).to({rotation:159.8,x:134.3,y:66.2,alpha:0.452},0).wait(1).to({rotation:162.2,x:134.1,y:66.8,alpha:0.435},0).wait(1).to({rotation:164.6,x:134.5,y:68.1,alpha:0.419},0).wait(1).to({rotation:167.1,x:134.9,y:69.5,alpha:0.403},0).wait(1).to({rotation:169.5,x:135,y:70.3,alpha:0.387},0).wait(1).to({rotation:171.9,x:134.8,y:71.5,alpha:0.371},0).wait(1).to({rotation:174.3,x:134.5,y:72.7,alpha:0.355},0).wait(1).to({rotation:176.7,x:134.3,y:74,alpha:0.339},0).wait(1).to({rotation:179.1,x:134.2,y:75.2,alpha:0.323},0).wait(1).to({rotation:181.5,x:134.1,y:76.5,alpha:0.306},0).wait(1).to({rotation:183.9,x:134.2,y:77.2,alpha:0.29},0).wait(1).to({rotation:186.4,x:134.6,y:78.5,alpha:0.274},0).wait(1).to({rotation:188.8,x:134.9,y:79.8,alpha:0.258},0).wait(1).to({rotation:191.2,x:135.3,y:81,alpha:0.242},0).wait(1).to({rotation:193.6,x:135.7,y:82.2,alpha:0.226},0).wait(1).to({rotation:196,x:136,y:83.2,alpha:0.21},0).wait(1).to({alpha:0.194},0).wait(1).to({alpha:0.177},0).wait(1).to({alpha:0.161},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.113},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.081},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.032},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(32));

	// dirt
	this.instance_2 = new lib.dirt21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(188.3,82.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(1).to({rotation:9.8,x:186.1,y:81.3,alpha:0.984},0).wait(1).to({rotation:19.6,x:183.9,y:80.5,alpha:0.968},0).wait(1).to({rotation:29.3,x:181.8,y:79.8,alpha:0.952},0).wait(1).to({rotation:39.1,x:179.6,y:79,alpha:0.935},0).wait(1).to({rotation:48.9,x:177.4,y:78.3,alpha:0.919},0).wait(1).to({rotation:58.7,x:175.3,y:77.5,alpha:0.903},0).wait(1).to({rotation:68.4,x:173.1,y:76.8,alpha:0.887},0).wait(1).to({rotation:78.2,x:170.9,y:76,alpha:0.871},0).wait(1).to({rotation:88,x:168.8,y:75.3,alpha:0.855},0).wait(1).to({rotation:90.9,x:167.5,y:73.8,alpha:0.839},0).wait(1).to({rotation:93.8,x:166.2,y:72.3,alpha:0.823},0).wait(1).to({rotation:96.7,x:164.9,y:70.8,alpha:0.806},0).wait(1).to({rotation:99.7,x:163.6,y:69.3,alpha:0.79},0).wait(1).to({rotation:102.6,x:162.3,y:67.8,alpha:0.774},0).wait(1).to({rotation:105.5,x:161,y:66.4,alpha:0.758},0).wait(1).to({rotation:108.4,x:159.7,y:64.9,alpha:0.742},0).wait(1).to({rotation:111.3,x:158.4,y:63.4,alpha:0.726},0).wait(1).to({rotation:114.2,x:156.7,y:62.1,alpha:0.71},0).wait(1).to({rotation:117.1,x:155,y:60.8,alpha:0.694},0).wait(1).to({rotation:120,x:153.3,y:59.6,alpha:0.677},0).wait(1).to({rotation:123,x:151.5,y:58.5,alpha:0.661},0).wait(1).to({rotation:125.9,x:149.6,y:57.5,alpha:0.645},0).wait(1).to({rotation:128.8,x:147.7,y:56.7,alpha:0.629},0).wait(1).to({rotation:131.7,x:145.6,y:56.2,alpha:0.613},0).wait(1).to({rotation:134.6,x:143.5,y:56.1,alpha:0.597},0).wait(1).to({rotation:137.5,x:141.4,y:56.5,alpha:0.581},0).wait(1).to({rotation:140.4,x:139.6,y:57.4,alpha:0.565},0).wait(1).to({rotation:143.3,x:137.9,y:58.7,alpha:0.548},0).wait(1).to({rotation:146.3,x:136.5,y:60.2,alpha:0.532},0).wait(1).to({rotation:149.2,x:135.2,y:61.9,alpha:0.516},0).wait(1).to({rotation:152.1,x:134.1,y:63.7,alpha:0.5},0).wait(1).to({rotation:155,x:133.1,y:65.6,alpha:0.484},0).wait(1).to({rotation:157.4,x:132.3,y:66.7,alpha:0.468},0).wait(1).to({rotation:159.8,x:131,y:68.6,alpha:0.452},0).wait(1).to({rotation:162.2,x:130.4,y:69.5,alpha:0.435},0).wait(1).to({rotation:164.6,x:129.4,y:71.3,alpha:0.419},0).wait(1).to({rotation:167.1,x:129.1,y:72.5,alpha:0.403},0).wait(1).to({rotation:169.5,x:128.8,y:74.3,alpha:0.387},0).wait(1).to({rotation:171.9,x:128.4,y:76,alpha:0.371},0).wait(1).to({rotation:174.3,x:128.1,y:77.7,alpha:0.355},0).wait(1).to({rotation:176.7,x:127.2,y:78.3,alpha:0.339},0).wait(1).to({rotation:179.1,x:125.4,y:79,alpha:0.323},0).wait(1).to({rotation:181.5,x:123.9,y:79.6,alpha:0.306},0).wait(1).to({rotation:183.9,x:122.3,y:80.3,alpha:0.29},0).wait(1).to({rotation:186.4,x:120.7,y:80.9,alpha:0.274},0).wait(1).to({rotation:188.8,x:119.2,y:81.6,alpha:0.258},0).wait(1).to({rotation:191.2,x:117.6,y:82.2,alpha:0.242},0).wait(1).to({rotation:193.6,x:116,y:82.9,alpha:0.226},0).wait(1).to({rotation:196,x:114.7,y:83.5,alpha:0.21},0).wait(1).to({alpha:0.194},0).wait(1).to({alpha:0.177},0).wait(1).to({alpha:0.161},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.113},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.081},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.032},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(32));

	// dirt
	this.instance_3 = new lib.dirt21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(191.2,82.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).wait(1).to({rotation:9.8,x:188.7,y:81,alpha:0.984},0).wait(1).to({rotation:19.6,x:186.2,y:80,alpha:0.968},0).wait(1).to({rotation:29.3,x:183.8,y:79,alpha:0.952},0).wait(1).to({rotation:39.1,x:181.3,y:78,alpha:0.936},0).wait(1).to({rotation:48.9,x:178.8,y:77,alpha:0.92},0).wait(1).to({rotation:58.7,x:176.3,y:76,alpha:0.904},0).wait(1).to({rotation:68.4,x:173.9,y:74.9,alpha:0.888},0).wait(1).to({rotation:78.2,x:171.4,y:73.9,alpha:0.872},0).wait(1).to({rotation:88,x:168.9,y:72.9,alpha:0.856},0).wait(1).to({rotation:90.9,x:166.8,y:70.2,alpha:0.84},0).wait(1).to({rotation:93.8,x:164.7,y:67.4,alpha:0.824},0).wait(1).to({rotation:96.7,x:162.6,y:64.7,alpha:0.808},0).wait(1).to({rotation:99.7,x:160.5,y:61.9,alpha:0.792},0).wait(1).to({rotation:102.6,x:158.4,y:59.2,alpha:0.776},0).wait(1).to({rotation:105.5,x:156.3,y:56.4,alpha:0.76},0).wait(1).to({rotation:108.4,x:154.2,y:53.7,alpha:0.745},0).wait(1).to({rotation:111.3,x:152.1,y:51,alpha:0.729},0).wait(1).to({rotation:114.2,x:151.4,y:50.3,alpha:0.713},0).wait(1).to({rotation:117.1,x:151.5,y:51.6,alpha:0.697},0).wait(1).to({rotation:120,x:151.4,y:52.9,alpha:0.681},0).wait(1).to({rotation:123,x:151.2,y:54.2,alpha:0.665},0).wait(1).to({rotation:125.9,x:150.7,y:55.4,alpha:0.649},0).wait(1).to({rotation:128.8,x:150.1,y:56.5,alpha:0.633},0).wait(1).to({rotation:131.7,x:149.4,y:57.6,alpha:0.617},0).wait(1).to({rotation:134.6,x:148.6,y:58.6,alpha:0.601},0).wait(1).to({rotation:137.5,x:147.7,y:59.6,alpha:0.585},0).wait(1).to({rotation:140.4,x:146.7,y:60.4,alpha:0.569},0).wait(1).to({rotation:143.3,x:145.7,y:61.2,alpha:0.553},0).wait(1).to({rotation:146.3,x:144.6,y:62,alpha:0.537},0).wait(1).to({rotation:149.2,x:143.5,y:62.7,alpha:0.521},0).wait(1).to({rotation:152.1,x:142.4,y:63.3,alpha:0.505},0).wait(1).to({rotation:155,x:141.3,y:64,alpha:0.489},0).wait(1).to({rotation:157.4,x:138.9,y:65.5,alpha:0.473},0).wait(1).to({rotation:159.8,x:137.5,y:69.3,alpha:0.457},0).wait(1).to({rotation:162.2,x:135,y:70,alpha:0.441},0).wait(1).to({rotation:164.6,x:131.5,y:69.7,alpha:0.425},0).wait(1).to({rotation:167.1,x:128,y:69.4,alpha:0.409},0).wait(1).to({rotation:169.5,x:124.4,y:69.1,alpha:0.393},0).wait(1).to({rotation:171.9,x:121,y:69,alpha:0.377},0).wait(1).to({rotation:174.3,x:118,y:69.6,alpha:0.361},0).wait(1).to({rotation:176.7,x:120,y:69.5,alpha:0.345},0).wait(1).to({rotation:179.1,x:124,y:71,alpha:0.329},0).wait(1).to({rotation:181.5,x:120.3,y:71.6,alpha:0.313},0).wait(1).to({rotation:183.9,x:119.2,y:74.4,alpha:0.297},0).wait(1).to({rotation:186.4,x:116.6,y:76.1,alpha:0.281},0).wait(1).to({rotation:188.8,x:112.9,y:77.6,alpha:0.265},0).wait(1).to({rotation:191.2,x:109.4,y:79.1,alpha:0.25},0).wait(1).to({rotation:193.6,x:105.8,y:80.5,alpha:0.234},0).wait(1).to({rotation:196,x:102.8,y:81.8,alpha:0.218},0).wait(1).to({alpha:0.202},0).wait(1).to({alpha:0.186},0).wait(1).to({alpha:0.17},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.138},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0.074},0).wait(1).to({alpha:0.058},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.01},0).to({_off:true},1).wait(32));

	// dirt 
	this.instance_4 = new lib.dirt21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(190.7,82.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).wait(1).to({rotation:9.8,x:189.4,y:81.8,alpha:0.984},0).wait(1).to({rotation:19.6,x:188.1,y:80.8,alpha:0.968},0).wait(1).to({rotation:29.3,x:186.7,y:79.8,alpha:0.953},0).wait(1).to({rotation:39.1,x:185.4,y:78.8,alpha:0.937},0).wait(1).to({rotation:48.9,x:184.1,y:77.8,alpha:0.921},0).wait(1).to({rotation:58.7,x:182.8,y:76.8,alpha:0.905},0).wait(1).to({rotation:68.4,x:181.5,y:75.8,alpha:0.889},0).wait(1).to({rotation:78.2,x:180.2,y:74.8,alpha:0.874},0).wait(1).to({rotation:88,x:178.8,y:73.8,alpha:0.858},0).wait(1).to({rotation:90.9,x:177.5,y:72.3,alpha:0.842},0).wait(1).to({rotation:93.8,x:176.2,y:70.8,alpha:0.826},0).wait(1).to({rotation:96.7,x:174.9,y:69.3,alpha:0.81},0).wait(1).to({rotation:99.7,x:173.6,y:67.9,alpha:0.795},0).wait(1).to({rotation:102.6,x:172.3,y:66.4,alpha:0.779},0).wait(1).to({rotation:105.5,x:171,y:64.9,alpha:0.763},0).wait(1).to({rotation:108.4,x:169.7,y:63.4,alpha:0.747},0).wait(1).to({rotation:111.3,x:168.4,y:62,alpha:0.731},0).wait(1).to({rotation:114.2,x:166.6,y:60.5,alpha:0.715},0).wait(1).to({rotation:117.1,x:164.7,y:59.2,alpha:0.7},0).wait(1).to({rotation:120,x:162.8,y:57.9,alpha:0.684},0).wait(1).to({rotation:123,x:160.8,y:56.8,alpha:0.668},0).wait(1).to({rotation:125.9,x:158.7,y:55.8,alpha:0.652},0).wait(1).to({rotation:128.8,x:156.6,y:55.1,alpha:0.636},0).wait(1).to({rotation:131.7,x:154.4,y:54.6,alpha:0.621},0).wait(1).to({rotation:134.6,x:152.1,y:54.4,alpha:0.605},0).wait(1).to({rotation:137.5,x:149.8,y:54.7,alpha:0.589},0).wait(1).to({rotation:140.4,x:147.6,y:55.5,alpha:0.573},0).wait(1).to({rotation:143.3,x:145.7,y:56.6,alpha:0.557},0).wait(1).to({rotation:146.3,x:143.9,y:58.1,alpha:0.542},0).wait(1).to({rotation:149.2,x:142.4,y:59.9,alpha:0.526},0).wait(1).to({rotation:152.1,x:141.1,y:61.7,alpha:0.51},0).wait(1).to({rotation:155,x:140,y:63.8,alpha:0.494},0).wait(1).to({rotation:157.4,x:139.4,y:64.7,alpha:0.478},0).wait(1).to({rotation:159.8,x:138.7,y:65.6,alpha:0.463},0).wait(1).to({rotation:162.2,x:138.2,y:66.5,alpha:0.447},0).wait(1).to({rotation:164.6,x:137.6,y:67.6,alpha:0.431},0).wait(1).to({rotation:167.1,x:136.9,y:68.8,alpha:0.415},0).wait(1).to({rotation:169.5,x:136.7,y:69.4,alpha:0.399},0).wait(1).to({rotation:171.9,x:136.4,y:70.6,alpha:0.384},0).wait(1).to({rotation:174.3,x:136.1,y:71.8,alpha:0.368},0).wait(1).to({rotation:176.7,x:135.7,y:72.9,alpha:0.352},0).wait(1).to({rotation:179.1,x:135.3,y:74,alpha:0.336},0).wait(1).to({rotation:181.5,x:134.8,y:75.1,alpha:0.32},0).wait(1).to({rotation:183.9,x:134.7,y:75.8,alpha:0.305},0).wait(1).to({rotation:186.4,x:134.5,y:77.1,alpha:0.289},0).wait(1).to({rotation:188.8,x:134.3,y:78.3,alpha:0.273},0).wait(1).to({rotation:191.2,x:134.1,y:79.5,alpha:0.257},0).wait(1).to({rotation:193.6,x:133.9,y:80.7,alpha:0.241},0).wait(1).to({rotation:196,x:133.8,y:81.7,alpha:0.225},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.194},0).wait(1).to({alpha:0.178},0).wait(1).to({alpha:0.162},0).wait(1).to({alpha:0.146},0).wait(1).to({alpha:0.131},0).wait(1).to({alpha:0.115},0).wait(1).to({alpha:0.099},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.052},0).wait(1).to({alpha:0.036},0).wait(1).to({alpha:0.02},0).to({_off:true},1).wait(32));

	// desert warrios
	this.instance_5 = new lib.desertWarriors();
	this.instance_5.parent = this;
	this.instance_5.setTransform(490,48.5,1,1,0,0,0,110,11.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).to({alpha:0.359},5).to({alpha:1},9).wait(1));

	// soilder
	this.instance_6 = new lib.soldier_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(586.3,38.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(100).to({_off:false},0).wait(1).to({regX:-174,regY:6,x:412.3,y:44.4,alpha:0.015},0).wait(1).to({alpha:0.03},0).wait(1).to({alpha:0.045},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.074},0).wait(1).to({alpha:0.089},0).wait(1).to({alpha:0.104},0).wait(1).to({alpha:0.119},0).wait(1).to({alpha:0.134},0).wait(1).to({alpha:0.148},0).wait(1).to({alpha:0.163},0).wait(1).to({alpha:0.178},0).wait(1).to({alpha:0.193},0).wait(1).to({alpha:0.208},0).wait(1).to({alpha:0.223},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.252},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.282},0).wait(1).to({alpha:0.297},0).wait(1).to({alpha:0.312},0).wait(1).to({alpha:0.327},0).wait(1).to({alpha:0.342},0).wait(1).to({alpha:0.356},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.386},0).wait(1).to({alpha:0.401},0).wait(1).to({alpha:0.416},0).wait(1).to({alpha:0.431},0).wait(1).to({alpha:0.445},0).wait(1).to({alpha:0.46},0).wait(1).to({alpha:0.475},0).wait(1).to({alpha:0.49},0).wait(1));

	// kickstart
	this.instance_7 = new lib.kickStart();
	this.instance_7.parent = this;
	this.instance_7.setTransform(376.3,9.5,1,1,0,0,0,-139.5,-2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(95).to({_off:false},0).wait(39));

	// tank
	this.instance_8 = new lib.tank_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(95.5,55.5,1,1,0,0,0,95.5,34.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(100).to({_off:false},0).to({alpha:1},33).wait(1));

	// blackbootStill
	this.instance_9 = new lib.Leg();
	this.instance_9.parent = this;
	this.instance_9.setTransform(275.6,7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({_off:false},0).wait(1).to({regX:0.5,x:277.7},0).wait(1).to({x:279.4},0).wait(1).to({x:281.1},0).wait(1).to({x:282.7},0).wait(1).to({x:284.4},0).wait(1).to({x:286.1},0).wait(1).to({x:287.7},0).wait(1).to({x:289.4},0).wait(1).to({x:291.1},0).wait(1).to({x:292.8},0).wait(1).to({rotation:-0.5,x:294.4},0).wait(1).to({rotation:-1,x:296.1},0).wait(1).to({rotation:-1.5,x:297.8},0).wait(1).to({rotation:-2,x:299.4},0).wait(1).to({rotation:-2.5,x:301.1},0).wait(1).to({rotation:-3,x:302.8,y:6.9},0).wait(1).to({rotation:-3.5,x:304.5},0).wait(1).to({rotation:-4,x:306.1},0).wait(1).to({rotation:-4.5,x:307.8},0).wait(1).to({rotation:-5,x:309.5},0).wait(1).to({rotation:-4.7,x:311.1},0).wait(1).to({rotation:-4.5,x:312.8},0).wait(1).to({rotation:-4.2,x:314.5},0).wait(1).to({rotation:-4,x:316.2},0).wait(1).to({rotation:-3.7,x:317.8},0).wait(1).to({rotation:-3.5,x:319.5},0).wait(1).to({rotation:-3.2,x:321.2},0).wait(1).to({rotation:-3,x:322.8},0).wait(1).to({rotation:-2.7,x:324.5,y:7},0).wait(1).to({rotation:-2.5,x:326.2},0).wait(1).to({rotation:-2.2,x:327.9},0).wait(1).to({rotation:-2,x:329.5},0).wait(1).to({rotation:-1.7,x:331.2},0).wait(1).to({rotation:-1.5,x:332.9},0).wait(1).to({rotation:-1.2,x:334.5},0).wait(1).to({rotation:-1,x:336.2},0).wait(1).to({rotation:-0.7,x:337.9},0).wait(1).to({rotation:-0.5,x:339.5},0).wait(1).to({rotation:-0.2,x:341.2},0).wait(1).to({rotation:0,x:342.9},0).wait(1).to({x:344.6},0).wait(1).to({x:346.2},0).wait(1).to({x:347.9},0).wait(1).to({x:349.6},0).wait(1).to({x:351.2},0).wait(1).to({x:352.9},0).wait(1).to({x:354.6},0).wait(1).to({x:356.3},0).wait(1).to({x:357.9},0).wait(1).to({x:359.6},0).wait(1).to({x:415.8},0).wait(1).to({x:472},0).wait(1).to({x:528.2},0).wait(1).to({x:584.4},0).wait(1).to({x:640.6},0).wait(1).to({x:696.8},0).wait(1).to({x:752.9},0).wait(1).to({x:809.2},0).wait(1).to({x:865.4},0).wait(1).to({x:921.6},0).wait(16).to({_off:true},1).wait(18));

	// blackBoot
	this.instance_10 = new lib.bootMc();
	this.instance_10.parent = this;
	this.instance_10.setTransform(273,46.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(39).to({_off:false},0).wait(1).to({regX:-0.5,x:274.2},0).wait(1).to({x:275.8},0).wait(1).to({x:277.5},0).wait(1).to({x:279.2},0).wait(1).to({x:280.9},0).wait(1).to({x:282.5},0).wait(1).to({x:284.2},0).wait(1).to({x:285.9},0).wait(1).to({x:287.5},0).wait(1).to({x:289.2},0).wait(1).to({x:290.9},0).wait(1).to({x:292.6},0).wait(1).to({x:294.2},0).wait(1).to({x:295.9},0).wait(1).to({x:297.6},0).wait(1).to({x:299.2},0).wait(1).to({x:300.9},0).wait(1).to({x:302.6},0).wait(1).to({x:304.2},0).wait(1).to({x:305.9},0).wait(1).to({x:307.6},0).wait(1).to({x:309.3},0).wait(1).to({x:310.9},0).wait(1).to({x:312.6},0).wait(1).to({x:314.3},0).wait(1).to({x:315.9},0).wait(1).to({x:317.6},0).wait(1).to({x:319.3},0).wait(1).to({x:321},0).wait(1).to({x:322.6},0).wait(1).to({x:324.3},0).wait(1).to({x:326},0).wait(1).to({x:327.6},0).wait(1).to({x:329.3},0).wait(1).to({x:331},0).wait(1).to({x:332.7},0).wait(1).to({x:334.3},0).wait(1).to({x:336},0).wait(1).to({x:337.7},0).wait(1).to({x:339.3},0).wait(1).to({x:341},0).wait(1).to({x:342.7},0).wait(1).to({x:344.4},0).wait(1).to({x:346},0).wait(1).to({x:347.7},0).wait(1).to({x:349.4},0).wait(1).to({x:351},0).wait(1).to({x:352.7},0).wait(1).to({x:354.4},0).wait(1).to({x:356.1},0).wait(1).to({x:412.3},0).wait(1).to({x:468.5},0).wait(1).to({x:524.7},0).wait(1).to({x:580.9},0).wait(1).to({x:637.1},0).wait(1).to({x:693.3},0).wait(1).to({x:749.4},0).wait(1).to({x:805.7},0).wait(1).to({x:861.9},0).wait(1).to({x:918.1},0).wait(16).to({_off:true},1).wait(18));

	// motorcyleFrame
	this.instance_11 = new lib.motorCycle();
	this.instance_11.parent = this;
	this.instance_11.setTransform(275.9,-4.3,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(39).to({regX:0,regY:0,x:276.1,y:-4.2},0).wait(1).to({regX:0.5,x:278.3},0).wait(1).to({x:279.9},0).wait(1).to({x:281.6},0).wait(1).to({x:283.3},0).wait(1).to({x:285},0).wait(1).to({x:286.6},0).wait(1).to({x:288.3},0).wait(1).to({x:290},0).wait(1).to({x:291.6},0).wait(1).to({x:293.3},0).wait(1).to({rotation:-0.5,x:295},0).wait(1).to({rotation:-1,x:296.7},0).wait(1).to({rotation:-1.5,x:298.3},0).wait(1).to({rotation:-2,x:300},0).wait(1).to({rotation:-2.5,x:301.7},0).wait(1).to({rotation:-3,x:303.3,y:-4.3},0).wait(1).to({rotation:-3.5,x:305},0).wait(1).to({rotation:-4,x:306.7},0).wait(1).to({rotation:-4.5,x:308.3},0).wait(1).to({rotation:-5,x:310},0).wait(1).to({rotation:-4.7,x:311.7},0).wait(1).to({rotation:-4.5,x:313.4},0).wait(1).to({rotation:-4.2,x:315},0).wait(1).to({rotation:-4,x:316.7},0).wait(1).to({rotation:-3.7,x:318.4},0).wait(1).to({rotation:-3.5,x:320},0).wait(1).to({rotation:-3.2,x:321.7},0).wait(1).to({rotation:-3,x:323.4},0).wait(1).to({rotation:-2.7,x:325.1,y:-4.2},0).wait(1).to({rotation:-2.5,x:326.7},0).wait(1).to({rotation:-2.2,x:328.4},0).wait(1).to({rotation:-2,x:330.1},0).wait(1).to({rotation:-1.7,x:331.7},0).wait(1).to({rotation:-1.5,x:333.4},0).wait(1).to({rotation:-1.2,x:335.1},0).wait(1).to({rotation:-1,x:336.8},0).wait(1).to({rotation:-0.7,x:338.4},0).wait(1).to({rotation:-0.5,x:340.1},0).wait(1).to({rotation:-0.2,x:341.8},0).wait(1).to({rotation:0,x:343.4},0).wait(1).to({x:345.1},0).wait(1).to({x:346.8},0).wait(1).to({x:348.5},0).wait(1).to({x:350.1},0).wait(1).to({x:351.8},0).wait(1).to({x:353.5},0).wait(1).to({x:355.1},0).wait(1).to({x:356.8},0).wait(1).to({x:358.5},0).wait(1).to({x:360.2},0).wait(1).to({x:416.4},0).wait(1).to({x:472.6},0).wait(1).to({x:528.8},0).wait(1).to({x:585},0).wait(1).to({x:641.2},0).wait(1).to({x:697.4},0).wait(1).to({x:753.5},0).wait(1).to({x:809.8},0).wait(1).to({x:866},0).wait(1).to({x:922.2},0).wait(16).to({_off:true},1).wait(18));

	// frontTire
	this.instance_12 = new lib.frontTire();
	this.instance_12.parent = this;
	this.instance_12.setTransform(397.1,34.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(39).to({x:395.3,y:33.1},0).wait(1).to({rotation:0.8,x:396.9,y:32.2},0).wait(1).to({rotation:1.6,x:398.6,y:31.4},0).wait(1).to({rotation:2.3,x:400.3,y:30.6},0).wait(1).to({rotation:3.1,x:402,y:29.8},0).wait(1).to({rotation:3.9,x:403.6,y:28.9},0).wait(1).to({rotation:4.7,x:405.3,y:28.1},0).wait(1).to({rotation:5.4,x:407,y:27.3},0).wait(1).to({rotation:6.2,x:408.7,y:26.5},0).wait(1).to({rotation:7,x:410.3,y:25.6},0).wait(1).to({rotation:7.8,x:412,y:24.8},0).wait(1).to({rotation:8.8,x:413.7,y:24},0).wait(1).to({rotation:9.8,x:415.4,y:23.2},0).wait(1).to({rotation:10.8,x:417,y:22.4},0).wait(1).to({rotation:11.8,x:418.7,y:21.5},0).wait(1).to({rotation:12.8,x:420.4,y:20.7},0).wait(1).to({rotation:13.8,x:422.1,y:19.9},0).wait(1).to({rotation:14.9,x:423.7,y:19.1},0).wait(1).to({rotation:15.9,x:425.4,y:18.2},0).wait(1).to({rotation:16.9,x:427.1,y:17.4},0).wait(1).to({rotation:17.9,x:428.8,y:16.6},0).wait(1).to({rotation:18.3,x:430.6,y:17.2},0).wait(1).to({rotation:18.7,x:432.4,y:17.7},0).wait(1).to({rotation:19.1,x:434.2,y:18.3},0).wait(1).to({rotation:19.6,x:436,y:18.8},0).wait(1).to({rotation:20,x:437.9,y:19.4},0).wait(1).to({rotation:20.4,x:439.7,y:19.9},0).wait(1).to({rotation:20.8,x:441.5,y:20.5},0).wait(1).to({rotation:21.2,x:443.3,y:21},0).wait(1).to({rotation:21.7,x:445.1,y:21.6},0).wait(1).to({rotation:22.1,x:447,y:22.2},0).wait(1).to({rotation:22.5,x:448.8,y:22.7},0).wait(1).to({rotation:22.9,x:450.6,y:23.3},0).wait(1).to({rotation:23.3,x:452.4,y:23.8},0).wait(1).to({rotation:23.8,x:454.3,y:24.4},0).wait(1).to({rotation:24.2,x:456.1,y:24.9},0).wait(1).to({rotation:24.6,x:457.9,y:25.5},0).wait(1).to({rotation:25,x:459.7,y:26},0).wait(1).to({rotation:25.4,x:461.5,y:26.6},0).wait(1).to({rotation:25.9,x:463.4,y:27.1},0).wait(1).to({rotation:26.3,x:465.2,y:27.7},0).wait(1).to({rotation:30.9,x:467,y:28.3},0).wait(1).to({rotation:35.4,x:468.8,y:28.8},0).wait(1).to({rotation:40,x:470.6,y:29.4},0).wait(1).to({rotation:44.6,x:472.5,y:29.9},0).wait(1).to({rotation:49.1,x:474.3,y:30.5},0).wait(1).to({rotation:53.7,x:476.1,y:31},0).wait(1).to({rotation:58.3,x:477.9,y:31.6},0).wait(1).to({rotation:62.9,x:479.8,y:32.1},0).wait(1).to({rotation:67.4,x:481.6,y:32.7},0).wait(1).to({rotation:72,x:483.4,y:33.3},0).wait(1).to({rotation:93.2,x:539.3},0).wait(1).to({rotation:114.3,x:595.2},0).wait(1).to({rotation:135.5,x:651.1},0).wait(1).to({rotation:156.7,x:707.1},0).wait(1).to({rotation:177.9,x:763,y:33.4},0).wait(1).to({rotation:199,x:818.9},0).wait(1).to({rotation:220.2,x:874.7},0).wait(1).to({rotation:241.4,x:930.7},0).wait(1).to({rotation:262.6,x:986.6},0).wait(1).to({rotation:283.7,x:1042.6,y:33.5},0).wait(16).to({_off:true},1).wait(18));

	// backTire
	this.instance_13 = new lib.backTire();
	this.instance_13.parent = this;
	this.instance_13.setTransform(191.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({rotation:5,x:193.1,y:36.7},0).wait(1).to({rotation:10,x:194.8,y:37},0).wait(1).to({rotation:15.1,x:196.5,y:37.2},0).wait(1).to({rotation:20.1,x:198.1,y:37.4},0).wait(1).to({rotation:25.1,x:199.8,y:37.6},0).wait(1).to({rotation:30.1,x:201.5,y:37.9},0).wait(1).to({rotation:35.2,x:203.1,y:38.1},0).wait(1).to({rotation:40.2,x:204.8,y:38.3},0).wait(1).to({rotation:45.2,x:206.5,y:38.5},0).wait(1).to({rotation:50.2,x:208.2,y:38.8},0).wait(1).to({rotation:62.7,x:209.8,y:39},0).wait(1).to({rotation:75.2,x:211.5,y:39.2},0).wait(1).to({rotation:87.7,x:213.2,y:39.4},0).wait(1).to({rotation:100.1,x:214.8,y:39.6},0).wait(1).to({rotation:112.6,x:216.5,y:39.9},0).wait(1).to({rotation:125.1,x:218.2,y:40.1},0).wait(1).to({rotation:137.6,x:219.9,y:40.3},0).wait(1).to({rotation:150,x:221.5,y:40.6},0).wait(1).to({rotation:162.5,x:223.2,y:40.8},0).wait(1).to({rotation:175,x:224.9,y:41},0).wait(1).to({rotation:182.3,x:226.5,y:40.9},0).wait(1).to({rotation:189.5,x:228.2,y:40.7},0).wait(1).to({rotation:196.8,x:229.9,y:40.6},0).wait(1).to({rotation:204,x:231.6,y:40.4},0).wait(1).to({rotation:211.3,x:233.2,y:40.3},0).wait(1).to({rotation:218.5,x:234.9,y:40.1},0).wait(1).to({rotation:225.8,x:236.6,y:40},0).wait(1).to({rotation:233,x:238.2,y:39.8},0).wait(1).to({rotation:240.3,x:239.9,y:39.7},0).wait(1).to({rotation:247.5,x:241.6,y:39.5},0).wait(1).to({rotation:254.8,x:243.2,y:39.4},0).wait(1).to({rotation:262,x:244.9,y:39.2},0).wait(1).to({rotation:269.3,x:246.6,y:39.1},0).wait(1).to({rotation:276.5,x:248.3,y:38.9},0).wait(1).to({rotation:283.8,x:249.9,y:38.8},0).wait(1).to({rotation:291,x:251.6,y:38.6},0).wait(1).to({rotation:298.3,x:253.3,y:38.5},0).wait(1).to({rotation:305.5,x:254.9,y:38.3},0).wait(1).to({rotation:312.8,x:256.6,y:38.2},0).wait(1).to({rotation:320,x:258.3,y:38},0).wait(1).to({rotation:327.6,x:260,y:37.9},0).wait(1).to({rotation:335.2,x:261.6,y:37.7},0).wait(1).to({rotation:342.8,x:263.3,y:37.6},0).wait(1).to({rotation:350.4,x:265,y:37.4},0).wait(1).to({rotation:358,x:266.6,y:37.3},0).wait(1).to({rotation:365.6,x:268.3,y:37.1},0).wait(1).to({rotation:373.2,x:270,y:37},0).wait(1).to({rotation:380.8,x:271.7,y:36.8},0).wait(1).to({rotation:388.4,x:273.3,y:36.7},0).wait(1).to({rotation:396,x:275,y:36.5},0).wait(1).to({rotation:422.5,x:331.2},0).wait(1).to({rotation:449,x:387.4},0).wait(1).to({rotation:475.5,x:443.6},0).wait(1).to({rotation:502,x:499.8},0).wait(1).to({rotation:528.5,x:556},0).wait(1).to({rotation:555,x:612.2},0).wait(1).to({rotation:581.5,x:668.3},0).wait(1).to({rotation:608,x:724.6},0).wait(1).to({rotation:634.5,x:780.8},0).wait(1).to({rotation:661,x:837},0).wait(16).to({_off:true},1).wait(18));

	// smoke
	this.instance_14 = new lib.Smoke4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(173.5,22.8);
	this.instance_14._off = true;
	this.instance_14.filters = [new cjs.BlurFilter(25, 25, 1)];
	this.instance_14.cache(-17,-12,34,24);

	this.instance_15 = new lib.Smoke5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(173.5,19.6);
	this.instance_15._off = true;
	this.instance_15.filters = [new cjs.BlurFilter(25, 25, 1)];
	this.instance_15.cache(-12,-10,25,20);

	this.instance_16 = new lib.Smoke();
	this.instance_16.parent = this;
	this.instance_16.setTransform(159.5,24.6);
	this.instance_16._off = true;
	this.instance_16.filters = [new cjs.BlurFilter(25, 25, 1)];
	this.instance_16.cache(-37,-23,74,46);

	this.instance_17 = new lib.Smoke2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(226.9,12.6);
	this.instance_17._off = true;
	this.instance_17.filters = [new cjs.BlurFilter(25, 25, 1)];
	this.instance_17.cache(-38,-23,77,46);

	this.instance_18 = new lib.Smoke3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(243.9,12.1);
	this.instance_18._off = true;
	this.instance_18.filters = [new cjs.BlurFilter(25, 25, 1)];
	this.instance_18.cache(-30,-16,61,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(9).to({_off:false},0).wait(1).to({scaleY:1.02,skewY:-3.5,x:167.3,y:22.1,alpha:0.964},0).wait(1).to({scaleY:1.05,skewY:-7.1,x:161.1,y:21.5,alpha:0.927},0).wait(1).to({scaleY:1.07,skewY:-10.6,x:154.9,y:20.8,alpha:0.891},0).wait(1).to({scaleY:1.09,skewY:-14.2,x:148.7,y:20.1,alpha:0.855},0).wait(1).to({scaleY:1.12,skewY:-17.7,x:142.5,y:19.5,alpha:0.818},0).wait(1).to({scaleY:1.14,skewY:-21.3,x:136.3,y:18.8,alpha:0.782},0).wait(1).to({scaleY:1.16,skewY:-24.8,x:130.2,y:18.1,alpha:0.745},0).wait(1).to({scaleY:1.19,skewY:-28.4,x:124,y:17.5,alpha:0.709},0).wait(1).to({scaleY:1.21,skewY:-31.9,x:117.8,y:16.8,alpha:0.673},0).wait(1).to({scaleY:1.24,skewY:-35.5,x:111.6,y:16.1,alpha:0.636},0).wait(1).to({scaleY:1.26,skewY:-39,x:105.4,y:15.5,alpha:0.6},0).wait(1).to({scaleX:0.97,scaleY:1.27,x:99.8,y:13.7,alpha:0.593},0).wait(1).to({scaleX:0.94,scaleY:1.29,x:94.3,y:11.9,alpha:0.586},0).wait(1).to({scaleX:0.91,scaleY:1.31,x:88.7,y:10.2,alpha:0.579},0).wait(1).to({scaleX:0.87,scaleY:1.33,x:83.1,y:8.4,alpha:0.571},0).wait(1).to({scaleX:0.84,scaleY:1.34,x:77.5,y:6.6,alpha:0.564},0).wait(1).to({scaleX:0.81,scaleY:1.36,x:72,y:4.9,alpha:0.557},0).wait(1).to({scaleX:0.78,scaleY:1.38,x:66.4,y:3.1,alpha:0.55},0).wait(1).to({scaleX:0.75,scaleY:1.39,x:60.8,y:1.4,alpha:0.543},0).wait(1).to({scaleX:0.71,scaleY:1.41,x:55.3,y:-0.4,alpha:0.536},0).wait(1).to({scaleX:0.68,scaleY:1.43,skewY:-39.1,x:49.7,y:-2.2,alpha:0.529},0).wait(1).to({scaleX:0.65,scaleY:1.45,x:44.1,y:-3.9,alpha:0.521},0).wait(1).to({scaleX:0.62,scaleY:1.46,x:38.5,y:-5.7,alpha:0.514},0).wait(1).to({scaleX:0.59,scaleY:1.48,x:33,y:-7.4,alpha:0.507},0).wait(1).to({scaleX:0.56,scaleY:1.5,x:27.4,y:-9.2,alpha:0.5},0).to({_off:true},1).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(35).to({_off:false},0).wait(1).to({scaleY:1.26,skewY:-39,x:84.5,y:5.6,alpha:0.6},0).wait(1).to({scaleX:0.78,scaleY:1.38,x:58,y:-8.9,alpha:0.55},0).wait(1).to({scaleX:0.56,scaleY:1.5,skewY:-39.1,x:31.5,y:-23.4,alpha:0.5},0).to({_off:true},1).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(39).to({_off:false},0).wait(1).to({scaleY:1.01,skewY:-2,x:150.1,y:23.2,alpha:0.98},0).wait(1).to({scaleY:1.03,skewY:-3.9,x:140.8,y:21.9,alpha:0.96},0).wait(1).to({scaleY:1.04,skewY:-5.9,x:131.5,y:20.5,alpha:0.94},0).wait(1).to({scaleY:1.05,skewY:-7.8,x:122.2,y:19.2,alpha:0.92},0).wait(1).to({scaleY:1.07,skewY:-9.8,x:112.9,y:17.8,alpha:0.9},0).wait(1).to({scaleY:1.08,skewY:-11.7,x:103.6,y:16.5,alpha:0.88},0).wait(1).to({scaleY:1.09,skewY:-13.7,x:94.3,y:15.1,alpha:0.86},0).wait(1).to({scaleY:1.1,skewY:-15.6,x:85,y:13.8,alpha:0.84},0).wait(1).to({scaleY:1.12,skewY:-17.6,x:75.7,y:12.4,alpha:0.82},0).wait(1).to({scaleY:1.13,skewY:-19.5,x:66.4,y:11.1,alpha:0.8},0).wait(1).to({scaleY:1.14,skewY:-21.5,x:57.1,y:9.7,alpha:0.78},0).wait(1).to({scaleY:1.16,skewY:-23.4,x:47.8,y:8.4,alpha:0.76},0).wait(1).to({scaleY:1.17,skewY:-25.4,x:38.5,y:7,alpha:0.74},0).wait(1).to({scaleY:1.18,skewY:-27.3,x:29.2,y:5.7,alpha:0.72},0).wait(1).to({scaleY:1.19,skewY:-29.3,x:19.9,y:4.3,alpha:0.7},0).wait(1).to({scaleY:1.21,skewY:-31.2,x:10.6,y:3,alpha:0.68},0).wait(1).to({scaleY:1.22,skewY:-33.2,x:1.3,y:1.6,alpha:0.66},0).wait(1).to({scaleY:1.23,skewY:-35.1,x:-8,y:0.3,alpha:0.64},0).wait(1).to({scaleY:1.25,skewY:-37.1,x:-17.3,y:-1.1,alpha:0.62},0).wait(1).to({scaleY:1.26,skewY:-39,x:-26.6,y:-2.4,alpha:0.6},0).wait(1).to({scaleX:0.98,scaleY:1.27,x:-33.6,y:-6.1,alpha:0.595},0).wait(1).to({scaleX:0.95,scaleY:1.28,x:-40.6,y:-9.7,alpha:0.589},0).wait(1).to({scaleX:0.93,scaleY:1.3,x:-47.6,y:-13.3,alpha:0.584},0).wait(1).to({scaleX:0.91,scaleY:1.31,x:-54.6,y:-17,alpha:0.579},0).wait(1).to({scaleX:0.88,scaleY:1.32,x:-61.6,y:-20.6,alpha:0.574},0).wait(1).to({scaleX:0.86,scaleY:1.33,x:-68.6,y:-24.2,alpha:0.568},0).wait(1).to({scaleX:0.84,scaleY:1.35,x:-75.6,y:-27.9,alpha:0.563},0).wait(1).to({scaleX:0.81,scaleY:1.36,x:-82.6,y:-31.5,alpha:0.558},0).wait(1).to({scaleX:0.79,scaleY:1.37,x:-89.6,y:-35.1,alpha:0.553},0).wait(1).to({scaleX:0.77,scaleY:1.38,x:-96.6,y:-38.8,alpha:0.547},0).wait(1).to({scaleX:0.74,scaleY:1.4,x:-103.6,y:-42.4,alpha:0.542},0).wait(1).to({scaleX:0.72,scaleY:1.41,x:-110.6,y:-46,alpha:0.537},0).wait(1).to({scaleX:0.7,scaleY:1.42,skewY:-39.1,x:-117.6,y:-49.7,alpha:0.532},0).wait(1).to({scaleX:0.67,scaleY:1.43,x:-124.6,y:-53.3,alpha:0.526},0).wait(1).to({scaleX:0.65,scaleY:1.45,x:-131.6,y:-56.9,alpha:0.521},0).wait(1).to({scaleX:0.63,scaleY:1.46,x:-138.6,y:-60.6,alpha:0.516},0).wait(1).to({scaleX:0.6,scaleY:1.47,x:-145.6,y:-64.2,alpha:0.511},0).wait(1).to({scaleX:0.58,scaleY:1.48,x:-152.6,y:-67.8,alpha:0.505},0).wait(1).to({scaleX:0.56,scaleY:1.5,x:-159.6,y:-71.4,alpha:0.5},0).to({_off:true},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(79).to({_off:false},0).wait(1).to({scaleY:1.07,skewY:-9.8,x:213.9,y:15.1,alpha:0.9},0).wait(1).to({scaleY:1.13,skewY:-19.5,x:200.9,y:17.6,alpha:0.8},0).wait(1).to({scaleY:1.19,skewY:-29.3,x:187.9,y:20.1,alpha:0.7},0).wait(1).to({scaleY:1.26,skewY:-39,x:174.9,y:22.6,alpha:0.6},0).wait(1).to({scaleX:0.91,scaleY:1.31,x:157.3,y:13.4,alpha:0.58},0).wait(1).to({scaleX:0.82,scaleY:1.35,x:139.7,y:4.2,alpha:0.56},0).wait(1).to({scaleX:0.73,scaleY:1.4,x:122.1,y:-5,alpha:0.54},0).wait(1).to({scaleX:0.64,scaleY:1.45,skewY:-39.1,x:104.5,y:-14.2,alpha:0.52},0).wait(1).to({scaleX:0.56,scaleY:1.5,x:86.9,y:-23.4,alpha:0.5},0).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(89).to({_off:false},0).wait(1).to({scaleY:1.07,skewY:-9.8,x:227.8,y:12.3,alpha:0.9},0).wait(1).to({scaleY:1.13,skewY:-19.5,x:211.7,y:12.6,alpha:0.8},0).wait(1).to({scaleY:1.19,skewY:-29.3,x:195.6,y:12.8,alpha:0.7},0).wait(1).to({scaleY:1.26,skewY:-39,x:179.5,y:13,alpha:0.6},0).wait(1).to({scaleX:0.93,scaleY:1.3,x:163,y:7.9,alpha:0.583},0).wait(1).to({scaleX:0.85,scaleY:1.34,x:146.6,y:2.7,alpha:0.567},0).wait(1).to({scaleX:0.78,scaleY:1.38,x:130.2,y:-2.4,alpha:0.55},0).wait(1).to({scaleX:0.7,scaleY:1.42,x:113.8,y:-7.6,alpha:0.533},0).wait(1).to({scaleX:0.63,scaleY:1.46,skewY:-39.1,x:97.4,y:-12.7,alpha:0.517},0).wait(1).to({scaleX:0.56,scaleY:1.5,x:81,y:-17.9,alpha:0.5},0).wait(6).to({alpha:0.455},0).wait(1).to({alpha:0.411},0).wait(1).to({alpha:0.366},0).wait(1).to({alpha:0.322},0).wait(1).to({alpha:0.277},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.144},0).wait(1).to({alpha:0.099},0).wait(1).to({alpha:0.055},0).wait(1).to({alpha:0.01},0).to({_off:true},1).wait(18));

	// boot Back
	this.instance_19 = new lib.boot3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(245.8,49.4,1,1,0,0,0,18.7,25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({regX:18.2,x:246.6,y:49.1},0).wait(1).to({x:247.9,y:48.9},0).wait(1).to({x:249.2,y:48.7},0).wait(1).to({x:250.5,y:48.5},0).wait(1).to({x:251.8,y:48.3},0).wait(1).to({x:253.1,y:48.1},0).wait(1).to({x:254.4,y:47.9},0).wait(1).to({x:255.8,y:47.7},0).wait(1).to({x:257.1,y:47.5},0).wait(1).to({x:258.4,y:47.3},0).wait(1).to({x:259.7,y:47.1},0).wait(1).to({x:261,y:46.9},0).wait(1).to({x:262.3,y:46.7},0).wait(1).to({x:263.6,y:46.5},0).wait(1).to({x:265,y:46.3},0).wait(1).to({x:266.3,y:46.1},0).wait(1).to({x:267.6,y:45.9},0).wait(1).to({x:268.9,y:45.7},0).wait(1).to({x:270.2,y:45.5},0).wait(1).to({x:271.5,y:45.3},0).wait(1).to({x:272.8,y:45.1},0).wait(1).to({x:274.1,y:44.9},0).wait(1).to({x:275.5,y:44.7},0).wait(1).to({x:276.8,y:44.5},0).wait(1).to({x:278.1,y:44.2},0).wait(1).to({x:279.4,y:44},0).wait(1).to({x:280.7,y:43.8},0).wait(1).to({x:282,y:43.6},0).wait(1).to({x:283.3,y:43.4},0).wait(1).to({x:284.7,y:43.2},0).wait(1).to({x:286,y:43},0).wait(1).to({x:287.3,y:42.8},0).wait(1).to({x:288.6,y:42.6},0).wait(1).to({x:289.9,y:42.4},0).wait(1).to({x:291.2,y:42.2},0).wait(1).to({x:292.5,y:42},0).wait(1).to({x:293.9,y:41.8},0).wait(1).to({x:295},0).wait(1).to({x:296.1},0).wait(1).to({x:297.3},0).wait(1).to({x:298.4},0).wait(1).to({x:299.6},0).wait(1).to({x:300.7},0).wait(1).to({x:301.9},0).wait(1).to({x:303},0).wait(1).to({x:304.2},0).wait(1).to({x:305.3},0).wait(1).to({x:306.5},0).wait(1).to({x:307.6},0).wait(1).to({x:308.8},0).wait(1).to({x:309.9},0).wait(1).to({x:311.1},0).wait(1).to({x:312.2},0).wait(1).to({x:313.4},0).wait(1).to({x:314.5},0).wait(1).to({x:315.7},0).wait(1).to({x:316.8},0).wait(1).to({x:318},0).wait(1).to({x:319.1},0).wait(1).to({x:320.3},0).wait(1).to({x:321.4},0).wait(1).to({x:322.6},0).wait(1).to({x:323.7},0).wait(1).to({x:324.9},0).wait(1).to({x:326},0).wait(1).to({x:327.2},0).wait(1).to({x:328.3},0).wait(1).to({x:329.5},0).wait(1).to({x:330.6},0).wait(1).to({x:331.8},0).wait(1).to({x:332.9},0).wait(1).to({x:334.1},0).wait(1).to({x:335.2},0).wait(1).to({x:336.4},0).wait(1).to({x:337.5},0).wait(1).to({x:338.7},0).wait(1).to({x:339.8},0).wait(1).to({x:341},0).wait(1).to({x:342.1},0).wait(1).to({x:343.3},0).wait(1).to({x:344.4},0).wait(1).to({x:345.5},0).wait(1).to({x:346.7},0).wait(1).to({x:347.8},0).wait(1).to({x:349},0).wait(1).to({x:350.1},0).wait(1).to({x:351.3},0).wait(1).to({x:352.4},0).wait(1).to({x:353.6},0).wait(1).to({x:415.5},0).wait(1).to({x:474.5},0).wait(1).to({x:535.5},0).wait(1).to({x:585.5},0).wait(1).to({x:640.5},0).wait(1).to({x:697.5},0).wait(1).to({x:764.5},0).wait(1).to({x:806.5},0).wait(1).to({x:860.5},0).wait(1).to({x:910.5},0).wait(16).to({_off:true},1).wait(18));

	// bg desert
	this.instance_20 = new lib.bg_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(364,45,1,1,0,0,0,364,43.9);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(89).to({_off:false},0).wait(1).to({regY:45,y:46.1,alpha:0.023},0).wait(1).to({alpha:0.045},0).wait(1).to({y:46,alpha:0.068},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.114},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.159},0).wait(1).to({y:45.9,alpha:0.182},0).wait(1).to({alpha:0.205},0).wait(1).to({alpha:0.227},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.273},0).wait(1).to({y:45.8,alpha:0.295},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.341},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.386},0).wait(1).to({y:45.7,alpha:0.409},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.477},0).wait(1).to({y:45.6,alpha:0.5},0).wait(1).to({alpha:0.523},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.568},0).wait(1).to({alpha:0.591},0).wait(1).to({y:45.5,alpha:0.614},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.659},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.705},0).wait(1).to({y:45.4,alpha:0.727},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.773},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.818},0).wait(1).to({y:45.3,alpha:0.841},0).wait(1).to({alpha:0.864},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.932},0).wait(1).to({y:45.2,alpha:0.955},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:1},0).wait(1));

	// front dirt
	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#333300","#292900","#000000"],[0,0.353,1],-0.2,-8.9,-0.2,27).s().p("Eg43ABrIAAhxIAFgaQBgATCkARQFJAjFagHUAPRgARAumgBVICBgEQP6gZJGgGQHOgEC9AJIAADPg");
	this.shape_181.setTransform(364,79.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_181).wait(134));

	// bg 
	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#333300","#669966"],[0,1],2,-12.8,2.1,55).s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_182.setTransform(364,45);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#666666").ss(1,1,1).p("AAAAFIAAgJ");
	this.shape_183.setTransform(727,-0.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#333300","#669966"],[0,1],2,-12.8,2.1,55).s().p("Eg43AHCIAAuDMBxkAAAIALAAIAAODg");
	this.shape_184.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_182}]}).to({state:[{t:this.shape_184},{t:this.shape_183}]},104).to({state:[{t:this.shape_184},{t:this.shape_183}]},10).to({state:[{t:this.shape_182}]},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,-17.2,728,153.2);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 50,
	color: "#666666",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1501173583244", id:"bg"},
		{src:"images/KickStart_atlas_P_.png?1501173583093", id:"KickStart_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;