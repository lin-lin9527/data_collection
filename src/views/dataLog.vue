<template>
  <v-main>
    <v-container class="pt-0">
      <v-switch
        v-model="editState"
        hide-details
        density="compact"
        color="primary"
        :label="editState ? 'Write' : 'Read'"
      ></v-switch>
      <v-row>
        <v-col cols="12" lg="3">
          <div id="drag_position" class="delay1">
            <div id="drag1" style="position: relative">
              <DataLogCard :info="item[1]" id="item1"/>
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="delay1">
            <div id="drag2" style="position: relative">
              <DataLogCard :info="item[2]" id="item2" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="delay1">
            <div id="drag3" style="position: relative">
              <DataLogCard :info="item[3]" id="item3" />
            </div>
          </div>
          <div style="height: 10px"></div>
        </v-col>
        <v-col cols="12" lg="3">
          <div id="drag_position" class="delay2">
            <div id="drag4" style="position: relative">
              <DataLogCard :info="item[4]" id="item4" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="delay2">
            <div id="drag5" style="position: relative">
              <DataLogCard :info="item[5]" id="item5" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="delay2">
            <div id="drag6" style="position: relative">
              <DataLogCard :info="item[6]" id="item6" />
            </div>
          </div>
          <div style="height: 10px"></div>
        </v-col>
        <v-col cols="12" lg="3">
          <div id="drag_position" class="delay3">
            <div id="drag7" style="position: relative">
              <DataLogCard :info="item[7]" id="item7" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="delay3">
            <div id="drag8" style="position: relative">
              <DataLogCard :info="item[8]" id="item8" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="delay3">
            <div id="drag9" style="position: relative">
              <DataLogCard :info="item[9]" id="item9" />
            </div>
          </div>
          <div style="height: 10px"></div>
        </v-col>
        <v-col cols="12" lg="3">
          <div id="drag_position" class="delay4">
            <div id="drag10" style="position: relative">
              <DataLogCard :info="item[10]" id="item10" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="delay4">
            <div id="drag11" style="position: relative">
              <DataLogCard :info="item[11]" id="item11" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="delay4">
            <div id="drag12" style="position: relative">
              <DataLogCard :info="item[12]" id="item12" />
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

// Vuex
import { createHelpers } from "vuex-map-fields";
const { mapFields } = createHelpers({
  getterType: "getData",
  mutationType: "updateData",
});

export default {
  components: {
    DataLogCard,
  },
  data() {
    return {
      item: {},
      elementCount: 12,
    };
  },
  computed: {
    ...mapFields(["editState"]),
  },
  watch: {
    editState(isOpen) {
      if (isOpen) {
        for (let i = 1; i <= this.elementCount; i++)
          this.dragElement(`item${String(i)}`);
      } else {
        for (let i = 1; i <= this.elementCount; i++)
          this.closeDragElement(`item${String(i)}`);
      }
    },
  },
  created() {
    this.item = dataLog["item"];
  },
  mounted() {
    for (let i = 1; i <= this.elementCount; i++)
      this.dragElement(`item${String(i)}`);
  },
  methods: {
    closeDragElement(idName) {
      var elmnt = document.getElementById(idName);
      elmnt.onmousedown = null;
      elmnt.onmouseenter = null;
      elmnt.onmouseleave = null;
      elmnt.onmouseup = null;
      elmnt.onmousemove = null;
    },
    dragElement(idName) {
      var that = this;
      var elmnt = document.getElementById(idName);
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      elmnt.onmouseenter = hoverNMouseEnter;
      elmnt.onmouseleave = hoverNMouseLeave;
      elmnt.onmousedown = dragMouseDown;
      
      function hoverNMouseEnter(e) {
        e.target.style["scale"] = 1.03;
      }
      function hoverNMouseLeave(e) {
        e.target.style["scale"] = 1;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmousemove = dragElement;
        document.onmouseup = closeDragElement;
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
          queryInfo.style["z-index"] = `drag${String(i)}` == `drag${idName.split("item")[1]}` ? 110 : 0;
          queryInfo.style["pointer-events"] = `drag${String(i)}` == `drag${idName.split("item")[1]}` ? "none" : null;
        }
      }

      function closeDragElement(e) {
        document.onmouseup = null;
        document.onmousemove = null;
        var dragID = "drag" + idName.split("item")[1];
        var sourceNode = document.getElementById(dragID).parentNode; // Source Node
        var sourceChildNode = document.getElementById(dragID).children[0]; // Source Child Node
        var targetNode = e.target.offsetParent.parentNode.parentNode; // Target Node
        if (targetNode.id == "drag_position") {
          e.preventDefault();
          // Exchange data
          let positionID = targetNode.children[0].id.split("drag")[1]
          let sourceID = JSON.parse(JSON.stringify(that.item[idName.split("item")[1]]));
          let targetID = JSON.parse(JSON.stringify(that.item[positionID]));
          that.item[positionID] = sourceID;
          that.item[idName.split("item")[1]] = targetID;
          // sourceNode.appendChild(targetNode.children[0]);
          // targetNode.appendChild(document.getElementById(dragID));
          console.log(
            " Source Drag ID: ",dragID,
            " Target Drag ID: ",targetNode.children[0].id
          );
          let posTop = targetNode.offsetTop - sourceNode.offsetTop;
          let posLeft = targetNode.offsetLeft - sourceNode.offsetLeft;
          const moveXAnimation = {
            transform: [`translate(${posLeft}px, ${posTop}px)`, 'translate(0px, 0px)'],
            zIndex: [1000, 0]
          };
          sourceNode.children[0].animate(moveXAnimation, {duration: 300});
        }
        // Reset Style
        sourceChildNode.style.top = null;
        sourceChildNode.style.left = null;
        for (let i = 1; i <= that.elementCount; i++) {
          var queryInfo = document.getElementById(`drag${String(i)}`);
          queryInfo.style["z-index"] = null;
          queryInfo.style["pointer-events"] = null;
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
.delay4 {
  animation: position_delay 1.3s;
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
