<template>
  <div>
    <DcHeroes />
    <MarvelHeroes />
    <AddButton />
  </div>
</template>

<script>
import DcHeroes from './DcHeroes'
import MarvelHeroes from './MarvelHeroes'
import AddButton from './AddButton'
export default {
  components: {
    DcHeroes,
    MarvelHeroes,
    AddButton
  },
  name: 'AllHeroes'
}
</script>
