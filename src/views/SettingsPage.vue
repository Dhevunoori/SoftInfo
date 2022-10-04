<template>
  <div>
    <h3 class="text">Switch to Dark/Light Mode here...!</h3>
    <div> <md-switch v-model="isDark" class="theme text">Dark mode</md-switch></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isDark: false,
        theme: 'light'
      }
    },
    watch: {
      isDark (val) {
        if(val === true) {
          this.theme = 'dark';
        } else {
          this.theme = 'light'
        }
        this.loadTheme();
      }
    },
    methods: {
      loadTheme() {
        const root = document.querySelector(':root');
        root.setAttribute('color-scheme', `${this.theme}`);
      }
    }
  }
</script>
<style>
  .theme:is(:hover, :focus){ 
    color: red;
    opacity: .8
}
</style>
