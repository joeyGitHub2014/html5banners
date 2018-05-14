(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"MacDonalds_atlas_", frames: [[0,93,728,90],[730,0,174,148],[0,0,728,91],[0,185,728,90]]}
];


// symbols:



(lib.banner_logo = function() {
	this.spriteSheet = ss["MacDonalds_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bigmac2 = function() {
	this.spriteSheet = ss["MacDonalds_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["MacDonalds_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.endframeTet = function() {
	this.spriteSheet = ss["MacDonalds_atlas_"];
	this.gotoAndStop(3);
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


(lib.yougetafree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC32F").s().p("AaGFlIg2g3IAxkYIA3g2IC8AAIA1A0IgOBQIhTAAIAKg1IgSgRIhdAAIgUATIgnDiIAUAUIBaAAIATgTIAJg2IBTAAIgOBRIg1A2gAXCFlIgHhYIh9AAIgmBYIhTAAICvmFIB5AAIApGFgAW2DNIgOi7IhPC7IBdAAgAQ9FlIA7lOIiSFOIhhAAIgalOIg7FOIhHAAIBFmFIB+AAIAYE+ICLk+ICCAAIhFGFgAEWFlIg3g3IAykYIA2g2IDEAAIAzAzIgLBBIhTAAIAHgpIgOgNIhmAAIgVATIgnDjIATAUIBjAAIARgQIANhMIhSAAIAMg7ICkAAIgcCeIg2A2gAhAFlIAKg7IA+AAIAwkPIg+AAIAKg7IDRAAIgKA7IhAAAIgvEPIA/AAIgKA7gAmqFlIBGmFIDrAAIAzAyIgRBcIgyAzIAkAkIgTBuIgzAygAlMErIB2AAIAPgRIAPhQIgQgOIhwAAgAktCAIBzAAIARgSIAMhGIgPgOIhvAAgAudFlIBGmOIEAAAIgLA/IgHAAIAAgBIikAAIgSBmICbAAIgLA/IicAAIgTBrICtAAIgLBAgAzrFlIBGmOIEBAAIgMA+IirAAIgSBmICcAAIgLA/IidAAIgSBrICtAAIgMBAgA1+FlIgdieIhhAAIgbCeIhVAAIBHmOIDuAAIA2A1IgVB4Ig4A5IAVBrIAfAAIgLA9gA3xCKIB1AAIAUgTIAOhUIgSgSIhvAAgA+oFlIBGmOID6AAIgLA+IimAAIgUBuICXAAIgKA/IiYAAIgcCjgALEiDIgEg0IhIAAIgWA0IgwAAIBljhIBGAAIAYDhgAK9jbIgIhsIguBsIA2AAgAGdiDIAhi7Ig+AAIAHgmICqAAIgHAmIg9AAIggC7gACyiDIApjhICQAAIgHAjIhgAAIgLA6IBZAAIgHAjIhYAAIgLA9IBiAAIgHAkgAABiDIgfgfIAciiIAfggIBxAAIAeAdIgHAnIgxAAIAFgYIgIgJIg7AAIgMAMIgWCDIALALIA5AAIAJgJIAIgrIgvAAIAGgjIBfAAIgQBcIgfAfgAkMiDIgggfIAjjCIAvAAIgfCxIALALIA2AAIALgLIAfixIAwAAIgjDCIgfAfgAnXiDIgggfIAciiIAgggIBwAAIAfAgIgcCiIggAfgAmuk1IgXCDIALALIA5AAIAMgLIAWiDIgLgMIg4AAgAqAiDIAMhFIgqicIAyAAIAYBsIBBhsIAxAAIhiCcIgMBFg");
	this.shape.setTransform(359.1,44.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.yougetafree, new cjs.Rectangle(0,0,728,90), null);


(lib.whentheravens = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0B82D").s().p("ATSF0IgxiUIg/BGIgOBOIhJAAIA9lYIBJAAIggCyICPiyIBUAAIh5CQIBGDIgAL8F0IgwgwIArj4IAxgwICmAAIAwAuIgNBHIhJAAIAIgvIgQgPIhSAAIgSARIgjDIIASARIBQAAIARgRIAJgvIBJAAIgNBIIgwAvgAJPF0IgHhOIhuAAIghBOIhKAAICalYIBsAAIAkFYgAJEDuIgNimIhGCmIBTAAgAB9F0IgtgtIAJg5IBKAAIgHAlIAMALIBXAAIANgNIALg+IgHgHIh9gUIgogoIAShmIAvguICjAAIAuAtIgLA5IhJAAIAHgkIgNgMIhUAAIgMAMIgKA7IAGAGIB9AVIApAnIgTBqIgwAvgAikF0IgGhOIhvAAIghBOIhJAAICalYIBrAAIAkFYgAiuDuIgNimIhGCmIBTAAgAq1F0IAzkeIheAAIAKg6IEDAAIgKA6IhcAAIgzEegAwcF0IA9lYIDdAAIgKA3IiTAAIgQBXICGAAIgJA3IiHAAIgQBcICWAAIgKA3gA0zF0IgwgwIArj4IAxgwICsAAIAuAtIgLA6IhJAAIAHglIgNgLIhaAAIgSARIgjDIIARASIBYAAIAPgOIALhDIhIAAIAKg1ICRAAIgZCNIgwAvgAePgaIgtgtIAKg6IBKAAIgGAkIALAMIBXAAIANgNIALg+IgHgGIh9gVIgogoIAShlIAvgwICkAAIAtAtIgLA6IhJAAIAHgkIgMgNIhVAAIgMAOIgKA5IAHAHIB8AUIApApIgTBqIgvAvgAbOgaIhPjvIgrDvIhBAAIA9laIBMAAIBPDqIApjqIBCAAIg9FagATxgaIA9laIDdAAIgKA4IiUAAIgPBXICHAAIgKA3IiHAAIgQBdICVAAIgKA3gAQBgaIgZlaIBKAAIAPEhIB0khIBIAAIiQFagANdgaIgHhPIhuAAIghBPIhKAAICalaIBsAAIAkFagANSihIgNimIhGCmIBTAAgAIXgaIgZiJIhUAAIgXCJIhKAAIA9laIDOAAIAwAwIgTBnIgxAxIASBcIAbAAIgJA2gAG0jXIBlAAIARgRIAMhJIgPgQIhgAAgAhNgaIA9laIDdAAIgKA4IiUAAIgPBXICGAAIgKA3IiHAAIgPBdICVAAIgKA3gAjjgaIAYiJIhzAAIgYCJIhJAAIA9laIBJAAIgaCQIB0AAIAZiQIBJAAIg8FagAp5gaIAykfIheAAIALg7IEDAAIgKA7IheAAIgyEfgAvTgaIhPjvIgqDvIhCAAIA9laIBNAAIBODqIAqjqIBBAAIg9FagA2wgaIA9laIDeAAIgLA4IiTAAIgQBXICHAAIgKA3IiHAAIgQBdICWAAIgKA3gA5GgaIAYiJIh0AAIgXCJIhJAAIA8laIBJAAIgZCQIBzAAIAaiQIBJAAIg8FagA/IgaIgGkWIhgEWIhfAAIgClaIBGAAIgFEUIBekUIBcAAIAFEUIBUkUIA/AAIhyFag");
	this.shape.setTransform(364.6,45.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.whentheravens, new cjs.Rectangle(0,0,728,90), null);


(lib.ravens = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000016").s().p("AgNAcQgMgFgEgMQgFgLAGgMQAGgLAMgFQAMgEAMAFQAMAFAEAMQAFALgGAMQgGALgMAFQgGACgFAAQgGAAgHgDg");
	this.shape.setTransform(169.3,45.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAPQgGgPAIgOQAHgOASgGQAWgHATAMQgNgDgOAEQgQAGgIAOQgIAOAGAPQAFALAKAGQgWgFgIgSg");
	this.shape_1.setTransform(166.7,44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DA2128").s().p("AgYAuQgVgIgJgUQgIgTAKgTQAKgTAWgIQAWgHAWAJQAWAJAIATQAJATgLATQgKAUgWAHQgKADgKAAQgMAAgMgFg");
	this.shape_2.setTransform(167.2,44.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AD8505").s().p("AipgDQAnhQAkggQAlgjA0gQQAigLAWABQgcAugcBGIA5gCQBCABArAKQAkAIASAOQAPALAHATQAJAagMAbQgEAJgIALQhrAehZA3QgbAEgdAAIhGACQhCAEhJAIQAhhpAlhLgAgkAEQgdBBgXBIIBUgDQAeAAAcgMQAugSATgrQAYg1gSgdQgSgdguAAIhJAAg");
	this.shape_3.setTransform(108.2,45.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AD8505").s().p("AC4BJQALgIAKgOQAbgigUgfQgIgNgTgHQgSgGgXAAQgugCgqACQjiAIilAnQCQhFDggcQA6gIA9ACQAeABASADQBpAFAaAqQANAVgQAeQgLAXgoAXQgpAZgxAKIgtAKQAagLAQgNg");
	this.shape_4.setTransform(106.2,28.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#27318A").s().p("AguAtQAZg2AVgjQAhAAAKARQAKARgQAiQgEAIgFAHQgWAHgUgBg");
	this.shape_5.setTransform(116.1,32.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#27318A").s().p("Ag6A8QATg5Adg+IARAAQAiAAAMATQANAWgTAnQgJAVgRAOQgQAEgRAAg");
	this.shape_6.setTransform(108.8,50.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000016").s().p("AgPA3IAIgUQARglgLgSQgHgKgegLIgTgFIAMgXIA0AAQAiAAAMATQANAWgTAoQgVAtgzANQAGgGAEgJg");
	this.shape_7.setTransform(113.5,49.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000016").s().p("AgOAtIADgKQAOghgJgOQgJgMgegGQALgRAGgFIAjgBQAbADAJATQAJATgPAbQgPAagnANIADgJg");
	this.shape_8.setTransform(120.7,31.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhAhTQAegkA/gVQiEAHieAYIiDAXQBjhMDFgxQC/gwCKAOQDHAVgyBwQgLAagvAcQgwAdgzALQA1AHAaAjQAaAkgTApIgHANQhrAahdA1IgnAXIgPALIhqAFQg8ADhgANIgJABQBHj4BWhUg");
	this.shape_9.setTransform(102.7,40.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#27318A").s().p("ADwGRQAMguAkgoQAdggALgUIh5AhQAziTjWgMQhBgDhVAKIhIALQAegqBCgtIAMgIIAhgVIAGgDQBcgzBrgaIAHgOQATgpgagkQgagjg1gHQAzgLAwgdQAvgdALgZQAyhxjHgUQiJgOjAAvQjFAxhjBNICDgXQCegZCFgGQhAAVgeAjQhWBVhHD3IAJgBIhQANQAfgxAUg6QAqh3gzg0QgrgtiFATIh9AbQC0isEWg/QEmhDEgBWQDzBIBECNQAiBGgPA4QgIAAgNgIQgZgQgXgsQgWgogigVIgegMIAZABQAhAEAhAPQgSgcgugcQhbg2iGAFIA8APQBBAVAdAmQglgFg1ACQhpAGhSAqIBFgCQBRAFA4AmQghgCgrAHQhWAOguAwQBrgUBpANQA9AJA8ARQiFgPhjAZIB4AGQCEAOA9AjQjjgki5AvQg6AQgvAVIgjATQCFgmCGgEQBVgDBFALQg4ANAnAoQAcAcBCAjQALAZACALQAFAbgLATQgZAjghAUIgbAMQAQgqgJgpIgNghQgGARgSAXQgkAtg+AaQhDAcgjAsIgWAnQgBgPAGgXg");
	this.shape_10.setTransform(116.3,56.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhqB0QgCgKgLgaQhCgjgcgcQgngnA4gNQhFgLhVADQiGAFiFAlIAjgTQAvgVA6gPQC5gxDjAmQg9gliEgOIh4gGQB/gfCuAfQBbARB/ApIhSg8IBoAJIg4gtICAAUQCRAgBaA8QBoA8AgBMQAQAlgFAaQgzhpplhIQiBgOAFAfQADANAhAZQAhAYAmAQQgXgXAHgNIALgJQBDgFDGAdQDwAjB/A3QhWAUh6ABQgjAAiUgOQhzgKhWALIgygoQgOAjgTAXQALgTgFgbg");
	this.shape_11.setTransform(184.8,66.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000016").s().p("AgaHMQgShAAShGIhYATQAMgSAIgYQAOgwgbggQg7hEizATQg3AGg+AOIgyANQBSh/iuAWQg3AHhJAWIg+ATIAjgzQAng+AWg4QAbhFgUgkQgVgmhGACQhxADhwAhIhZAiQDvk0GZhVQCyglCvAQQCpAQCGA+QChBMBHBrIgHhCQAwAsAHBUQAYgRAKgdQAFAogJAjQBHgIBiARIgQAOQBOANA5AWQgdgBgdAKQB/AkBFAxQCGBeARBlQAIAygTAgQgagTgVAAQguAIgxAGQhhANhugGQh3gKg/gEQhtgFhkAQQgnAvhcAhIgKgoQg5AKgyAjQhOA1gWBgQgNgSgJggg");
	this.shape_12.setTransform(140.6,58.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AD8505").s().p("AA0IWQgQgRgPgdQgcg6AAhHIAAgNIhWANIAfgyQAJgOAEgPQAHgggVgPQgvgliQAVQh0ASh2AqIhQAcIAxhFQAKgNAHgTQALgZgEgQQgBgLgKgHQgWgOhSAPQhLANhSAcIhNAbIAuhDQA5hTAcg5QAPgeADgaQACgZgJgNQgWgehVAMQhYALh5AnIhpAlIhdAkIA+hNQCmjTDch/QCnhhC8grQC1gpC4ANQC0ANCXBAQB2AyBSBNIgHgxIA1A6QAjAoATA1IAhguIAIA8QACAMAAAPIgBAVQBAgHBbANIAvAHIgNANQAzAMAuASIA/AZIguAPQA+AZAwAcQBXAzAtBAQAjAxAIAzQADASAAAPQAAAtgQAgIgNAYIgYgNQgMgHgUgEQgngKgmAJQgvALhBAGQhqAIh1gLQiBgNieANQgxAvhdAiIgfALIgIgzQgtAQgkAkQgzA1gWBWIgMAvg");
	this.shape_13.setTransform(132.8,60.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA/IeQgSgTgPgdQgeg4gEhDIh8ASIBJh0QALgQgFgKQgDgHgIgDQgugRh0ASQhtARhrAmIi7BDIByiiQALgQABgFQADgIgCgFQgDgGgKgBQghACg0ALQg8ANg9AVIi2A/IBtieQA5hRAZg1QAVgvgTgNQgOgJguAHQhVAMh2AmIhnAjIjZBWICQi3QCqjZDjiCQCshkDBgsQC7gqC8ANQC8AOCbBCQBKAfBBAuIgKhNICBCSQATAUAPAaIAzhFIAVCjQA6gBBCAJIB3ARIgVAWIApAOICcA9Ig1ASIAdARQBfA5AzBGQAmA2AJA7QADATAAATQAAAigIAfQgGATgGALIgeA4Ig4geQgKgFgPgEQgfgHgcAHQgyALhCAGQhuAJh5gMQh5gLiTALQg0AthdAiIhJAbIgGgtQhCAtgZBkIgcBtg");
	this.shape_14.setTransform(129,62.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ravens, new cjs.Rectangle(0,0,258.1,124.7), null);


(lib.mcdlogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC325").s().p("AhGBIQgegdAAgrQAAgqAegdQAegdAoAAQAqAAAdAdQAeAdAAAqQAAArgeAdQgdAdgqAAQgpAAgdgdgAg6g9QgYAZAAAkQAAAkAYAZQAYAZAiAAQAjAAAYgZQAYgZAAgkQAAgkgYgZQgYgYgjAAQgiAAgYAYgAAfA7IgfgzIgUAAIAAAzIgSAAIAAh1IAtAAQApAAAAAhQAAAcgfAEIAhA0gAgUgGIAUAAQAOAAAGgDQAJgEAAgMQAAgSgZAAIgYAAg");
	this.shape.setTransform(488.4,348.4,1.656,1.656);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC325").s().p("AS/WJQAAxCiUsCQhGlshbjIQhejPhnAAQhnAAhfC/QhaC5hGFQQiULGAAPvImUAAQgBvuiUrHQhGlQhai5Qhfi/hmAAQhnAAheDPQhcDHhFFtQiVMCAARCImVAAQAApABHoPQBGn7B+mJQB+mJCjjXQCqjeC6gBQDSABC8EJQC2EAB/HIQB/nIC3kAQC8kJDTgBQC5ABCqDeQCjDXB+GJQB/GJBEH7QBIIPAAJAg");
	this.shape_1.setTransform(186.6,130.4,1.656,1.656);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhGBIQgegdAAgrQAAgqAegdQAegdAoAAQAqAAAdAdQAeAdAAAqQAAArgeAdQgdAdgqAAQgpAAgdgdgAg6g8QgYAYAAAkQAAAkAYAaQAYAYAiAAQAjAAAYgYQAYgaAAgkQAAgkgYgYQgYgagjAAQgiAAgYAagAAfA7IgfgzIgUAAIAAAzIgSAAIAAh2IAtAAQApAAAAAjQAAAcgfADIAhA0gAgUgGIATAAQAPAAAGgCQAJgFAAgMQAAgSgaAAIgXAAg");
	this.shape_2.setTransform(548.2,478.8,1.57,1.57);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhHBTQAZAAASgbQASgbAAglIg9AAIAAiMICQAAIAACMQAABAgrAvQgpAug8AAg");
	this.shape_3.setTransform(403.2,486.4,1.57,1.57);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBEmQgmgLgWgeQgMgTgFgdQgDgUABgqIAAjdIhFAAIAAhvIBFAAIAAhvICJAAIAABwIBdAAIAABvIheAAIAADNQAAAcAFALQAIAQAZABIAygDIAABxQgyAHgYAAQguAAgZgHg");
	this.shape_4.setTransform(500.3,519.7,1.57,1.57);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhEFJIAAnmICJAAIAAHmgAhEjaIAAhuICJAAIAABug");
	this.shape_5.setTransform(456.5,514.6,1.57,1.57);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhEFJIAAnmICJAAIAAHmgAhEjaIAAhuICJAAIAABug");
	this.shape_6.setTransform(296.1,514.6,1.57,1.57);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABID5IAAkRIgBgwQgBgQgEgIQgIgTgSgKQgQgJgWAAQgwAAgPAmQgJAXAAA8IAAEGIiNAAIAAnmICOAAIAAAsQAOgPAGgFQALgKAQgHQAngSAvAAQAyAAAiATQAlAUAOAjQANAfAAA8IAAFMg");
	this.shape_7.setTransform(349.4,527.2,1.57,1.57);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhID0IianmICTAAIBTFhIBPlhICQAAIiaHmg");
	this.shape_8.setTransform(240.2,528.1,1.57,1.57);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiwDEQhPhFAAh/QABh1BFhHQBKhMCBAIQCCAHA+BcQAuBEAABZQgBBpg5BGQhEBTiCAAQhsAAhEg+gAgGiPQgeACgUALQgTAMgPAWQgXAnAAA5QAAA9AcAnQAfAsA2AAQA3AAAfgpQAbgmABg8QAAhTgngmQgdgcgpAAIgLABg");
	this.shape_9.setTransform(164.4,528,1.57,1.57);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhFFJIAAqRICLAAIAAKRg");
	this.shape_10.setTransform(104,514.6,1.57,1.57);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ADPD5IAAj+QABhBgGgSQgIgagXgMQgOgGgPAAQgbAAgTAPQgTAOgEAZQgEAQABAvIAAEIIiKAAIAAkfQAAgxgNgUQgJgLgPgHQgPgHgQAAQgVAAgSALQgUAOgHAdQgEARAAAiIAAEUIiLAAIAAnmICLAAIAAA0QAUgaAXgNQAngYA1AAQAzAAAhASQAVALAaAbQAdgZAXgLQAngUAxAAQA1AAAmAXQAdATAOAcQAIASACAcQACATAAAuIAAE8g");
	this.shape_11.setTransform(7.6,527.2,1.57,1.57);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhIBTQAaAAARgbQASgbAAglIg9AAIAAiMICQAAIAACMQAABAgqAvQgpAug9AAg");
	this.shape_12.setTransform(-67.3,486.4,1.57,1.57);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhEFJIAAnmICJAAIAAHmgAhEjaIAAhuICJAAIAABug");
	this.shape_13.setTransform(-98.9,514.6,1.57,1.57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcdlogo, new cjs.Rectangle(-109.7,-104.3,673.8,672.8), null);


(lib.mcdapp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCC50E").s().p("AglAnQgRgQAAgXQAAgWARgQQAQgQAVAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgVAAgQgQgAgfggQgNANAAATQAAAUANANQANAOASAAQATAAANgOQANgNAAgUQAAgTgNgNQgNgOgTAAQgSAAgNAOgAARAgIgRgcIgKAAIAAAcIgKAAIAAg/IAYAAQAWAAAAASQAAAPgRACIASAcgAgKgDIAKAAQAIAAADgBQAFgCAAgHQAAgKgOAAIgMAAg");
	this.shape.setTransform(305.6,183.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhtCFIAAgqIAfAAIAAiyIgZAAIAAgqIBSAAIAAAXQAYgaAdAAQAkAAAVAdQAUAdABAlQgBAogVAaQgVAagkAAQgdAAgXgXIAAA7IAkAAIAAAqgAgLhJQgKAMAAAYQAAAVAKANQAKAMAQAAQAQAAAJgKQALgNgBgYQABgYgLgLQgJgMgRAAQgOAAgLAMg");
	this.shape_1.setTransform(278.5,233);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhtCFIAAgqIAfAAIAAiyIgZAAIAAgqIBSAAIAAAXQAXgaAeAAQAkAAAUAdQAWAcAAAmQgBAngVAbQgVAagkAAQgdAAgXgXIAAA7IAjAAIAAAqgAgLhJQgKALAAAZQAAAWAKAMQAJAMARAAQAPAAAKgKQAKgMAAgZQAAgYgKgLQgJgMgRAAQgOAAgLAMg");
	this.shape_2.setTransform(256.1,233);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHCCIAAgsIAgAAIgMgtIhCAAIgOAtIAjAAIAAAsIhzAAIAAgsIAgAAIAyirIgiAAIAAgsICoAAIAAAsIgjAAIA3CrIAfAAIAAAsgAgbADIAsAAIgVhNg");
	this.shape_3.setTransform(232.5,225.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiLCCIAAgsIAoAAIAAirIgoAAIAAgsIB8AAQAnAAAWAFQAXAFAXAQQAUAQAOAcQANAcAAAgQAAAZgJAaQgJAZgNAPQgOAPgTAJQgUAJgPACQgNADgiAAgAggBWIARAAQAbAAASgIQARgHALgUQAKgSAAggQAAgdgKgUQgLgVgSgIQgRgIgbAAIgRAAg");
	this.shape_4.setTransform(195,225.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhCBEQgdgaAAgqQAAgrAcgZQAcgZAkAAQAcAAAaASIAAgPIAnAAIAABKIgpAAQgOgfgdAAQgTAAgLANQgMANAAAVQAAAYAMAMQANANAQAAQANAAANgIQANgJAHgMIAtATQgZA3g/AAQguAAgcgag");
	this.shape_5.setTransform(170.1,229.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA6CCIAAgsIAfAAIAAirIgFAAIhRDXIgbAAIhRjXIgHAAIAACrIAiAAIAAAsIhtAAIAAgsIAhAAIAAirIghAAIAAgsICCAAIA4CXIA5iXICEAAIAAAsIghAAIAACrIAhAAIAAAsg");
	this.shape_6.setTransform(140.3,225.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCC50E").s().p("AKbMKQAApXhSmmQhRmnhzAAQhzAAhSGHQhRGGAAInIjdAAQAAonhSmGQhRmHhzAAQhzAAhRGnQhSGmAAJXIjeAAQAAqECTnHQBFjYBah1QBdh6BlAAQB0AABnCRQBkCNBFD6QBGj6BkiNQBniRB0AAQBlAABdB6QBaB1BFDYQCTHHAAKEg");
	this.shape_7.setTransform(206.5,111.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#521917").s().p("AlQTxQjsAAhWgFQiBgJhkggQh3grhahaQhahZgrh3QgghlgIiAQgGhWAAjtIAAsuQAAjtAGhWQAIiAAghkQAviDBnheQg+BMghBbQggBkgJCBQgFBWAADsIAAMvQAADsAFBWQAJCBAgBkQArB3BaBaQBZBZB4AsQBkAfCAAJQBXAGDsAAIMvAAQDsAABVgGQCBgJBlgfQBrgnBUhOQhiB4iUA2QhkAgiBAJQhWAFjsAAg");
	this.shape_8.setTransform(198.7,142.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C22026").s().p("AmXVDQjsAAhWgGQiBgJhkgfQh3grhahaQhZhagsh3QgfhkgJiBQgGhWAAjsIAAsvQAAjsAGhWQAJiBAfhkQAsh3BZhaQBahZB3gsQBkgfCBgJQBWgGDsAAIMvAAQDsAABWAGQCBAJBkAfQB4AsBZBZQBaBaArB3QAfBkAJCBQAGBWAADsIAAMvQAADsgGBWQgJCBgfBkQgrB3haBaQhaBah3ArQhkAfiBAJQhWAGjsAAg");
	this.shape_9.setTransform(205.8,134.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACICXIAAi0QAAgPgEgLQgEgJgHgHQgIgGgIgDQgJgDgJAAQgIAAgJADQgKADgGAGQgIAGgEAKQgFALAAAOIAAC1IhJAAIAAi0QAAgPgEgLQgFgJgHgHQgIgGgIgDQgJgDgIAAQgJAAgJADQgJADgHAGQgHAHgFAJQgEALAAAPIAAC0IhLAAIAAkqIBJAAIAAAcQAPgPATgIQATgIAWAAQAZAAATAJQAUAKAOATQASgTAWgKQAVgJAcAAQAWAAATAHQATAGANAOQASARAIAWQAHAWAAAXIAAC+g");
	this.shape_10.setTransform(796.6,171.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3COQgWgLgOgPQgVgWgGgbQgHgcAAgnQAAgnAHgcQAHgbAUgVQAQgQAUgKQAWgLAhAAQAiAAAWALQAVAKAQAQQATAUAIAcQAGAaAAApQAAApgGAaQgHAcgUAVQgOAOgXAMQgYALggAAQgfAAgYgLgAghhIQgMAMgDATQgDATAAAWQAAAXADATQADAUAMAKQANAOAUAAQAWAAANgOQALgLADgTQADgTAAgXQAAgWgDgTQgDgSgLgNQgNgNgWAAQgUAAgNANg");
	this.shape_11.setTransform(758.6,171.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbCSQgXgHgUgSQgVgSgLgdQgNgeAAgsQAAgsANgeQALgcAVgTQATgRAYgHQAZgHAUAAQAeAAAZAKQAXAKAUAUIgzAzQgLgNgKgFQgMgGgOAAQgaAAgQAUQgHAJgFARQgFAQAAAXQABAuAQAUQAQATAaAAQAPAAALgFQAKgGALgMIAzAyQgTAUgYALQgZAKgeAAQgUAAgZgHg");
	this.shape_12.setTransform(733.6,171.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqArIAAhVIBVAAIAABVg");
	this.shape_13.setTransform(714,182.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah8DOIAAmXIBIAAIAAAcQAQgRARgIQASgHAXAAQAVAAATAHQAUAHAMANQAKAKAHAPQAGANADARQADANABAVIABAlIgBAkQgBATgDAOQgDAQgGAPQgGAOgLALQgNANgTAHQgTAHgVAAQgWAAgSgHQgQgGgPgRIAACIgAgaiDQgJAHgGALQgFANgCAOQgBAQAAASQAAASABAPQACAPAFAMQAGAMAJAGQALAHAPAAQAQAAALgHQAJgGAGgMQAFgMACgPQABgPAAgSQAAgSgBgQQgCgOgFgNQgFgLgKgHQgKgHgRAAQgQAAgKAHg");
	this.shape_14.setTransform(690.7,177.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ah7DOIAAmXIBIAAIAAAcQAQgSARgHQASgHAWAAQAVAAAUAHQATAHAMANQALAKAGAPQAGANADARQAEASAAAQIAABJQAAAQgEARQgDAQgGAPQgGAOgLALQgNANgSAHQgUAHgVAAQgWAAgRgHQgRgGgPgRIAACIgAgZiDQgKAHgFALQgGANgBAOQgCAQAAASQAAASACAPQABAPAGAMQAGAMAJAGQAKAHAPAAQAQAAALgHQAKgGAFgMQAFgKACgRQACgPAAgSQAAgSgCgQQgCgRgFgKQgFgLgKgHQgKgHgRAAQgQAAgJAHg");
	this.shape_15.setTransform(661.5,177.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABgDMIgXhJIiQAAIgZBJIhTAAICVmXIA9AAICVGXgAgxBBIBkAAIgxiUg");
	this.shape_16.setTransform(629.5,166.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiTDMIAAmXICTAAQApAAAeAPQAeANAWAgQAKAPAEANQAGAQACAPQADAUAAATIAABbQAAAUgDASQgCAQgGARQgFAOgJAOQgWAfgeAOQgeAOgpAAgAhDCFIA9AAQAmAAAUgZQAGgIADgIQADgGACgOIADhIIgDhGIgFgWQgDgHgGgHQgUgagmAAIg9AAg");
	this.shape_17.setTransform(596.4,166.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcCSQgXgHgUgSQgTgRgMgeQgNgcAAguQAAgtANgdQANgdASgSQAUgRAXgHQAZgHAUAAQAfAAAYAKQAZALATATIgyAzQgNgOgKgEQgLgGgPAAQgZAAgQAUQgIAKgEAQQgFAPAAAYQAAAtARAVQAQATAZAAQAQAAAKgFQAKgFANgNIAyAyQgSATgaAMQgYAKgfAAQgUAAgZgHg");
	this.shape_18.setTransform(563.9,171.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABpDMIAAjtIhOCaIg1AAIhOiaIAADtIhQAAIAAmXIBPAAIBpDbIBqjbIBPAAIAAGXg");
	this.shape_19.setTransform(529.3,166.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAoC4QgTAAgOgGQgMgGgJgKQgIgLgFgNQgFgNAAgRIAAitIgjAAIAAggIAjAAIAAhWIAoAAIAABWIA8AAIAAAgIg8AAIAACsQABAUAIALQAKALAUAAIAVAAIAAAjg");
	this.shape_20.setTransform(486,168.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUDMIAAkZIAoAAIAAEZgAgWidIAAguIAtAAIAAAug");
	this.shape_21.setTransform(472.6,166.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag/CHQgdgJgWgXIAbgbQARASAWAHQAYAIAYAAQAiAAAVgNQAUgMAAgZQAAgUgLgJQgLgKgZgCIgtgFQgqgCgVgSQgVgSAAgkQgBgTAIgPQAJgQANgLQAPgKARgGQATgFAWAAQAfgBAZAIQAaAHATAQIgbAbQgQgMgRgFQgVgGgVAAQgeAAgPANQgQAMgBAWQABATALAKQANAKAaACIArAEQAVACAMAEQARAFAKAIQALAIAGAOQAGAPAAATQAAApggAWQgeAYg1AAQghAAgegKg");
	this.shape_22.setTransform(453.8,172.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUDMIAAkZIAoAAIAAEZgAgWidIAAguIAtAAIAAAug");
	this.shape_23.setTransform(435.4,166.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRDMIiGmXIAuAAIBpFJIBqlJIAuAAIiGGXg");
	this.shape_24.setTransform(415.4,166.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgaAbIAAg1IA1AAIAAA1g");
	this.shape_25.setTransform(780.1,128.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ABJCNIhJjaIhIDaIgnAAIhZkZIAtAAIBADhIBKjhIAjAAIBKDhIBAjhIAtAAIhZEZg");
	this.shape_26.setTransform(756.8,117.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgtCIQgVgKgOgOQgLgLgGgMQgHgNgDgOQgEgNgCgRQgBgPAAgRQAAgfAGgeQAHgdAVgVQAPgPAUgIQAVgKAYABQAagBAUAKQAUAIAPAPQAVAVAHAdQAGAeAAAfQAAAigHAcQgHAdgUAVQgOAOgVAKQgVAJgZAAQgYAAgVgJgAgyhWQgPAPgEAYQgEAaAAAVIABAYIACAXQADALAFALQAEALAIAHQAUAVAeAAQAgAAAUgVQAOgPAFgZQADgaAAgVQAAgTgDgcQgFgYgOgPQgVgVgfABQgdgBgVAVg");
	this.shape_27.setTransform(724.3,117.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABGCPIAAitQAAglgTgTQgSgTghAAQgfAAgTATQgSATAAAlIAACtIgqAAIAAkZIAqAAIAAAfQAOgRAUgJQAVgJAXAAQAtAAAbAbQAdAcAAAyIAAC0g");
	this.shape_28.setTransform(696,117);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgvDHQgSgHgMgLQgVgWgGggQgHggAAgiQAAgRACgRQABgPAEgQQADgOAHgPQAIgQAJgIQAMgMASgGQASgHAWAAQAXAAASAHQASAHATAWIAAifIApAAIAAGXIgoAAIAAgiQgTAXgSAHQgUAIgWAAQgWAAgSgHgAgkgkQgOAJgHAPQgIAOgDATQgCASAAAWQAAAXACARQADAUAIAPQAHAPAOAJQAOAJAXAAQAXAAANgJQAPgKAHgOQAHgPACgUQADgVAAgTQAAgSgDgWQgCgUgHgNQgHgPgPgJQgNgJgXAAQgXAAgOAJg");
	this.shape_29.setTransform(654.9,111);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag5CKQgRgEgPgQQgMgKgEgPQgGgPAAgQQAAgmAagWQAZgVAvAAIBUAAIAAgbQAAgegRgRQgQgPgnABQgcgBgOAIQgPAHgOASIgcgaQASgZAYgIQAXgKAjABQA3gBAdAZQAcAYAAAtIAAC/IgpAAIAAgbQgSARgRAGQgUAIgaAAQgdAAgSgHgAhHA9QAAAYAQAMQAQAMAiAAQASAAAOgDQAQgEANgMQAPgOAAgjIAAgeIhOAAQhAAAAAAyg");
	this.shape_30.setTransform(621.6,117.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgtCIQgUgJgPgPQgLgLgGgMQgHgNgEgOQgDgNgCgRQgBgPAAgRQAAggAGgdQAGgcAWgWQAQgQATgHQAVgKAYABQAagBAUAKQATAHAQAQQAWAWAGAcQAGAgAAAdQAAAfgGAfQgHAdgVAVQgPAPgUAJQgVAJgZAAQgYAAgVgJgAgyhWQgPAQgEAXQgEAXAAAYIABAYIADAXQACANAEAJQAFAKAIAIQAUAVAeAAQAfAAAVgVQAPgQADgYQAEgVAAgaQAAgYgEgXQgDgXgPgQQgVgVgfABQgdgBgVAVg");
	this.shape_31.setTransform(595.2,117.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAVDMQglAAgRgWQgRgVAAggIAAlMIApAAIAAFKQAAAVAIAKQAIALAVAAIAXAAIAAAjg");
	this.shape_32.setTransform(576.8,110.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ABFCPIAAitQAAgmgSgSQgTgTggAAQgfAAgTATQgTATAAAlIAACtIgpAAIAAkZIApAAIAAAfQAPgSAUgIQAVgJAWAAQAuAAAaAbQAeAdAAAxIAAC0g");
	this.shape_33.setTransform(553.6,117);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ABKCNIhKjaIhJDaIglAAIhakZIAtAAIBADhIBKjhIAjAAIBKDhIBBjhIAsAAIhYEZg");
	this.shape_34.setTransform(516.9,117.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgtCIQgUgJgPgPQgLgLgGgMQgHgNgEgOQgEgSgBgMQgBgPAAgRQAAggAGgdQAGgcAWgWQAQgQATgHQAVgKAYABQAagBAUAKQATAHAQAQQAWAWAGAcQAGAdAAAgQAAAfgGAfQgHAdgVAVQgPAPgUAJQgUAJgaAAQgYAAgVgJgAgyhWQgPAQgEAXQgEAXAAAYIABAYIADAXQACANAEAJQAGAMAHAGQAUAVAeAAQAfAAAVgVQAPgQADgYQAEgVAAgaQAAgYgEgXQgDgXgPgQQgVgVgfABQgdgBgVAVg");
	this.shape_35.setTransform(484.4,117.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AiMDMIAAmXICMAAQAhAAAaAKQAbAMAUAVQANAPAIASQAIAVACASQADARABAaIAABbQgBAagDASQgCAQgIAWQgIATgNAOQgUAXgbAJQgaALghAAgAhhClIBZAAQAYAAATgHQAVgFAPgSQAJgJAHgQQAFgOADgRQACgTABgTIAAhRQgBgUgCgRQgDgTgFgNQgGgPgKgKQgPgRgVgHQgTgGgYAAIhZAAg");
	this.shape_36.setTransform(453.5,110.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcdapp, new cjs.Rectangle(71.1,0,746.6,269.4), null);


(lib.mac = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bigmac2();
	this.instance.parent = this;
	this.instance.setTransform(4.4,-17.8,0.557,0.557,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mac, new cjs.Rectangle(-14.4,-17.8,113.2,102.3), null);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.legal, null, null);


(lib.confettiyellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0B82D").s().p("AgiATQAJgeAZgUQAUAKAPAVQgSAGgLAaQgRgQgXADg");
	this.shape.setTransform(3.5,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.confettiyellow, new cjs.Rectangle(0,0,7,6.5), null);


(lib.confettiwhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjgJQATAAASgWQALAWAXADQgSAZgdANQgSgQgGgZg");
	this.shape.setTransform(3.6,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.confettiwhite, new cjs.Rectangle(0,0,7.2,6.4), null);


(lib.confettiblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#273089").s().p("AgdAVQgDgWAKgYQAPALAcgFQgFAXAPARQgPAFgQAAQgOAAgPgFg");
	this.shape.setTransform(3.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.confettiblue, new cjs.Rectangle(0,0,6.2,5.2), null);


(lib.clickPlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.989);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.clickPlay, new cjs.Rectangle(0,0,728,90), null);


(lib.bigmaclogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC325").s().p("AkyByQgDAAgEgDQgHgFAAgQIAAgNQgIABgGgIQgEgHAAgGQABgIAGgEIA6grQAmgZAkgQQAXgKAZgIIAAgUQAAgIAGgGQAHgHAIABQAIgBAGAHQAGAGAAAIIAAAJIALgCIAAgPQAAgIAHgGQAGgHAIABQAJgBAFAHQAGAGAAAIIAAAJIAMgBIAAgQQAAgHAGgHQAGgGAIAAQAJAAAGAGQAGAGAAAIIAAAOIAKAAIAAgOQAAgIAGgGQAGgGAJAAQAJAAAFAGQAGAHAAAHIAAAQIAMABIAAgJQAAgIAGgGQAGgHAIABQAJgBAFAHQAHAGAAAIIAAAPIALACIAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAGAGAAAIIAAATQAcAKAVAJQAkARAmAYIA5ArQAHAEAAAIQACAHgFAGQgFAGgIABIAAANQAAAQgHAFIgHADgAC9gOQAzAVBLA7QADACAEgBIABAAIABAAIABAAIABgBIAAgBIABgBQADgCgBgEQAAgDgDgCQhMg7g2gZQgbgLgcgJIAAgaQAAgLgLAAQgLAAAAALIAAAVIgegGIAAgXQAAgFgDgDQgDgDgFAAQgEAAgEADQgDADAAAFIAAAUIgfgEIAAgYQAAgEgDgDQgDgEgEAAQgEAAgEAEQgDADAAAEIAAAYIgeAAIAAgYQAAgEgDgDQgDgEgFAAQgEAAgDAEQgDADAAAEIAAAYIgfAEIAAgUQAAgFgDgDQgDgDgFAAQgEAAgEADQgDADAAAFIAAAXIgeAGIAAgVQAAgLgLAAQgLAAAAALIAAAaQgaAIgdAMQg3AahKA6QgHAEAFAHIACABIAAAAQACACADAAIAGgBQBJg6A1gWQAYgMAXgGIAAAaQAAAKALAAQALAAAAgKIAAggIAegGIAAAhQAAAFADADQAEADAEAAQAFAAADgDQADgDAAgFIAAglIAfgDIAAAiQAAAEADAEQADADAEAAQAFAAADgDQADgEAAgEIAAgjIAeAAIAAAmQAAAEADAEQAEADAEAAQAEAAADgDQADgEAAgEIAAglIAfADIAAApQAAAFADACQAEADAEAAQAFAAADgDQADgCAAgFIAAglIAeAFIAAAhQAAAKALAAQALAAAAgKIAAgaQAXAGAZAMg");
	this.shape.setTransform(55.9,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC325").s().p("AjIAvQgcAAgSgVIgMgXIAAgdQAAgPAGgEIAGgBICSAAIAmBAQAHAMALAAQALAAAIgMIAkhAIDtAAIAFABQAFAEABAPIAAAdQgDALgJAMQgRAVgcAAg");
	this.shape_1.setTransform(56.3,75.5,1.242,1.242);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC325").s().p("Aj2AyQgFAAgDgEQgDgDAAgFIAAhLQAAgFADgDQADgEAFAAIHtAAQAFAAADAEQAEADgBAFIAABLQABAFgEADQgDAEgFAAg");
	this.shape_2.setTransform(56.3,48.6,1.242,1.242);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC325").s().p("AkKAoQgJAAgHgHQgGgGAAgKIAAghQAAgJAGgIQAHgGAJAAIIUAAQAKAAAGAGQAHAIAAAJIAAAhQAAAKgHAGQgGAHgKAAg");
	this.shape_3.setTransform(56.3,34.7,1.242,1.242);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC325").s().p("AkKAoQgJAAgHgHQgGgGAAgKIAAghQAAgKAGgGQAHgHAJAAIIUAAQAKAAAGAHQAHAGAAAKIAAAhQAAAKgHAGQgGAHgKAAg");
	this.shape_4.setTransform(56.3,62.3,1.242,1.242);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC325").s().p("Ag+ByIggghIAAgmIA+AAIAAATIAHAHIAzAAIAHgHIAAghIgFgFIhdAAIgcgbIAAhNIAhghIB6AAIAhAgIAAAnIg/AAIAAgTIgHgHIgxAAIgHAGIAAAhIAFAFIBdAAIAcAbIAABOIghAhg");
	this.shape_5.setTransform(608.4,47,1.547,1.547);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC325").s().p("AAXBRIgbg/IgWAjIAAAcIgtAAIAAihIAtAAIAABPIAuhPIAyAAIgrBCIAtBfg");
	this.shape_6.setTransform(576.4,47,2.171,2.171);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC325").s().p("Ag9ByIgigkIAAicIAigjIB6AAIAjAjIAAAwIg/AAIAAgbIgKgKIgsAAIgMALIAAByIAMALIAsAAIAKgKIAAgdIA/AAIAAAwIgjAkg");
	this.shape_7.setTransform(541.5,47,1.547,1.547);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFC325").s().p("AAdBRIgGgfIgxAAIgHAfIgqAAIAqihIBCAAIArChgAgSAQIAhAAIgQhHg");
	this.shape_8.setTransform(508.1,47,2.171,2.171);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC325").s().p("AgsBRIgXgXIAAgbIAsAAIAAANIAGAFIAkAAIAEgFIAAgYIgEgDIhBAAIgVgTIAAg2IAYgYIBYAAIAWAXIAAAcIgsAAIAAgOIgFgFIgjAAIgFAEIAAAYIAEADIBCAAIAUATIAAA4IgYAXg");
	this.shape_9.setTransform(475.3,47,2.171,2.171);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFC325").s().p("AAZBRIgVg8IgdAAIAAA8IgtAAIAAihIByAAIAXAYIAAAzIgUAUIAYBCgAgZgJIApAAIAHgHIAAgcIgHgGIgpAAg");
	this.shape_10.setTransform(429.8,47,2.171,2.171);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFC325").s().p("AgsBRIgYgZIAAhvIAYgZIBYAAIAZAZIAABvIgZAZgAgXgnIAABQIAIAIIAgAAIAIgIIAAhQIgIgIIggAAg");
	this.shape_11.setTransform(394.3,47,2.171,2.171);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFC325").s().p("Ag3BRIAAihIBuAAIAAAiIhBAAIAAAiIA7AAIAAAgIg7AAIAAA9g");
	this.shape_12.setTransform(363.8,47,2.171,2.171);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFC325").s().p("AgLAVIgHgHIAAgbIAHgHIAYAAIAGAHIAAAbIgGAHgAgNgLIAAAXIAEAEIAUAAIADgEIAAgXIgDgEIgUAAgAAEALIgDgIIgDAAIAAAIIgFAAIAAgVIAMAAIAEAEIAAAGIgDACIADAJgAgCAAIAFAAIAAgBIAAgEIAAgBIgFAAg");
	this.shape_13.setTransform(338.3,31.9,1.748,1.748);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFC325").s().p("Ag2BlIgfgfIAAiLIAfgfIBsAAIAgAfIAAAqIg4AAIAAgXIgJgKIgoAAIgKAKIAABmIAKAJIAoAAIAJgIIAAgaIA4AAIAAArIggAfg");
	this.shape_14.setTransform(317.9,47.1,1.748,1.748);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFC325").s().p("AAlBlIgJgnIg8AAIgJAnIg1AAIA1jJIBSAAIA2DJgAgWAVIApAAIgUhZg");
	this.shape_15.setTransform(284.4,47.1,1.748,1.748);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFC325").s().p("ABJBlIAAigIguCgIg9AAIgsigIAACgIgvAAIAAjJIBUAAIApCWIAqiWIBTAAIAADJg");
	this.shape_16.setTransform(242.8,47.1,1.748,1.748);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFC325").s().p("Ag3BlIgfgfIAAiLIAfgfIBxAAIAdAdIAAAjIg4AAIAAgRIgGgHIgtAAIgKAKIAABnIAKAJIAtAAIAGgGIAAgcIgoAAIAAgoIBgAAIAABUIgdAdg");
	this.shape_17.setTransform(188.1,47.1,1.748,1.748);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFC325").s().p("Ag9BlIAAgmIAiAAIAAh9IgiAAIAAgmIB6AAIAAAmIghAAIAAB9IAhAAIAAAmg");
	this.shape_18.setTransform(158.1,47.1,1.748,1.748);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFC325").s().p("AhVBlIAAjJICOAAIAcAcIAAAwIgYAXIAYAWIAAA0IgcAcgAgdA/IAzAAIAIgHIAAggIgHgHIg0AAgAgdgUIAzAAIAHgHIAAgcIgHgHIgzAAg");
	this.shape_19.setTransform(128.8,47.1,1.748,1.748);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bigmaclogo, new cjs.Rectangle(0,0,728,90), null);


(lib.endframe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC32F").s().p("ABhC6IAAiwIjAAAIAACwIgyAAIAAlzIAyAAIAACYIDAAAIAAiYIAxAAIAAFzg");
	this.shape.setTransform(291.2,44.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC32F").s().p("AgXC6IAAlIIh8AAIAAgrIEnAAIAAArIh8AAIAAFIg");
	this.shape_1.setTransform(256.6,44.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC32F").s().p("AgYC6IAAlzIAxAAIAAFzg");
	this.shape_2.setTransform(233.5,44.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC32F").s().p("ABaC6IhPkbIgLgsIgKAsIhPEbIgzAAIhilzIAyAAIA5DzQAJAmAGAmIARhFIBHj6IA7AAIA1C7QAUBHAJA9QAHgjALguIA7juIAxAAIhmFzg");
	this.shape_3.setTransform(201.7,44.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC32F").s().p("AgaC6IAAieIiQjVIA8AAIBKBwQAUAgAQAfQARgdAYglIBIhtIA6AAIiVDVIAACeg");
	this.shape_4.setTransform(146.1,44.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC32F").s().p("AhzC6IAAlzIAxAAIAAFHIC2AAIAAAsg");
	this.shape_5.setTransform(119.3,44.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC32F").s().p("ABgC6IjCkkIAAEkIgwAAIAAlzIAzAAIDCEjIAAkjIAwAAIAAFzg");
	this.shape_6.setTransform(84.9,44.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC32F").s().p("AhdCnQgpgZgVgsQgWgsAAgxQAAhcAyg0QAxg1BOAAQA0AAAqAZQApAZAWAsQAVAsAAA3QAAA4gWAtQgYAtgqAXQgqAXgwAAQg0AAgpgagAhYhxQgmAkAABTQAABDAkAnQAkAmA2AAQA4AAAjgnQAkgnAAhIQAAgsgPgiQgQgigdgSQgdgTgmAAQgzAAglAkg");
	this.shape_7.setTransform(46.2,44);

	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(156.7,89.5,1,1,0,0,0,151.2,19.8);

	this.instance_1 = new lib.ravens();
	this.instance_1.parent = this;
	this.instance_1.setTransform(606.2,39.3,0.471,0.471,0,0,0,129,62.4);

	this.instance_2 = new lib.mcdapp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(362.8,61.9,0.267,0.267,0,0,0,204.8,197.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.instance_3 = new lib.endframeTet();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.endframe, new cjs.Rectangle(0,0,728,90), null);


(lib.confettis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.confettiblue();
	this.instance.parent = this;
	this.instance.setTransform(105.1,469.9,1,1,0,0,0,3.1,2.6);

	this.instance_1 = new lib.confettiwhite();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-44,242,1,1.152,24.2,0,0,3.6,3.2);

	this.instance_2 = new lib.confettiyellow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(123,178.2,1,1,121.3,0,0,3.4,3.2);

	this.instance_3 = new lib.confettiblue();
	this.instance_3.parent = this;
	this.instance_3.setTransform(123.9,3.9,1,1,115.3,0,0,3.1,2.6);

	this.instance_4 = new lib.confettiyellow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-116.9,228.6,1,1,48.8,0,0,3.4,3.2);

	this.instance_5 = new lib.confettiyellow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-113.9,150.1,1,1,47.3,0,0,3.5,3.2);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 172, 133, 5, 0)];
	this.instance_5.cache(-2,-2,11,11);

	this.instance_6 = new lib.confettiyellow();
	this.instance_6.parent = this;
	this.instance_6.setTransform(74.4,-277.8,1,1,-95.8,0,0,3.5,3.1);

	this.instance_7 = new lib.confettiwhite();
	this.instance_7.parent = this;
	this.instance_7.setTransform(36.1,-338.2,1,1,121.3,0,0,3.6,3.2);

	this.instance_8 = new lib.confettiyellow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-61,-290.9,1,1,121.3,0,0,3.4,3.2);

	this.instance_9 = new lib.confettiblue();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-83.5,-171.3,1,1,121.3,0,0,3.1,2.6);

	this.instance_10 = new lib.confettiwhite();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-44.8,197.3,1,1,0,0,0,3.6,3.2);

	this.instance_11 = new lib.confettiyellow();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-83.9,-137.1,1,1,0,0,0,3.5,3.2);
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 172, 133, 5, 0)];
	this.instance_11.cache(-2,-2,11,11);

	this.instance_12 = new lib.confettiblue();
	this.instance_12.parent = this;
	this.instance_12.setTransform(29.9,-153.5,1,1,92.8,0,0,3.1,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.confettis, new cjs.Rectangle(-121.6,-342.9,249.2,815.5), null);


(lib.confettimoveup2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Layer 3
	this.instance = new lib.confettiyellow();
	this.instance.parent = this;
	this.instance.setTransform(13.5,3.3,1,1,110.1,0,0,3.5,3.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({x:-31.5,y:-106.7},20).to({_off:true},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.confettiyellow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.5,3.3,1,1,59.2,0,0,3.5,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-16.5,y:-101.7},26).wait(3));

	// Layer 1
	this.instance_2 = new lib.confettiyellow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.5,3.2,1,1,0,0,0,3.5,3.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({x:-46.5,y:-101.8},19).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.4,9.1,9.3);


(lib.confettimoveup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(1));

	// Layer 3
	this.instance = new lib.confettiyellow();
	this.instance.parent = this;
	this.instance.setTransform(13.5,3.3,1,1,110.1,0,0,3.5,3.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({x:-31.5,y:-106.7},25).to({_off:true},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.confettiyellow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.5,3.3,1,1,59.2,0,0,3.5,3.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:-16.5,y:-101.7},26).to({_off:true},1).wait(3));

	// Layer 1
	this.instance_2 = new lib.confettiyellow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.5,3.2,1,1,0,0,0,3.5,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-46.5,y:-101.8},19).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,6.5);


(lib.confettianimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.confettis();
	this.instance.parent = this;
	this.instance.setTransform(166.7,-273.4,1.792,1.792,-90,0,0,166.7,166.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:566.6},90).wait(1));

	// Layer 1
	this.instance_1 = new lib.confettis();
	this.instance_1.parent = this;
	this.instance_1.setTransform(166.7,-143.4,1,1,0,0,0,166.7,166.6);
	this.instance_1.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:446.6},90).wait(1));

	// Layer 2
	this.instance_2 = new lib.confettis();
	this.instance_2.parent = this;
	this.instance_2.setTransform(164.1,-113.4,0.79,0.79,90,0,0,166.8,166.6);
	this.instance_2.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:406.6},90).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-746.4,-652.9,1461.4,896.3);


(lib.confettscale2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// Layer 11
	this.instance = new lib.confettimoveup();
	this.instance.parent = this;
	this.instance.setTransform(65,-102.2,1,1,0,0,0,3.5,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:3.3,scaleX:12.02,scaleY:12.02,rotation:-102.8,x:92,y:-50},12).to({regY:3.1,scaleX:17.87,scaleY:17.87,rotation:-143.3,x:312.7,y:126.6},13).to({scaleX:34.61,scaleY:34.61,rotation:-260.7,x:-297.4,y:270.7,alpha:0},13).wait(1));

	// Layer 10
	this.instance_1 = new lib.confettimoveup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(58.1,-121.1,1,1,0,0,0,3.5,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:14.95,scaleY:14.95,rotation:-78.8,x:134.2,y:-87.8},12).to({scaleX:14.92,scaleY:14.92,rotation:-215,x:266.6,y:-27},13).to({regX:3.4,regY:3.3,scaleX:34.1,scaleY:34.1,rotation:-249.3,x:-167.4,y:210.8,alpha:0},13).wait(1));

	// Layer 9
	this.instance_2 = new lib.confettimoveup();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.7,-96.8,1,1,0,0,0,3.5,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:9.36,scaleY:9.36,rotation:23.1,x:50.4,y:-69.9},12).to({regX:3.4,scaleX:12.7,scaleY:12.7,rotation:-78.9,x:165,y:41.2},13).to({regX:3.5,scaleX:32.57,scaleY:32.57,rotation:26.9,x:-234,y:277,alpha:0},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.2,-124.3,22.3,30.7);


(lib.confettscale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Layer 11
	this.instance = new lib.confettimoveup();
	this.instance.parent = this;
	this.instance.setTransform(62.2,-43.1,1,1,0,0,0,3.5,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:28.44,scaleY:28.44,rotation:-177.5,x:78.6,y:217.9},25).to({regX:3.4,scaleX:39.26,scaleY:39.26,rotation:-132.8,x:145.3,y:170.7},13).to({regX:3.5,regY:3.1,scaleX:34.61,scaleY:34.61,rotation:-260.7,x:69.5,y:297.7,alpha:0},2).wait(1));

	// Layer 10
	this.instance_1 = new lib.confettimoveup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.2,-80.1,1,1,0,0,0,3.5,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:14.92,scaleY:14.92,rotation:9.5,x:173.9,y:276.8},25).to({regX:3.4,regY:3.3,scaleX:20.41,scaleY:20.41,rotation:13.4,x:197.2,y:227.4},13).to({scaleX:34.1,scaleY:34.1,rotation:110.7,x:199.6,y:237.8,alpha:0},2).wait(1));

	// Layer 9
	this.instance_2 = new lib.confettimoveup();
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.2,-28.1,1,1,0,0,0,3.5,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:25.75,scaleY:25.75,rotation:-168.2,x:-51.8,y:147.3},25).to({regX:3.4,scaleX:35.54,scaleY:35.54,rotation:-206.3,x:-82.2,y:186.1},13).to({regX:3.5,scaleX:32.57,scaleY:32.57,rotation:-333.1,x:132.9,y:304,alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.7,-83.3,44.9,58.5);


(lib.confettiupanddown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

	// Layer 6
	this.instance = new lib.confettimoveup2();
	this.instance.parent = this;
	this.instance.setTransform(55,68.6,1.224,1.224,0,180,0,3.5,3.2);

	this.instance_1 = new lib.confettimoveup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55,4,1.224,1.224,0,0,0,3.5,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},4).to({state:[]},43).wait(1));

	// Layer 5
	this.instance_2 = new lib.confettimoveup2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(45.9,66.6,1.085,1.085,0,180,0,3.5,3.2);

	this.instance_3 = new lib.confettimoveup();
	this.instance_3.parent = this;
	this.instance_3.setTransform(46,-3.2,2.408,2.408,0,0,0,3.5,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},2).to({state:[]},45).wait(1));

	// Layer 7
	this.instance_4 = new lib.confettimoveup2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(34,3.2,1,1,0,0,0,3.5,3.2);

	this.instance_5 = new lib.confettimoveup();
	this.instance_5.parent = this;
	this.instance_5.setTransform(34,68.2,1,1,0,180,0,3.5,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4}]},2).to({state:[]},45).wait(1));

	// Layer 3
	this.instance_6 = new lib.confettimoveup2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(16.6,62.8,1.602,1.602,0,180,0,3.5,3.2);

	this.instance_7 = new lib.confettimoveup();
	this.instance_7.parent = this;
	this.instance_7.setTransform(16.6,8.7,1.602,1.602,0,0,0,3.5,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).to({state:[]},47).wait(1));

	// Layer 2
	this.instance_8 = new lib.confettimoveup();
	this.instance_8.parent = this;
	this.instance_8.setTransform(3.6,68.2,2.662,2.662,0,180,0,3.5,3.2);

	this.instance_9 = new lib.confettimoveup2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(3.5,3.2,1,1,0,0,0,3.5,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).to({state:[]},47).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-1.4,29.6,78.1);


(lib.confettiloop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Layer 1
	this.instance = new lib.confettianimation();
	this.instance.parent = this;
	this.instance.setTransform(298.6,738.8,1,1,0,0,0,166.7,166.6);

	this.instance_1 = new lib.confettianimation();
	this.instance_1.parent = this;
	this.instance_1.setTransform(298.6,738.8,1,1,0,0,0,166.7,166.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},49).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.6,-80.8,1461.4,896.3);


// stage content:
(lib.MacDonalds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{play:1,stop:304});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.onClickPlay.cursor = "pointer";
		//this.onClickPlay.mouseEnabled  = true;
		this.onClickPlay.addEventListener("click", playAnimation.bind(this));
		function playAnimation(){
			this.gotoAndPlay("play");
		}
	}
	this.frame_304 = function() {
		this.stop();	
		this.onClickPlay.addEventListener("click", playAnimation.bind(this));
		
		function playAnimation(){
			this.gotoAndPlay("play");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(304).call(this.frame_304).wait(1));

	// Layer 3
	this.onClickPlay = new lib.clickPlay();
	this.onClickPlay.parent = this;
	this.onClickPlay.setTransform(364,45,1,1,0,0,0,364,45);
	this.onClickPlay.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.onClickPlay).wait(305));

	// endframe
	this.instance = new lib.endframe();
	this.instance.parent = this;
	this.instance.setTransform(335.4,54,0.131,0.131,0,0,0,145.1,113.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(213).to({_off:false},0).wait(1).to({regX:364,regY:45,scaleX:0.22,scaleY:0.22,x:364,y:45,alpha:0.097},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.225},0).wait(1).to({scaleX:0.46,scaleY:0.46,alpha:0.377},0).wait(1).to({scaleX:0.6,scaleY:0.6,alpha:0.534},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:45.1,alpha:0.672},0).wait(1).to({scaleX:0.81,scaleY:0.81,alpha:0.781},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.861},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:45,alpha:0.919},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.958},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.983},0).wait(1).to({scaleX:1,scaleY:1,y:45.1,alpha:0.996},0).wait(1).to({regX:145.1,regY:113.8,scaleX:1,scaleY:1,x:145.1,y:113.8,alpha:1},0).wait(80));

	// mcd logo
	this.instance_1 = new lib.mcdlogo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(686.9,42.8,0.105,0.105,0,0,0,214.6,203.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(213).to({regX:215.1,alpha:0},12).to({_off:true},1).wait(79));

	// confetti
	this.instance_2 = new lib.confettiupanddown();
	this.instance_2.parent = this;
	this.instance_2.setTransform(491.8,7.7,1,1,0,0,0,3.5,3.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).wait(239));

	// confetti
	this.instance_3 = new lib.confettiupanddown();
	this.instance_3.parent = this;
	this.instance_3.setTransform(195.8,76.6,1,1,0,180,0,3.5,3.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(61).to({_off:false},0).wait(244));

	// confetti
	this.instance_4 = new lib.confettiupanddown();
	this.instance_4.parent = this;
	this.instance_4.setTransform(174.9,-1.1,1.286,1.286,0,0,0,3.5,3.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).wait(263));

	// confetti
	this.instance_5 = new lib.confettiupanddown();
	this.instance_5.parent = this;
	this.instance_5.setTransform(127.9,82.2,1,1,0,180,0,3.5,3.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).wait(289));

	// confetti scale8
	this.instance_6 = new lib.confettscale2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(515.7,138.8,1,1,0,0,0,64.3,-7.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60).to({_off:false},0).to({_off:true},134).wait(111));

	// confetti scale7
	this.instance_7 = new lib.confettscale();
	this.instance_7.parent = this;
	this.instance_7.setTransform(247.2,95.8,1,1,0,0,0,64.3,-7.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40).to({_off:false},0).to({_off:true},154).wait(111));

	// confetti scale6
	this.instance_8 = new lib.confettimoveup();
	this.instance_8.parent = this;
	this.instance_8.setTransform(98.7,22.6,1.912,1.292,-139.3,0,0,3.5,3.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(13).to({_off:false},0).to({regY:3.1,scaleX:14.53,scaleY:17.33,rotation:-270.8,x:87.1,y:117.3},21).to({regY:3.2,scaleX:20.76,scaleY:15.51,rotation:-311,x:108.6,y:122.1,alpha:0},16).to({_off:true},1).wait(254));

	// confetti scale5
	this.instance_9 = new lib.confettimoveup();
	this.instance_9.parent = this;
	this.instance_9.setTransform(103.1,33.3,1,1,0,0,0,3.5,3.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({_off:false},0).to({scaleX:10.45,scaleY:9.45,rotation:89.2,x:131.4,y:26.2},21).to({scaleX:10.45,scaleY:9.45,rotation:49,x:108.8,y:82.2,alpha:0},16).to({_off:true},1).wait(254));

	// confetti scale4
	this.instance_10 = new lib.confettimoveup();
	this.instance_10.parent = this;
	this.instance_10.setTransform(103.1,33.3,1,1,0,0,0,3.5,3.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(13).to({_off:false},0).to({scaleX:4.52,scaleY:5.45,rotation:154.4,x:34.7,y:65.2},21).to({regX:3.6,scaleX:4.96,scaleY:6.01,rotation:182.1,x:40.9,y:80.8},1).to({regX:3.5,scaleX:8.79,scaleY:8.79,rotation:198.1,x:56.2,y:106.2,alpha:0},15).to({_off:true},1).wait(254));

	// confetti scale3
	this.instance_11 = new lib.confettimoveup();
	this.instance_11.parent = this;
	this.instance_11.setTransform(103.1,33.3,1,1,0,0,0,3.5,3.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({_off:false},0).to({scaleX:4.52,scaleY:5.45,rotation:-110.1,y:50.1},21).to({regX:3.6,scaleX:4.96,scaleY:6.01,rotation:-123.9,x:116.7,y:47.1},1).to({regX:3.5,scaleX:8.79,scaleY:8.79,rotation:-127.4,x:109.8,y:78.9,alpha:0},15).to({_off:true},1).wait(254));

	// confetti scale2
	this.instance_12 = new lib.confettimoveup();
	this.instance_12.parent = this;
	this.instance_12.setTransform(81.7,7.4,1,1,0,0,0,3.5,3.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13).to({_off:false},0).to({x:21.7},21).to({regX:3.6,scaleX:4.96,scaleY:6.01,rotation:-89.7,x:98.4,y:-18.3},1).to({regX:3.5,scaleX:8.79,scaleY:8.79,rotation:-127.4,x:109.8,y:78.9,alpha:0},15).to({_off:true},1).wait(254));

	// confetti scale1
	this.instance_13 = new lib.confettimoveup();
	this.instance_13.parent = this;
	this.instance_13.setTransform(81.7,7.4,1,1,0,0,0,3.5,3.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(13).to({_off:false},0).to({x:21.7},21).to({scaleX:8.79,scaleY:8.79,rotation:-63.2,x:62.5,y:16.1},1).to({rotation:-127.4,x:48.9,y:54.4,alpha:0},15).to({_off:true},1).wait(254));

	// bigmac
	this.instance_14 = new lib.mac();
	this.instance_14.parent = this;
	this.instance_14.setTransform(32,85,1,1,0,0,0,87,74);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(12).to({_off:false},0).to({scaleX:0.92,scaleY:1.04,x:194.8},6).wait(1).to({regX:42.2,regY:33.3,scaleX:0.95,scaleY:1.03,rotation:-3.9,x:185.7,y:42.2},0).wait(1).to({regX:87,regY:74,scaleX:0.96,scaleY:1.02,rotation:-6,x:250.3,y:78.9},0).wait(1).to({regX:42.2,regY:33.3,scaleX:0.98,scaleY:1.01,rotation:-9,x:125.6,y:42.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-11,x:73,y:42.2},0).wait(1).to({regX:87,regY:74,scaleX:1,scaleY:1,rotation:-11.7,x:106.8,y:73},0).wait(10).to({scaleX:1,scaleY:1,rotation:1.4,x:101.6,y:85},5).to({scaleX:0.92,scaleY:1.04,rotation:0,x:242.3},5).to({scaleX:0.94,scaleY:1.03,rotation:-3,x:283.7,y:82.7},1).to({scaleX:0.96,scaleY:1.02,rotation:-6.5,x:330,y:79.9},1).to({regY:73.9,scaleX:0.98,scaleY:1.01,rotation:-9.8,x:239.5,y:77.3},1).wait(1).to({regX:42.2,regY:33.3,scaleX:1,scaleY:1,rotation:-12.2,x:119.3,y:45.2},0).wait(1).to({regX:87,regY:74,scaleX:1,scaleY:1,rotation:-13,x:147.7,y:75},0).wait(11).to({scaleX:1,scaleY:1,rotation:0.9,x:111.4,y:85},1).to({scaleX:0.94,scaleY:1.11,rotation:0,x:823.7},11).to({_off:true},1).wait(233));

	// confetti
	this.instance_15 = new lib.confettiupanddown();
	this.instance_15.parent = this;
	this.instance_15.setTransform(4.9,13.3,1,1,0,0,0,3.5,3.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(12).to({_off:false},0).wait(293));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgvIAIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_13 = new cjs.Graphics().p("Eg4xAIwIAAxfMByBAAAIAARfg");
	var mask_graphics_14 = new cjs.Graphics().p("Eg2yAIwIAAxfMBwOAAAIAARfg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg0zAIwIAAxfMBuaAAAIAARfg");
	var mask_graphics_16 = new cjs.Graphics().p("Egy0AIwIAAxfMBsnAAAIAARfg");
	var mask_graphics_17 = new cjs.Graphics().p("Egw1AIwIAAxfMBqzAAAIAARfg");
	var mask_graphics_18 = new cjs.Graphics().p("Egu2AIwIAAxfMBpAAAAIAARfg");
	var mask_graphics_19 = new cjs.Graphics().p("Egs3AIwIAAxfMBnNAAAIAARfg");
	var mask_graphics_20 = new cjs.Graphics().p("Egq4AIwIAAxfMBlZAAAIAARfg");
	var mask_graphics_21 = new cjs.Graphics().p("Ego5AIwIAAxfMBjmAAAIAARfg");
	var mask_graphics_22 = new cjs.Graphics().p("Egm6AIwIAAxfMBhyAAAIAARfg");
	var mask_graphics_23 = new cjs.Graphics().p("EgpUAIwIAAxfMBf+AAAIAARfg");
	var mask_graphics_24 = new cjs.Graphics().p("EgpTAIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_25 = new cjs.Graphics().p("EgpRAIwIAAxfMBf+AAAIAARfg");
	var mask_graphics_26 = new cjs.Graphics().p("EgpQAIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_27 = new cjs.Graphics().p("EgpPAIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_28 = new cjs.Graphics().p("EgpNAIwIAAxfMBf+AAAIAARfg");
	var mask_graphics_29 = new cjs.Graphics().p("EgpMAIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_30 = new cjs.Graphics().p("EgpKAIwIAAxfMBf+AAAIAARfg");
	var mask_graphics_31 = new cjs.Graphics().p("EgpJAIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_32 = new cjs.Graphics().p("EgpHAIwIAAxfMBf+AAAIAARfg");
	var mask_graphics_33 = new cjs.Graphics().p("EgpGAIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_34 = new cjs.Graphics().p("EgqKAIwIAAxfMBiwAAAIAARfg");
	var mask_graphics_35 = new cjs.Graphics().p("EgrNAIwIAAxfMBlgAAAIAARfg");
	var mask_graphics_36 = new cjs.Graphics().p("EgsRAIwIAAxfMBoSAAAIAARfg");
	var mask_graphics_37 = new cjs.Graphics().p("EgtVAIwIAAxfMBrDAAAIAARfg");
	var mask_graphics_38 = new cjs.Graphics().p("EguYAIwIAAxfMBt0AAAIAARfg");
	var mask_graphics_39 = new cjs.Graphics().p("EgtvAIwIAAxfMBscAAAIAARfg");
	var mask_graphics_40 = new cjs.Graphics().p("EgtFAIwIAAxfMBrDAAAIAARfg");
	var mask_graphics_41 = new cjs.Graphics().p("EgscAIwIAAxfMBprAAAIAARfg");
	var mask_graphics_42 = new cjs.Graphics().p("EgryAIwIAAxfMBoSAAAIAARfg");
	var mask_graphics_43 = new cjs.Graphics().p("EgrIAIwIAAxfMBm5AAAIAARfg");
	var mask_graphics_44 = new cjs.Graphics().p("EgqfAIwIAAxfMBlhAAAIAARfg");
	var mask_graphics_45 = new cjs.Graphics().p("Egp1AIwIAAxfMBkIAAAIAARfg");
	var mask_graphics_46 = new cjs.Graphics().p("EgpMAIwIAAxfMBiwAAAIAARfg");
	var mask_graphics_47 = new cjs.Graphics().p("EgoiAIwIAAxfMBhXAAAIAARfg");
	var mask_graphics_48 = new cjs.Graphics().p("Egn4AIwIAAxfMBf+AAAIAARfg");
	var mask_graphics_49 = new cjs.Graphics().p("Egn0AIwIAAxfMBf+AAAIAARfg");
	var mask_graphics_50 = new cjs.Graphics().p("EgnwAIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_51 = new cjs.Graphics().p("EgnsAIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_52 = new cjs.Graphics().p("EgnoAIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_53 = new cjs.Graphics().p("EgnjAIwIAAxfMBf+AAAIAARfg");
	var mask_graphics_54 = new cjs.Graphics().p("EgnfAIwIAAxfMBf+AAAIAARfg");
	var mask_graphics_55 = new cjs.Graphics().p("EgnbAIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_56 = new cjs.Graphics().p("EgnXAIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_57 = new cjs.Graphics().p("EgnSAIwIAAxfMBf+AAAIAARfg");
	var mask_graphics_58 = new cjs.Graphics().p("EgnOAIwIAAxfMBf+AAAIAARfg");
	var mask_graphics_59 = new cjs.Graphics().p("EgnKAIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_60 = new cjs.Graphics().p("EgnwAIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_61 = new cjs.Graphics().p("EgjVAIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_62 = new cjs.Graphics().p("A+5IwIAAxfMBf+AAAIAARfg");
	var mask_graphics_63 = new cjs.Graphics().p("A6eIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_64 = new cjs.Graphics().p("A2CIwIAAxfMBf+AAAIAARfg");
	var mask_graphics_65 = new cjs.Graphics().p("AxnIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_66 = new cjs.Graphics().p("AtLIwIAAxfMBf+AAAIAARfg");
	var mask_graphics_67 = new cjs.Graphics().p("AowIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_68 = new cjs.Graphics().p("AkUIwIAAxfMBf+AAAIAARfg");
	var mask_graphics_69 = new cjs.Graphics().p("AAGIwIAAxfMBgAAAAIAARfg");
	var mask_graphics_70 = new cjs.Graphics().p("AEiIwIAAxfMBf/AAAIAARfg");
	var mask_graphics_71 = new cjs.Graphics().p("AI9IwIAAxfMBgAAAAIAARfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:312.7,y:56}).wait(13).to({graphics:mask_graphics_13,x:366.4,y:56}).wait(1).to({graphics:mask_graphics_14,x:367.6,y:56}).wait(1).to({graphics:mask_graphics_15,x:368.7,y:56}).wait(1).to({graphics:mask_graphics_16,x:369.9,y:56}).wait(1).to({graphics:mask_graphics_17,x:371,y:56}).wait(1).to({graphics:mask_graphics_18,x:372.2,y:56}).wait(1).to({graphics:mask_graphics_19,x:373.4,y:56}).wait(1).to({graphics:mask_graphics_20,x:374.5,y:56}).wait(1).to({graphics:mask_graphics_21,x:375.7,y:56}).wait(1).to({graphics:mask_graphics_22,x:376.8,y:56}).wait(1).to({graphics:mask_graphics_23,x:349.8,y:56}).wait(1).to({graphics:mask_graphics_24,x:350,y:56}).wait(1).to({graphics:mask_graphics_25,x:350.1,y:56}).wait(1).to({graphics:mask_graphics_26,x:350.3,y:56}).wait(1).to({graphics:mask_graphics_27,x:350.4,y:56}).wait(1).to({graphics:mask_graphics_28,x:350.5,y:56}).wait(1).to({graphics:mask_graphics_29,x:350.7,y:56}).wait(1).to({graphics:mask_graphics_30,x:350.8,y:56}).wait(1).to({graphics:mask_graphics_31,x:351,y:56}).wait(1).to({graphics:mask_graphics_32,x:351.1,y:56}).wait(1).to({graphics:mask_graphics_33,x:351.3,y:56}).wait(1).to({graphics:mask_graphics_34,x:362.2,y:56}).wait(1).to({graphics:mask_graphics_35,x:373.1,y:56}).wait(1).to({graphics:mask_graphics_36,x:384.1,y:56}).wait(1).to({graphics:mask_graphics_37,x:395,y:56}).wait(1).to({graphics:mask_graphics_38,x:406,y:56}).wait(1).to({graphics:mask_graphics_39,x:401.3,y:56}).wait(1).to({graphics:mask_graphics_40,x:396.6,y:56}).wait(1).to({graphics:mask_graphics_41,x:391.9,y:56}).wait(1).to({graphics:mask_graphics_42,x:387.2,y:56}).wait(1).to({graphics:mask_graphics_43,x:382.5,y:56}).wait(1).to({graphics:mask_graphics_44,x:377.8,y:56}).wait(1).to({graphics:mask_graphics_45,x:373.1,y:56}).wait(1).to({graphics:mask_graphics_46,x:368.4,y:56}).wait(1).to({graphics:mask_graphics_47,x:363.7,y:56}).wait(1).to({graphics:mask_graphics_48,x:359,y:56}).wait(1).to({graphics:mask_graphics_49,x:359.4,y:56}).wait(1).to({graphics:mask_graphics_50,x:359.9,y:56}).wait(1).to({graphics:mask_graphics_51,x:360.3,y:56}).wait(1).to({graphics:mask_graphics_52,x:360.7,y:56}).wait(1).to({graphics:mask_graphics_53,x:361.1,y:56}).wait(1).to({graphics:mask_graphics_54,x:361.6,y:56}).wait(1).to({graphics:mask_graphics_55,x:362,y:56}).wait(1).to({graphics:mask_graphics_56,x:362.4,y:56}).wait(1).to({graphics:mask_graphics_57,x:362.8,y:56}).wait(1).to({graphics:mask_graphics_58,x:363.3,y:56}).wait(1).to({graphics:mask_graphics_59,x:363.7,y:56}).wait(1).to({graphics:mask_graphics_60,x:359.9,y:56}).wait(1).to({graphics:mask_graphics_61,x:388.2,y:56}).wait(1).to({graphics:mask_graphics_62,x:416.5,y:56}).wait(1).to({graphics:mask_graphics_63,x:444.9,y:56}).wait(1).to({graphics:mask_graphics_64,x:473.2,y:56}).wait(1).to({graphics:mask_graphics_65,x:501.6,y:56}).wait(1).to({graphics:mask_graphics_66,x:529.9,y:56}).wait(1).to({graphics:mask_graphics_67,x:558.3,y:56}).wait(1).to({graphics:mask_graphics_68,x:586.6,y:56}).wait(1).to({graphics:mask_graphics_69,x:615,y:56}).wait(1).to({graphics:mask_graphics_70,x:643.3,y:56}).wait(1).to({graphics:mask_graphics_71,x:671.7,y:56}).wait(234));

	// logo
	this.instance_16 = new lib.bigmaclogo();
	this.instance_16.parent = this;
	this.instance_16.setTransform(277,47,1,1,0,0,0,276.5,47);

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(14).to({regX:276.9,scaleX:0.74,x:366.9},6).wait(1).to({regX:321.8,regY:42.7,scaleX:0.85,x:367,y:42.7},0).wait(1).to({scaleX:0.96,x:334.6},0).wait(1).to({regX:276.5,regY:47,scaleX:1,x:277,y:47},0).wait(17).to({scaleX:0.66,x:394},5).wait(1).to({regX:321.8,regY:42.7,scaleX:0.8,x:380.9,y:42.7},0).wait(1).to({scaleX:0.95,x:338.9},0).wait(1).to({regX:276.5,regY:47,scaleX:1,x:277,y:47},0).wait(12).to({scaleX:0.08,x:697},11).wait(234));

	// you get a free big mac
	this.instance_17 = new lib.yougetafree();
	this.instance_17.parent = this;
	this.instance_17.setTransform(331.5,50.1,0.139,0.139,0,0,0,124.7,81);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(142).to({_off:false},0).wait(1).to({regX:359.1,regY:44.8,scaleX:0.21,scaleY:0.21,x:364,y:45},0).wait(1).to({scaleX:0.31,scaleY:0.31},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:363.9},0).wait(1).to({scaleX:0.54,scaleY:0.54},0).wait(1).to({scaleX:0.65,scaleY:0.65},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:363.8},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:363.7},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({regX:124.4,regY:81,scaleX:0.96,scaleY:0.96,x:138.8,y:79.8},0).to({scaleX:1,scaleY:1,x:129.3,y:81.3},58).wait(1).to({regX:359.1,regY:44.8,scaleX:1.27,scaleY:1.27,x:364,y:45.1,alpha:0.903},0).wait(1).to({scaleX:1.62,scaleY:1.62,alpha:0.775},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:364.1,y:45.2,alpha:0.623},0).wait(1).to({scaleX:2.46,scaleY:2.46,x:364,y:45.1,alpha:0.466},0).wait(1).to({scaleX:2.84,scaleY:2.84,y:45.2,alpha:0.328},0).wait(1).to({scaleX:3.14,scaleY:3.14,x:364.1,alpha:0.219},0).wait(1).to({scaleX:3.36,scaleY:3.36,alpha:0.139},0).wait(1).to({scaleX:3.52,scaleY:3.52,alpha:0.081},0).wait(1).to({scaleX:3.63,scaleY:3.63,alpha:0.042},0).wait(1).to({scaleX:3.69,scaleY:3.69,alpha:0.017},0).wait(1).to({scaleX:3.73,scaleY:3.73,x:364,alpha:0.004},0).wait(1).to({regX:124.4,regY:81,scaleX:3.74,scaleY:3.74,x:-514,y:180.6,alpha:0},0).to({_off:true},1).wait(79));

	// when the ravens get a sack
	this.instance_18 = new lib.whentheravens();
	this.instance_18.parent = this;
	this.instance_18.setTransform(332.9,49.4,0.139,0.139,0,0,0,139.4,76.7);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(71).to({_off:false},0).wait(1).to({regX:364.6,regY:45.8,scaleX:0.21,scaleY:0.21,x:364.1,y:45.1},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:45.2},0).wait(1).to({scaleX:0.41,scaleY:0.41},0).wait(1).to({scaleX:0.53,scaleY:0.53},0).wait(1).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:45.3},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:45.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:45.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:45.4},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({regX:139.4,regY:77,scaleX:0.94,scaleY:0.94,x:151.8,y:74.5},0).to({scaleX:1,scaleY:1,x:138.9,y:76.3},58).wait(1).to({regX:364.6,regY:45.8,scaleX:1.27,scaleY:1.27,x:364.1,y:43.6,alpha:0.903},0).wait(1).to({scaleX:1.62,scaleY:1.62,y:41.5,alpha:0.775},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:364.2,y:39.1,alpha:0.623},0).wait(1).to({scaleX:2.46,scaleY:2.46,y:36.6,alpha:0.466},0).wait(1).to({scaleX:2.84,scaleY:2.84,y:34.4,alpha:0.328},0).wait(1).to({scaleX:3.14,scaleY:3.14,y:32.6,alpha:0.219},0).wait(1).to({scaleX:3.36,scaleY:3.36,y:31.3,alpha:0.139},0).wait(1).to({scaleX:3.52,scaleY:3.52,y:30.4,alpha:0.081},0).wait(1).to({scaleX:3.63,scaleY:3.63,y:29.8,alpha:0.042},0).wait(1).to({scaleX:3.69,scaleY:3.69,y:29.4,alpha:0.017},0).wait(1).to({scaleX:3.73,scaleY:3.73,x:364.3,y:29.2,alpha:0.004},0).wait(1).to({regX:139.4,regY:77,scaleX:3.74,scaleY:3.74,x:-478.3,y:145.8,alpha:0},0).to({_off:true},1).wait(150));

	// confetti
	this.instance_19 = new lib.confettiloop();
	this.instance_19.parent = this;
	this.instance_19.setTransform(153.2,-226,1,1,0,0,0,298.6,369.4);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(65).to({_off:false},0).wait(227).to({alpha:0},12).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#B5141A","#460608"],[0.216,1],0,0,0,0,0,367).s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(305));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,3312.4,90);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/MacDonalds_atlas_.png?1500959665373", id:"MacDonalds_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;