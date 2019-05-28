<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs4 v-for="data in marvel_heroes" v-bind:key="data.id">
        <v-card>
          <v-card-title>
            <h2 class="text-truncate">{{ data.superhero }}</h2>
          </v-card-title>
          <v-card-text class="py-0">
              <p class="subheading text-truncate"><b>{{ $t('message.publisher') }}</b> <span class="secondary--text">{{ data.publisher }}</span></p>
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
      <AddButton />
    </v-layout>
  </v-container>
</template>

<script>
import marvel from '@/data/marvel.json'
import AddButton from './AddButton'
export default {
  components: {
    AddButton
  },
  name: 'MarvelHeroes',
  data () {
    return {
      marvel_heroes: marvel
    }
  }
}
</script>

<style scoped>

  .button-label {
    pointer-events: none;
  }

</style>
