<template>
  <div>
    <label :class="class" v-for="choice, i in choices" :key="i">
      <input
        type="checkbox"
        :checked="isChecked[choice.value]"
        @input="() => change(choice.value)"
        :name="choice.name"
        />
      {{ field.title }}
    </label>
  </div>
</template>

<script>
import getChoices from './getChoices'

export default {
  props: {
    modelValue: null,
    field: Object,
  },
  emits: ['update:modelValue'],
  computed: {
    choices() {
      const choices = getChoices(this.field)
      const { disabled } = this.field
      choices.forEach(c => {
        c.checked = this.modelValue?.includes(c.value)
        c.class = ['ur-checkbox', c.checked ? '-checked' : '-unchecked', disabled && '-disabled']
      })
      return choices
    }
  },
  methods: {
    change(value) {
      if (this.field.disabled) {
        return
      }
      this.$emit('update:modelValue', this.choices.filter(c => c.checked))
    },
  },
}
</script>
