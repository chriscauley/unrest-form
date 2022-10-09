<template>
  <div class="unrest-datetime">
    <date-picker v-model="internal_value" @closed="close" />
  </div>
</template>

<script>
let warned
export default {
  props: {
    modelValue: String,
    field: Object,
  },
  emits: ['update:modelValue'],
  data() {
    return { internal_value: this.modelValue }
  },
  mounted() {
    if (!warned && !this.$.appContext.components['date-picker']) {
      // these warnings are console.error because vue also displays HUGE warnings
      warned = true
      if (this.$.appContext.components['datepicker']) {
        console.error('"datepicker" component should be registered as "date-picker"')
      } else {
        const url = 'https://github.com/chriscauley/unrest-vue-form#datetime-fields'
        console.error(`Warning, unable to find vue date picker. See ${url}`)
      }
    }
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
