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
              >
                今日進件數
              </p>
              <div
                class="title text--primary"
                style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important"
              >
                10件
              </div>
            </v-card-text>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-container>
            <v-card-text>
              <p
                class="display-1 text--primary"
                style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important"
              >
                總進件數
              </p>
              <div
                class="title text--primary"
                style="font-family: 'Noto Sans TC', 'Roboto', sans-serif !important"
              >
                100件
              </div>
            </v-card-text>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card>
          <GChart
            :settings="{ packages: ['corechart'] }"
            type="PieChart"
            :data="pie.data"
            :options="pie.options"
            style="height:50vh"
          />
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <GChart
            :settings="{ packages: ['corechart'] }"
            type="PieChart"
            :data="pie.data"
            :options="pie.options"
            style="height:50vh"
          />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        ><v-card
          ><v-card-text
            ><GChart
              :settings="{ packages: ['line'] }"
              type="LineChart"
              :data="line.data"
              :options="line.options"
              :createChart="(el, google) => new google.charts.Line(el)"
              style="height:50vh"
            /> </v-card-text></v-card
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { GChart } from 'vue-google-charts'
import pie from '../data/charts/pie.json'
import line from '../data/charts/line.json'
export default {
  components: {
    GChart
  },
  data() {
    return {
      pie: pie,
      line: line
    }
  }
}
</script>
