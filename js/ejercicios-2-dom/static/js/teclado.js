const d = document;
export function shortcuts(e) {
  /* console.log(e);
  console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(e.ctrlKey);
  console.log(e.altKey);
  console.log(e.shiftKey);
  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con la tecla a y la tecla alt");
  } */
}
let x = 0,
  y = 0;
export function moverBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  //console.log(limitsBall, limitsStage);
  switch (e.keyCode) {
    //ArrowLeft
    case 37:
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    //ArrowUp
    case 38:
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    //ArrowRight
    case 39:
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    //ArrowDown
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }
  //console.log(x, y);
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
