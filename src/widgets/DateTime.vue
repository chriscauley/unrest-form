<template>
  <div class="unrest-datetime">
    <date-picker v-model="internal_value" @closed="close" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    field: Object,
  },
  emits: ['update:modelValue'],
  data() {
    return { internal_value: this.modelValue }
  },
  methods: {
    close() {
      // date-picker doesn't emit an input event so we'll do that instead
      const { internal_value } = this
      this.$emit('update:modelValue', internal_value?.toISOString?.() || null)
      const options = { bubbles: true, cancelable: true }
      this.$el.dispatchEvent(new Event('input', options))
    },
  },
}
</script>
