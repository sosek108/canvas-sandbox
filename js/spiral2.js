function SpiralMulti(center, canvas) {
	return {
		canvas: canvas,
		ctx: undefined,
		center: center,
		cPoint: {x: center.x, y: center.y},		//cartesian point relative to center
		pPoint: {r: 10, fi: 0},					//polar point relative to center
		pi: Math.PI,

		polar2cartesian: function(pPoint) {
			//converts polar point to cartesian point
			return {
				x: pPoint.r * Math.cos(pPoint.fi),
				y: pPoint.r * Math.sin(pPoint.fi)
			}
		},
		getPointRelativeToZero: function(center, point) {
			return {
				x: center.x + point.x,
				y: center.y - point.y
			}
		},
		init: function() {
			this.ctx = this.canvas.getContext('2d');
			// this.ctx.fillStyle = "#262626";
			// this.ctx.fillRect(0,0,canvas.width, canvas.height);
			this.ctx.strokeStyle = "#303030";
			this.ctx.beginPath();
			this.ctx.moveTo(this.center.x, this.center.y);
		},
		nextMove: function() {
			this.cPoint = this.polar2cartesian(this.pPoint);
			drawPoint = this.getPointRelativeToZero(this.center, this.cPoint);
			this.ctx.lineTo(drawPoint.x, drawPoint.y);
			this.ctx.stroke();
		},
		draw: function(stepR = 1.05, stepFi = 0.5235, stepCount = 100) {
			for (var i = 0; i < stepCount; i++) {
				this.pPoint.r = this.pPoint.r * stepR;
				this.pPoint.fi = this.pPoint.fi + stepFi;
				this.nextMove();
			}
		},
		reset: function() {
			this.cPoint = {x: this.center.x, y: this.center.y};
			this.pPoint = {r: 10, fi: 0};
			this.ctx.closePath();
			this.ctx.clearRect(0,0,canvas.width,canvas.height);
			this.init();
		}
	}
}