<!-- eslint-disable vue/no-mutating-props -->
<template>
  <form @submit.prevent="submit" class="ur-form">
    <unrest-field v-model="state" :field="field" :key="field.id" @change="change" />
    <div v-for="(error, i) in computed_errors?.__root" :key="i" class="form-error">
      {{ error.message }}
    </div>
    <div class="ur-form__actions">
      <slot name="actions">
        <button type="submit" class="btn -primary">Submit</button>
      </slot>
    </div>
  </form>
</template>

<script>
import validateAgainstSchema from './lib/validateAgainstSchema'
import assignDefaults from './lib/assignDefaults'
import prepField from './lib/prepField'

export default {
  provide() {
    return { ur_form: this }
  },
  props: {
    schema: Object,
    uiSchema: Object,
    state: {
      type: Object,
      default: () => ({}),
    },
    onSubmit: {
      type: Function,
      default: () => {},
    },
    onChange: Function,
    errors: Object,
  },
  data: () => ({ internal_errors: null }),
  computed: {
    computed_errors() {
      const errors = {
        ...this.errors,
        ...this.internal_errors,
      }
      if (errors.__all__) {
        errors.__root = errors.__all__
      }
      return errors
    },
    field() {
      return prepField('__root', this.schema)
    },
  },
  beforeMount() {
    assignDefaults(this.state, this.field)
  },
  methods: {
    handleError(e) {
      if (e.message) {
        this.internal_errors = { __root: e.message || e }
      }
      if (e.response?.data?.errors) {
        this.internal_errors = e.response?.data?.errors
      }
      throw e
    },
    change(e) {
      this.onChange?.(e)
    },
    submit() {
      this.internal_errors = validateAgainstSchema(this.state, this.schema)
      if (this.internal_errors) {
        return
      }
      try {
        this.onSubmit(this.state)?.catch(this.handleError)
      } catch (e) {
        this.handleError(e)
      }
    },
  },
}
</script>
