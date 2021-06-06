<template>
  <playground-form :schema="schema" :panels="['editor', 'form', 'state', 'schema']" />
</template>

<script>
import schema from '@/schema'

export default {
  data() {
    return { schema: schema.basics }
  },
}
</script>
