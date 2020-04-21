
import tableBody from '../data/table/body.json'

let dataFormat = {
    applicationForm :[],
    allCases: []
}

const localStorageFunction = {
    initialize: function () {
        if (localStorageFunction.read('data')==null) {
            this.save(dataFormat)
        }
    },
    save: function (data) {
        localStorage.setItem('data',JSON.stringify(data))
    },
    create: function (collectionName, dataObject) {
        let temporaryData = JSON.parse(localStorage.getItem('data'))
        temporaryData[collectionName].push(dataObject)
        this.save(temporaryData)
    },
    read: function (data) {
        return localStorage.getItem(data)
    }
}

export default localStorageFunction