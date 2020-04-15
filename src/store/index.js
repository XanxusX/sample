import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase/index'
import { Number, String } from 'core-js'
// import firebaseFunction from '../firebase/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showMenu: true,
    applicationForm: {
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
      contactTime: null
    },
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
    CreateDocument({ commit }, { collectionName, dataObject }) {
      var ref = db.collection(collectionName).doc();
      ref.set(dataObject).then(() => {
        // 資料內取得所有屬性
        let properties = Object.getOwnPropertyNames(dataObject)
        for (let index = 0; index < properties.length; index++) {
          if (properties[index]=='memberId') {
            continue
          }
          dataObject[properties[index]]=null;
        }
        alert('新增成功')
      }
      ).catch((error) =>
        console.log(`Create document fail, error is ${error}`)
      );
    }
  },
  modules: {}
})