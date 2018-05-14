(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
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


(lib.Expo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mirros
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAABtIAAguIAAgPIAAgfIAAg/IAAg+");
	this.shape.setTransform(-129.2,-66.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhAAIIANgdQAXggAygNQAMgDAQABQAPAAAAACQABCJgDgBIh/AA");
	this.shape_1.setTransform(-122.8,-78.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAKBoYAAAAgBgOgBgUYAAgVgBgbgBgaYAAgbAAgcAAgUYAAgKAAgJAAgGYAAgDgBgCABgCYABgBADgBAAAAIgTAAYAAAAADABABABYABACgBACAAADYAAAGAAAJAAAKYAAAUAAAcAAAbYgBAagBAbAAAVYgBAUgBAOAAAAYAAAFAEAFAFAAYAFAAAFgEAAgGYAAAAAAAAAAAA");
	this.shape_2.setTransform(129.3,-66.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,1).p("AUbikIgOAAIgaAAQgoAAAAAoIAAD5QAAAoAoAAIAoAAQAoAAAAgoIAAj5QAAgogoAAgA0aikIAOAAIAaAAQAZAAAJAPQAGAKAAAPIAAD5QAAAogoAAIgoAAQgoAAAAgoIAAj5QAAgPAGgKQAKgPAYAAg");
	this.shape_3.setTransform(0,-45.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABGAFIgNgcIAAAAYAAgBgBAAAAAAYgDgFgEgEgEgEYgCgDgDgBgCgCYgCgCgCgCgDgCYgFgDgFgDgFgDYgFgCgFgDgGgCYgEgCgGgCgFgBIgEgBYgCgBgBAAgCAAIgIgBYgGgBgGAAgGAAYgDAAgDAAgDABYgBAAgCAAgCABYAAAAgCABgBAAYAAAAgBACgBACYAAAAAAAAAAABIAAAAIAAAAIAAACIAABCIAAAiIAAARIABAIIAAAFIAAACIAAACIABABYAAAAAAABAAAAIABABYAAAAAAAAABABYABABAEAAABgBIgDABIA/AAIAgAAYALAAAKAAALgBYADAAACgCAAgDYAAgDgCgBgDgBYgLAAgKAAgLAAIggAAIg/AAIgDABYABgBAEAAABABYABABAAAAAAAAIAAAAYABABAAAAAAAAIAAAAIAAAAIAAgCIAAgEIgBgIIAAgRIAAgiIAAhCIAAgCIAAAAIAAAAYAAAAAAAAAAABYAAABgCABAAAAYAAABgBAAABAAYAAAAACgBABAAYACAAADAAADAAYAFAAAFAAAFAAIAIABIAEABIAEABYAFACAGABAFACYAEACAFACAFADYAEACAFADAEADYADABACACACACYACABACACACACYADADAEAFADAEIgBgBIAOAcYABADADABACgBYADgBABgDgBgD");
	this.shape_4.setTransform(122.7,-78.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ATyClQgoAAABgoIAAj5QgBgoAoAAIAaAAIAPAAQAoAAgBAoIAAD5QABAogoAAgAUMhnIAAg9gA0aClQgoAAABgoIAAj5QgBgQAHgJQAJgPAYAAIAPAAIAAAPIAAAuIAAguIAAgPIAaAAQAYAAAKAPQAFAJAAAQIAAD5QABAogoAAgA0Likg");
	this.shape_5.setTransform(0,-45.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// M
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAIALIAYBEIAdhPIACBoIAqAAIAAjPIg3AAgAhmBmIgCjMIAzAAIBKDIIABAEIglABIgCgFIgphnIAABtg");
	this.shape_6.setTransform(-0.6,101.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA/BoIgChoIgdBPIgYhEIAqhyIA3AAIAADPgAhmBmIgCjMIAzAAIBKDIIABAEIglABIgCgFIgphnIAABtg");
	this.shape_7.setTransform(-0.6,101.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// circle
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ah+B+Qg0g0AAhKQAAhJA0g1QA1g0BJAAQBKAAA0A0QA1A1AABJQAABKg1A0Qg0A1hKAAQhJAAg1g1g");
	this.shape_8.setTransform(-0.5,101.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// side grey L
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#999999").ss(1,1,1).p("AhWWrQAZgMAZgMQAxgZABgBQACgDAEgRQAFgaAAgDQALg1ASjEQAQi9ABgIQAPifABjqQAEowhJvrIgPjDIhZjNIAAGQIAAYbIAANHg");
	this.shape_9.setTransform(-119.1,30.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AhWVIIAAtHIAA4bIAAmQIBZDNIAPDDQBJPrgEIwQgBDqgPCfIgRDFQgSDEgLA1IgFAdQgEARgCADQgBABgxAZIgyAYg");
	this.shape_10.setTransform(-119.1,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// side yellow L
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFF00").ss(1,1,1).p("AilzJIBQjLQBVjLAYAAQAZAAA9CVQAeBLAaBLMgACAoZIhFAAQgKgBgWCnQgZC6gKAbIgoAAIg6AAg");
	this.shape_11.setTransform(-111.2,7.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AgMZgIg6AAMgBfgspIBQjLQBVjLAYAAQAZAAA9CVQAeBLAaBLMgACAoZIhFAAQgJgBgYCnQgZC6gIAbg");
	this.shape_12.setTransform(-111.2,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// side grey R
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#999999").ss(1,1,1).p("ABXWrQgZgMgZgMQgxgZgBgBQgCgDgEgRQgFgaAAgDQgLg1gSjEQgQi9gBgIQgPifgBjqQgEowBJvrIAPjDIBZjNIAAGQIAAYbIAANHg");
	this.shape_13.setTransform(119.2,30.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AAlWTQgxgZgBgBQgCgDgEgRIgFgdQgLg1gSjEIgRjFQgPifgBjqQgEowBJvrIAPjDIBZjNIAAGQIAAYbIAANHIAABjIgygYg");
	this.shape_14.setTransform(119.2,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// sides yellow R
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFF00").ss(1,1,1).p("ACmzJIhQjLQhVjLgYAAQgZAAg9CVQgeBLgaBLMAACAoZIBFAAQAKgBAWCnQAZC6AKAbIAoAAIA6AAg");
	this.shape_15.setTransform(111.4,7.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF00").s().p("AAMZgIgnAAQgJgbgZi6QgYingJABIhFAAMgACgoZQAahLAehLQA9iVAZAAQAYAABVDLIBQDLMgBfAspg");
	this.shape_16.setTransform(111.4,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// black strip
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AuzA4IAAhvIdnAAIAABvg");
	this.shape_17.setTransform(0.1,39.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

	// window
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2,1,1).p("AwBrdMAgDAAAIAAW7MggDAAAg");
	this.shape_18.setTransform(7.9,-39.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AwBLeIAA27MAgCAAAIAAW7g");
	this.shape_19.setTransform(7.9,-39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).wait(1));

	// head lights
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF3300").ss(1,1,1).p("ANEheIhsAAIAAA1IBsAAgANEAqIhsAAIAAA1IBsAAgAtDAqIBsAAIAAA1IhsAAgAtDheIBsAAIAAA1IhsAAg");
	this.shape_20.setTransform(-0.7,85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("ANwjmIAAAJIAAFcIjyBHQi0AugjgTQgLgGAEgNQADgMAEgMQAfhhAhhLQAqhgAagMQAYgLCXg9QBcglAkgOQAVgJABAAgAtvjmIAAFlIDyBHQDvA9gRg1QgihwglhUQgqhggagMQgYgLiXg9QiUg8gCAAg");
	this.shape_21.setTransform(-0.7,88.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AIAAqQgKAAABgKIAAg/QgBgKAKAAIB7AAQAJAAABAKIAAA/QgBAKgJAAgAp5AqQgKAAAAgKIAAg/QAAgKAKAAIB5AAQAKAAAAAKIAAA/QAAAKgKAAg");
	this.shape_22.setTransform(-0.7,100.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF3300").s().p("ALYBfIAAg1IBrAAIAAA1gAtDBfIAAg1IBsAAIAAA1gALYgpIAAg0IBrAAIAAA0gAtDgpIAAg0IBsAAIAAA0g");
	this.shape_23.setTransform(-0.7,85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AGnDhQgLgGADgNIAIgYQAfhhAghLQArhgAagMQAYgLCXg9IB/gzIAXgJIAAAJIAAFcIjyBHQiAAhg3AAQgWAAgKgGgAH3BXIAABBQgBAKAKAAIB7AAQAJAAABgKIAAhBQgBgKgJAAIh7AAQgKAAABAKgALYA3IBrAAIAAg0IhrAAgALYhQIBrAAIAAg1IhrAAgAp9DGIjyhHIAAllICWA8QCXA9AZALQAZAMAqBgQAlBUAiBwQAIAZgwAAQg2AAiAghgAqDBXIAABBQAAAKAKAAIB5AAQAKAAAAgKIAAhBQAAgKgKAAIh5AAQgKAAAAAKgAtDA3IBsAAIAAg0IhsAAgAtDhQIBsAAIAAg1IhsAAg");
	this.shape_24.setTransform(-0.7,88.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	// top head light
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#333333").ss(1,1,1).p("ABqAAQAAAsgfAfQgfAfgsAAQgrAAgfgfQgfgfAAgsQAAgrAfgfQAOgOARgIQARgHASgBQAFgBADAAQAGAAAGABQARABAPAHQARAIAOAOQAfAfAAArg");
	this.shape_25.setTransform(0.9,-126.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhKBLQgfgfAAgsQAAgrAfgfQAPgPAQgHQAQgHATgCIAIAAIALAAQARACAQAHQARAHAOAPQAfAfAAArQAAAsgfAfQgfAfgsAAQgrAAgfgfg");
	this.shape_26.setTransform(0.9,-126.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAACeIgIAAIighxIA9jHIDQgDIBEDEIieB3IgLAAg");
	this.shape_27.setTransform(0.9,-152.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).wait(1));

	// front
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(7,1,1).p("AOfiQQg8Bni/BPQkWB2mLAAQmKAAkXh2QjIhTg4hu");
	this.shape_28.setTransform(-0.9,62.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFF00").ss(1,1,1).p("AOrloQD8B4AACfQAAC8leCEQlcCFntAAQnsAAldiFQldiEAAi8QAAinETh7");
	this.shape_29.setTransform(-2,84.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AuhDwQgWgrAAgvQAAhrB0hWQBAgwBigpQEYh1GJAAQGLAAEWB1QBjApBAAwQB0BWAABrQAAA1gcAw");
	this.shape_30.setTransform(-0.6,23.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF00").s().p("AtJDvQldiFAAi6QABioESh7QA4BuDJBUQEXB1GJAAQGLAAEWh1QC/hQA8hnQD9B4AACgQAAC6leCFQlcCFntAAQnsAAldiFg");
	this.shape_31.setTransform(-2,84.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6D6D6D").s().p("AqhEbQjIhUg4htQgWgrAAgvQAAhqB0hYQBAgvBigqQEYh0GJgBQGLABEWB0QBiAqBBAvQB0BYAABqQAAA0gcAwQg8Bni/BQQkWB1mLAAQmJAAkYh1g");
	this.shape_32.setTransform(-0.6,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).wait(1));

	// hitch
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AiWBFQgSgBAAgSIAAhjQAAgSASgBIEtAAQARABABASIAABjQgBASgRABg");
	this.shape_33.setTransform(-0.8,148.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CCCCCC").s().p("AkHB4QggAAAAggIAAivQAAggAgAAIIPAAQAgAAAAAgIAACvQAAAgggAAgAiogxIAABjQAAASASABIEtAAQARgBABgSIAAhjQgBgSgRgBIktAAQgSABAAASg");
	this.shape_34.setTransform(-0.8,148.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33}]}).wait(1));

	// bottom line
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#999999").ss(1,2,1).p("AwsAAMAhZAAA");
	this.shape_35.setTransform(5.3,122);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// bottom
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Az+G8IAAt3MAn9AAAIAAN3g");
	this.shape_36.setTransform(0.1,120.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(1));

	// top front
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#999999").ss(1,1,1).p("AvhAoQhHgqghhDQgag0AAg4QAAg8BUgyQBTg0ClgqQFNhTHUAAQDHAACtAPQDuAUDAAwQFMBTAAB2QAAA/gZA2QgiBIhMAvQBzA4AABGQAAB1lMBTQi4AujiAVQi2AQjRAAQnVAAlNhTQlMhTAAh1QAAhPCWg/QACACADACQBIgeBpgaQFNhTHVAAQDRAAC2ARQDiAUC4AuQCEAgBPAnQADgCADgB");
	this.shape_37.setTransform(-1,-129);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6D6D6D").s().p("AsgDGQlNhUABh0QgBhPCVg+IAGADQBIgeBqgaQFLhTHVgBQDRABC3AQQDiAUC4AvQCEAgBPAnIAGgDQByA5ABBFQgBB0lLBUQi4AujiAUQi3ARjRAAQnVAAlLhTg");
	this.shape_38.setTransform(-2,-110.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AMOC+Qi4gujigUQi3gRjQAAQnWAAlLBTQhqAbhIAeIgGgEQhGgrghhDQgag0AAg4QAAg6BTgzQBUg0CmgqQFLhTHVAAQDGAACuAPQDtAUDAAwQFNBTAAB1QgBA/gYA2QgiBJhMAvIgGADQhPgniEghg");
	this.shape_39.setTransform(0,-149.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Expo, new cjs.Rectangle(-136.6,-176.5,273.3,353.2), null);


// stage content:
(lib.MetroExpo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_120 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(120).call(this.frame_120).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(149.5,299.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(121));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4A3QgQgVAAghQAAgmAUgVQAVgWAfAAQAhAAAUAXQAUAXAAAuIhnAAQABASAJAKQAKALANAAQAKAAAGgGQAHgFADgMIApAHQgIAXgRAMQgRALgZAAQgoAAgTgagAgUgnQgJAKAAARIA9AAQgBgSgJgJQgIgKgNAAQgMAAgJAKg");
	this.shape_1.setTransform(215,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAeBPIAAhPQAAgYgDgHQgDgIgFgEQgHgEgIAAQgKAAgIAGQgIAGgDAKQgEAJAAAZIAABGIgpAAIAAiaIAmAAIAAAXQAVgbAeABQAOAAAKAEQAMAFAGAIQAFAHADAKQACAKAAASIAABfg");
	this.shape_2.setTransform(197.7,27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUBrIAAiaIApAAIAACagAgUhEIAAgmIApAAIAAAmg");
	this.shape_3.setTransform(184.3,24.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhKBqIAAjTIArAAIAACvIBrAAIAAAkg");
	this.shape_4.setTransform(171.6,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgoBIQgTgKgKgTQgKgSAAgaQAAgVAKgTQAKgTATgKQASgKAWAAQAjAAAXAXQAWAXAAAiQAAAjgWAXQgXAXgjAAQgUAAgUgJgAgagiQgLAMAAAWQAAAXALAMQALANAPAAQAQAAALgNQALgMAAgXQAAgWgLgMQgLgNgQAAQgPAAgLANg");
	this.shape_5.setTransform(144.3,27.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhLBtIAAjVIAmAAIAAAWQAIgMANgHQAMgHAPAAQAbAAATAVQATAVAAAmQAAAngTAVQgTAVgbAAQgMAAgLgEQgKgGgMgMIAABOgAgYhAQgKAMAAAWQAAAbAKALQALANAOAAQAOAAAJgMQAKgKAAgbQAAgYgKgMQgKgMgOABQgOAAgKALg");
	this.shape_6.setTransform(126.3,30.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAeBOIgegwIggAwIgwAAIA4hPIg2hMIAzAAIAbArIAcgrIAwAAIg1BKIA6BRg");
	this.shape_7.setTransform(108.3,27.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhRBrIAAjVICeAAIAAAkIhzAAIAAAvIBrAAIAAAkIhrAAIAAA6IB3AAIAAAkg");
	this.shape_8.setTransform(90.4,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(121));

	// expo
	this.instance = new lib.Expo();
	this.instance.parent = this;
	this.instance.setTransform(150.3,229,0.093,0.093);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},120,cjs.Ease.get(1)).wait(1));

	// Layer 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("Aytg/MAlbAAAIAAB/MglbAAAg");
	this.shape_9.setTransform(150.2,411.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AytBAIAAh/MAlbAAAIAAB/g");
	this.shape_10.setTransform(150.2,411.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(121));

	// rail
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AyoMjIRB4+IgFACIDcAAIgEgCIIeMeIEPGQICIDIYAtBDAtBCAuBDYABACADAAADgBYACgCAAgDgBgCYgthDgthDgthCIiIjIIkPmPIoesfYgBgCgCgBgCAAIjcAAYgCAAgBABgBACIxAY+YgBACAAADACACYADABADAAABgC");
	this.shape_11.setTransform(150.1,325.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AysMgIRA4/IDcAAIQ9Y/g");
	this.shape_12.setTransform(150.1,325.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148.5,298.5,302,602);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;