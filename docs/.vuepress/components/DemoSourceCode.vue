<template>
  <v-card
  outlined
  elevation="0"
  class="demoCode-card"
  >
    <v-toolbar
    flat
    outlined
    class="demoCode-toolbar"
    >
      <v-spacer></v-spacer>
      <v-btn icon @click="showCode = !showCode">
        <v-icon>mdi-code-tags</v-icon>
      </v-btn>
    </v-toolbar>
    <Demo :componentName="componentName"></Demo>
    <v-slide-y-transition
        group
        tag="SourceCode"
    >
      <SourceCode class="demoCode-code" v-if="showCode" key="SourceCode">
        <slot/>
      </SourceCode>
    </v-slide-y-transition>

  </v-card>
</template>

<script>
export default {
  props: {
    componentName: { type: String, required: true }
  },
  data() {
    return {
      showCode: false
    }
  }
}
</script>

<style scoped>
.demoCode-card {
  border-radius: 6px;
  margin-top: 10px;
}
.demoCode-toolbar {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
}

.demoCode-code {
  margin-bottom: -0.85rem;
}
</style>
