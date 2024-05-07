<template>
  <header-component></header-component>
  <router-view />
</template>


<script type="module">
import HeaderComponent from '@/components/layout/HeaderComponent.vue';
export default {
  methods: {
    verifyAppLanguage() {
      const appLang = localStorage.getItem('app-language');

      if(appLang != null && appLang != undefined) {
         this.$i18n.locale = appLang;
      }
    },
    verifyThemeMode() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  },
  components: {
    HeaderComponent
  },
  created() {
    this.verifyAppLanguage(),
    this.verifyThemeMode()
  },
}
</script>