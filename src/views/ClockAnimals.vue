<template>
  <div class="clock">
    <div class="clock__top clock__section">
      <div class="clock__section__time">
        <h1 class="clock__label">Mouse</h1>
        <p>
          {{ `${padHour(mouseTime.hour)} : ${padMinuteAndSecond(mouseTime.minute)} : ${padMinuteAndSecond(mouseTime.second)}` }}
        </p>
        <img class="clock__animal" src="@/assets/mouse.png">
      </div>
      <div class="clock__section__time">
        <h1 class="clock__label">Dog</h1>
        <p>
          {{ `${padHour(dogTime.hour)} : ${padMinuteAndSecond(dogTime.minute)} : ${padMinuteAndSecond(dogTime.second)}` }}
        </p>
        <img class="clock__animal" src="@/assets/dog.png">
      </div>
    </div>
    <div class="clock__middle clock__section">
      <div class="clock__section__time">
        <p class="clock__section__time__digit">
          {{ `${padHour(humanTime.hour)} : ${padMinuteAndSecond(humanTime.minute)} : ${padMinuteAndSecond(humanTime.second)}` }}
        </p>
        <p class="clock__section__time__subtitle">The Human Timer</p>
      </div>
    </div>
    <div class="clock__bottom clock__section">
      <div class="clock__section__time">
        <h1 class="clock__label">Tortoise</h1>
        <p>
          {{ `${padHour(tortoiseTime.hour)} : ${padMinuteAndSecond(tortoiseTime.minute)} : ${padMinuteAndSecond(tortoiseTime.second)}` }}
        </p>
        <img class="clock__animal" src="@/assets/tortoise.png">
      </div>
      <div class="clock__section__time">
        <h1 class="clock__label">Whale</h1>
        <p>
          {{ `${padHour(whaleTime.hour)} : ${padMinuteAndSecond(whaleTime.minute)} : ${padMinuteAndSecond(whaleTime.second)}` }}
        </p>
        <img class="clock__animal" src="@/assets/whale.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  data() {
    return {
      humanTime: {
        hour: 0,
        minute: 0,
        second: 0
      },
      dogTime: {
        hour: 0,
        minute: 0,
        second: 0
      },
      mouseTime: {
        hour: 0,
        minute: 0,
        second: 0
      },
      tortoiseTime: {
        hour: 0,
        minute: 0,
        second: 0
      },
      whaleTime: {
        hour: 0,
        minute: 0,
        second: 0
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.humanTime = this.updateTime(this.humanTime);
    }, 1000);

    setInterval(() => {
      this.dogTime = this.updateTime(this.dogTime);
    }, 1000 / 7.2);

    setInterval(() => {
      this.tortoiseTime = this.updateTime(this.tortoiseTime);
    }, 1000 / 0.72);

    setInterval(() => {
      this.whaleTime = this.updateTime(this.whaleTime);
    }, 1000 / 0.36);

    setInterval(() => {
      this.mouseTime = this.updateTime(this.mouseTime);
    }, 1000 / 36);
  },
  methods: {
    updateTime(time) {
      let { hour, minute, second } = time;
      // Increment second
      second += 1;

      if (second == 60) {
        minute += 1;
        second = 0;
      }

      if (minute == 60) {
        hour += 1;
        minute = 0;
      }
      return {
        hour,
        minute,
        second
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
  height: 100%;
  width: 100%;
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
    left: 75%;
    transform: translateX(-25%);
  }
  &__label {
    font-size: 1.8rem;
    position: absolute;
    left: 25%;
    transform: translateX(-75%);
  }
}

</style>