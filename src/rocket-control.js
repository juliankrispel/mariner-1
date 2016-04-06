import Event from 'event-pubsub';
export const store = new Event;
export default {
  steerLeft(){
    store.trigger('steerLeft');
  },

  steerRight(){
    store.trigger('steerRight');
  },

  launchRocket(){
    store.trigger('launchRocket');
  }
}
