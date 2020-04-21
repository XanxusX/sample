<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>系統登入</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="帳號"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                v-model="account"
              />

              <v-text-field
                id="password"
                label="密碼"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
              />
            </v-form>
            <p v-if="loginFailed" class="red--text text-center">帳號或密碼錯誤</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="login">登入</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'login',
  data: () => ({
    loginFailed: false,
    account: '',
    password: ''
  }),
  methods: {
    ...mapMutations(['ChangeMenuState']),
    login: function() {
      this.checkLogin()
      if (!this.loginFailed) {
        this.ChangeMenuState()
        this.$router.push('/home')
      }
    },
    checkLogin: function() {
      let accountArray = this.getLoginInfo.map(x => x.account)
      let index = accountArray.indexOf(this.account)
      // 找不到輸入帳號
      if (index == -1) {
        this.loginFailed = true
      } else {
        //密碼錯誤
        if (this.getLoginInfo[index].password != this.password) {
          this.loginFailed = true
        }else{
          //成功登入
          this.loginFailed = false
          this.newCase.memberId = this.getLoginInfo[index].memberId
        }
      }
    }
  },
  created() {
    this.ChangeMenuState()
  },
  computed: {
    ...mapGetters(['getLoginInfo']),
    ...mapState(['newCase'])
  }
}
</script>
