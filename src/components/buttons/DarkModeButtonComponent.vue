<script setup>
import { ref, watch } from 'vue'

let themeMode = ref(localStorage.theme);

watch(themeMode, (theme) => {
    if(theme == 'dark') {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
});

function toggleDarkMode() {
  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
  } else {
    localStorage.theme = "dark";
  }

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    this.themeMode = 'dark';
  } else {
    this.themeMode = 'light'
  }
}
</script>
<template>
  <div>
    <button @click="toggleDarkMode()" class="flex gap-2 p-2 bg-slate-200 dark:bg-slate-700 rounded-full">
      <v-icon
      v-if="themeMode == 'light'"
        name="hi-solid-moon"
        class="logo logo-sm bg-gray-900 border text-white block"
      />
      <v-icon
        v-if="themeMode == 'dark'"
        name="hi-solid-sun"
        class="logo logo-sm border border-slate-300 dark:border-none text-yellow-500 hidden dark:block"
      />
    </button>
  </div>
</template>
