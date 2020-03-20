<template>
  <v-app>
     <v-navigation-drawer
      v-model="drawer"
      app
    >
                      <v-img
          src="../src/assets/iisi.png"
          transition="scale-transition"
          width="80%"
          class="ml-5 mt-2"
        />
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>回到首頁</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="waiting">
          <v-list-item-action>
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>待辦案件</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
                <v-list-item link to="undispatched">
          <v-list-item-action>
            <v-icon>mdi-format-list-numbered</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>未分案案件</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
                <v-list-item link to="list">
          <v-list-item-action>
            <v-icon>mdi-magnify</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>案件查詢</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
                        <v-list-item link to="setting">
          <v-list-item-action>
            <v-icon>mdi-cogs</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>分案設定</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="calendar">
          <v-list-item-action>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>日曆</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="red darken-4"
      dark
    >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="d-flex align-center">

      </div>

      <v-spacer></v-spacer>


    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,500,700&display=swap&subset=chinese-traditional');
html, body, input, .v-application, .title {
  font-family: 'Noto Sans TC', 'Roboto', sans-serif !important;
}
</style>
<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    menu: [
      {
      icon: 'mdi-home',
      name: '回到首頁',
      linkto: '/',
    },
    {
      icon: 'mdi-format-list-bulleted',
      name: '待辦案件',
      linkto: 'waiting',
    },
    {
      icon: 'mdi-home',
      name: '回到首頁',
      linkto: '/',
    },
    {
      icon: 'mdi-home',
      name: '回到首頁',
      linkto: '/',
    },
    {
      icon: 'mdi-home',
      name: '回到首頁',
      linkto: '/',
    },
    ]
  }),
};
</script>
