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
              <v-text-field label="名稱" value="王大明"></v-text-field>
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
                  <v-text-field v-model="date" label="申請日期" readonly v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-row class="row">
            <v-col lg="true" md="true" class="col-md-6 col-sm-12 col-12">
              <v-select label="資料來源" chips n :items="['登錄系統','電話','傳真']" value="電話"></v-select>
            </v-col>
            <v-col lg="true" me="true" class="col-md-6 col-sm-12 col-12">
              <v-select label="可聯絡時間" chips n :items="['上午','下午','晚上']" multiple value="上午"></v-select>
            </v-col>
          </v-row>
          <v-row class="row">
            <v-col lg="true" md="true" class="col-md-3 col-sm-6 col-12">
              <v-select label="縣市" :items="['台北市','新北市']" value="台北市"></v-select>
            </v-col>
            <v-col lg="true" md="true" class="col-md-3 col-sm-6 col-12">
              <v-select label="區域" :items="['大安區','文山區']" value="大安區"></v-select>
            </v-col>
            <v-col lg="true" md="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="地址"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="row">
            <v-col lg="true" md="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="行動電話" value="09123456789"></v-text-field>
            </v-col>
            <v-col lg="true" me="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="其他電話"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="row">
            <v-col lg="true" md="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="推薦人代號"></v-text-field>
            </v-col>
            <v-col lg="true" me="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="推薦人姓名"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="row">
            <v-col lg="true" md="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="集團代碼"></v-text-field>
            </v-col>
            <v-col lg="true" me="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="部門"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="row">
            <v-col lg="true" md="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="推薦人區域"></v-text-field>
            </v-col>
            <v-col lg="true" me="true" class="col-md-6 col-sm-12 col-12">
              <v-text-field label="推薦人歸屬"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <span
                class="title"
                style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important"
              >電聯紀錄</span>
              <v-btn small fab dark color="indigo" class="ml-4" @click="AddRecord()">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row v-for="n in records">
            <v-col cols="4">
              <v-text-field label="聯絡日期"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field label="聯絡結果"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-select :items="['追蹤', '派案', '拒絕']"></v-select>
            </v-col>
          </v-row>
          <v-row align="right">
            <v-col cols="12" align="right">
              <v-btn text>取消</v-btn>
              <v-btn text color="primary" class="ml-4" dark>存檔</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    time: null,
    menu2: false,
    date: '2020-3-20',
    records: 0
  }),
  methods: {
    AddRecord: function() {
      this.records++
    }
  }
}
</script>

<style>
</style>