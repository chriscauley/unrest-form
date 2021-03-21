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
    avatar: {
      type: 'image',
      title: 'Avatar',
      default: 'https://i.imgur.com/YSPe6yA.jpg',
    },
    hidden: {
      type: 'string',
      title: "Shouldn't see me",
      default: 'Foo',
      ul: { tagName: 'ur-hidden' },
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
