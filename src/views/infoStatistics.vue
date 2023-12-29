<template>
  <v-main class="brown lighten-5" style="background-color: rgb(144, 155, 161);">
    <v-container class="pb-0">
      <h2>首頁</h2>
    </v-container>
    <v-container class="pa-4">
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="6" md="2" lg="2" xl="2" xxl="2" class="pt-0 pb-0">
          <v-menu
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
          >
            <template #activator="{ props }">
              <v-text-field
                v-model="startDate"
                variant="outlined"
                density="compact"
                readonly
                v-bind="props"
              >
                <template v-slot:append-inner style="background-color: blue;">
                  <v-icon color="red">mdi-calendar-range</v-icon>
                </template>
              </v-text-field>
            </template>
            <v-date-picker v-model="startFormateDate" :max="today" title="開始日期" />
          </v-menu>
        </v-col>
        <v-col cols="6" md="2" lg="2" xl="2" xxl="2" class="pt-0 pb-0">
          <v-menu
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
          >
            <template #activator="{ props }">
              <v-text-field
                v-model="endDate"
                variant="outlined"
                density="compact"
                readonly
                v-bind="props"
              >
                <template v-slot:append-inner style="background-color: blue;">
                  <v-icon color="red">mdi-calendar-range</v-icon>
                </template>
              </v-text-field>
            </template>
            <v-date-picker v-model="endFormateDate" :min="startFormateDate" :max="today" title="結束日期" />
          </v-menu>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col cols="12" lg="4" xl="4" xxl="4" class="delay1">
          <v-card class="card-info">
            <v-card-title>
              <h3 class="card-title">節目統計</h3>
            </v-card-title>
            <v-row>
              <v-col>
                <v-row>
                  <v-col cols="1"></v-col>
                  <v-col>
                    <v-icon class="approved-title">mdi-account-check</v-icon>
                    <h3 class="approved-title">已核准</h3>
                  </v-col>
                  <v-col>
                    <h1>0</h1>
                  </v-col>
                </v-row>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col>
                <v-row>
                  <v-col cols="1"></v-col>
                  <v-col>
                    <v-icon class="goBack-title">mdi-account-remove</v-icon>
                    <h3 class="goBack-title">退回</h3>
                  </v-col>
                  <v-col>
                    <h1>0</h1>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <div style="height:10px"></div>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4" xl="4" xxl="4" class="delay2">
          <v-card class="card-info">
            <v-card-title>
              <h3 class="card-title">場地借用統計</h3>
            </v-card-title>
            <v-row>
              <v-col>
                <v-row>
                  <v-col cols="1"></v-col>
                  <v-col >
                    <v-icon class="approved-title">mdi-account-check</v-icon>
                    <h3 class="approved-title">已核准</h3>
                  </v-col>
                  <v-col>
                    <h1>0</h1>
                  </v-col>
                </v-row>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col>
                <v-row>
                  <v-col cols="1"></v-col>
                  <v-col >
                    <v-icon class="goBack-title">mdi-account-remove</v-icon>
                    <h3 class="goBack-title">退回</h3>
                  </v-col>
                  <v-col>
                    <h1>0</h1>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <div style="height:10px"></div>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4" xl="4" xxl="4" class="delay3">
          <v-card class="card-info">
            <v-card-title>
              <h3 class="card-title">外租統計</h3>
            </v-card-title>
            <v-row>
              <v-col>
                <v-row>
                  <v-col cols="1"></v-col>
                  <v-col >
                    <v-icon class="approved-title">mdi-account-check</v-icon>
                    <h3 class="approved-title">已核准</h3>
                  </v-col>
                  <v-col>
                    <h1>0</h1>
                  </v-col>
                </v-row>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col>
                <v-row>
                  <v-col cols="1"></v-col>
                  <v-col >
                    <v-icon class="goBack-title">mdi-account-remove</v-icon>
                    <h3 class="goBack-title">退回</h3>
                  </v-col>
                  <v-col>
                    <h1>0</h1>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <div style="height:10px"></div>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="delay4">
        <v-col>
          <v-card class="card-info">
            <v-card-title>
              <h3 class="card-title">我申請的單號</h3>
            </v-card-title>
            <v-container>
              <v-table density="comfortable" height="400px">
                <thead>
                  <tr>
                    <th class="text-center">
                      <h3 class="table-title">審核單號</h3>
                    </th>
                    <th class="text-center">
                      <h3 class="table-title">活動/節目名稱</h3>
                    </th>
                    <th class="text-center">
                      <h3 class="table-title">審核類型</h3>
                    </th>
                    <th class="text-center">
                      <h3 class="table-title">審核狀態</h3>
                    </th>
                    <th class="text-center">
                      <h3 class="table-title">審核結果</h3>
                    </th>
                    <th class="text-center">
                      <h3 class="table-title">審核備註</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in data_table" :key="index" 
                    :style="[
                      {
                        'background-color': index %2 == 0 ? 'rgb(230, 230, 230)' : 'white' ,
                      },
                    ]"
                  >
                    <td class="text-center">{{ item.name }}</td>
                    <td class="text-center table-title">{{ item.events }}</td>
                    <td class="text-center">{{ item.types }}</td>
                    <td class="text-center">{{ item.status }}</td>
                    <td class="text-center">{{ item.results }}</td>
                    <td class="text-center">{{ item.remarks }}</td>
                  </tr>
                </tbody>
              </v-table>
              <v-divider></v-divider>
            </v-container>
            <div style="height:10px"></div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      startDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      startFormateDate: new Date(),
      endDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      endFormateDate: new Date(),
      today: new Date(),
      data_table: [
        {
          name: 'Fern',
          events: 'Low',
          types: '20cm',
          status: 'Yes',
          results: "Success",
          remarks: "None",
        },
        {
          name: 'Snake Plant',
          events: 'Low',
          types: '50cm',
          status: 'No',
          results: "Success",
          remarks: "None",
        },
        {
          name: 'Monstera',
          events: 'Medium',
          types: '60cm',
          status: 'No',
          results: "Fail",
          remarks: "None",
        },
        {
          name: 'Pothos',
          events: 'Low to medium',
          types: '40cm',
          status: 'Yes',
          results: "Success",
          remarks: "None",
        },
        {
          name: 'ZZ Plant',
          events: 'Low to medium',
          types: '90cm',
          status: 'Yes',
          results: "Success",
          remarks: "None",
        },
        {
          name: 'Spider Plant',
          events: 'Bright, indirect',
          types: '30cm',
          status: 'Yes',
          results: "Fail",
          remarks: "None",
        },
        {
          name: 'Air Plant',
          events: 'Bright, indirect',
          types: '15cm',
          status: 'Yes',
          results: "Success",
          remarks: "None",
        },
        {
          name: 'Peperomia',
          events: 'Bright, indirect',
          types: '25cm',
          status: 'Yes',
          results: "Success",
          remarks: "None",
        },
        {
          name: 'Aloe Vera',
          events: 'Bright, direct',
          types: '30cm',
          status: 'Yes',
          results: "Fail",
          remarks: "None",
        },
        {
          name: 'Jade Plant',
          events: 'Bright, direct',
          types: '40cm',
          status: 'Yes',
          results: "Success",
          remarks: "None",
        },
      ],
    };
  },
  created() {

  },
  watch: {
    startFormateDate(value) {
      this.startDate = new Date(value - new Date().getTimezoneOffset() * 60000)
        .toISOString().substr(0, 10)
    },
    endFormateDate(value) {
      this.endDate = new Date(value - new Date().getTimezoneOffset() * 60000)
        .toISOString().substr(0, 10)
    }
  },
  mounted() {
    this.mouseScrollInfo();
  },
  methods: {
    mouseScrollInfo() {
      new SmoothScroll(document, 120, 12);
      function SmoothScroll(target, speed, smooth) {
        if (target === document)
          target =
            document.scrollingElement ||
            document.documentElement ||
            document.body.parentNode ||
            document.body; // cross browser support for document scrolling
        var moving = false;
        var pos = target.scrollTop;
        var frame = target === document.body && document.documentElement
            ? document.documentElement : target; // safari is the new IE
        target.addEventListener("mousewheel", scrolled, { passive: false });
        target.addEventListener("DOMMouseScroll", scrolled, { passive: false });

        function scrolled(e) {
          // e.preventDefault(); // disable default scrolling
          var delta = normalizeWheelDelta(e);
          pos += -delta * speed;
          pos = Math.max(0,Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling
          if (!moving) update();
        }

        function normalizeWheelDelta(e) {
          if (e.detail) {
            if (e.wheelDelta)
              return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
            // Opera
            else return -e.detail / 3; // Firefox
          } else return e.wheelDelta / 120; // IE,Safari,Chrome
        }

        function update() {
          moving = true;
          var delta = (pos - target.scrollTop) / smooth;
          target.scrollTop += delta;
          if (Math.abs(delta) > 0.5) requestFrame(update);
          else moving = false;
        }

        var requestFrame = (function () {
          // requestAnimationFrame cross browser
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (func) {
              window.setTimeout(func, 1000 / 50);
            }
          );
        })();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card-info {
  border-radius: 5px;
  box-shadow: 6px 6px 16px rgba(0,0,0,0.3);
}

.card-title {
  color: rgb(221, 79, 79);
}

.approved-title {
  color: rgb(13, 184, 118);
}

.goBack-title {
  color: rgb(221, 11, 134);
}

.table-title {
  color: rgb(243, 146, 1);
}
// ======================================
.delay1 {
  animation: delay_state 1s;
}
.delay2 {
  animation: delay_state 1.2s;
}
.delay3 {
  animation: delay_state 1.3s;
}
.delay4 {
  animation: delay_state 1s;
}
@keyframes delay_state {
  0% { 
    opacity: 0;
    transform: translateX(-50px);
  }
  100% { 
    opacity: 1; 
    transform: translateX(0px);
  }
}
</style>