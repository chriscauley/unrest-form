<!-- eslint-disable vue/no-mutating-props -->
<template>
  <ur-field
    v-for="child in children"
    :key="child.id"
    :field="child"
    v-model="modelValue[child.name]"
  />
</template>

<script>
import prepField from '../lib/prepField'

export default {
  inject: ['ur_form'],
  props: {
    field: Object,
    modelValue: Object,
  },
  computed: {
    children() {
      return Object.entries(this.field.properties).map(([name, property]) =>
        prepField(name, property, this.ur_form, this.field.__path),
      )
    },
  },
}
</script>
