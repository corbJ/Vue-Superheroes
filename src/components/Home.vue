<template>
  <v-flex text-xs-center>
    <v-btn to="/dc-heroes" round color="primary">{{ $t('message.dc_link') }}</v-btn>
    <v-btn to="/marvel-heroes" round color="secondary">{{ $t('message.marvel_link') }}</v-btn>
    <v-btn to="/all-heroes" round color="accent">{{ $t('message.all_link') }}</v-btn>
  </v-flex>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  .v-btn {
    margin: 1em;
    padding: 1.5em;
    border-radius: 3em;
    font-size: 0.9em;
  }
</style>
