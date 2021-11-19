<template>
  <textarea v-if="textarea" v-bind="inputAttrs" v-model="value" @input="onChange" />
  <input v-else v-bind="inputAttrs" v-model="value" @input="onChange" />
</template>

<script>
import pick from 'lodash.pick'
import coerce from '../lib/coerce'

export default {
  props: {
    modelValue: null,
    field: Object,
  },
  emits: ['update:modelValue'],
  data() {
    return { showError: false, value: this.modelValue }
  },
  computed: {
    inputAttrs() {
      const attrs = pick(this.field, ['name', 'disabled', 'placeholder', 'id', 'readOnly'])
      attrs.type = this.field.ui.type
      attrs.class = 'form-control'
      return attrs
    },
    textarea() {
      // vue stops preserving v-model on change if you set v-is to a variable
      return this.field.__widget === 'Textarea'
    },
  },
  methods: {
    onChange() {
      // TODO maybe use e.target.checkValidity()?
      // note: without step a value of 0.1 is considered invalid by input[type=number]
      const value = coerce(this.value, this.field)
      if (this.field.type === 'number' && isNaN(value)) {
        // TODO move to form level: validate and don't coerce/dupdateSstate/onChange if invalid
        return
      }
      this.$emit('update:modelValue', value)
    },
  },
}
</script>
