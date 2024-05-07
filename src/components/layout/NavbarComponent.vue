<script setup>
import Navlink from "@/components/layout/NavlinkComponent.vue";
import SwitchLanguageButton from "@/components/buttons/SwitchLanguageButtonComponent.vue";
import DarkModebutton from '@/components/buttons/DarkModeButtonComponent.vue';
</script>

<template>
  <nav class="navbar">
    <div class="max-w-fit flex items-center gap-2">
      <img
        class="logo logo-md"
        src="https://randomuser.me/api/portraits/men/93.jpg"
        alt="logo"
      />
      <div
        class="hidden lg:flex lg:gap-4 lg:h-full lg:items-center lg:justify-center"
      >
        <navlink link="/" :name="$t('routing.home')" />
        <navlink link="/about" :name="$t('routing.about')" />
        <navlink link="/projects" :name="$t('routing.projects')" /> |
        <navlink link="/" :name="$t('routing.home')" />
        <navlink link="/about" :name="$t('routing.about')" />
        <navlink link="/projects" :name="$t('routing.projects')" /> 
      </div>
    </div>
    <div class="flex justify-end gap-4 items-center min-w-fit">
      <div class="inline-flex gap-4 items-center">
        <DarkModebutton class="h-full items-center flex" />
        <SwitchLanguageButton class="h-full items-center flex" />
        <navlink
          class="hidden lg:block px-4 py-2 min-w-fit text-nowrap rounded-full bg-purple-500 text-white hover:bg-purple-700 duration-300"
          icon="hi-chat-alt-2"
          iconPosition="before"
          link="/contact"
          :name="$t('routing.contact_me')"
        />
      </div>
      <button
        class="lg:hidden p-2 h-10 w-10 rounded-full bg-slate-50 hover:bg-blue-500 hover:text-white hover:ring hover:ring-blue-700 flex items-center justify-center box-border"
      >
        <v-icon name="hi-solid-menu" />
      </button>
    </div>
  </nav>
</template>
