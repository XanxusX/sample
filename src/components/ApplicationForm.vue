<template>
  <v-container>
    <v-card>
      <v-container>
        <v-card-text>
          <span
            class="title"
            style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important"
          >申請單</span>
          <v-row class="row">
            <v-col lg="true" md="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="名稱" v-model="applicationForm.name"></v-text-field>
            </v-col>
            <v-col lg="true" md="true" class="col-md-6 col-sm-12 col-12">
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="applicationForm.time" label="申請日期" readonly v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="applicationForm.time" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-row class="row">
            <v-col lg="true" md="true" class="col-md-6 col-sm-12 col-12">
              <v-select label="資料來源" chips n :items="['登錄系統','電話','傳真']" v-model="applicationForm.dataSource"></v-select>
            </v-col>
            <v-col lg="true" me="true" class="col-md-6 col-sm-12 col-12">
              <v-select label="可聯絡時間" chips n :items="['上午','下午','晚上']" multiple v-model="applicationForm.contactTime"></v-select>
            </v-col>
          </v-row>
          <v-row class="row">
            <v-col lg="true" md="true" class="col-md-3 col-sm-6 col-12">
              <v-select label="縣市" :items="['台北市','新北市']" v-model="applicationForm.city"></v-select>
            </v-col>
            <v-col lg="true" md="true" class="col-md-3 col-sm-6 col-12">
              <v-select label="區域" :items="['大安區','文山區']" v-model="applicationForm.area"></v-select>
            </v-col>
            <v-col lg="true" md="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="地址" v-model="applicationForm.address"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="row">
            <v-col lg="true" md="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="行動電話" v-model="applicationForm.mobile"></v-text-field>
            </v-col>
            <v-col lg="true" me="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="其他電話" v-model="applicationForm.anotherPhone"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="row">
            <v-col lg="true" md="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="推薦人代號" v-model="applicationForm.reffererCode"></v-text-field>
            </v-col>
            <v-col lg="true" me="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="推薦人姓名" v-model="applicationForm.refferer"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="row">
            <v-col lg="true" md="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="集團代碼" v-model="applicationForm.groupCode"></v-text-field>
            </v-col>
            <v-col lg="true" me="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="部門" v-model="applicationForm.department"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="row">
            <v-col lg="true" md="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="推薦人區域" v-model="applicationForm.reffererRegion"></v-text-field>
            </v-col>
            <v-col lg="true" me="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="推薦人歸屬" v-model="applicationForm.reffererRelegation"></v-text-field>
            </v-col>
          </v-row>
          <v-row align="right">
            <v-col cols="12" align="right">
              <v-btn text >取消</v-btn>
              <v-btn text color="primary" class="ml-4" dark @click="CreateDocument({collectionName:'application', dataObject: applicationForm})">存檔</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name:'ApplicationForm',
  data: () => ({
    // time: null,
    menu2: false
  }),
  methods: {
    ...mapActions(['CreateDocument']),
    testMethod: (a,b,c)=>{console.log(`${a} , ${b}, ${c}`)}
  },
  computed: { ...mapState(['applicationForm']) }
}
</script>

<style>
</style>