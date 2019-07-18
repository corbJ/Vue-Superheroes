<template>
  <v-flex sm6 md6 lg4 pa-2>
    <v-card hero-card :class="{ 'hero-card--marvel' : hero.publisher == 'Marvel Comics', 'hero-card--dc' : hero.publisher == 'DC Comics' }">
      <v-card-title>
        <h2 class="text-truncate">{{ hero.superhero }}</h2>
      </v-card-title>
      <v-card-text class="py-0">
          <p class="subheading text-truncate"><b>{{ $t('message.publisher') }}</b> <span class="hero-card__publisher">{{ hero.publisher }}</span></p>
          <p class="subheading text-truncate"><b>{{ $t('message.alter_ego') }}</b> {{ hero.alter_ego }}</p>
          <p class="subheading text-truncate"><b>{{ $t('message.first_appearance') }}</b> {{ hero.first_appearance }}</p>
          <p class="subheading mb-0 text-truncate"><b>{{ $t('message.characters') }}</b> {{ hero.characters }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn icon>
          <v-icon color="black" @click="removeHeroAction(hero)">delete</v-icon>
        </v-btn>
        <v-btn icon @click.stop="showDialog = true">
          <v-icon>edit</v-icon>
          <EditHero v-model="showDialog" :hero="hero" @close="handleClose($event)"/>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="changeFavoriteStatusAction(hero)">
          <v-icon :class="{ 'red--text' : hero.bookmark == true, '' : hero.bookmark == false}">favorite</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
<script>
import { mapActions } from 'vuex'
import EditHero from '@/components/EditHero'
export default {
  name: 'HeroCard',
  components: {
    EditHero
  },
  props: {
    hero: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    ...mapActions([
      'changeFavoriteStatusAction',
      'removeHeroAction'
    ])
  }
}
</script>
