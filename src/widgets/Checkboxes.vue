<template>
  <div class="unrest-checkboxes">
    <label :class="choice.class" v-for="(choice, i) in choices" :key="i">
      <input
        type="checkbox"
        :checked="choice.checked"
        @input="() => change(choice.value)"
        :name="choice.name"
      />
      {{ choice.name }}
    </label>
  </div>
</template>

<script>
import coerce from '../lib/coerce'
import getChoices from '../lib/getChoices'

const fromModelValue = (modelValue) => {
  if (!modelValue) {
    modelValue = []
  }
  if (typeof modelValue === 'string') {
    modelValue = modelValue.split(',')
  }
  if (!Array.isArray(modelValue)) {
    modelValue = Object.keys(modelValue).filter((key) => modelValue[key])
  }
  return modelValue
}

export default {
  props: {
    modelValue: null,
    field: Object,
  },
  emits: ['update:modelValue'],
  data() {
    return { internal_value: fromModelValue(this.modelValue) }
  },
  computed: {
    choices() {
      const choices = getChoices(this.field)
      const { disabled } = this.field
      choices.forEach((c) => {
        c.checked = this.internal_value?.includes(c.value)
        c.class = ['ur-checkbox', c.checked ? '-checked' : '-unchecked', disabled && '-disabled']
      })
      return choices
    },
  },
  watch: {
    modelValue() {
      this.internal_value = fromModelValue(this.modelValue)
    },
  },
  methods: {
    change(value) {
      if (this.field.disabled) {
        return
      }
      if (this.internal_value.includes(value)) {
        this.internal_value = this.internal_value.filter((v) => v !== value)
      } else {
        this.internal_value.push(value)
      }
      this.$emit('update:modelValue', coerce(this.internal_value, this.field))
    },
  },
}
</script>
