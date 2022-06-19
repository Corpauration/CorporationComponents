<template>
<v-app>
  <v-card
      outlined
      elevation="0"
      class="tester-card"
  >

  <v-card-title>{{componentName}}</v-card-title>
    <v-container class="tester-container">
      <v-row
          align="center"
          justify="center"
      >
  <component :is="componentName" v-bind="componentData">{{componentSlot}}</component>
      </v-row>
    </v-container>
  <v-text-field
      class="slot-input"
      label="Slot content"
      v-model="componentSlot"
  ></v-text-field>
    <v-container class="card-container">
      <h4>Props</h4>
      <v-row
          align="center"
          justify="center"
      >
        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Type
              </th>
              <th class="text-center">
                Required
              </th>
              <th class="text-left">
                Inject value
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="prop in transformPropInArray()"
                :key="prop.name"
            >
              <td>{{ prop.name }}</td>
              <td>{{ prop.type }}</td>
              <td class="text-center">
                <v-icon v-if="prop.required"
                        color="#2e7d32"
                >mdi-check</v-icon>
                <v-icon v-else
                        color="#c62828"
                >mdi-close</v-icon>
              </td>
              <td>
                <v-text-field
                    class="input"
                    v-if="prop.type.includes('String') || prop.type.includes('Number')"
                    label="Value"
                    v-model="componentData[prop.name]"
                ></v-text-field>
                <v-switch
                    v-else-if="prop.type.includes('Boolean')"
                    v-model="componentData[prop.name]"
                ></v-switch>
              </td>

            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-row>
    </v-container>
  </v-card>
</v-app>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    componentName: { type: String, required: true }
  },
  data() {
    return {
      componentData: {},
      componentSlot: null
    }
  },
  methods: {
    transformPropInArray() {
      const component = Vue.component(this.componentName);
      const props = component.options.props;
      const propsKey = Object.keys(props);
      const arr = [];
      for (const key of propsKey) {
        const type = [];
        try {
          if (typeof props[key].type == "object") {
            for (const t of props[key].type) {
              type.push(t.name);
            }
          } else type.push(props[key].type.name);
        } catch (e) {}
        arr.push({name: key, type, required: props[key].required === true});
      }
      return arr;
    }
  }
}

</script>

<style scoped>
.text-center {
  text-align: center;
}

.input {
  margin-top: 0.85rem;
}

.tester-card {
  border-radius: 6px;
  margin-top: 10px;
}

.tester-container {
  padding-top: 0.85rem;
  padding-bottom: 0.85rem;
  border-top: thin solid rgba(0,0,0,.12);
  border-bottom: thin solid rgba(0,0,0,.12);
}

.slot-input {
  padding: 0.85rem;
}

.card-container {
  padding: 0.85rem;
}

</style>
