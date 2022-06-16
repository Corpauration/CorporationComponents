<template>
<div class="test-margin">
    <v-btn :color="color">
      <slot />
    </v-btn>
</div>
</template>

<script>
export default {
  name: "test-button", // NECESSARY: it will be the tag identifier, here we have: <test-button></test-button>
  props: {
    color: String
  }
}
</script>

<style scoped>
.test-margin {
  margin: 10px;
}
</style>
