var fg;
var bg;

function loadForegroundImage() {
	var fgImage = document.getElementById("fgImage");
	var imgcanvas = document.getElementById("can1");
	fg = new SimpleImage(fgImage);
	fg.drawTo(imgcanvas);
}

function loadBackgroundImage() {
	var bgImage = document.getElementById("bgImage");
	var imgcanvas = document.getElementById("can2");
	bg = new SimpleImage(bgImage);
	bg.drawTo(imgcanvas);
}

function doGreenScreen() {
	var output = new SimpleImage(fg.getWidth(), fg.getHeight());
	for (var pixel of fg.values()) {
		var x = pixel.getX();
		var y = pixel.getY();
		if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
			var bgPixel = bg.getPixel(x,y);
			output.setPixel(x, y, bgPixel);
		}
		else{
			output.setPixel(x, y, pixel);
		}
	}
	var imgcanvas = document.getElementById("can1");
	output.drawTo(imgcanvas);
}

function clearCanvas() {
	var canvas1 = document.getElementById("can1");
	var canvas2 = document.getElementById("can2");
	var context1 = canvas1.getContext("2d");
	context1.clearRect(0,0,canvas1.width,canvas1.height);
	var context2 = canvas2.getContext("2d");
	context2.clearRect(0,0,canvas2.width,canvas2.height);
}