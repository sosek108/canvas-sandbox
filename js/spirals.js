$(document).ready(function() {
    pi = Math.PI;

	canvas1 = document.getElementById("spiral-canvas1");
	canvas2 = document.getElementById("spiral-canvas2")

    center1 = findCenter(canvas1);
    center2 = findCenter(canvas2);

    r1 = 10;
    r2 = 1.05;
    count = 1000;

    fi = document.getElementById('fi').value = 0.7;

    spiral1 = new SpiralSum(center1, canvas1);
    spiral1.init();
    spiral1.draw(r1, fi*pi, count);

    spiral2 = new SpiralMulti(center2, canvas2);
    spiral2.init();
    spiral2.draw(r2, fi*pi, count);
});

function findCenter(canvas) {
	return {
		x: Math.floor(canvas.width /2),
		y: Math.floor(canvas.height/2)
	}
}

function drawSpirals() {
	fi = document.getElementById('fi').value;

	spiral1.reset();
	spiral2.reset();
	spiral1.draw(r1, fi*pi, count);
	spiral2.draw(r2, fi*pi, count);
}