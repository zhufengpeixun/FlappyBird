(function () {
    let Background=window.Background=function () {
        this.x=0;
        this.width=288;
        this.height=512;
    };
    Background.prototype.render=function () {
        game.draw.drawImage(game.R["bg_day"],this.x,game.canvas.height-this.height);
        game.draw.drawImage(game.R["bg_day"],this.x+this.width,game.canvas.height-this.height);
        game.draw.drawImage(game.R["bg_day"],this.x+this.width*2,game.canvas.height-this.height);
        game.draw.fillStyle="#4ec0ca";
        game.draw.fillRect(0,0,game.canvas.width,game.canvas.height-this.height);
    };
    Background.prototype.update=function () {
        this.x--;
        this.x<-this.width?this.x=0:null;
    }
})();