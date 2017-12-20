;(function () {
    let Bird=window.Bird=function () {
        this.x=game.canvas.width * (1 - 0.618);
        this.y=100;
        this.rotate=0;
        this.dy=0;
        this.fsm="drop";
        this.images = [game.R["bird0_0"] , game.R["bird0_1"] , game.R["bird0_2"]];
        this.wing = 0;
    };
    Bird.prototype.update=function () {

        if(this.fsm=="drop"){
            this.dy+=0.1;
            this.y+=this.dy;
        }else if (this.fsm=="fly"){
            this.dy-=0.6;
            if(this.dy<=0){
                this.fsm="drop";
                return;
            }
            this.y-=this.dy;
            if(this.y<-24){
                this.y=-24
            }
            this.wing++;
            if (this.wing>2){
                this.wing=0;
            }
        }
        this.rotate+=0.06;
        this.x1=this.x-17;
        this.x2=this.x+17;
        this.y1=this.y-12;
        this.y2=this.y+12;

        //落地检测
        if(this.y2 > game.canvas.height - 112){
            //一旦死亡，进入场景3
            game.sm.enter(3);

        }
    };
    Bird.prototype.fly=function () {
        this.fsm="fly";
        this.rotate=-1.4;
        this.dy=5.5;
        //音乐
        document.getElementById("wing").load();
        document.getElementById("wing").play();
    };
    Bird.prototype.render=function () {
        game.draw.save();
        game.draw.translate(this.x,this.y);
        game.draw.rotate(this.rotate);
        game.draw.drawImage(game.R["bird0_"+this.wing],-24,-24);
        game.draw.restore();
    };
})();