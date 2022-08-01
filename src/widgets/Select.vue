<template>
  <select @input="onChange" :value="modelValue" :id="field.id" class="form-control">
    <option v-for="choice in choices" :value="choice.value" :key="choice.name">
      {{ choice.name }}
    </option>
  </select>
</template>

<script>
import coerce from '../lib/coerce'
import getChoices from '../lib/getChoices'

export default {
  props: {
    modelValue: null,
    field: Object,
    form: Object,
  },
  emits: ['update:modelValue'],
  computed: {
    choices() {
      return getChoices(this.field)
    },
  },
  methods: {
    onChange(e) {
      const value = coerce(e.target.value, this.field)
      this.$emit('update:modelValue', value)
    },
  },
}
</script>
