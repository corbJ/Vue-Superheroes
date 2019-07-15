<template>
  <v-layout row wrap>
    <HeroCard v-for="hero in dc_heroes" :key="hero.id" :hero="hero">
    </HeroCard>
    <HeroCard v-for="hero in marvel_heroes" :key="hero.id" :hero="hero">
    </HeroCard>
    <AddButton />
  </v-layout>
</template>

<script>
import dc from '@/data/dc.json'
import marvel from '@/data/marvel.json'
import HeroCard from './HeroCard'
import AddButton from './AddButton'
export default {
  components: {
    HeroCard,
    AddButton
  },
  name: 'AllHeroes',
  data () {
    return {
      dc_heroes: dc,
      marvel_heroes: marvel
    }
  }
}
</script>
