import pixi from 'pixi.js';
import {store} from './rocket-control';

var state = {
  started: false,
  direction: ''
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

var directionVector = 0;
var rotationVector = 0;

// start animating
export function animate(i) {
  i = i || 0;
  if(i <= 10 && state.started === true){
    i = i + 0.03;
  }
  setTimeout(animate.bind(this, i), 20);
  clouds.tilePosition.x -= 0.1;

  if(rocket.position.y >= (height*0.8)){
    rocket.position.y -= i;
  }else{
    clouds.tilePosition.y += i;
  }

  if(state.direction === 'right'){
    directionVector -= 150;
    state.direction = '';
  }else if(state.direction === 'left'){
    directionVector += 150;
    state.direction = '';
  }

  let vectorMovement = directionVector / 30
  if(Math.abs(vectorMovement) < .4){
    vectorMovement = 0;
  }

  directionVector-=vectorMovement;

  clouds.tilePosition.x += vectorMovement;

  let newRotationVector =- vectorMovement/50;
  rotationVector =- newRotationVector;
  rocket.rotation =- rotationVector;

  // render the container
  renderer.render(stage);
}

store.on('steerLeft', function(){
  state.direction = 'left';
});

store.on('steerRight', function(){
  state.direction = 'right';
});

store.on('launchRocket', function(){
  state.started = true;
});
