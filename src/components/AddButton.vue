<template>
  <div>
    <v-btn fixed fab bottom right large class="ma-5">
      <v-icon>add</v-icon>
    </v-btn>
    <v-btn fixed bottom right flat color="white" class="button-label">
      Ajouter un héro
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'AddButton'
}
</script>

<style scoped>
  .button-label {
    pointer-events: none;
  }
</style>
