# Unrest Vue Form

This is my attempt at reproducing [react-jsonschema-form](https://rjsf-team.github.io/react-jsonschema-form/) in vue. There are a few jsonschema forms for vue but none of them supported vue-3 so I decided to write my own. If you're interested, checkout [the interactive demo](https://chriscauley.github.io/unrest-vue-form/) and feel free to open any tickets if you have trouble using it or need a new widget.

## Getting started

Add the package to your project

``` bash
npm install @unrest/vue-form --save
# or
yarn add @unrest/vue-form
```

`app.use(UrForm)` to register the components.

``` javascript
import App from './App.vue'
import UrForm from '@unrest/vue-form'
import UrForm from '@unrest/vue-form'

const app = createApp(App)
app.use(UrForm)

// additional app setup

app.mount('#app')
```

Use the form in any component.

``` vue
// LoginView.vue
<template>
  <div>
    <h1>Login</h1>
    <unrest-form :schema="schema" @submit="submit" />
  </div>
</template>

<script>
const schema = {
  "type": "object",
  "properties": {
    "email": {
      "type": "text",
      "format": "email",
    },
    "password": {
      "type": "text",
      "format": "password",
      }
    }
  }
}

export default {
  data() {
    return { schema }
  },
  methods: {
    submit(data) {
      console.log(data)
    }
  }
}
</script>
```

## Development

To see changes while developing, use the demo.

```
# glone repo
cd demo
yarn install
yarn serve
```

To update documentation (github pages), build the demo app and commit any changes in /docs.

## Build and Publish

```
yarn install
yarn lint
yarn test
yarn build
yarn publish
```

## Datetime Fields

If the schema specifes a format as date time, this library will try to use [vue3datepicker](https://vue3datepicker.com/). This library is not included in packages. To use it run

```npm install @vuepic/vue-datepicker```

and then add the following to main.js

``` javascript
import DatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

 createApp(App)
  .component('date-picker', DatePicker)
  ... // everything else here
  .mount("#app")
```

