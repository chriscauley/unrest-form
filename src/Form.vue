<!-- eslint-disable vue/no-mutating-props -->
<template>
  <form @submit.prevent="submit" class="ur-form">
    <unrest-field v-model="state" :field="field" :key="field.id" @change="change" @input="input" />
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
    onSubmit: Function,
    onChange: Function,
    onInput: Function,
    errors: Object,
    focus: {
      type: Boolean,
      default: () => true,
    },
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
  mounted() {
    this.focus && this.$el.querySelector('input')?.focus()
  },
  methods: {
    handleError(error) {
      if (error.message) {
        this.internal_errors = { __root: error.message || error }
      }
      if (error.response?.data?.errors) {
        this.internal_errors = error.response?.data?.errors
      }
      throw error
    },
    change(event) {
      this.onChange?.(this.state, event)
    },
    input(event) {
      this.onInput?.(this.state, event)
    },
    submit(event) {
      this.internal_errors = validateAgainstSchema(this.state, this.schema)
      if (this.internal_errors) {
        return
      }
      try {
        this.onSubmit(this.state, event)?.catch(this.handleError)
      } catch (error) {
        this.handleError(error)
      }
    },
  },
}
</script>
