<script setup>
defineProps({
  link: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  class: {
    type: String,
    default: "nav-link",
  },
  icon: {
    type: String,
    default: null,
  },
  iconPosition: {
    type: String,
    default: "",
  },
});
</script>

<template>
    <router-link :class="class" :to="link">
        <v-icon v-if="icon && iconPosition == 'before'" :name="icon"></v-icon>
            {{ name }}
        <v-icon v-if="icon && iconPosition == 'after'"></v-icon>
    </router-link>
</template>
