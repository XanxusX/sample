import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase/index'
// import firebaseFunction from '../firebase/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showMenu: true,
    fruitName: {}
  },
  mutations: {
    ChangeMenuState: function (state) {
      state.showMenu = !state.showMenu
    },
    TestFirebase: function (state, fruitName) {
      state.fruitName = fruitName
    }
  },
  actions: {
    TestFirebaseAction({commit},fruit) {
      var ref = db.collection(fruit);
      ref.get().then(collection => {
          // console.log('read collectioin successful')
          let fruitName = collection.docs[0].id
          commit('TestFirebase',fruitName)
      }).catch(() =>
          console.log(`read collection fail, error is ${arguments}`)
      );
    }
  },
  modules: {}
})