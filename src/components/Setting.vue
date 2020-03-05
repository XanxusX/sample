<template>
  <v-container fluid>
    <v-card>
        <v-card-title>
          <span class="headline" style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important">分案設定</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="4">
                <v-subheader class="mt-2 title font-weight-regular" style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important">群組名稱</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                ></v-text-field>
              </v-col>
            </v-row>
                        <v-row>
              <v-col cols="4">
                <v-subheader class="mt-2 title font-weight-regular" style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important">公司統一編號</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                ></v-text-field>
              </v-col>
            </v-row>
                        <v-row>
              <v-col cols="4">
                <v-subheader class="mt-2 title font-weight-regular" style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important">公司登記名稱</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-subheader class="mt-2 title font-weight-regular" style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important">營業地址</v-subheader>
              </v-col>
              <v-col cols="8">
<v-select
                  :items="['台北市','新北市','台中市','台南市']"
                  required
                ></v-select>
              </v-col>
            </v-row>
                                    <v-row>
              <v-col cols="4">
                <v-subheader class="mt-2 title font-weight-regular" style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important">可聯絡時間</v-subheader>
              </v-col>
              <v-col cols="8">
    <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="time"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu2"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-subheader class="mt-2 title font-weight-regular" style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important">經辦人員</v-subheader>
              </v-col>
              <v-col cols="8">
<v-select
                  :items="['台北市','新北市','台中市','台南市']"
                  multiple
                  required
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
      time: null,
        menu2: false,
  })
}
</script>

<style>
</style>