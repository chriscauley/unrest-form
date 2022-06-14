<!-- eslint-disable vue/no-mutating-props -->
<template>
  <form @submit.prevent="submit" :class="['ur-form', loading && '-loading']">
    <unrest-field
      v-model="state"
      :field="prepped_schema"
      :key="prepped_schema.id"
      @change="change"
      @input="input"
    />
    <div v-for="(error, i) in computed_errors?.__root" :key="i" class="form-error">
      {{ error.message || error }}
    </div>
    <div class="ur-form__actions">
      <slot name="actions">
        <div type="cancel" class="btn -secondary" v-if="onCancel" @click="onCancel">Cancel</div>
        <button type="submit" class="btn -primary">Submit</button>
        <slot name="extra_actions" />
      </slot>
    </div>
  </form>
</template>

<script>
import { reactive } from 'vue'
import validateAgainstSchema from './lib/validateAgainstSchema'
import assignDefaults from './lib/assignDefaults'
import prepField from './lib/prepField'

export default {
  provide() {
    return { ur_form: this }
  },
  props: {
    schema: Object,
    ui: Object,
    state: {
      type: Object,
      // TODO shouldn't have to make this reactive.
      // Try toggling show/hide password in hive.js without it to see bug.
      default: () => reactive({}),
    },
    onError: Function,
    onSubmit: Function,
    onChange: Function,
    onInput: Function,
    errors: Object,
    focus: {
      type: Boolean,
      default: () => true,
    },
    onCancel: Function,
  },
  emits: ['error'],
  data: () => ({ internal_errors: null, loading: false }),
  computed: {
    computed_errors() {
      const errors = {
        ...this.errors,
        ...this.internal_errors,
      }
      if (errors.__all__) {
        errors.__root = errors.__all__
      }
      if (errors.__root && !Array.isArray(errors.__root)) {
        errors.__root = [errors.__root]
      }
      return errors
    },
    prepped_schema() {
      return prepField('__root', this.schema)
    },
  },
  beforeMount() {
    assignDefaults(this.state, this.prepped_schema)
  },
  mounted() {
    this.focus && this.$el.querySelector('input')?.focus()
  },
  methods: {
    setErrors(errors) {
      this.internal_errors = errors
      errors && this.$emit('error', errors)
    },
    handleError(error) {
      this.loading = false
      if (error.message) {
        this.setErrors({ __root: error.message || error })
      }
      if (error.response?.data?.errors) {
        this.setErrors(error.response?.data?.errors)
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
      if (this.loading) {
        return
      }
      this.setErrors(validateAgainstSchema(this.state, this.prepped_schema))
      if (this.internal_errors) {
        console.error(this.state)
        console.error(this.internal_errors)
        return
      }
      try {
        this.loading = true
        Promise.resolve(this.onSubmit(this.state, event))
          .then((data) => {
            this.loading = false
            return data
          })
          .catch(this.handleError)
      } catch (error) {
        this.handleError(error)
      }
    },
  },
}
</script>
