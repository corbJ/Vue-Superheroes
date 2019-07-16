<template>
  <v-dialog v-model="dialog">
    <v-card>
      <v-card-title>
        <v-text-field
          label="{{ $t('message.hero_name') }}"
        ></v-text-field>
        <!-- <h2 class="text-truncate">{{ hero.superhero }}</h2> -->
      </v-card-title>
      <v-card-text class="py-0">
          <v-select
            :items="items"
            label="{{ $t('message.publisher') }}"
          ></v-select>
          <!-- <p class="subheading text-truncate"><b>{{ $t('message.publisher') }}</b> <span class="hero-card__publisher">{{ hero.publisher }}</span></p> -->
          <v-text-field
            label="{{ $t('message.alter_ego') }}"
          ></v-text-field>
          <!-- <p class="subheading text-truncate"><b>{{ $t('message.alter_ego') }}</b> {{ hero.alter_ego }}</p> -->
          <v-text-field
            label="{{ $t('message.first_appearance') }}"
          ></v-text-field>
          <!-- <p class="subheading text-truncate"><b>{{ $t('message.first_appearance') }}</b> {{ hero.first_appearance }}</p> -->
          <v-text-field
            label="{{ $t('message.characters') }}"
          ></v-text-field>
          <!-- <p class="subheading mb-0 text-truncate"><b>{{ $t('message.characters') }}</b> {{ hero.characters }}</p> -->
      </v-card-text>
      <v-card-actions>
        <v-btn flat>
          <v-icon>cancel</v-icon>
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn flat>
          Save
          <v-icon>save</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'EditHero',
  props: {
    hero: { type: Object, default: null }
  },
  computed: {
    ...mapGetters({
      dcHeroList: 'getDcHeroes',
      marvelHeroList: 'getMarvelHeroes'
    })
  },
  methods: {
    ...mapActions([
      'changeFavoriteStatusAction',
      'removeHeroAction'
    ])
  }
}
</script>
