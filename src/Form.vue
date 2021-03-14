<!-- eslint-disable vue/no-mutating-props -->
<template>
  <form @submit.prevent="submit" class="ur-form">
    <Field
      v-model="state[field.name]"
      v-for="field in fields"
      :key="field.id"
      :field="field"
      :change="change"
    />
    <div v-if="root_error" class="form-error">
      {{ root_error }}
    </div>
    <slot name="actions">
      <button type="submit" class="btn btn-primary">Submit</button>
    </slot>
  </form>
</template>

<script>
import { reactive } from 'vue'
import prepFields from './prepFields'
import Field from './Field'

export default {
  components: { Field },
  provide() {
    return { ur_form: this }
  },
  props: {
    schema: Object,
    uiSchema: Object,
    state: {
      type: Object,
      default: () => reactive({}),
    },
    onSubmit: {
      type: Function,
      default: () => {},
    },
    onChange: {
      type: Function,
      default: () => {},
    },
    errors: Object,
  },
  data: () => ({ error: null }),
  computed: {
    fields() {
      return prepFields(this.schema, this.uiSchema)
    },
    root_error() {
      return this.error || this.errors?.__all__
    }
  },
  beforeMount() {
    const { state, fields } = this
    fields.forEach(field => {
      if (!state.hasOwnProperty(field.name)) {
        state[field.name] = field.default
      }
    })
  },
  methods: {
    handleError(e) {
      throw e
    },
    change(name, value) {
      this.state[name] = value // eslint-disable-line
      this.onChange(this.state, { name, value })
    },
    submit() {
      this.error = undefined
      try {
        this.onSubmit(this.state)?.catch(this.handleError)
      } catch (e) {
        this.handleError(e)
      }
    },
  },
}
</script>
