import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)
var firebaseConfig = {
    apiKey: "api-key",
    authDomain: "vuesample-8f306.firebaseapp.com",
    databaseURL: "https://vuesample-8f306.firebaseio.com",
    projectId: "vuesample-8f306",
    storageBucket: "vuesample-8f306.appspot.com",
    // messagingSenderId: "sender-id",
    // appId: "app-id",
    // measurementId: "G-measurement-id",
}
firebase.initializeApp(
    firebaseConfig
)

export const db = firebase.firestore();


//現在沒用到
//把所有方法包在一個物件裡
//#region 
const firebaseFunction = {
    //#region creation relate
    //create，指定document
    documentSet(data) {
        var ref = db.collection(data.collection).doc(data.document);
        ref.set(
            data.dataSet
        ).then(() => {
            console.log('set data successful');
        }).catch(() =>
            console.log(`set data fail, error is ${arguments}`)
        )
    },
    //Create，不指定document，會產生一個亂數document 名稱
    documentAdd(data) {
        var ref = db.collection(data.collection);
        ref.add(
            data.dataSet
        ).then(() => {
            console.log('set data successful');
        }).catch(() =>
            console.log(`set data fail, error is ${arguments}`)
        );
    },
    //#endregion
    //對document增加屬性，不會覆蓋已存在資料
    documentMerge(data) {
        var ref = db.collection(data.collection).doc(data.document);
        ref.set(data.dataSet
            , { merge: true }).then(() => {
                console.log('Merge data successful');
            }).catch(() =>
                console.log(`merge data fail, error is ${arguments}`)
            )
    },
    documentUpdae(data) {
        var ref = db.collection(data.collection).doc(data.document);
        ref.set(
            data.dataSet
        ).upadate(() => {
            console.log('update data successful');
        }).catch(() =>
            console.log(`update data fail, error is ${arguments}`)
        );
    },
    documentDelete(data) {
        var ref = db.collection(data.collection).doc(data.document);
        ref.delete(
            data.dataSet
        ).delete(() => {
            console.log('delete data successful');
        }).catch(() =>
            console.log(`delete data fail, error is ${arguments}`)
        );
    },
    //#region read relate
    //讀取整個collection
    collectionRead(data) {
        var ref = db.collection(data.collection);
        ref.get().then(collection => {
            // console.log('read collectioin successful')
            let something = collection.docs[0].id
            return something
        }).catch(() =>
            console.log(`read collection fail, error is ${arguments}`)
        );
    },
    // 讀取單一document
    documentRead(data) {
        var ref = db.collection(data.collection).doc(data.document);
        ref.get().then(document => {
            return document
        })
            .catch(() =>
                console.log(`read document fail, error is ${arguments}`)
            );
    },
    //#endregion
    //監聽資料改變
    //只監聽document
    documentOnSnapshot(data) {
        var ref = db.collection(data.collection).doc(data.document);
        ref.onSanpshot(document => {
            return document
        })
            .catch(() =>
                console.log(`onSnapshot document fail, error is ${arguments}`)
            );
    },
    //在collection中篩選資料
    collectionWhere(data) {
        var ref = db.collection(data.collection)
        ref.where(data.property, data.judge, data.condition).get().then(document => {
            return document
        })
            .catch(() =>
                console.log(`onSnapshot document fail, error is ${arguments}`)
            );
    },
    test(){
        return 'test'
    }
}
// export default firebaseFunction
//#endregion
