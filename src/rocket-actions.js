import Event from 'event-pubsub';
export const store = new Event;
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
  }
}
