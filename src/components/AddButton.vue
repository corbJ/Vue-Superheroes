<template>
  <v-btn fixed fab bottom right class="add-hero-btn ma-3">
    <v-icon>add</v-icon>
    {{ $t('message.add_hero') }}
  </v-btn>
</template>

<script>
export default {
  name: 'AddButton'
}
</script>
