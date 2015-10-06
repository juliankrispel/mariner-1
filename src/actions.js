import store from './store';

export function launchRocket(){
  store.trigger('display', 'Rocket launched!');
}

export function steerRight(){
  store.trigger('display', 'Rocket steered right');
}

export function steerLeft(){
  store.trigger('display', 'Rocket steered left');
}
