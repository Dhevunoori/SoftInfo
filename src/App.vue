<template>
  <div id="app">
    <md-toolbar style="background-color:lightslategray" class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
          <md-button>
            <router-link to="/">Home</router-link>
          </md-button>
          <md-button>
            <router-link to="/cards">Cards</router-link>
          </md-button>
          <md-button>
            <router-link to="/settings">Settings</router-link>
          </md-button>
        </div>
        <md-autocomplete class="search" v-model="selectedItem" :md-options="items"
         md-layout="box" @md-selected="searchAndGoToCardsPage" style="margin-left: 30px; margin-right: 100px">
          <label>Search...</label>
          <template slot="md-autocomplete-item" slot-scope="{ item, term }">
            <md-highlight-text :md-term="term">{{ item }}</md-highlight-text>
          </template>
          <template slot="md-autocomplete-empty" slot-scope="{ term }">
            No Items matching "{{ term }}" found.
          </template>
        </md-autocomplete>
      </div>
    </md-toolbar>
    <router-view />
  </div>
</template>
<script>
export default {

  data() {
    return {
      selectedItem: '',
      items: [
        "Brown eggs",
        "Asparagus",
        "Green smoothie",
        "Raw legums",
      ]
    }
  },
  watch: {
    selectedItem() {
      if(this.selectedItem === '') {
        if(this.$route.path === '/cards') {
          this.$router.push('/cards');
        }
      }
    } 
  },
  methods: {
    /*Navigates to the Cards page with Search text as param*/
    searchAndGoToCardsPage() {
        this.$router.replace('/cards?searchText=' + this.selectedItem.replaceAll(' ', '-'));
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  color: white !important;
}
@media(prefers-color-theme: light) {
  :root{
    --text: var(--text-light);
    --bkg: var(--bkg-light);
  }
}
[color-scheme="dark"]{
  --text: var(--text-dark);
  --bkg: var(--bkg-dark);
}
[color-scheme="light"]{
  --text: var(--text-light);
  --bkg: var(--bkg-light);
}
@media(prefers-color-theme: dark) {
  :root{
    --text: var(--text-dark);
    --bkg: var(--bkg-dark);
  }
}
:root {
  --text-light: hsl(255, 36%, 17%);
  --bkg-light: hsl(0, 0%, 100%);

  --text-dark: rgb(201, 197, 219);
  --bkg-dark: hsl(218, 15.4%, 10.2%);
}

.text{
  color: var(--text);
}
.bkg {
  background-color: var(--bkg);
}
body {
  background-color: var(--bkg);
}
</style>
