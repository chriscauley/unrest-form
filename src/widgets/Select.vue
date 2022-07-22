<template>
  <select @input="onChange" :value="modelValue" :id="field.id" class="form-control">
    <option v-for="choice in choices" :value="choice.value" :key="choice.name">
      {{ choice.name }}
    </option>
  </select>
</template>

<script>
import coerce from '../lib/coerce'

export default {
  props: {
    modelValue: null,
    field: Object,
    form: Object,
  },
  emits: ['update:modelValue'],
  computed: {
    choices() {
      if (this.field.getChoices) {
        return this.field.getChoices()
      }
      const names = this.field.enumNames || this.field.enum
      const choices = this.field.enum.map((value, i) => ({
        value,
        name: names[i],
      }))
      if (this.field.placeholder) {
        choices.unshift({
          name: this.field.placeholder,
          value: '',
        })
      }
      return choices
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
