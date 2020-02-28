<template>
  <aside class="sidebar">
    <!-- <slot name="top" /> -->
    <SidebarLinks :depth="0" :items="items" />
    <!-- <slot name="bottom" /> -->
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'

export default {
  name: 'Sidebar',
  components: { SidebarLinks },
  props: ['items']
}
</script>

<style lang="less">
@import '../styles/palette.less';

.sidebar {
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    display: inline-block;
    position: relative;
  }

  & > .sidebar-links {
    padding-bottom: 1.5rem;

    & > li > a.sidebar-link {
      font-size: .875rem;
      line-height: 2;
      transition: color 0.25s ease-in-out, border-color 0.25s ease-in-out, background 0.25s ease-in-out;
    }
  }
}
</style>
