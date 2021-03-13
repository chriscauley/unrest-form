<template>
  <div class="playground-form">
    <div class="playground-form__schema">
      <textarea v-model="text_schema" />
      <div v-if="error" class="alert alert-danger">
        {{ error.message }}
      </div>
    </div>
    <div class="playground-form__form">
      <ur-form v-bind="form_attrs" />
    </div>
  </div>
</template>

<script>
import UrForm from '@unrest/form'
export default {
  props: {
    schema: Object,
    state: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    const text_schema = JSON.stringify(this.schema, null, 4)
    return { text_schema, current_schema: this.schema, error: null }
  },
  computed: {
    form_attrs() {
      const { current_schema, state } = this
      return { schema: current_schema, state }
    },
  },
  mounted() {
    this.sync()
  },
  watch: {
    text_schema: 'sync',
  },
  methods: {
    sync() {
      this.error = null
      try {
        const parsed = JSON.parse(this.text_schema)
        UrForm.prepFields(parsed)
        this.current_schema = parsed
      } catch (e) {
        window.E = e
        this.error = e
      }
    },
  },
}
</script>
