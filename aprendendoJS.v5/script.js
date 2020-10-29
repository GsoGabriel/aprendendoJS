var img;

function upload() {
	var imgInput = document.getElementById("fileSelect");
	var imgcanvas = document.getElementById("boxUp")
	img = new SimpleImage(imgInput);
	img.drawTo(imgcanvas);
}

function grayscale() {
	for (var pixel of img.values()) {
		var pixelRed = pixel.getRed();
		var pixelGreen = pixel.getGreen();
		var pixelBlue = pixel.getBlue();
		var media = (pixelRed+pixelGreen+pixelBlue)/3
		pixel.setRed(media);
		pixel.setGreen(media);
		pixel.setBlue(media);	
	}
	var imgcanvasgray = document.getElementById("boxUpGray");
	img.drawTo(imgcanvasgray);
}