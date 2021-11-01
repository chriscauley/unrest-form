<template>
  <input v-bind="inputAttrs" v-model="value" @input="onChange" class="form-control" />
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
