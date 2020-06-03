function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = []; // stores coordinates of where the snake is

  this.draw = function () {
    ctx.fillStyle = "black";
    color = ["dark red", "gold"];

    for (let i = 0; i < this.tail.length; i++) {
      var randcolor = Math.floor(Math.random() * color.length);

      ctx.fillStyle = color[randcolor];
      ctx.fillRect(this.tail[i].x, this.tail[i].y, 5, 5); // snake body
    }

    ctx.fillRect(this.x, this.y, scale, scale);
  };
  this.update = function () {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    this.tail[this.total - 1] = { x: this.x, y: this.y };

    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x > canvas.width) {
      // once snake hits x border it resets
      this.x = 0;
    }
    if (this.y > canvas.height) {
      // once snake hits x border it resets
      this.y = 0;
    }
    if (this.x < 0) {
      // once snake hits x border it resets
      this.x = canvas.width;
    }
    if (this.y < 0) {
      // once snake hits x border it resets
      this.y = canvas.height;
    }
  };

  this.changeDirection = function (direction) {
    switch (direction) {
      case "Up":
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case "Down":
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case "Left":
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case "Right":
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
    }
  };

  this.eat = function (fruit) {
    // checking to see if the head of the snake collides with the fruit
    if (this.x === fruit.x && this.y === fruit.y) {
      this.total += 1;

      return true;
    }
    return false;
  };

  this.checkCollision = function () {
    for (var i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        console.log("Colliding");
        this.total = 0;
        this.tail = [];
      }
    }
  };
}
