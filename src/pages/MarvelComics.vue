<template>
  <v-layout row wrap>
    <HeroCard v-for="hero in marvelHeroList" :key="hero.id" :hero="hero"></HeroCard>
    <AddButton />
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import HeroCard from '@/components/HeroCard'
import AddButton from '@/components/AddButton'
export default {
  components: {
    HeroCard,
    AddButton
  },
  name: 'MarvelComics',
  computed: {
    ...mapGetters({
      marvelHeroList: 'getMarvelHeroes'
    })
  }
}
</script>
