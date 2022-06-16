# Getting Started

## Install corpauration-components

Add the lib to your vue/nuxt project with the following command:

<code-group>
<code-block title="YARN" active>
```bash
yarn add corpauration-components
```
</code-block>

<code-block title="NPM">
```bash
npm install corpauration-components
```
</code-block>
</code-group>

## Add the lib to your project

### With Nuxt (recommended)

Include first [vuetify](https://vuetifyjs.com/en/getting-started/installation/#nuxt-install).

Then create a plugin file `plugins/corpauration-components.js`:

```js
// plugins/corpauration-components.js

import Vue from 'vue'
import CorpaurationComponents from 'corpauration-components'
import 'corpauration-components/dist/corpauration-components.css'

Vue.use(CorpaurationComponents)
```

In your `nuxt.config.js`, add in the plugins section:

```js
...
 plugins: [
     ...
    '@/plugins/corpauration-components'
  ],
...
```

### With vue.js

Include first [vuetify](https://vuetifyjs.com/en/getting-started/installation/#webpack-install).

Then create a plugin file `src/plugins/corpauration-components.js`:

```js
// src/plugins/corpauration-components.js

import Vue from 'vue'
import ComponentLibrary from 'corpauration-components'
import 'corpauration-components/dist/corpauration-components.css'

Vue.use(ComponentLibrary)
```

And in your main file:

```js
// src/main.js

import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import '@/plugins/corpauration-components'

new Vue({
  vuetify,
}).$mount('#app')

```
