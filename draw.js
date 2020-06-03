const canvas = document.querySelector(".canvas"); //select the canvas\
const ctx = canvas.getContext("2d");
const scale = 20;

const rows = canvas.height / scale; //amount of rows we're going to have
const columns = canvas.width / scale;
var snake;
(function setup() {
  snake = new Snake();
  fruit = new Fruit();

  fruit.pickLocation();
  console.log(fruit);

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clears the path behind the snake
    fruit.draw();
    snake.update();
    snake.draw();

    if (snake.eat(fruit)) {
      //What happens when we eat the fruit, change fruit location
      fruit.pickLocation();
    }

    snake.checkCollision();
    document.querySelector(".title");
    document.querySelector(".score").innerText = snake.total;
  }, 80); // four times a second
})();

window.addEventListener("keydown", (evt) => {
  const direction = evt.key.replace("Arrow", "");
  snake.changeDirection(direction);
});
