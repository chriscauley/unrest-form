<template>
  <div class="unrest-app-root">
    <app-nav />
    <router-view />
  </div>
</template>

<script>
import AppNav from '@/components/Nav'

export default {
  components: { AppNav },
}
</script>
