<template>
  <v-container fluid>
    <v-card>
      <v-container>
        <v-card-title>
          <span
            class="title"
            style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important"
          >分案設定</span>
        </v-card-title>
        <v-card-text>
          <v-row :align="alignment" :justify="justify">
            <v-col cols="12">
              <v-text-field label="群組名稱" hide-details="auto"></v-text-field>
            </v-col>
          </v-row>
          <v-row :align="alignment" :justify="justify">
            <v-col cols="6">
              <v-select label="分案縣市" chips :items="['台北市','新北市','桃園市','新竹縣市','苗栗縣市']" multiple></v-select>
            </v-col>
            <v-col cols="6">
              <v-select label="可聯絡時間" chips n :items="['上午','下午','晚上']" multiple></v-select>
            </v-col>
          </v-row>

          <v-row :align="alignment" :justify="justify">
            <v-col cols="6">
              <v-select chips label="經辦人員" :items="['經辦人員1','經辦人員2','經辦人員3']" multiple required></v-select>
            </v-col>
            <v-col cols="6">
              <v-select chips label="業務人員" :items="['業務人員1','業務人員2','業務人員3']" aria-required="true"></v-select>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    time: null,
    menu2: false
  })
}
</script>

<style>
.theme--light.v-subheader {
  color: rgba(0, 0, 0, 1) !important;
}
</style>