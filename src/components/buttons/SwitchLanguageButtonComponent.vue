<template>
  <div>
      <button @click="changeLanguage('pt')" v-if="this.$i18n.locale == 'en'">
        <img src="@/assets/icons/brazil-.png" class="logo logo-sm" :alt="$t('languages.brazilian.name')" />
      </button>
      <button @click="changeLanguage('en')" v-if="this.$i18n.locale == 'pt'">
        <img src="@/assets/icons/united-states.png" class="logo logo-sm" :alt="$t('languages.english.name')" />
      </button>
  </div>
</template>

<script>
export default {
  name: 'SwitchLanguageButton',
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('app-language', lang);
    },
  },
};
</script>
