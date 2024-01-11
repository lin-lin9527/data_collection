<template>
  <v-card
    :style="[{
      'border-radius': '5px',
      'border-width': '2px',
      'border-color': info['color'],
    }]"
  >
    <v-card-title :style="[{ 'background-color': info['color']}]">
      <v-container>
        <h1 style="text-align: center">{{ info['title']}}</h1>
      </v-container>
    </v-card-title>
    <v-container class="pt-0 pb-0">
      <v-container class="pb-0">
        <v-row>
          <v-col>
            <h3 style="font-size: 24px">{{ info['subtitle1']}}</h3>
          </v-col>
          <v-col>
            <h3 style="font-size: 24px; text-align: center">{{ info['subtitle2']}}</h3>
          </v-col>
        </v-row>
      </v-container>

      <v-divider></v-divider>
      <v-container>
        <v-row>
          <v-col class="pt-0 pb-0">
            <h3 style="font-size: 24px">{{ info['info1'].title}}</h3>
          </v-col>
          <v-col class="pt-0 pb-0">
            <h3 style="font-size: 24px; text-align: center">{{ info['info1'].value}}</h3>
          </v-col>
        </v-row>

        <v-row style="background-color: rgb(204, 204, 204)">
          <v-col class="pt-0 pb-0">
            <h3 style="font-size: 24px">{{ info['info2'].title}}</h3>
          </v-col>
          <v-col class="pt-0 pb-0">
            <h3 style="font-size: 24px; text-align: center">{{ info['info2'].value}}</h3>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="pt-0 pb-0">
            <h3 style="font-size: 24px">{{ info['info3'].title}}</h3>
          </v-col>
          <v-col class="pt-0 pb-0">
            <h3 style="font-size: 24px; text-align: center">{{ info['info3'].value}}</h3>
          </v-col>
        </v-row>

        <v-row style="background-color: rgb(204, 204, 204)">
          <v-col class="pt-0 pb-0">
            <h3 style="font-size: 24px">{{ info['info4'].title}}</h3>
          </v-col>
          <v-col class="pt-0 pb-0">
            <h3 style="font-size: 24px; text-align: center">{{ info['info4'].value}}</h3>
          </v-col>
        </v-row>
        <div style="height: 5px"></div>
      </v-container>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props:["info"],
}
</script>