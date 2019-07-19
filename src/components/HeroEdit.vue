<template>
  <v-dialog v-model="show" max-width="400">
    <v-form
      @submit.prevent="onSave"
    >
      <v-card class="hc-dialog">
        <v-card-title class="pb-0">
          <v-text-field
            :label="$t('message.hero_name')"
            v-model="localHero.superhero"
            class="title"
          ></v-text-field>
        </v-card-title>
        <v-card-text class="py-0">
            <v-text-field
              :label="$t('message.publisher')"
              v-model="localHero.publisher"
              disabled
            ></v-text-field>
            <v-text-field
              :label="$t('message.alter_ego')"
              v-model="localHero.alter_ego"
            ></v-text-field>
            <v-text-field
              :label="$t('message.first_appearance')"
              v-model="localHero.first_appearance"
            ></v-text-field>
            <v-text-field
              :label="$t('message.characters')"
              v-model="localHero.characters"
            ></v-text-field>
        </v-card-text>
        <v-card-actions
          :class="{ 'hc-dialog--marvel' : hero.publisher == 'Marvel Comics', 'hc-dialog--dc' : hero.publisher == 'DC Comics' }"
          class="mt-2"
        >
          <v-btn flat @click="onCancel (); show = false">
            <v-icon left>cancel</v-icon>
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            flat
            type="submit"
            @click="onSave (); show = false"
          >Save
            <v-icon right>save</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import _ from 'lodash'
import { mapActions } from 'vuex'
export default {
  // -----------------------------------------------------
  // Using v-model is incorrect in this case in my opinion
  // :value and @input should be used since we do not want
  // the input to update the modal's parent data.
  // Populate the input on load and clear inputs on cancel
  // Update the data once the form is submitted not before
  // -----------------------------------------------------
  name: 'HeroEdit',
  props: {
    value: Boolean,
    hero: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.localHero = _.cloneDeep(this.hero)
  },
  data () {
    return {
      localHero: {}
    }
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    ...mapActions([
      'updateHeroAction'
    ]),
    onCancel () {
      this.localHero = _.cloneDeep(this.hero)
    },
    onSave () {
      this.updateHeroAction(_.cloneDeep(this.localHero))
    }
  }
}
</script>
