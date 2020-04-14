<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-container>
            <v-card-text>
              <p
                class="display-1 text--primary"
                style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important"
              >今日進件量</p>
              <div
                class="title text--primary"
                style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important"
              >5件</div>
            </v-card-text>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card to="/table">
          <v-container>
            <v-card-text>
              <p
                class="display-1 text--primary"
                style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important"
              >待辦事件</p>
              <div
                class="title text--primary"
                style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important"
              >20件</div>
              <p>{{fruitName}}</p>
            </v-card-text>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <Calendar></Calendar>
    </v-row>
  </v-container>
</template>

<script>
import Calendar from './Calendar'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  components: {
    Calendar
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions(['TestFirebaseAction'])
  },
  computed: {
    ...mapState(['count']),
    ...mapState(['fruitName'])
  },
  mounted() {
    this.TestFirebaseAction('fruit')
  }
}
</script>
