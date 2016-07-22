function RetroCanvas(canvas) {
    this.canvas;
    this.ctx;

    if (!canvasId) {
        return;
    }

    this.addCanvas(canvas);
}

(function (static_, proto_) {

    proto_.addCanvas = function (canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    };

}(RetroCanvas, RetroCanvas.prototype));

module.exports = RetroCanvas;
