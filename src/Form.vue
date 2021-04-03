<!-- eslint-disable vue/no-mutating-props -->
<template>
  <form @submit.prevent="submit" class="ur-form">
    <ur-field v-model="state" :field="field" :key="field.id" />
    <div v-if="root_error" class="form-error">
      {{ root_error }}
    </div>
    <div class="ur-form__actions">
      <slot name="actions">
        <button type="submit" class="btn -primary">Submit</button>
      </slot>
    </div>
  </form>
</template>

<script>
import assignDefaults from './assignDefaults'
import prepField from './prepField'

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
    errors: Object,
  },
  data: () => ({ error: null }),
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
      throw e
    },
    change() {
      this.onChange(this.state)
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
