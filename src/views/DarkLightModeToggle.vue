<template>
  <div>
    <button id="theme-toggle" @click="toggleDarkMode"
      class="text-white rounded-full w-12 h-12 flex items-center justify-center">

      <img id="theme-toggle-dark-icon" class="w-6 h-6" stroke="currentColor" src="/moon-stars.svg"
        style="height: 26px;width: 26px;" />
      <img id="theme-toggle-light-icon" class="w-6 h-6" stroke="currentColor" src="/moon-stars.svg"
        style="height: 26px;width: 26px;" />

    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const themeToggleDarkIcon = ref(null);
const themeToggleLightIcon = ref(null);

onMounted(() => {
  themeToggleDarkIcon.value = document.getElementById('theme-toggle-dark-icon');
  themeToggleLightIcon.value = document.getElementById('theme-toggle-light-icon');

  // Change the icons inside the button based on previous settings
  if (localStorage.getItem('color-theme') === 'dark' || (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.value.classList.add('hidden');
  } else {
    themeToggleDarkIcon.value.classList.add('hidden');
  }
});

const toggleDarkMode = () => {
  // Toggle icons inside the button
  themeToggleDarkIcon.value.classList.toggle('hidden');
  themeToggleLightIcon.value.classList.toggle('hidden');

  // Toggle dark mode
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
};
</script>
