<template>
  <div :class="css.root" v-if="field.ui.tagName !== 'unrest-hidden'">
    <label v-if="showLabel(field)" :for="field.id">{{ field.title }}</label>
    <div class="input-wrapper">
      <div
        v-is="field.ui.tagName"
        :field="field"
        :modelValue="modelValue"
        @update:modelValue="value => $emit('update:modelValue', value)"
      />
    </div>
    <div v-if="error" class="form-error">
      {{ error }}
    </div>
    <div v-else-if="field.description" class="description">
      {{ field.description }}
    </div>
  </div>
</template>

<script>
export default {
  inject: ['ur_form'],
  props: {
    field: Object,
    form: Object,
    modelValue: null,
  },
  computed: {
    error() {
      return this.ur_form.internal_errors?.[this.field.__path.join('.')]
    },
    css() {
      return {
        root: [`form-group form-group__${this.field.name}`, { '-error': this.error }],
      }
    },
  },
  methods: {
    showLabel(field) {
      return field.title && field.name !== '__root' && !['unrest-checkbox'].includes(field.ui.tagName)
    },
  },
}
</script>
