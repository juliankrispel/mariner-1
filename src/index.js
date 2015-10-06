import pixi from 'pixi.js';
import $ from 'jquery';

var state = {
	started: false
};

var height = window.innerHeight;
var width = window.innerWidth;

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
var clouds = new pixi.TilingSprite(cloudsTexture, width, height);

clouds.anchor.x = 0;
clouds.anchor.y = 0;

// center the sprite's anchor point
window.rocket = rocket;
rocket.anchor.x = rocket.width;
rocket.anchor.y = rocket.height;

// move the sprite to the center of the screen
rocket.position.y = height/2 - rocket.height;
rocket.position.x = width/2 - rocket.width;

background.addChild(clouds);
foreground.addChild(rocket);
stage.addChild(background);
stage.addChild(foreground);

// start animating
animate(0.05);

function animate(i) {
	if(i <= 30 && state.started === true){
		i = i + 0.05;
	}
	setTimeout(animate.bind(this, i), 20);

	// just for fun, let's rotate mr rabbit a little
	clouds.tilePosition.y += i;

	// render the container
	renderer.render(stage);
}

