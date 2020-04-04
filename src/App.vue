<template>
  <div id="app">
    <section class="section is-extra-low">
      <div class="container">
        <transition name="fade" mode="out-in" :duration="800" appear>
          <router-view />
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
// custom styles entry point
@import "./styles/style";
</style>
