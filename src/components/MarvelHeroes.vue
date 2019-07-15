<template>
  <v-layout row wrap>
    <HeroCard v-for="hero in marvelHeroList" :key="hero.id" :hero="hero"></HeroCard>
    <AddButton />
  </v-layout>
</template>

<script>
import { mapGetters } from 'Vuex'
import HeroCard from './HeroCard'
import AddButton from './AddButton'
export default {
  components: {
    HeroCard,
    AddButton
  },
  name: 'MarvelHeroes',
  computed: {
    ...mapGetters({
      marvelHeroList: 'getMarvelHeroes'
    })
  }
}
</script>
