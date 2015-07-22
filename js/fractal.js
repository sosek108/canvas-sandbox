$(document).ready(function() {
// all points are data of {x:..., y:...}

	//settings 
	var width = 1000;
	var height = 500;
    var startLength = 200;
    var depth = 12;
	var startpoint = {x: width/2, y: height};


	//get context
	var canvasElement = document.getElementById('fractal-sandbox');
	var context = canvasElement.getContext('2d');

	fractal(context, startpoint, depth, startLength);

});

function drawLine (ctx, start, end) {
	// all points are data of {x:..., y:...}
	ctx.beginPath();
	ctx.moveTo(start.x,start.y);

    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = 'black';
	ctx.lineTo(end.x,end.y);
    ctx.strokeStyle = 'red';
	ctx.stroke();
	return end;
}

function createEndpointByAngle(startpoint, length, angle) {
	return endpoint = {
		x: Math.floor(length*Math.cos(-Math.PI/2-angle)+startpoint.x), 
		y: Math.floor(length*Math.sin(-Math.PI/2-angle)+startpoint.y)
	}
}
function fractal (ctx, startpoint, depth, length, angle) {
    angle = (typeof angle !== 'undefined' ? angle : 0);

    var phi = 1.61803398;
    var proportion = 1/phi;
    console.log(proportion);

	if (depth < 1)
		return;

	var endpoint = createEndpointByAngle(startpoint, length, angle);
	drawLine(ctx, startpoint, endpoint);

	fractal(ctx, endpoint, depth-1, proportion*length, angle+Math.PI/4);
	fractal(ctx, endpoint, depth-1, proportion*length, angle-Math.PI/4);
}