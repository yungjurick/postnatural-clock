<template>
  <div class="home">
    <router-link to='/about' class="home__info">?</router-link>
    <h1 to='/clock' class="home__title">Weight of Time</h1>
    <p class="home__subtitle">Based on Human Perception of Time</p>
    <div class="home__container">
      <router-link class="home__container__link" to='/clock-animals'>Animals</router-link>
      <router-link class="home__container__link" to='/clock-waste'>Waste</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    &__title {
      font-size: 4rem;
      font-family: 'Roboto Mono', monospace;
      text-decoration: none;
      color: #36384C;
    }
    &__subtitle, &__container__link {
      font-family: 'Roboto Mono', monospace;
      margin-top: 3.5%;
      font-size: 1.2rem;
      color: darkgray;
    }
    &__container {
      margin-top: 60px;
      &__link + &__link {
        margin-left: 100px;
      }
    }
    &__info {
      position: absolute;
      right: 16px;
      top: 16px;
      height: 16px;
      width: 16px;
      padding: 3px;
      font-weight: bold;
      border: 1.5px solid #36384C;
      color: #36384C;
      border-radius: 50%;
      text-decoration: none;
      &:visited {
        color: #36384C;
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .home__title {
      font-size: 2.3rem;
    }
    .home__subtitle, .home__container__link {
      font-size: 0.8rem;
    }
  }
</style>
