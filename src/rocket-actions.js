import Event from 'event-pubsub';
export const store = new Event;
var _hasLaunched = false;
export default {
  steerLeft(){
    store.trigger('steerLeft');
  },

  steerRight(){
    store.trigger('steerRight');
  },

  stopSteering(){
    store.trigger('stopSteering');
  },

  launchRocket(){
    store.trigger('launchRocket');
    _hasLaunched = true;
  },

  hasLaunched(){
    return _hasLaunched;
  }
}
