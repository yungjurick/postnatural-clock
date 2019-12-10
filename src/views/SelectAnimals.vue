<template>
  <div class="select-animals">
    <div class="select-animals__container">
      <h1 class="select-animals__container__title">Select Animals For Timer</h1>
      <small class="select-animals__container__small">
        Select 
        <strong style="font-weight: bold">4</strong>
        Animals - Click 
        <span
          @click="navigateToTimer()"
          :class="{ 'activate-link' : this.checkedCount === 4 }"
          class="select-animals__container__link"
        >Proceed</span> 
        to Create Your Timer
      </small>
      <p class="select-animals__container__selected">{{ selectedAnimals }}</p>
      <div class="select-animals__container__gallery">
        <div
          v-for="(animal, index) in animalsList"
          :key="index"
          class="select-animals__container__gallery__item"
          :class="{ 'checked-border' : animal.checked }"
        >
          <img
            :src="animal.src"
            @click="toggleCheck(index, animal)"
            class="select-animals__container__gallery__item__img"
          />
          <p
            :class="{ 'checked-animal' : animal.checked }"
            class="select-animals__container__gallery__item__name"
          >
            {{ animal.name }}
          </p>
        </div>
      </div>
    </div>
    <!-- Date Prompt Modal -->
    <div v-show="isModalOpen" class="select-animals__modal">
      <div class="select-animals__modal__container">
        <h1 class="select-animals__modal__container__title">Select a Start Date</h1>
        <div class="select-animals__modal__container__selects">
          <p>From Now</p>
          <p>
            From Year
            <span><input type="number" /></span>
          </p>
        </div>
        <div class="select-animals__modal__container__buttons">
          <button
            :class="{'line-through' : !canProceed }"
            class="select-animals__modal__container__buttons--proceed"
          >
            Proceed
          </button>
          <button
            @click="isModalOpen = !isModalOpen"
            class="select-animals__modal__container__buttons--back"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectAnimals',
  data() {
    return {
      animalsList: [],
      selectedAnimalsList: [],
      checkedCount: 0,
      underlineTop: false,
      isModalOpen: false,
      selectedDatePreference: '',
      selectedYear: 0
    }
  },
  mounted() {
    this.$store.commit('SET_SELECTED_ANIMALS', [])
    this.animalsList = this.$store.state.animals.map(animal => {
      return {
        ...animal,
        checked: false,
        disableCursor: false
      }
    })
  },
  computed: {
    selectedAnimals() {
      return this.selectedAnimalsList.map(selected => selected.name).join(', ')
    },
    canProceed() {
      if (
        this.selectedDatePreference !== '' &&
        this.selectedYear > 1920 &&
        this.selectedYear < 2020
      ) {
        return true
      }
      return false
    }
  },
  methods: {
    toggleCheck(index, animal) {
      if (this.checkedCount < 4 && !animal.checked) {
        this.checkedCount++
        this.animalsList[index].checked = !this.animalsList[index].checked
        this.selectedAnimalsList.push(animal)
      } else if (animal.checked) {
        this.checkedCount--
        this.animalsList[index].checked = !this.animalsList[index].checked
        this.selectedAnimalsList = this.selectedAnimalsList.filter(selected => selected.name !== animal.name)
      }
    },
    navigateToTimer() {
      this.$store.commit('SET_SELECTED_ANIMALS', this.selectedAnimalsList);
      this.isModalOpen = !this.isModalOpen;
      // this.$router.push('/clock-animals')
    }
  }
}
</script>

<style lang="scss">
.select-animals {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: 'Roboto Mono', monospace;
  &__container {
    padding: 120px 0 60px 0;
    width: 60%;
    background-color: white;
    &__title {
      font-size: 3rem;
      margin-bottom: 30px;
    }
    &__small {
      font-size: 0.9rem;
    }
    &__selected {
      height: 40px;
      padding-top: 40px;
      font-size: 1.1rem;
      font-weight: bold;
    }
    &__link {
      transition: 0.3s all;
    }
    &__gallery {
      margin-top: 10px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-column-gap: 10px;
      grid-row-gap: 15px;
      &__item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 200px;
        transition: 0.3s all;
        border: 1px solid transparent;
        &__img {
          cursor: pointer;
          height: 35%;
        }
        &__name {
          transition: all 0.3s;
          margin-top: 20px;
        }
      }
    }
  }
  &__modal {
    background-color: rgba(255, 255, 255);
    z-index: 5;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    &__container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 50%;
      width: auto;
      &__title {
        font-size: 2.5rem;
        font-weight: bold;
        background-color: #36384C;
        color: white;
        padding: 6px 12px;
      }
      &__selects {
        width: auto;
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        text-align: left;
        p {
          cursor: pointer;
          transition: 0.2s all;
          padding: 6px 12px;
          font-size: 1.3rem;
          &:hover {
            background-color: rgba(54, 56, 76, 0.7);
            color: white;
          }
        }
        p + p {
          margin-top: 32px;
        }
      }
      &__buttons {
        width: 100%;
        margin-top: 100px;
        display: flex;
        justify-content: center;
        button {
          border: 1px solid transparent;
          font-family: 'Roboto Mono', monospace;
          font-size: 1.1rem;
          padding: 6px 30px;
        }
        button + button {
          margin-left: 15%;
        }
        &--back {
          cursor: pointer;
        }
        &--proceed {
          transition: 0.1s all;
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .select-animals {
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
.checked-animal {
  color: white;
  background-color: #36384C;
}
.checked-border {
  border: 1px solid rgb(54, 56, 76, 0.2);
  border-radius: 12px;
}
.activate-link {
  padding: 2px 6px;
  font-weight: bold;
  color: white;
  background-color: #36384C;
  cursor: pointer;
}
.line-through {
  text-decoration: line-through;
  cursor: default;
}
</style>