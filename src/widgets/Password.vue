<template>
  <div class="input-group">
    <input v-bind="inputAttrs" @input="onChange" class="form-control" :type="type" />
    <i :class="iconClass" @click="show_password=!show_password" />
  </div>
</template>

<script>
import Text from './Text'
export default {
  mixins: [Text],
  data() {
    return { show_password: false }
  },
  computed: {
    iconClass() {
      return `input-group-append cursor-pointer fa fa-eye${this.show_password ? '-slash' : ''}`
    },
    type() {
      return this.show_password ? 'text' : 'password'
    }
  },
}
</script>