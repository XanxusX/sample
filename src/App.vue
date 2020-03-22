<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-img
        src="../src/assets/iisi.png"
        transition="scale-transition"
        width="80%"
        class="ml-5 mt-2"
      />
      <v-list dense>
        <v-list-item
          v-for="item in menu"
          :key="item.name"
          link
          :to="item.linkto"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="red darken-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="showMenu" />
      <div class="d-flex align-center"></div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,500,700&display=swap&subset=chinese-traditional');
html,
body,
input,
.v-application,
.title {
  font-family: 'Noto Sans TC', 'Roboto', sans-serif !important;
}
</style>
<script>
import menu from './data/menu.json'
import { mapState } from 'vuex'
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    menu: menu
  }),
  computed: {
    ...mapState(['showMenu'])
  }
}
</script>
