<template>
  <div :class="css.root" v-if="field.ui.tagName !== 'ur-hidden'">
    <label v-if="showLabel(field)" :for="field.id">{{ field.title }}</label>
    <div class="input-wrapper">
      <div
        v-is="field.ui.tagName"
        :field="field"
        :modelValue="modelValue"
        @update:modelValue="value => change(field.name, value)"
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
import UrCheckbox from './widgets/Checkbox'
import UrImage from './widgets/Image'
import UrRange from './widgets/Range'
import UrSelect from './widgets/Select'
import UrText from './widgets/Text'

export default {
  components: { UrCheckbox, UrImage, UrRange, UrSelect, UrText },
  inject: ['ur_form'],
  props: {
    field: Object,
    form: Object,
    modelValue: null,
    change: Function,
  },
  computed: {
    error() {
      return this.ur_form.errors?.[this.field.name]
    },
    css() {
      return {
        root: [`form-group form-group__${this.field.name}`, { '-error': this.error }],
      }
    },
  },
  methods: {
    showLabel(field) {
      return field.title && !['ur-checkbox'].includes(field.ui.tagName)
    },
  },
}
</script>
