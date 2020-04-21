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
        <v-subheader>客服人員</v-subheader>
        <v-list-item v-for="item in menu" :key="item.name" link :to="item.linkto">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list dense>
        <v-subheader>業務人員</v-subheader>
        <v-list-item v-for="item in menu2" :key="item.name" link :to="item.linkto">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list dense>
        <v-subheader>主管</v-subheader>
        <v-list-item link to="dashboard">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark v-if="showMenu">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
import menu2 from './data/menu2.json'
import { mapState } from 'vuex'
import localStorageFunction from './localStorage/index'
// import firebaseFunction from './firebase/index'
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    menu: menu,
    menu2: menu2,
    // testbase: firebaseFunction.collectionRead({collection:'fruit'})
  }),
  computed: {
    ...mapState(['showMenu']),
  },
  mounted:() => {
    localStorageFunction.initialize()
  }
}

</script>
