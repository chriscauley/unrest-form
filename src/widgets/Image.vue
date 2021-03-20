<template>
  <label :for="field.id" :class="css">
    <input style="display:none;" type="file" :id="field.id" @change="onChange" ref="input" />
    <div v-if="preview" class="preview">
      <img :src="preview.dataURL" />
      <div>
        {{ preview.name }}
        <button v-if="preview" @click.prevent="preview = null">Clear</button>
      </div>
    </div>
    <div class="btn -primary" v-else>
      Choose File
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
    return { preview: null }
  },
  computed: {
    css() {
      return [this.field?.ui?.css, 'ur-file']
    },
  },
  methods: {
    onChange() {
      const file = this.$refs.input.files[0]
      const reader = new FileReader()

      reader.addEventListener(
        'load',
        () => {
          this.preview = {
            dataURL: reader.result,
            name: file.name,
          }
          this.$emit('update:modelValue', this.preview)
        },
        false,
      )

      if (file) {
        reader.readAsDataURL(file)
      }
    },
  },
}
</script>
