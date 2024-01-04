<template>
  <div :class="info.state ? 'template-card-success' : 'template-card-error'">
    <v-card class="card-content" :style="[
      {
        //'border-color': info.color,
        'background-color': 'rgb(115, 124, 128)', 
        'border-radius': '20px',
        '--card-border-color': info.borderColor
      }
    ]">
      <v-card-title>
        <v-container class="pa-0">
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="12" xs="12" md="12" lg="8" xl="8">
              <v-container>
                <div style="display: flex;">
                  <span class="light-signal" :style="[stateColorCss(info)]" />
                  <v-col cols="1"></v-col>
                  <h2 style="color:white">{{info.title}}</h2>
                </div>
              </v-container>
              <v-container class="pt-0">
                <v-card class="state-border" :style="[stateColorCss(info)]">
                  <h3 style="margin: 5px 0px" :style="[stateTextColor(info)]">
                  {{ info.message }}
                  </h3>
                </v-card>
              </v-container>
            </v-col>
            <v-col cols="12" sm="12" xs="12" md="12" lg="4" xl="4" xxl="4">
              <v-img width="90%" height="90%" :src="info.icon"/>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
      </v-card-title>
      <v-container>
        <!-- <v-row>
          <v-col cols="1" class="pa-0"></v-col>
          <h2 style="color: white;">{{ info.info1 }}</h2>
          <v-spacer></v-spacer>
        </v-row>
        <v-row>
          <v-col cols="1" class="pa-0"></v-col>
          <h2 style="color: white">{{ info.info2 }}</h2>
          <v-spacer></v-spacer>
        </v-row> -->
        <v-row>
          <v-col cols="1" class="pa-0"></v-col>
          <v-col class="pa-0">
            <h2 style="color: white;">{{ info.info1 }}</h2>
          </v-col>
          <v-col class="pa-0">
            <h2 style="color: white;">{{ info.info2 }}</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1" class="pa-0"></v-col>
          <v-col class="pa-0">
            <h2 style="color: white;">{{ info.info3 }}</h2>
          </v-col>
          <v-col class="pa-0">
            <h2 style="color: white;">{{ info.info4 }}</h2>
          </v-col>
        </v-row>
      </v-container>
      <div style="height:20px"></div>
    </v-card>
  </div>
</template>


<script>
export default {
  props:["info"],
  data() {
    return {}
  },
  created() {},
  methods: {
    stateColorCss(info) {
      return { 'background-color': info.color }
      // return { 'background-color': info.state ? info.regularColor : 'rgb(255, 89, 89)' }
    },
    stateTextColor(info) {
      // return { 'color': info.color != "rgb(255, 89, 89)" ? 'white' : 'black' }
      return { 'color': info.state ? 'white' : 'black' }
    }
  },
}
</script>

<style lang="scss" scoped>
.template-card-success {
  min-height: 244px;
}

.template-card-error {
  --border-width: 2px;
  --radius: 20px;
  position: relative;
  border-radius: var(--radius);
  border: var(--border-width) solid transparent;
}

.template-card-error::before {
  content: " ";
  position: absolute;
  inset: calc(var(--border-width) * -1);
  border: inherit;
  border-radius: inherit;
  background-image: conic-gradient(from var(--angle), red 80%, #E0D1FF 88%, #E0D1FF 92%, red 100%);
  background-origin: border-box;
  -webkit-mask:
    linear-gradient(black, black) content-box,
    linear-gradient(black, black);  
  mask: linear-gradient(black, black),
        linear-gradient(black, black);
  -webkit-mask-clip: content-box, border-box;  
  mask-clip: content-box, border-box;
  -webkit-mask-composite: xor;  
  mask-composite: exclude;
  animation: spin 3s linear infinite;
}

@supports not (background: paint(something)) {
  .template-card-error::before {
    background-image: conic-gradient(red 80%, #E0D1FF 88%, #E0D1FF 92%, red 100%);    
  }
}

@property --angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0turn;
}

@keyframes spin {
  to {
    --angle: 1turn;
  }
}

// .template-card-error-old {
//   border-width: 2px;
//   border-color: rgba(var(--card-border-color), 0.6);
//   box-shadow: 0 1px 2px rgba(var(--card-border-color), 0.1);
//   animation-name: breath;
//   animation-duration: 1.5s;
//   animation-direction: alternate;
//   animation-timing-function: linear;
//   animation-iteration-count: infinite;
// }

// @keyframes breath {
// 	from {
// 		// border-color: rgba(var(--card-border-color), 0.5);
//     box-shadow: rgba(var(--card-border-color), 1) 0px 6px 12px -2px, rgba(var(--card-border-color), 1) 0px 3px 7px -3px;
// 	}
// 	to {
// 		// border-color: rgba(var(--card-border-color), 0.1);
//     box-shadow: rgba(var(--card-border-color), 0.1) 0px 6px 12px -2px, rgba(var(--card-border-color), 0.1) 0px 3px 7px -3px;
// 	}
// }

.light-signal {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: inline-block;
}

.state-border {
  border-radius: 50px;
  text-align: center;
}

h2, h3 {
  font-family: "源樣明體","Noto Serif", "Microsoft JhengHei", PingFang, STHeiti, sans-serif, serif;
}


</style>