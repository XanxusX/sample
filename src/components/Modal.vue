<template>
  <!-- <v-row justify="center"> -->
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" text dark v-on="on">清空</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline" style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important">確認清空全部內容?</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">No</v-btn>
        <v-btn color="green darken-1" text @click="ClearForm()">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- </v-row> -->
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "Modal",
  data: () => ({
    dialog: false
  }),
  methods : {
    ClearForm:  function (){
      this.dialog = false
    },
    ...mapMutations(['ClearTemporaryData'])
  }
}
</script>

