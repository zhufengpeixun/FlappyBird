(function () {
    let Pipe = window.Pipe = function () {
        this.x = game.canvas.width;
        this.height = parseInt(Math.random() * 220) + 100;
        this.space = 140;
        this.h = game.canvas.height - 112 - this.height - this.space;
        this.done = false;
        game.pipeArr.push(this);
    };
    Pipe.prototype.render = function () {
        game.draw.drawImage(game.R["pipe_down"], 0, 320 - this.height, 52, this.height, this.x, 0, 52, this.height);
        game.draw.drawImage(game.R["pipe_up"], 0, 0, 52, this.h, this.x, this.height + this.space, 52, this.h);
    };
    Pipe.prototype.update = function () {
        this.x-=2;
        if (this.x < -52) {
            for (var i = 0; i < game.pipeArr.length; i++) {
                if (game.pipeArr[i] == this) {
                    game.pipeArr.splice(i, 1);
                    break;
                }
            }
        }
        this.x1 = this.x;
        this.x2 = this.x + 52;
        this.y1 = this.height;
        this.y2 = this.height + this.space;
        //碰撞检测！
        //鸟的x2 > 管子的x1 && 鸟的y1 < 管子.y1 && 鸟的x1 <  管子的x2
        //鸟的x2 > 管子的x1 && 鸟的y2 > 管子.y2 && 鸟的x1 <  管子的x2
        if (
            game.bird.x2 > this.x1 && game.bird.y1 < this.y1 && game.bird.x1 < this.x2 || game.bird.x2 > this.x1 && game.bird.y2 > this.y2 && game.bird.x1 < this.x2
        ) {
            //一旦死亡，进入场景3
            game.sm.enter(3);
        }
        //加分检测，当这个管子还没有加过分的时候：
        if(!this.done && game.bird.x1 > this.x2){
            game.score++;
            this.done = true;
            document.getElementById("point").load();
            document.getElementById("point").play();
        }
    };
})();