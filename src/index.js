import pixi from 'pixi.js';
import $ from 'jquery';
window.$ = $;

$('#launch').on('mousedown', function(){
  state.started = true;
});

$('#right').on('mousedown', function(){
  state.direction = 'right';
});

$('#left').on('mousedown', function(){
  state.direction = 'left';
});

$('#right, #left').on('mouseleave mouseup', function(){
  state.direction = '';
});

$(document.body).on('keydown', function(e){
  if(e.keyCode === 39){
    state.direction = 'right';
  }else if(e.keyCode === 37){
    state.direction = 'left';
  }
});

$(document.body).on('keyup', function(e){
  state.direction = '';
});

$('#left').on('mousedown', function(){
  state.left = true;
});

var state = {
  started: false,
  left: false,
  right: false
};

var height = window.innerHeight - 100;
var width = window.innerWidth - 20;

var renderer = pixi.autoDetectRenderer(width, height,{backgroundColor : 0x1099bb});
var container = document.getElementById('container');
container.appendChild(renderer.view);

// create the root of the scene graph
var foreground = new pixi.Container();
var background = new pixi.Container();
var stage = new pixi.Container();

// create a texture from an image path
var cloudsTexture = pixi.Texture.fromImage('clouds.png');
var texture = pixi.Texture.fromImage('rocket.png');

// create a new Sprite using the texture
var rocket = new pixi.Sprite(texture);
var clouds = new pixi.TilingSprite(cloudsTexture, width*2, height*2);

clouds.anchor.x = 0;
clouds.anchor.y = 0;
clouds.position.x = -width/2
clouds.position.y = -height/2

// center the sprite's anchor point
rocket.anchor.x = rocket.width/2;
rocket.anchor.y = rocket.height;

// move the sprite to the center of the screen
rocket.position.y = height - (rocket.height - 1);
rocket.position.x = width/2;

background.addChild(clouds);
foreground.addChild(rocket);
stage.addChild(background);
stage.addChild(foreground);

// start animating
animate();

function animate(i) {
  i = i || 0;
  if(i <= 10 && state.started === true){
    i = i + 0.03;
  }
  setTimeout(animate.bind(this, i), 20);

  // just for fun, let's rotate mr rabbit a little
  if(rocket.position.y >= (height*0.8)){
    rocket.position.y -= i;
  }else{
    clouds.tilePosition.y += i;
  }

  if(state.direction === 'right'){
    clouds.tilePosition.x -= 8;
  }else if(state.direction === 'left'){
    clouds.tilePosition.x += 8;
  }


  // render the container
  renderer.render(stage);
}

