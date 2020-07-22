<template>
  <div style="visibility: hidden; display: none"></div>
</template>

<script>
export default {
  name: 'ThemeManager',

  beforeMount () {
    window.__onThemeChange = function () { }
    function setTheme(newTheme) {
      window.__theme = newTheme
      preferredTheme = newTheme
      document.body.setAttribute('data-theme', newTheme)
      window.__onThemeChange(newTheme)
    }

    var preferredTheme
    try {
      preferredTheme = localStorage.getItem('theme')
    } catch (err) { }

    window.__setPreferredTheme = function (newTheme) {
      setTheme(newTheme)
      try {
        localStorage.setItem('theme', newTheme)
      } catch (err) { }
    }

    var isColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)')

    isColorSchemeDark.addListener(function (e) {
      window.__setPreferredTheme(e.matches ? 'dark' : 'light')
    })

    setTheme(preferredTheme || (isColorSchemeDark.matches ? 'dark' : 'light'))
  }
}
</script>