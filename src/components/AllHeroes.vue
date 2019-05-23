<template>
  <div>
    <DcHeroes />
    <MarvelHeroes />
  </div>
</template>

<script>
import DcHeroes from './DcHeroes'
import MarvelHeroes from './MarvelHeroes'
export default {
  components: {
    DcHeroes,
    MarvelHeroes
  },
  name: 'AllHeroes'
}
</script>
