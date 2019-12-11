import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animals: [
      // Numerator: Human Age Expectancy / Animal Age Expectancy
      {
        name: 'Dog',
        numerator: 7.2,
        src: require('../assets/dog.png')
      },
      {
        name: 'Tortoise',
        numerator: 0.72,
        src: require('../assets/tortoise.png')
      },
      {
        name: 'Whale',
        numerator: 0.36,
        src: require('../assets/whale.png')
      },
      {
        name: 'Mouse',
        numerator: 36,
        src: require('../assets/mouse.png')
      },
      {
        name: 'Golden Eagle',
        numerator: 2.25,
        src: require('../assets/golden-eagle.png')
      },
      {
        name: 'Pelican',
        numerator: 1.385,
        src: require('../assets/pelican.png')
      },
      {
        name: 'Pigeon',
        numerator: 2.06,
        src: require('../assets/pigeon.png')
      },
      {
        name: 'Sea Horse',
        numerator: 12,
        src: require('../assets/sea-horse.png')
      },
      {
        name: 'Horse',
        numerator: 1.44,
        src: require('../assets/horse.png')
      },
      {
        name: 'Giraffe',
        numerator: 2.57,
        src: require('../assets/giraffe.png')
      },
      {
        name: 'Chimpanzee',
        numerator: 1.44,
        src: require('../assets/chimpanzee.png')
      },
      {
        name: 'Camel',
        numerator: 1.8,
        src: require('../assets/camel.png')
      },
      {
        name: 'Grizzly Bear',
        numerator: 2.118,
        src: require('../assets/bear.png')
      },
      {
        name: 'Rabbit',
        numerator: 7.2,
        src: require('../assets/rabbit.png')
      },
      {
        name: 'Sparrow',
        numerator: 3.6,
        src: require('../assets/sparrow.png')
      },
      {
        name: 'Turkey',
        numerator: 4.8,
        src: require('../assets/turkey.png')
      },
      {
        name: 'Fox',
        numerator: 5.143,
        src: require('../assets/fox.png')
      },
      {
        name: 'Lion',
        numerator: 2.06,
        src: require('../assets/lion.png')
      },
      {
        name: 'Porcupine',
        numerator: 3.6,
        src: require('../assets/porcupine.png')
      },
      {
        name: 'Rhinoceros',
        numerator: 1.8,
        src: require('../assets/rhinoceros.png')
      },
      {
        name: 'Zebra',
        numerator: 2.4,
        src: require('../assets/zebra.png')
      },
      {
        name: 'Dove',
        numerator: 6,
        src: require('../assets/dove.png')
      },
      {
        name: 'Chameleon',
        numerator: 20.572,
        src: require('../assets/chameleon.png')
      },
      {
        name: 'Seal',
        numerator: 2.4,
        src: require('../assets/seal.png')
      }
    ],
    selectedAnimals: [],
    humanTime: {
      hour: 0,
      minute: 0,
      second: 0,
      day: 0,
      year: 0,
      cycle: 0
    },
    timePreference: {}

  },
  mutations: {
    SET_SELECTED_ANIMALS(state, payload) {
      state.selectedAnimals = payload;
    },
    SET_TIME_PREFERENCE(state, payload) {
      state.timePreference = payload;
    }
  }
})
