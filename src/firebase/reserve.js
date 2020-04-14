import Vue from 'vue'
import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "api-key",
    authDomain: "vuesample-8f306.firebaseapp.com",
    databaseURL: "https://vuesample-8f306.firebaseio.com",
    projectId: "vuesample-8f306",
    storageBucket: "vuesample-8f306.appspot.com",
    // messagingSenderId: "sender-id",
    // appId: "app-id",
    // measurementId: "G-measurement-id",
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

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
        ref.get().then(querySnapshot => {
            // console.log('read collectioin successful')
            return querySnapshot
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
    }
}

export default firebaseFunction


//改成單一物件包含所有方法
//#region 
//#region creation relate
//create，指定document
function DocumentSet(data) {
    var ref = db.collection(data.collection).doc(data.document);
    ref.set(
        data.dataSet
    ).then(() => {
        console.log('set data successful');
    }).catch(() =>
        console.log(`set data fail, error is ${arguments}`)
    );
}

//Create，不指定document，會產生一個亂數document 名稱
function DocumentAdd(data) {
    var ref = db.collection(data.collection);
    ref.add(
        data.dataSet
    ).then(() => {
        console.log('set data successful');
    }).catch(() =>
        console.log(`set data fail, error is ${arguments}`)
    );
}
//#endregion

//對document增加屬性，不會覆蓋已存在資料
function DocumentMerge(data) {
    var ref = db.collection(data.collection).doc(data.document);
    ref.set(data.dataSet
        , { merge: true }).then(() => {
            console.log('Merge data successful');
        }).catch(() =>
            console.log(`merge data fail, error is ${arguments}`)
        );;
}

function DocumentUpdae(data) {
    var ref = db.collection(data.collection).doc(data.document);
    ref.set(
        data.dataSet
    ).upadate(() => {
        console.log('update data successful');
    }).catch(() =>
        console.log(`update data fail, error is ${arguments}`)
    );
}


function DocumentDelete(data) {
    var ref = db.collection(data.collection).doc(data.document);
    ref.delete(
        data.dataSet
    ).delete(() => {
        console.log('delete data successful');
    }).catch(() =>
        console.log(`delete data fail, error is ${arguments}`)
    );
}

//#region read relate
//讀取整個collection
function CollectionRead(data) {
    var ref = db.collection(data.collection);
    ref.get().then(querySnapshot => {
        // console.log('read collectioin successful')
        return querySnapshot
    }).catch(() =>
        console.log(`read collection fail, error is ${arguments}`)
    );
}

// 讀取單一document
function DocumentRead(data) {
    var ref = db.collection(data.collection).doc(data.document);
    ref.get().then(document => {
        return document
    })
        .catch(() =>
            console.log(`read document fail, error is ${arguments}`)
        );
}
//#endregion

//監聽資料改變
//只監聽document
function DocumentOnSnapshot(data) {
    var ref = db.collection(data.collection).doc(data.document);
    ref.onSanpshot(document => {
        return document
    })
        .catch(() =>
            console.log(`onSnapshot document fail, error is ${arguments}`)
        );
}

//在collection中篩選資料
function CollectionWhere(data) {
    var ref = db.collection(data.collection)
    ref.where(data.property, data.judge, data.condition).get().then(document => {
        return document
    })
        .catch(() =>
            console.log(`onSnapshot document fail, error is ${arguments}`)
        );
}
//#endregion