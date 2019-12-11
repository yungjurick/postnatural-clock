<template>
  <div class="clock">
    <div class="clock__top clock__section">
      <div
        v-for="(animal, index) in animalsList.slice(0, 2)"
        :key="index"
        class="clock__section__time"
      >
        <h1 class="clock__label">{{ animal.name }}</h1>
        <div class="clock__section__middle">
          <p class="clock__section__middle__subtitle">{{ animal.time.year }} Years and {{ animal.time.day || 0 }} Days</p>
          <p class="clock__section__middle__digits">
            {{ `${padHour(animal.time.hour)} : ${padMinuteAndSecond(animal.time.minute)} : ${padMinuteAndSecond(animal.time.second)}` }}
          </p>
          <p class="clock__section__middle__subtitle">{{ animal.time.cycle }} Lifetimes</p>
        </div>
        <img class="clock__animal" :src="animal.src">
      </div>
    </div>
    <div class="clock__middle clock__section">
      <div class="clock__section__time">
        <p class="clock__section__time__digit">
          {{ `${padHour(humanTime.hour)} : ${padMinuteAndSecond(humanTime.minute)} : ${padMinuteAndSecond(humanTime.second)}` }}
        </p>
        <p class="clock__section__time__subtitle">The Human Timer</p>
        <p class="clock__type">{{ humanTime.year }} Years and {{ humanTime.day }} Days</p>
      </div>
    </div>
    <div class="clock__bottom clock__section">
      <div
        v-for="(animal, index) in animalsList.slice(2)"
        :key="index"
        class="clock__section__time"
      >
        <h1 class="clock__label">{{ animal.name }}</h1>
        <div class="clock__section__middle">
          <p class="clock__section__middle__subtitle">{{ animal.time.year }} Years and {{ animal.time.day || 0 }} Days</p>
          <p class="clock__section__middle__digits">
            {{ `${padHour(animal.time.hour)} : ${padMinuteAndSecond(animal.time.minute)} : ${padMinuteAndSecond(animal.time.second)}` }}
          </p>
          <p class="clock__section__middle__subtitle">{{ animal.time.cycle }} Lifetime</p>
        </div>
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
    // Pull Data from Vuex Store
    const { selectedDatePreference, selectedYear } = this.$store.state.timePreference
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

    // Modify Data based on Selected Date Preference, do nothing if is not 'date'
    if (selectedDatePreference === 'date') {
      const timeFrom = this.$moment(new Date(selectedYear, 0, 1));

      // Get the difference in miliseconds as duration
      const diff = this.$moment().diff(timeFrom, 'milliseconds');

      // Parse the seconds according to the human time
      this.humanTime = this.parseTime(diff);

      // Parse the seconds according to the numerator for each animals
      this.animalsList = this.animalsList.map(animal => {
        const updatedTimeObj = this.parseTime(diff * animal.numerator);  

        return {
          ...animal,
          time: updatedTimeObj
        }
      })
    } 

    // Sort the List in order of highest numerator (lower life expenctancy)
    this.animalsList.sort((a, b) =>  b.numerator - a.numerator);

    // -- Start the Timer --

    // Human
    setInterval(() => {
      this.humanTime = this.updateTime(this.humanTime);
    }, 1000);

    if (this.animalsList) {
      // Animals
      setInterval(() => {
        this.animalsList[0].time = this.updateTime(this.animalsList[0].time);
      }, 1000 / this.animalsList[0].numerator);

      setInterval(() => {
        this.animalsList[1].time = this.updateTime(this.animalsList[1].time);
      }, 1000 / this.animalsList[1].numerator);

      setInterval(() => {
        this.animalsList[2].time = this.updateTime(this.animalsList[2].time);
      }, 1000 / this.animalsList[2].numerator);

      setInterval(() => {
        this.animalsList[3].time = this.updateTime(this.animalsList[3].time);
      }, 1000 / this.animalsList[3].numerator);
    }

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
    },
    parseTime(diff) {
      // Wrap diff with moment.js duration
      const duration = this.$moment.duration(diff);

      // Get seconds, minutes, hours, and years from the duration
      const second = duration.seconds();
      const minute = duration.minutes();
      const hour = duration.hours();
      const year = duration.years();

      // Create temp to get days
      const temp = this.$moment.duration({
        second,
        minute,
        hour,
        year
      });

      // Get days by subtracting the retrieved seconds, minutes, hours, and years from the original duration
      // and convert it into days. Floor the value to get rid of decimal points.
      const day = Math.floor(duration.subtract(temp).asDays());

      const cycle = Math.floor(year / 72);
      const yearSubCycle = year - (cycle * 72);

      return {
        second,
        minute,
        hour,
        day,
        year: yearSubCycle,
        cycle
      }
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
    &__middle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      &__subtitle {
        color: #2c3e5088;
        font-size: 0.9rem;
        &:first-child {
          text-align: left;
          // padding-left: 6px;
        }
        &:last-child {
          text-align: right;
        }
      }
      &__digits {
        margin: 8px 0;
      }
    }
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
    height: 37%;
    background: white;
  }
  &__middle {
    height: 26%;
    background: black;
    color: white;
  }
  &__bottom {
    height: 37%;
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