<template>
  <header class="navbar">
    <div class="navbar-brand">@unrest/form</div>
    <div class="navbar-section flex items-center">
      <div :class="css.tab(tab)" v-for="tab in tabs" :key="tab[0]">
        <router-link :to="tab[0]">{{ tab[1] }}</router-link>
      </div>
      <a href="http://github.com/chriscauley/unrest-form" class="btn -light">
        <i class="fa fa-github fa-2x" />
      </a>
    </div>
  </header>
</template>

<script>
const tabs = [
  ['/', 'Basics'],
  ['/lazy/', 'Lazy'],
  ['/misc/', 'Misc'],
]

export default {
  data() {
    return { tabs }
  },
  computed: {
    css() {
      return {
        tab: ([path]) => ['btn', path === this.$route.path ? '-primary' : '-light'],
      }
    },
  },
}
</script>
