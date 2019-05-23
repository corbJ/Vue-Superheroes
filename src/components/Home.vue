<template>
  <div class="container df fw f1 ai-c jc-c">
    <router-link to="/dc-heroes" class="dc t300">{{ $t('message.dc_link') }}</router-link>
    <router-link to="/marvel-heroes" class="marvel t300">{{ $t('message.marvel_link') }}</router-link>
    <router-link to="/all-heroes" class="t300">{{ $t('message.all_link') }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  #app {
    background-color: rgba(#fff,0.95);
  }
  a {
    margin: 2rem;
    padding: 1.5rem;
    border-radius: 3rem;
    text-decoration: none;
    box-shadow: 0 1px 3px rgba(0,0,0,0.5);
    font-weight: bold;
    color: #fff;
  }

  a:not(.dc):not(.marvel) {
    transition: all 300ms;
    background: #000;
  }

  a:not(.dc):not(.marvel):hover {
    background: #444;
  }

  @media screen and (max-width: 1060px) {
    
    .container  {
      flex-direction: column;
    }
  }
</style>
