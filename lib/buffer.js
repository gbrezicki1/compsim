export function Buffer() {
    this.input = 0;
    this.enable = 0;
    this.output = null;
    
    this.update = function() {
        if (this.enable === 1) {
            this.output = this.input;
        } else {
            this.output = null;
        }
    }

    this.updateInput = function(input) {
        this.input = input;
        this.update();
    }

    this.updateEnable = function(enable) {
        this.enable = enable;
        this.update();
    }
}