function Food() {
    this.pos;

    this.pickLocation = function() {
        var cols = floor(width/scl);
        var rows = floor(height/scl);
        this.pos = createVector(floor(random(cols)), floor(random(rows)));
        this.pos.mult(scl);
    }

    this.show = function() {
        fill(204, 204, 0);
        rect(this.pos.x, this.pos.y, scl, scl);
    }
}
