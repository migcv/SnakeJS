function Snake() {
    this.pos = createVector(width/2, height/2);
    this.xspeed = 1;
    this.yspeed = 0;
    this.size = 0;
    this.tail = [];

    this.eat = function(pos) {
        var d = dist(this.pos.x, this.pos.y, pos.x, pos.y);
        if(d < 1) {
            this.size++;
            return true;
        }
        return false;
    }

    this.update = function() {
        if(this.tail.length == this.size) {
            for(var i = 0; i < this.tail.length-1; i++) {
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.size-1] = createVector(this.pos.x, this.pos.y);
        this.pos.x = this.pos.x + this.xspeed * scl;
        this.pos.y = this.pos.y + this.yspeed * scl;
        //this.pos.x = constrain(this.pos.x, 0, width-scl);
        //this.pos.y = constrain(this.pos.y, 0, height-scl);
    }

    this.show = function() {
        fill(255);
        for(var j = 0; j < this.tail.length; j++) {
            rect(this.tail[j].x, this.tail[j].y, scl, scl);
        }
        rect(this.pos.x, this.pos.y, scl, scl);
    }

    this.death = function() {
        for(var j = 0; j < this.tail.length; j++) {
            var d = dist(this.pos.x, this.pos.y, this.tail[j].x, this.tail[j].y);
            if(d < 1) {
                this.size = 0;
                this.pos.x = width/2;
                this.pos.y = height/2;
                this.xspeed = 1;
                this.yspeed = 0;
                this.tail = [];
                return true;
            }
        }

    }

    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.edges = function() {
        if(this.pos.x + scl > width) {
            this.pos.x = -scl;
        } else if(this.pos.x + scl < 0) {
            this.pos.x = width;
        } else if(this.pos.y + scl > height) {
            this.pos.y = -scl;
        } else if(this.pos.y + scl < 0) {
            this.pos.y = height;
        }
    }
}
