<template>
  <div class="playground-form">
    <div class="playground-form__schema">
      <div>Form schema</div>
      <div v-if="error" class="alert alert-danger">
        {{ error.message }}
      </div>
      <textarea v-model="text_schema" />
    </div>
    <div class="playground-form__form">
      <div>Form</div>
      <ur-form v-bind="form_attrs" @input="sync" @change="sync" />
    </div>
    <div class="playground-result">
      <div>Form State</div>
      <div class="playground-result__body">
        {{ text_state }}
      </div>
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
    return { text_schema, current_schema: this.schema, error: null, text_state: null }
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
        UrForm.prepField('__root', parsed)
        this.current_schema = parsed
      } catch (e) {
        window.E = e
        this.error = e
      }
      this.text_state = JSON.stringify(this.state, null, 2)
    },
  },
}
</script>
