<template>
  <playground-form :schema="schema" />
</template>

<script>
import PlaygroundForm from '@/components/PlaygroundForm'

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
  components: { PlaygroundForm },
  data() {
    return { schema }
  },
}
</script>

<style></style>
