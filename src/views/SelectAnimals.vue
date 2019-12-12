<template>
  <div class="select-animals">
    <div class="select-animals__container">
      <h1 class="select-animals__container__title">
        <span class="select-animals__container__title--span">
          Select Animals For Timer
        </span>
      </h1>
      <p class="select-animals__container__small">
        Select 
        <strong style="font-weight: bold">4</strong>
        Animals<br><br>Click 
        <span
          @click="openModal"
          :class="{ 'activate-link' : this.checkedCount === 4 }"
          class="select-animals__container__link"
        >Proceed</span> 
        to Create Your Timer
      </p>
      <p class="select-animals__container__selected"><span>{{ selectedAnimals }}</span></p>
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
            class="select-animals__container__gallery__item__name"
          >
            {{ animal.name }}
          </p>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <!-- Date Prompt Modal -->
      <div v-show="isModalOpen" class="select-animals__modal">
        <div class="select-animals__modal__container">
          <h1 class="select-animals__modal__container__title">Select a Start Time</h1>
          <p class="select-animals__modal__container__subtitle">For year, the timer starts from January 1st of the selected year<br><br>(between 1920 - 2019)</p>
          <div class="select-animals__modal__container__selects">
            <p :class="{'option-clicked' : selectedDatePreference === 'now'}" @click="setDatePreference('now')">
              <span>Start From Now</span>
            </p>
            <p :class="{'option-clicked' : selectedDatePreference === 'date'}">
              <span @click="setDatePreference('date')">Start From Year</span>
              <span class="select-animals__modal__container__selects--span">
                <input
                  v-if="selectedDatePreference === 'date'"
                  v-model="selectedYear"
                  min="1920"
                  max="2020"
                  type="number"
                  class="select-animals__modal__container__selects--input"
                >
              </span>
            </p>
          </div>
          <div class="select-animals__modal__container__buttons">
            <button
              @click="navigateToTimer()"
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
    </transition>
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
      selectedYear: ''
    }
  },
  mounted() {
    // Initialize store with default value
    this.$store.commit('SET_SELECTED_ANIMALS', [])
    this.$store.commit('SET_TIME_PREFERENCE', {
      selectedDatePreference: '',
      selectedYear: '',
    })

    this.animalsList = this.$store.state.animals.map(animal => {
      return {
        ...animal,
        checked: false,
        disableCursor: false
      }
    })
  },
  watch: {
    selectedYear(val) {
      if (val < 0) {
        this.selectedYear = 0
      } else if (val > 2019) {
        this.selectedYear = 2019
      }
    }
  },
  computed: {
    selectedAnimals() {
      return this.selectedAnimalsList.map(selected => selected.name).join(', ')
    },
    canProceed() {
      if (
        this.selectedDatePreference === 'now' ||
        this.selectedYear >= 1920 &&
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
    openModal() {
      if (this.checkedCount == 4) {
        this.isModalOpen = !this.isModalOpen;
      }
    },
    navigateToTimer() {
      const { selectedDatePreference, selectedYear } = this;
      if (this.canProceed) {
        this.$store.commit('SET_SELECTED_ANIMALS', this.selectedAnimalsList);
        this.$store.commit('SET_TIME_PREFERENCE', { selectedDatePreference, selectedYear });
        this.isModalOpen = !this.isModalOpen;
        this.$router.push('/clock-animals');
      }
    },
    setDatePreference(choice) {
      this.selectedYear = null;
      if (choice !== this.selectedDatePreference) {
        this.selectedDatePreference = choice;
      } else {
        this.selectedDatePreference = '';
      }
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
      &--span {
        font-weight: bold;
        color: white;
        background-color: #36384C;
        padding: 6px 12px;
      }
    }
    &__small {
      margin-top: 60px;
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
      margin-top: 20px;
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
        transition: 0.2s all;
        border: 1px solid transparent;
        &__img {
          cursor: pointer;
          height: 35%;
        }
        &__name {
          padding: 4px 10px;
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
      height: auto;
      width: auto;
      &__title {
        font-size: 2.5rem;
        font-weight: bold;
        background-color: #36384C;
        padding: 6px 12px;
        color: white;
      }
      &__subtitle {
        font-size: 0.7rem;
        margin-top: 15px;
      }
      &__selects {
        width: 80%;
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        text-align: left;
        p {
          display: flex;
          align-items: center;
          height: 42px;
          transition: 0.1s all;
          padding: 6px 12px;
          font-size: 1.3rem;
        }
        p:first-child {
          cursor: pointer;
        }
        p:last-child {
          justify-content: space-between;
          span {
            cursor: pointer;
          }
        }
        p + p {
          margin-top: 32px;
        }
        &--span {
          border-bottom: 1.5px solid white;
        }
        &--input {
          width: 100px !important;
          line-height: 1.5;
          letter-spacing: 0.3em;
          font-weight: bold;
          border: none;
          font-family: 'Roboto Mono', monospace;
          padding: 0 6px;
          font-size: 1.3rem;
          text-align: center;
          background-color: transparent;
          color: white; 
          &:focus {
            outline: none;
          }
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }
      }
      &__buttons {
        width: 100%;
        margin-top: 100px;
        display: flex;
        justify-content: center;
        button {
          background-color: white !important;
          border: 1px solid white;
          font-family: 'Roboto Mono', monospace;
          font-size: 1.1rem;
          padding: 6px 30px;
          cursor: pointer;
          &:focus {
            outline: none;
          }
        }
        button + button {
          margin-left: 15%;
        }
        &--proceed {
          transition: 0.1s all;
        }
      }
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
.option-clicked {
  background-color: rgba(54, 56, 76, 0.7);
  color: white;
}
.line-through {
  color: rgb(54, 56, 76, 0.2);
  text-decoration: line-through;
  cursor: default !important;
}
@media screen and (max-width: 1200px) {
  .select-animals {
      &__container {
        width: 80%;
      }
  }
}
@media screen and (max-width: 1024px){
  .select-animals {
      &__container {
        &__title {
          font-size: 2rem;
        }
      }
  }
}
@media screen and (max-width: 610px) {
  .select-animals {
    &__container {
      width: 90%;
      padding-top: 60px;
      &__title {
        font-size: 1.2rem;
        &--span {
          padding: 3px 6px;
        }
      }
      &__selected {
        padding-top: 20px;
        font-size: 0.7rem;
      }
      &__small {
        margin-top: 30px;
        font-size: 0.7rem;
      }
      &__gallery {
        margin-top: 10px;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-column-gap: 5px;
        grid-row-gap: 10px;
        &__item {
          height: 150px;
          &__name {
            font-size: 0.8rem;
          }
        }
      }
    }
    &__modal {
      &__container {
        &__title {
          font-size: 1.2rem;
        }
        &__subtitle {
          width: 250px;
          line-height: 1.8;
          font-size: 0.8rem;
        }
        &__selects {
          width: 100%;
          p {
            font-size: 0.8rem;
          }
          p + p {
            margin-top: 16px;
          }
          &--input {
            width: 75px !important;
            letter-spacing: 0.3rem;
            padding: 0 6px;
            font-size: 0.8rem;
          }
        }
        &__buttons {
          button {
            padding: 6px 12px;
            font-size: 1rem;
          }
        }
      }
    }
  }
  .activate-link {
    padding: 4px 8px;
  }
}
@media screen and (max-width: 320px) {
  .select-animals {
    &__container {
      width: 90%;
      padding-top: 60px;
      &__title {
        font-size: 0.9rem;
        &--span {
          padding: 0;
        }
      }
      &__selected {
        font-size: 0.7rem;
      }
      &__small {
        font-size: 0.7rem;
      }
    }
  }
}
</style>