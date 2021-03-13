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
    color: {
      type: 'text',
      enum: ['red', 'green', 'blue'],
    },
    newsletter: {
      type: 'boolean',
      title: 'Sign up for our newsletter',
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
