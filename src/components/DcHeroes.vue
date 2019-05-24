<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs4 v-for="data in dc_heroes" v-bind:key="data.id">
        <v-card>
          <v-card-title>
            <h2 class="text-truncate">{{ data.superhero }}</h2>
          </v-card-title>
          <v-card-text class="pt-0 pb-0">
              <p class="subheading text-truncate"><b>{{ $t('message.publisher') }}</b> <span class="primary--text">{{ data.publisher }}</span></p>
              <p class="subheading text-truncate"><b>{{ $t('message.alter_ego') }}</b> {{ data.alter_ego }}</p>
              <p class="subheading text-truncate"><b>{{ $t('message.first_appearance') }}</b> {{ data.first_appearance }}</p>
              <p class="subheading mb-0 text-truncate"><b>{{ $t('message.characters') }}</b> {{ data.characters }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn icon>
              <v-icon>delete</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>edit</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-btn fixed fab bottom right large class="ma-5">
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn fixed bottom right flat class="button-label">
        Ajouter un héro
      </v-btn>
    </v-layout>
  </v-container>
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

<style scoped>

  .button-label {
    pointer-events: none;
  }

</style>