import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase/index'
import localStorageFunction from '../localStorage/index'
import login from '../data/login.json'
import { Number, String } from 'core-js'
// import firebaseFunction from '../firebase/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login:login,
    showMenu: true,
    newCase: {
      memberId: 'fakeId2211',
      name: null,
      dataSource: null,
      city: null,
      area: null,
      address: null,
      mobile: null,
      anotherPhone: null,
      refferer: null,
      reffererCode: null,
      groupCode: null,
      department: null,
      reffererRegion: null,
      reffererRelegation: null,
      time: null,
      contactTime: null,
    },
    //測試用
    fruitName: {}
  },
  mutations: {
    ChangeMenuState: function (state) {
      state.showMenu = !state.showMenu
    },
    ClearTemporaryData: function(state, collectionName){
      let properties = Object.getOwnPropertyNames(state[collectionName])
      for (let index = 0; index < properties.length; index++) {
            if (properties[index] == 'memberId') {
              continue
            }
            state[collectionName][properties[index]] = null;
          }
    },
    // 測試用
    TestFirebase: function (state, fruitName) {
      state.fruitName = fruitName
    }
  },
  actions: {
    // 測試用
    TestFirebaseAction({ commit }, fruit) {
      var ref = db.collection(fruit);
      ref.get().then(collection => {
        // console.log('read collectioin successful')
        let fruitName = collection.docs[0].id
        commit('TestFirebase', fruitName)
      }).catch((error) =>
        console.log(`read collection fail, error is ${error}`)
      );
    },
    CreateDocument({ commit }, { collectionName, dataObject, storeClear }) {
      localStorageFunction.create(collectionName, dataObject)
      commit('ClearTemporaryData',storeClear)
      alert('新增成功')
    }
    //連接firebase的寫法
    // CreateDocument({ commit }, { collectionName, dataObject }) {
    //   var ref = db.collection(collectionName).doc();
    //   ref.set(dataObject).then(() => {
    //     ClearTemporaryData(dataObject)
    //     alert('新增成功')
    //   }
    //   ).catch((error) =>
    //     console.log(`Create document fail, error is ${error}`)
    //   );
    // },
  },
  modules: {},
  getters: {
    getLoginInfo: state => {
      return state.login
    }
  }
})

// //清空某個物件內所有屬性
// function ClearTemporaryData(dataObject) {
//   // 資料內取得所有屬性
//   let properties = Object.getOwnPropertyNames(dataObject)
//   for (let index = 0; index < properties.length; index++) {
//     if (properties[index] == 'memberId') {
//       continue
//     }
//     dataObject[properties[index]] = null;
//   }
// }