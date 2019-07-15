<template>
  <v-layout row wrap>
    <HeroCard v-for="hero in dc_heroes" :key="hero.id" :hero="hero"></HeroCard>
    <AddButton />
  </v-layout>
</template>

<script>
import dc from '@/data/dc.json'
import HeroCard from './HeroCard'
import AddButton from './AddButton'
export default {
  components: {
    HeroCard,
    AddButton
  },
  name: 'DcHeroes',
  data () {
    return {
      dc_heroes: dc
    }
  }
}
</script>
