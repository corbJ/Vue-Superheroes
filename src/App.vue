<template>
<v-app>
  <v-toolbar lights-out>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <!-- <v-toolbar-title class="font-weight-black text-uppercase">Heroes</v-toolbar-title> -->
    <!-- <v-spacer></v-spacer> -->
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn to="/" icon class="mr-3">
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn to="/dc-heroes" :ripple="false" flat class="dc-btn font-weight-bold pa-4">{{ $t('message.dc_link') }}</v-btn>
      <v-btn to="/marvel-heroes" :ripple="false" flat class="marvel-btn font-weight-bold pa-4">{{ $t('message.marvel_link') }}</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>favorite</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
  </v-toolbar>
  <v-container fill-height>
    <v-layout align-center>
      <v-container fluid grid-list-md pa-0>
        <router-view/>
      </v-container>
    </v-layout>
  </v-container>
</v-app>
</template>

<script>
export default {
  name: 'App'
}

/* Tried to change the background of the app container using
* v-bind:style="{ backgroundColor: color }" on v-app and the following props :
* props: {
*   color: {
*     type: String,
*       default: 'rgba(255,255,255,0.95)'
*   }
* }
* But couldn't figure out how to update the prop in child components
* Could do it with the afterEach hook in the router index.js file but it wouldn't be as dynamic as wanted
* See : https://stackoverflow.com/questions/44541872/changing-body-styles-in-vue-router
*/

</script>
<style>
  /* .dc.v-btn--active:before,
  .dc.v-btn:focus:before,
  .dc.v-btn:hover:before,
  .marvel.v-btn--active:before,
  .marvel.v-btn:focus:before,
  .marvel.v-btn:hover:before {
    background-color: transparent;
  }

  .dc.v-btn--active,
  .dc.v-btn:focus,
  .dc.v-btn:hover {
    color: var(--v-primary-base);
  }

  .marvel.v-btn--active,
  .marvel.v-btn:focus,
  .marvel.v-btn:hover {
    color: var(--v-secondary-base);
  }

  .dc .v-btn__content:after,
  .marvel .v-btn__content:after {
    content: "";
    position: absolute;
    left: 0; bottom: 0; right: 0;
    border-bottom: 2px solid transparent;
    transform-origin: left;
    transform: scaleX(0);
    transition: all 300ms;
  }

  .dc.v-btn--active .v-btn__content:after,
  .dc.v-btn:focus .v-btn__content:after,
  .dc.v-btn:hover .v-btn__content:after {
    border-color: var(--v-primary-base);
    transform: scaleX(1);
  }

  .marvel.v-btn--active .v-btn__content:after,
  .marvel.v-btn:focus .v-btn__content:after,
  .marvel.v-btn:hover .v-btn__content:after {
    border-color: var(--v-secondary-base);
    transform: scaleX(1);
  } */
</style>
