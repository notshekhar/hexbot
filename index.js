let canvas, ctx
let width, height
let x = 0
let y = 0
let TOTAL_COLORS = 1 
function start_app() {
  canvas = document.querySelector('canvas')
  ctx = NOOPBOT_SETUP_CANVAS({
    canvas: canvas,
    bgColor: '#f1f1f1'
  });
  width = canvas.width/100
  height = canvas.height/10
  let interval = setInterval(()=>draw(), 16 )
  draw()
}

function draw(){
  // ctx = NOOPBOT_SETUP_CANVAS({
  //   canvas: canvas,
  //   bgColor: '#f1f1f1'
  // });
  NOOPBOT_FETCH({
    API: 'hexbot',
    count: TOTAL_COLORS
  }, response_data)
}

function response_data(colors){
  colors.colors.forEach((color, i)=>{
    draw_point(color, i)
  })
}
function draw_point(color, i){
  if(x>canvas.width){
    y+=height 
    x=0
  }
  if(y>canvas.height-height){
    x=0 
    y=0
  }
  ctx.beginPath()
  ctx.fillStyle = color.value
  ctx.fillRect(x, y, width, height)
  // ctx.fill()
  x+=width
}
// setInterval(()=>draw(), 16)
