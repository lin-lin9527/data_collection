<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" lg="3">
          <div id="drag_position" class="delay1">
            <div :id="'drag' + item[1].id" style="position: relative">
              <DataLogCard :info="item[1]" id="item1" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="delay1">
            <div :id="'drag' + item[2].id" style="position: relative">
              <DataLogCard :info="item[2]" id="item2" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="delay1">
            <div :id="'drag' + item[3].id" style="position: relative">
              <DataLogCard :info="item[3]" id="item3" />
            </div>
          </div>
          <div style="height: 10px"></div>
        </v-col>
        <v-col cols="12" lg="3">
          <div id="drag_position" class="delay2">
            <div :id="'drag' + item[4].id" style="position: relative">
              <DataLogCard :info="item[4]" id="item4" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="delay2">
            <div :id="'drag' + item[5].id" style="position: relative">
              <DataLogCard :info="item[5]" id="item5" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="delay2">
            <div :id="'drag' + item[6].id" style="position: relative">
              <DataLogCard :info="item[6]" id="item6" />
            </div>
          </div>
          <div style="height: 10px"></div>
        </v-col>
        <v-col cols="12" lg="3">
          <div id="drag_position" class="delay3">
            <div :id="'drag' + item[7].id" style="position: relative">
              <DataLogCard :info="item[7]" id="item7" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="delay3">
            <div :id="'drag' + item[8].id" style="position: relative">
              <DataLogCard :info="item[8]" id="item8" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="delay3">
            <div :id="'drag' + item[9].id" style="position: relative">
              <DataLogCard :info="item[9]" id="item9" />
            </div>
          </div>
          <div style="height: 10px"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import DataLogCard from "@/components/dataLogCard.vue";
import dataLog from "./json/dataLog.json";

export default {
  components: {
    DataLogCard,
  },
  data() {
    return {
      item: {},
      elementCount: 9,
    };
  },
  created() {
    this.item = dataLog["item"];
  },
  mounted() {
    for (let i = 1; i <= this.elementCount; i++)
      this.dragElement(`item${String(i)}`);
  },
  methods: {
    dragElement(idName) {
      var that = this;
      var elmnt = document.getElementById(idName);
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      elmnt.onmousedown = dragMouseDown;
      elmnt.onmouseenter = hoverNMouseEnter;
      elmnt.onmouseleave = hoverNMouseLeave;

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = dragElement;
      }
      function hoverNMouseEnter(e) {
        e.target.style["scale"] = 1.03;
      }
      function hoverNMouseLeave(e) {
        e.target.style["scale"] = 1;
      }
      function dragElement(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";

        for (let i = 1; i <= that.elementCount; i++) {
          var queryInfo = document.getElementById(`drag${String(i)}`);
          queryInfo.style["z-index"] = `drag${String(i)}` == "drag" + idName.split("item")[1] ? 0 : 100;
        }
      }

      function closeDragElement(e) {
        document.onmouseup = null;
        document.onmousemove = null;
        var dataPosition = e.target.offsetParent.parentNode.parentNode; // Target Node
        console.log("", dataPosition);
        if (dataPosition.id == "drag_position") {
          e.preventDefault();
          // let sourceID = JSON.parse(JSON.stringify(that.item[idName.split("item")[1]]));
          // let targetID = JSON.parse(JSON.stringify(that.item[dataPosition.children[0].id.split("drag")[1]]));
          
          var data = "drag" + idName.split("item")[1];
          var originParentNode = document.getElementById(data).parentNode; // Source Node
          console.log(
            "Source: ",
            data,
            "; Target: ",
            dataPosition.children[0].id
          );
          console.log(
            "Source: ",
            document.getElementById(data),
            "; Target: ",
            dataPosition.children[0]
          );
          var childrenNodeData = document.getElementById(data).children[0];
          childrenNodeData.style.top = null;
          childrenNodeData.style.left = null;
          originParentNode.appendChild(dataPosition.children[0]); // Target Node Child => Source Node
          dataPosition.appendChild(document.getElementById(data)); // Source Node Child => Target Node

          // that.item[dataPosition.children[0].id.split("drag")[1]] = sourceID;
          // that.item[idName.split("item")[1]] = targetID;
          // console.log(sourceID, targetID,that.item);
        }
        for (let i = 1; i <= that.elementCount; i++) {
          var queryInfo = document.getElementById(`drag${String(i)}`);
          queryInfo.style["z-index"] = null;
        }
      }
    },
  },
};
</script>

<style lang="scss">
.delay1 {
  animation: position_delay 1s;
}
.delay2 {
  animation: position_delay 1.1s;
}
.delay3 {
  animation: position_delay 1.2s;
}
@keyframes position_delay {
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
