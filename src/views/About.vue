<template>
  <div class="about">
    <div class="about__container">
      <h1 class="about__title">Measuring the Weight of Time</h1>
      <p class="about__text"> 
        As humans, it is easy to believe that we perceive <b style="font-weight: bold;">weight of time</b> based on our subjective human experience.
        A second as a second for humans, a minute as a minute for humans, and an hour as an hour for humans.
      </p>
      <p class="about__text"> 
        Then, what would be the weight of time for other animals - such as a mouse, a dog, a tortoise, and a whale, or
        even waste? These are just a few of the many selections, but what would it be like to see their time through 
        the perception of human time? What would our 1 second, 1 minute, or 1 hour be equivalent for this animals and waste?
        Since, we understand and sympathasize with things better when put under the perspective of a human scope, this timer will help you.
      </p>
      <p class="about__text"> 
        Based on the average lifespan of these animals (including humans) and the time it takes these waste
        to decompose, this timer tries to portray how their time be portrayed through a human perspective.
        For instance, 1 second of human time would be 7 seconds for a dog if their time was to be reinterpreted
        in human perception of time.
      </p>
      <br>
      <p class="about__text strong"> 
        In this piece, the average human lifespan is 72 Years. So, the rates of time increment for other specimens are inferred from converting
        their lifespan to fit the average human lifespan.
      </p>
      <br>
      <p class="about__text"> 
        Credits for the average lifespan of animals & waste (including human):
      </p>
      <p class="about__text citing">
        <a href="http://www.vetstreet.com/our-pet-experts/7-animals-with-incredibly-long-life-spans">Whale&Tortoise</a>
        <a href="https://www.earthkind.com/blog/how-long-do-mice-live/">Mouse</a>
        <a href="https://www.who.int/gho/mortality_burden_disease/life_tables/situation_trends/en/">Human</a>
        <a href="https://www.petmd.com/dog/wellness/evr_dg_how_long_do_dogs_live">Dog</a>
        <a href="https://www.thebalancesmb.com/how-long-does-it-take-garbage-to-decompose-2878033">Waste</a>
      </p>
      <br>
      <p class="about__text"> 
        Data used for average lifespan:
      </p>
      <p class="about__text"> 
        Orange Peel - 6 Months (0.5 Years)<br>
        Mice - 2 Years<br>
        Milk Cartons - 5 Years<br>
        Dog - 10 Years<br>
        Human - 72 Years<br>
        Tortoise (Giant Tortoise) - 100 Years <br>
        Batteries - 100 Years<br>
        Whale (Bowhead Whale) - 200 Years<br>
        Plastic Bottle - 450 Years<br>
      </p>
      <br>
      <br>
      <p class="about__text">
        Created by Yung Ju Rick Kim
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
  margin: 15vh 0;
  width: 100%;
  font-family: 'Roboto Mono', monospace;
  &__text {
    margin-top: 16px;
    width: 50%;
    line-height: 1.6;
      a + a {
        margin-left: 12px;
        color: #36383c;
      }
      a:visited{
        color: #36383c;
      }
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
.strong {
  font-weight: bold;
}

@media only screen and (max-width: 400px) {
  .about {
    &__text {
      font-size: 0.8rem;
      width: 80%;
    }
  }
}
</style>