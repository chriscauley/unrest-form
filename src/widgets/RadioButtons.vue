<template>
  <div>
    <div class="btn-group">
      <button
        v-for="choice in choices"
        :key="choice.value"
        :class="getClass(choice)"
        @click="() => onChange(choice.value)"
        type="button"
      >
        {{ choice.name }}
      </button>
    </div>
    <input type="hidden" :value="modelValue" :id="field.id" />
  </div>
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
    onChange(value) {
      this.$emit('update:modelValue', coerce(value, this.field))
    },
    getClass(choice) {
      const selected = coerce(choice.value) === this.modelValue
      return ['btn', selected ? '-primary' : '-secondary']
    },
  },
}
</script>
