<template>
  <v-main class="brown lighten-5">
    <v-container class="pa-7">
      <v-row>
        <v-col cols="12">
          <v-card
            style="
              min-height: 550px;
              background-color: black;
              border-radius: 10px;
            "
          >
            <v-container></v-container>
            <div style="height:500px"></div>
            <v-container class="fill-container">
              <v-row v-intersect="{
                handler: onIntersect,
                options: {
                  threshold: [0.3,0.5,0.7]
                }
              }" class="ml-0 mr-0" :id="isIntersecting" style="display:flex;">
                <v-spacer></v-spacer>
                <v-col cols="12" lg="4" md="12" sm="12" class="col1">
                  <CardTemplate class="col1-1" :info="tmpInfo[1]" :isCompose="false"/>
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12" class="col2">
                  <CardTemplate class="col2-1" :info="tmpInfo[3]" :isCompose="true"/>
                  <div style="height: 20px"></div>
                  <CardTemplate class="col2-2" :info="tmpInfo[4]" :isCompose="true"/>
                  <div style="height: 20px"></div>
                  <CardTemplate class="col2-3" :info="tmpInfo[5]" :isCompose="true"/>
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12" class="col3">
                  <CardTemplate class="col3-1" :info="tmpInfo[2]" :isCompose="false"/>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>

              <!-- <v-row class="ml-0 mr-0" style="display:flex;">
                <v-spacer></v-spacer>
                <v-col cols="12" lg="4" md="12" sm="12" class="col1">
                  <CardTemplate class="col1-1" :info="tmpInfo[1]" :isCompose="false"/>
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12" class="col2">
                  <CardTemplate class="col2-1" :info="tmpInfo[3]" :isCompose="true"/>
                  <div style="height: 20px"></div>
                  <CardTemplate class="col2-2" :info="tmpInfo[4]" :isCompose="true"/>
                  <div style="height: 20px"></div>
                  <CardTemplate class="col2-3" :info="tmpInfo[5]" :isCompose="true"/>
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12" class="col3">
                  <CardTemplate class="col3-1" :info="tmpInfo[2]" :isCompose="false"/>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>

              <v-row class="ml-0 mr-0" id="customID1" style="display:flex;">
                <v-spacer></v-spacer>
                <v-col cols="12" lg="4" md="12" sm="12" class="col1">
                  <CardTemplate class="col1-1" :info="tmpInfo[1]" :isCompose="false"/>
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12" class="col2">
                  <CardTemplate class="col2-1" :info="tmpInfo[3]" :isCompose="true"/>
                  <div style="height: 20px"></div>
                  <CardTemplate class="col2-2" :info="tmpInfo[4]" :isCompose="true"/>
                  <div style="height: 20px"></div>
                  <CardTemplate class="col2-3" :info="tmpInfo[5]" :isCompose="true"/>
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12" class="col3">
                  <CardTemplate class="col3-1" :info="tmpInfo[2]" :isCompose="false"/>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>

              <v-row class="ml-0 mr-0" id="customID2" style="display:flex;">
                <v-spacer></v-spacer>
                <v-col cols="12" lg="4" md="12" sm="12" class="col1">
                  <CardTemplate class="col1-1" :info="tmpInfo[1]" :isCompose="false"/>
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12" class="col2">
                  <CardTemplate class="col2-1" :info="tmpInfo[3]" :isCompose="true"/>
                  <div style="height: 20px"></div>
                  <CardTemplate class="col2-2" :info="tmpInfo[4]" :isCompose="true"/>
                  <div style="height: 20px"></div>
                  <CardTemplate class="col2-3" :info="tmpInfo[5]" :isCompose="true"/>
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12" class="col3">
                  <CardTemplate class="col3-1" :info="tmpInfo[2]" :isCompose="false"/>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>

              <v-row class="ml-0 mr-0" id="customID3" style="display:flex;">
                <v-spacer></v-spacer>
                <v-col cols="12" lg="4" md="12" sm="12" class="col1">
                  <CardTemplate class="col1-1" :info="tmpInfo[1]" :isCompose="false"/>
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12" class="col2">
                  <CardTemplate class="col2-1" :info="tmpInfo[3]" :isCompose="true"/>
                  <div style="height: 20px"></div>
                  <CardTemplate class="col2-2" :info="tmpInfo[4]" :isCompose="true"/>
                  <div style="height: 20px"></div>
                  <CardTemplate class="col2-3" :info="tmpInfo[5]" :isCompose="true"/>
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12" class="col3">
                  <CardTemplate class="col3-1" :info="tmpInfo[2]" :isCompose="false"/>
                </v-col>
                <v-spacer></v-spacer>
              </v-row> -->
            </v-container>
            <div style="height:5000px"></div>
            <v-container></v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CardTemplate from "@/components/cardTemplate.vue";
import template2 from "@/layout/template2.json";

export default {
  components: {
    CardTemplate,
  },
  data() {
    return {
      tmpInfo: {},
      isIntersecting: "hide"
    };
  },
  created() {
    this.scanInfo();
  },
  mounted() {
    // this.scrollInfo();
    this.mouseScrollInfo();
  },
  methods: {
    onIntersect(isIntersecting, entries, observer) {
      
      this.isIntersecting = isIntersecting ? 'show' : 'hide'
      console.log("@@@@@@@@@@@@@@@@",isIntersecting, entries, observer,this.isIntersecting)
    },
    getTmp() {
      this.tmpInfo = template2;
      setTimeout(() => {
        // var totalComponent = 0;
        // var col_list = [".col2-1", ".col2-2", ".col2-3"];
        // var col2 = document.querySelector(".col2").clientHeight;
        // for (let i in col_list) {
        //   totalComponent += document.querySelector(col_list[i]).clientHeight;
        // }
        // console.log(this,this.$);
      }, 200);
    },
    scanInfo() {
      this.getTmp();
    },
    scrollInfo() {
      document.addEventListener("scroll", function () {
        var calss_list = ["customID1", "customID2", "customID3"];
        for (let i in calss_list) {
          var myID = document.getElementById(calss_list[i]);
          myID.className = isInViewport(myID) ? "show" : "hide";
        }
      });
      function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }
    },
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
        var frame =
          target === document.body && document.documentElement
            ? document.documentElement
            : target; // safari is the new IE
        target.addEventListener("mousewheel", scrolled, { passive: false });
        target.addEventListener("DOMMouseScroll", scrolled, { passive: false });

        function scrolled(e) {
          e.preventDefault(); // disable default scrolling
          var delta = normalizeWheelDelta(e);
          pos += -delta * speed;
          pos = Math.max(
            0,
            Math.min(pos, target.scrollHeight - frame.clientHeight)
          ); // limit scrolling

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
#hide {
  opacity: 0;
  transition-timing-function: ease-in;
  transition: 0.3s;
  color: rgb(0, 255, 200);
}
#show {
  opacity: 1;
  transition-timing-function: ease-out;
  transition: 0.3s;
}
</style>
