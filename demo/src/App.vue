<template>
  <playground-form :schema="schema" />
</template>

<script>
import PlaygroundForm from '@/components/PlaygroundForm'
import schema from './schema'

export default {
  components: { PlaygroundForm },
  data() {
    return { schema }
  },
}
</script>
