<template>
  <div>
    <p>
      An field with <code>type='lazy'</code> will be interpreted as a map of defaults. This is
      useful for rapid prototyping, but other than unsligifying the field name for title, no further
      configuration can be done.
    </p>
    <playground-form :schema="schema" :panels="['editor', 'schema', 'form']" />
  </div>
</template>

<script>
import schema from '@/schema'

export default {
  data() {
    return { schema: schema.lazy }
  },
}
</script>
