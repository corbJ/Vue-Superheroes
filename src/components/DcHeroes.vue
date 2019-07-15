<template>
  <v-layout row wrap>
    <HeroCard v-for="hero in dcHeroList" :key="hero.id" :hero="hero"></HeroCard>
    <AddButton />
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import HeroCard from './HeroCard'
import AddButton from './AddButton'
export default {
  components: {
    HeroCard,
    AddButton
  },
  name: 'DcHeroes',
  computed: {
    ...mapGetters({
      dcHeroList: 'getDcHeroes'
    })
  }
}
</script>
