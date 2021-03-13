<template>
  <ur-form :schema="schema" />
</template>

<script>
const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'text',
    },
  },
}

export default {
  name: 'App',
  data() {
    return { schema }
  },
}
</script>

<style></style>
