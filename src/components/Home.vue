<template>
  <v-layout row wrap>
    <HeroCard v-for="hero in dcHeroList" :key="hero.id" :hero="hero">
    </HeroCard>
    <HeroCard v-for="hero in marvelHeroList" :key="hero.id" :hero="hero">
    </HeroCard>
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
  name: 'Home',
  computed: {
    ...mapGetters({
      dcHeroList: 'getDcHeroes',
      marvelHeroList: 'getMarvelHeroes'
    })
  }
}
</script>
