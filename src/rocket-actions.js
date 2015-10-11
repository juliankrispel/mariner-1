import Event from 'event-pubsub';
export const store = new Event;
var _hasLaunched = false;

export function steerLeft(){
	store.trigger('steerLeft');
}

export function steerRight(){
	store.trigger('steerRight');
}

export function stopSteering(){
	store.trigger('stopSteering');
}

export function launchRocket(){
	store.trigger('launchRocket');
	_hasLaunched = true;
}

export function hasLaunched(){
	return _hasLaunched;
}
