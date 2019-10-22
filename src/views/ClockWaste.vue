<template>
  <div class="clockWaste">
    <div class="clockWaste__top clockWaste__section">
      <div class="clockWaste__section__time">
        <h1 class="clockWaste__label">Orange Peel</h1>
        <p>
          {{ `${padHour(peelTime.hour)} : ${padMinuteAndSecond(peelTime.minute)} : ${padMinuteAndSecond(peelTime.second)}` }}
        </p>
        <img class="clockWaste__animal" src="@/assets/orange.png">
      </div>
      <div class="clockWaste__section__time">
        <h1 class="clockWaste__label">Milk Carton</h1>
        <p>
          {{ `${padHour(cartonTime.hour)} : ${padMinuteAndSecond(cartonTime.minute)} : ${padMinuteAndSecond(cartonTime.second)}` }}
        </p>
        <img class="clockWaste__animal" src="@/assets/milk.png">
      </div>
    </div>
    <div class="clockWaste__middle clockWaste__section">
      <div class="clockWaste__section__time">
        <p class="clockWaste__section__time__digit">
          {{ `${padHour(humanTime.hour)} : ${padMinuteAndSecond(humanTime.minute)} : ${padMinuteAndSecond(humanTime.second)}` }}
        </p>
        <p class="clockWaste__section__time__subtitle">The Human Timer</p>
      </div>
    </div>
    <div class="clockWaste__bottom clockWaste__section">
      <div class="clockWaste__section__time">
        <h1 class="clockWaste__label">Batteries</h1>
        <p>
          {{ `${padHour(batteryTime.hour)} : ${padMinuteAndSecond(batteryTime.minute)} : ${padMinuteAndSecond(batteryTime.second)}` }}
        </p>
        <img class="clockWaste__animal" src="@/assets/battery.png">
      </div>
      <div class="clockWaste__section__time">
        <h1 class="clockWaste__label">Plastic Bottles</h1>
        <p>
          {{ `${padHour(plasticTime.hour)} : ${padMinuteAndSecond(plasticTime.minute)} : ${padMinuteAndSecond(plasticTime.second)}` }}
        </p>
        <img class="clockWaste__animal" src="@/assets/plastic.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClockWaste',
  data() {
    return {
      humanTime: {
        hour: 0,
        minute: 0,
        second: 0
      },
      cartonTime: {
        hour: 0,
        minute: 0,
        second: 0
      },
      peelTime: {
        hour: 0,
        minute: 0,
        second: 0
      },
      batteryTime: {
        hour: 0,
        minute: 0,
        second: 0
      },
      plasticTime: {
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
      this.cartonTime = this.updateTime(this.cartonTime);
    }, 1000 / 14.4);

    setInterval(() => {
      this.batteryTime = this.updateTime(this.batteryTime);
    }, 1000 / 0.72);

    setInterval(() => {
      this.plasticTime = this.updateTime(this.plasticTime);
    }, 1000 / 0.16);

    setInterval(() => {
      this.peelTime = this.updateTime(this.peelTime);
    }, 1000 / 144);
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
.clockWaste {
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
    transform: translateX(-35%);
  }
  &__label {
    font-size: 1.8rem;
    position: absolute;
    left: 25%;
    transform: translateX(-75%);
  }
}

</style>