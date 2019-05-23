<template>
  <div class="marvel container w100">
    <div class="box-container">
      <div v-for="data in marvel_heroes" v-bind:key="data.id" class="box">
        <h2>{{ data.superhero }}</h2>
        <p><b>{{ $t('message.publisher') }}</b> <span class="marvel">{{ data.publisher }}</span></p>
        <p><b>{{ $t('message.alter_ego') }}</b> {{ data.alter_ego }}</p>
        <p><b>{{ $t('message.first_appearance') }}</b> {{ data.first_appearance }}</p>
        <p><b>{{ $t('message.characters') }}</b> {{ data.characters }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import marvel from '@/data/marvel.json'
// import TopLinks from './TopLinks'
export default {
  // components: {
  //   TopLinks
  // },
  name: 'MarvelHeroes',
  data () {
    return {
      marvel_heroes: marvel
    }
  }
}
</script>
