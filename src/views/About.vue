<template>
  <div class="about">
    <div class="about__container">
      <h1 class="about__title">Measuring the Weight of Time</h1>
      <p class="about__text"> 
        As humans, it is easy to believe that we perceive <b style="font-weight: bold;">weight of time</b> based on our subjective human experience.
        A second as a second for humans, a minute as a minute for humans, and an hour as an hour for humans.
      </p>
      <p class="about__text"> 
        Then, what would be the weight of time for other animals - such as a mouse, a dog, a tortoise, or a whale? 
        These are just a few of the many selections I have curated, but what would it be like to see their time through 
        the perception of human time? What would our 1 second, 1 minute, or 1 hour be equivalent for these animals?
        Since, we understand and sympathize with things better when put under the perspective of a human scope,
        this timer, clock, or stopwatch will help you.
      </p>
      <p class="about__text"> 
        Based on the average lifespan of these animals (including humans), this timer tries to portray how their time 
        be portrayed through a human perspective. For instance, 1 second of human time would be 7 seconds for a dog if 
        their time was to be reinterpreted in human perception of time.
      </p>
      <br>
      <p class="about__text strong"> 
        In this piece, the average human lifespan is 72 Years. So, the rates of time increment for other specimens are inferred from converting
        their lifespan to fit the average human lifespan. This means that one lifetime is equivalent to 72 years.
      </p>
      <br>
      <p class="about__text"> 
        Credits for the average lifespans:
      </p>
      <p class="about__text citing">
        <a href="http://www.vetstreet.com/our-pet-experts/7-animals-with-incredibly-long-life-spans">Whale</a>
        <a href="http://www.vetstreet.com/our-pet-experts/7-animals-with-incredibly-long-life-spans">Tortoise</a>
        <a href="https://www.earthkind.com/blog/how-long-do-mice-live/">Mouse</a>
        <a href="https://www.who.int/gho/mortality_burden_disease/life_tables/situation_trends/en/">Human</a>
        <a href="https://www.petmd.com/dog/wellness/evr_dg_how_long_do_dogs_live">Dog</a><br>
        <a href="https://tpwd.texas.gov/publications/nonpwdpubs/young_naturalist/animals/animal_life_spans/">Everything else</a>
      </p>
      <br>
      <p class="about__text"> 
        Data used for average lifespan:
      </p>
      <p class="about__text"> 
        Human - 72 Years<br>
        Mice - 2 Years<br>
        Dog - 10 Years<br>
        Tortoise (Giant Tortoise) - 100 Years <br>
        Whale (Bowhead Whale) - 200 Years<br>
        Golden Eagle - 80 Years<br>
        Canada goose - 32 Years<br>
        Pelican - 52 Years<br>
        Pigeon - 35 Years<br>
        Seahorse - 6 Years<br>
        Horse - 50 Years<br>
        Giraffe - 28 Years<br>
        Chimpanzee - 50 Years<br>
        Camel - 40 Years<br>
        Grizzly Bear - 34 Years<br>
        Rabbit - 10 Years<br>
        Sparrow - 20 Years<br>
        Turkey - 15 Years<br>
        Fox - 14 Years<br>
        Lion - 35 Years<br>
        Porcupine - 20 Years<br>
        Rhinoceros - 40 Years<br>
        Zebra - 30 Years<br>
        Dove - 12 Years<br>
        Chameleon - 3.5 Years<br>
        Seal - 30 Years<br>
      </p>
      <p class="about__text"> 
        Credits for the Icons used in this website (they are all from Noun Project):
      </p>
      <p class="about__text citing">
        Mouse - zidney<br>
        Dog, Rhinoceros, Giraffe - Saeful Muslim<br>
        Turtle - Nook Fulloption<br>
        Whale - Ben Davis<br>
        Seal - Victoruler<br>
        Chameleon - Valerie Lamm<br>
        Dove - priyanka<br>
        Zebra, Lion, Fox, Camel, Horse - Iconic<br>
        Porcupine, Sparrow - Georgiana Ionescu<br>
        Turkey - Laymik<br>
        Rabbit - monkik<br>
        Bear - Vertigophase<br>
        Chimpanzee, Eagle - Icons Producer<br>
        Sea Horse - Visual Glow<br>
        Pigeon - Eleanor Bell<br>
        Pelican - Arunika
      </p>
      <br>
      <br>
      <p class="about__text">
        Links to Detailed Documentation:
        <br><br>
        <a href="https://www.notion.so/yungjurick/The-Weight-of-Time-a93f0588161b4310b1ba96c5c1f365d8">First Iteration</a>
        <br>
        <a href="https://www.notion.so/yungjurick/The-Weight-of-Time-10ace8c9b624456d935ac1f38e960ff8">Final Iteration</a>
        <br><br>
        &copy; 2019 Yung Ju Rick Kim
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
    line-height: 1.5;
      a + a {
        margin-left: 12px;
        color: #36383c;
      }
      a {
        color: #36383c !important;
      }
      a:visited{
        color: #36383c !important;
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

@media screen and (max-width: 480px) {
  .about {
    &__text {
      font-size: 0.8rem;
      width: 80%;
    }
  }
}
</style>