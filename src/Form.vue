<!-- eslint-disable vue/no-mutating-props -->
<template>
  <form @submit.prevent="submit" class="ur-form">
    <ur-field v-model="state" :field="field" :key="field.id" />
    <div v-if="errors?.__root" class="form-error">
      {{ errors.__root }}
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
    onChange: {
      type: Function,
      default: () => {},
    },
  },
  data: () => ({ errors: null }),
  computed: {
    root_error() {
      return this.error || this.errors?.__all__
    },
    field() {
      return prepField('__root', this.schema)
    },
  },
  beforeMount() {
    assignDefaults(this.state, this.schema)
  },
  methods: {
    handleError(e) {
      this.errors = { __root: e.message || e }
      throw e
    },
    change() {
      this.onChange(this.state)
    },
    submit() {
      this.errors = validateAgainstSchema(this.state, this.schema)
      if (this.errors) {
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
