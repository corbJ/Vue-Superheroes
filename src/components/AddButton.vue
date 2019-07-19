<template>
  <v-btn
    fixed
    fab
    bottom
    right
    class="add-hero-btn ma-3"
  >
    <v-icon>add</v-icon>
    {{ $t('message.add_hero') }}
  </v-btn>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'AddButton'
  // computed: {
  //   ...mapGetters([
  //     'getDcHeroes',
  //     'getMarvelHeroes'
  //   ])
  // },
  // methods: {
  //   ...mapActions([
  //     'addHeroAction'
  //   ])
  // }
}
</script>
