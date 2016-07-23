function RetroCanvas(canvas) {
    this.canvas;
    this.ctx;

    if (!canvasId) {
        return;
    }

    this.addCanvas(canvas);
}

(function (static_, proto_) {

    /*
     * Adds a canvas.
     */
    proto_.addCanvas = function (canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    };

    /*
     * Draws the image data.
     */
    proto_.draw = function () {
        
    };

}(RetroCanvas, RetroCanvas.prototype));

module.exports = RetroCanvas;
