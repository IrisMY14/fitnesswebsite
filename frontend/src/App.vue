<template>
  <div id="app" class="container is-max-desktop">

   <div id="translayer"></div>
    <router-view />
  </div>
</template>
 
<script>
export default {
  name: "App",
};
</script>
 
<style>
/* import style bulma */
@import "~bulma/css/bulma.css";
</style>
