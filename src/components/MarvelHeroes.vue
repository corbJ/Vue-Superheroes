<template>
  <v-layout row wrap>
    <HeroCard v-for="hero in marvel_heroes" :key="hero.id" :hero="hero"></HeroCard>
    <AddButton />
  </v-layout>
</template>

<script>
import marvel from '@/data/marvel.json'
import HeroCard from './HeroCard'
import AddButton from './AddButton'
export default {
  components: {
    HeroCard,
    AddButton
  },
  name: 'MarvelHeroes',
  data () {
    return {
      marvel_heroes: marvel
    }
  }
}
</script>
