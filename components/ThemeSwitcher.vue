<template>
  <a-button type="primary" @click.prevent="switchTheme()" :aria-label="'Switch to ' + nextTheme + ' mode'">
    <span key="dark" v-if="theme === 'dark'"><a-icon type="bulb" theme="filled" :style="{ fontSize: '24px', color: 'rgb(230 174 61)' }"/></span>
    <span key="light" v-else-if="theme === 'light'"><a-icon type="bulb" theme="filled" :style="{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.85)' }"/></span>
    <span key="light" v-else>Switch</span>
  </a-button>
</template>

<script>
const themes = ['light', 'dark']

export default {
  name: 'ThemeSwitcher',

  data () {
    return {
      theme: ''
    }
  },

  computed: {
    nextTheme () {
      const currentIndex = themes.indexOf(this.theme)
      const nextIndex = (currentIndex + 1) % themes.length
      return themes[nextIndex]
    }
  },

  methods: {
    switchTheme () {
      const currentIndex = themes.indexOf(this.theme)
      const nextIndex = (currentIndex + 1) % themes.length
      window.__setPreferredTheme(themes[nextIndex])
      this.theme = themes[nextIndex]
    }
  },

  async mounted () {
    // set default
    if (typeof window.__theme !== 'undefined') {
      this.theme = window.__theme
    }
  }
}
</script>

<style lang="less">
.ant-btn {
  height: 4rem;
  margin-right: 0px !important;
}
</style>