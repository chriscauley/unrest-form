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
      ui: { tagName: 'ur-hidden' },
    },
    password: {
      type: 'string',
      default: 'I am a password field',
    },
    password_hint: {
      type: 'string',
      default: 'I am not a password field',
      ui: { type: 'text' },
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
