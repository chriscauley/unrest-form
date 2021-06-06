<template>
  <playground-form :schema="schema" />
</template>

<script>
import schema from '@/schema'

export default {
  data() {
    return { schema }
  },
}
</script>
