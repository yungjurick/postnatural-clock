<template>
  <div class="clock">
    <div class="clock__top clock__section">
      <div
        v-for="(animal, index) in animalsList.slice(0, 2)"
        :key="index"
        class="clock__section__time"
      >
        <h1 class="clock__label">{{ animal.name }}</h1>
        <p>
          {{ `${padHour(animal.time.hour)} : ${padMinuteAndSecond(animal.time.minute)} : ${padMinuteAndSecond(animal.time.second)}` }}
        </p>
        <img class="clock__animal" :src="animal.src">
      </div>
    </div>
    <div class="clock__middle clock__section">
      <div class="clock__section__time">
        <p class="clock__section__time__digit">
          {{ `${padHour(humanTime.hour)} : ${padMinuteAndSecond(humanTime.minute)} : ${padMinuteAndSecond(humanTime.second)}` }}
        </p>
        <p class="clock__section__time__subtitle">The Human Timer</p>
        <p class="clock__type">Animals</p>
      </div>
    </div>
    <div class="clock__bottom clock__section">
      <div
        v-for="(animal, index) in animalsList.slice(2)"
        :key="index"
        class="clock__section__time"
      >
        <h1 class="clock__label">{{ animal.name }}</h1>
        <p>
          {{ `${padHour(animal.time.hour)} : ${padMinuteAndSecond(animal.time.minute)} : ${padMinuteAndSecond(animal.time.second)}` }}
        </p>
        <img class="clock__animal" :src="animal.src">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  data() {
    return {
      animalsList: [],
      humanTime: {
        hour: 0,
        minute: 0,
        second: 0,
        day: 0,
        year: 0,
        cycle: 0
      }
    }
  },
  mounted() {
    console.log("Mounted")
    // Pull Data from Vuex Store
    this.humanTime = this.$store.state.humanTime;
    this.animalsList = this.$store.state.selectedAnimals.map(animal => {
      return {
        ...animal,
        time: {
          hour: 0,
          minute: 0,
          second: 0,
          day: 0,
          year: 0,
          cycle: 0
        }
      }
    })

    // Sort the List in order of highest numerator (lower life expenctancy)
    this.animalsList.sort((a, b) =>  b.numerator - a.numerator);

    // Start the Timer

    // Human
    setInterval(() => {
        this.humanTime = this.updateTime(this.humanTime);
      }, 1000);

    // // Animals
    // for (let i = 0; i < this.animalsList.length; i++) {
    //   setInterval(() => {
    //     this.animalsList[0].time = this.updateTime(this.animalsList[0].time);
    //   }, 1000 / this.animalsList[0].numerator);
    // }

  },
  methods: {
    updateTime(time) {
      let { hour, minute, second, day, year, cycle } = time;
      // Increment second
      second++;

      if (second == 60) {
        minute++;
        second = 0;
      }

      if (minute == 60) {
        hour++;
        minute = 0;
      }

      if (hour == 24) {
        day++;
        hour = 0;
      }

      if (day == 365) {
        year++;
        day = 0;
      }

      if (year == 72) {
        cycle++;
        year = 0;
      }

      return {
        hour,
        minute,
        second,
        day,
        year,
        cycle
      }
    },
    padHour(hour) {
      return hour < 10 ? '0' + hour : hour;
    },
    padMinuteAndSecond(time) {
      return time < 10 ? '0' + time : time;
    }
  }
}
</script>

<style lang="scss">
.clock {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  &__top, &__bottom {
    display: flex;
    flex-direction: column;
  }
  &__section {
    flex: 1 0 100%;
    width: 100%;
    &__time {
      font-family: 'Roboto Mono', monospace;
      font-size: 3rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &__subtitle {
        font-size: 1.8rem;
        margin-top: 12px;
      }
    }
  }
  &__top {
    height: 35%;
    background: white;
  }
  &__middle {
    height: 30%;
    background: black;
    color: white;
  }
  &__bottom {
    height: 35%;
    background: white;
  }
  &__animal {
    height: 50px;
    position: absolute;
    left: 80%;
    transform: translateX(-20%);
  }
  &__label {
    font-size: 1.8rem;
    position: absolute;
    left: 25%;
    transform: translateX(-75%);
    width: 139px;
    text-align: left;
  }
  &__type {
    font-weight: bold;
    font-size: 1rem;
    margin-top: 16px;
  }
}
@media screen and (max-width: 480px) {
  .clock {
    &__section {
      &__time {
        font-size: 1.3rem;
      }
    }
    &__label {
      font-size: 0.8rem;
      width: auto;
      left: 20%;
      transform: translateX(-80%);
    }
    &__animal {
      height: 25px;
    }
  }
}

</style>