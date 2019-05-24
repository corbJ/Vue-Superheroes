<template>
<v-app>
  <v-container fill-height>
    <v-layout align-center>
        <router-view/>
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
