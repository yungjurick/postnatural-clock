<template>
  <div class="about">
    <div class="about__container">
      <h1 class="about__title">Measuring the Weight of Time</h1>
      <p class="about__text"> 
        As humans, it is easy to believe that we see <b>weight of time</b> based on our human experience.
        A second as a second for humans, a minute as a minute for humans, and an hour as an hour for humans.
      </p>
      <p class="about__text"> 
        Then, what would be the weight of time for other animals - such as a mouse, a dog, a tortoise, and a whale, or
        even waste? These are just a few of the many selections, but what would it be like to see their time through 
        the perception of human time? What would our 1 second, 1 minute, or 1 hour be equivalent for this animals and waste?
      </p>
      <p class="about__text"> 
        Based on the average lifespan of these animals (including humans) and time it takes these waste
        to decompose, this timer tries to portray how their time be portrayed through a human perspective.
        For instance, 1 second of human time would be 7 seconds for a dog if their time was to be reinterpreted
        in human perception of time.
      </p>
      <br>
      <p class="about__text"> 
        Credits for the average lifespan of animals & waste (including humans):
      </p>
      <p class="about__text citing"> 
        http://www.vetstreet.com/our-pet-experts/7-animals-with-incredibly-long-life-spans
        <br>
        https://www.earthkind.com/blog/how-long-do-mice-live/
        <br>
        https://www.who.int/gho/mortality_burden_disease/life_tables/situation_trends/en/
        <br>
        https://www.petmd.com/dog/wellness/evr_dg_how_long_do_dogs_live
        <br>
        https://www.thebalancesmb.com/how-long-does-it-take-garbage-to-decompose-2878033
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-family: 'Roboto Mono', monospace;
  &__text {
    margin-top: 16px;
    width: 50%;
    line-height: 1.6;
  }
  &__title {
    font-weight: bold;
    margin-bottom: 8px;
  }
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
  }
}
.citing {
  font-size: 0.9rem;
}
</style>