<template>
  <div>
    <p>
      Just me testing out features. Please ignore.
    </p>
    <playground-form :schema="schema" :panels="['editor', 'form', 'state', 'schema']" />
  </div>
</template>

<script>
import schema from '@/schema'

export default {
  data() {
    return { schema: schema.misc }
  },
}
</script>
