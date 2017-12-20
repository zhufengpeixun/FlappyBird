(function () {
    let Land=window.Land=function () {
        this.x=0;
        this.width=336;
        this.height=112;
    };
    Land.prototype.update=function () {
        this.x--;
        this.x<-this.width?this.x=0:null;
    };
    Land.prototype.render=function () {
        game.draw.drawImage(game.R["land"],this.x,game.canvas.height-this.height);
        game.draw.drawImage(game.R["land"],this.x+this.width,game.canvas.height-this.height);
        game.draw.drawImage(game.R["land"],this.x+this.width*2,game.canvas.height-this.height);
    }
})();