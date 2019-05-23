<template>
  <div class="dc container w100">
    <div class="box-container">
      <div v-for="data in dc_heroes" v-bind:key="data.id" class="box">
        <h2>{{ data.superhero }}</h2>
        <p><b>{{ $t('message.publisher') }}</b> <span class="dc">{{ data.publisher }}</span></p>
        <p><b>{{ $t('message.alter_ego') }}</b> {{ data.alter_ego }}</p>
        <p><b>{{ $t('message.first_appearance') }}</b> {{ data.first_appearance }}</p>
        <p><b>{{ $t('message.characters') }}</b> {{ data.characters }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import dc from '@/data/dc.json'
// import TopLinks from './TopLinks'
export default {
  // components: {
  //   TopLinks
  // },
  name: 'DcHeroes',
  data () {
    return {
      dc_heroes: dc
    }
  }
}
</script>
