<template>
  <label :for="field.id" :class="css">
    <input style="display: none" type="file" :id="field.id" @change.stop="onChange" ref="input" />
    <div>
      <img v-if="modelValue" :src="src" />
    </div>
    <div>
      <div class="name">
        {{ name }}
      </div>
      <button
        class="fa fa-undo"
        v-if="original && original !== modelValue"
        @click.prevent="set(original)"
        title="Revert to original value"
      />
      <button class="fa fa-trash" v-if="src && !required" @click.prevent="set(null)" />
      <div class="btn -primary">
        Choose File
      </div>
    </div>
  </label>
</template>

<script>
export default {
  props: {
    modelValue: null,
    field: Object,
  },
  emits: ['update:modelValue'],
  data() {
    return { original: this.modelValue }
  },
  computed: {
    name() {
      return this.modelValue?.name || this.modelValue?.split?.('/').pop()
    },
    css() {
      return [this.field?.ui?.css, 'ur-file']
    },
    src() {
      return this.modelValue?.dataURL || this.modelValue
    },
    required() {
      // TODO need to get required from parent object somehow (probably on field)
      return false
    },
  },
  methods: {
    set(value) {
      this.$emit('update:modelValue', value)
      const event = document.createEvent('HTMLEvents')
      event.initEvent('change', true, true)
      this.$el.dispatchEvent(event)
    },
    onChange(event) {
      const file = this.$refs.input.files[0]
      if (!file) {
        return
      }
      const reader = new FileReader()

      reader.addEventListener(
        'load',
        () => {
          const value = {
            dataURL: reader.result,
            name: file.name,
          }
          this.$emit('update:modelValue', value)
          this.$refs.input.value = ''

          // re-emit the event from a different element to trigger the change function
          this.$el.dispatchEvent(event)
        },
        false,
      )
      reader.readAsDataURL(file)
    },
  },
}
</script>
