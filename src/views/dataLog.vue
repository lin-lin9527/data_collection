<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" lg="3">
          <div id="drag_position" class="item1" :ondrop="drop" :ondragover="allowDrop">
            <div draggable="true" :ondragstart="drag" id="drag1">
              <DataLogCard :info="item[1]" id="item1" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="item2" :ondrop="drop" :ondragover="allowDrop">
            <div draggable="true" :ondragstart="drag" id="drag2">
              <DataLogCard :info="item[2]" id="item2" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="item3" :ondrop="drop" :ondragover="allowDrop">
            <div draggable="true" :ondragstart="drag" id="drag3">
              <DataLogCard :info="item[3]" id="item3" />
            </div>
          </div>
          <div style="height: 10px"></div>
        </v-col>
        <v-col cols="12" lg="3">
          <div id="drag_position" class="item4" :ondrop="drop" :ondragover="allowDrop">
            <div draggable="true" :ondragstart="drag" id="drag4">
              <DataLogCard :info="item[4]" id="item4" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="item5" :ondrop="drop" :ondragover="allowDrop">
            <div draggable="true" :ondragstart="drag" id="drag5">
              <DataLogCard :info="item[5]" id="item5" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="item6" :ondrop="drop" :ondragover="allowDrop">
            <div draggable="true" :ondragstart="drag" id="drag6">
              <DataLogCard :info="item[6]" id="item6" />
            </div>
          </div>
          <div style="height: 10px"></div>
        </v-col>
        <v-col cols="12" lg="3">
          <div id="drag_position" class="item7" :ondrop="drop" :ondragover="allowDrop">
            <div draggable="true" :ondragstart="drag" id="drag7">
              <DataLogCard :info="item[7]" id="item7" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="item8" :ondrop="drop" :ondragover="allowDrop">
            <div draggable="true" :ondragstart="drag" id="drag8">
              <DataLogCard :info="item[8]" id="item8" />
            </div>
          </div>
          <div style="height: 10px"></div>
          <div id="drag_position" class="item9" :ondrop="drop" :ondragover="allowDrop">
            <div draggable="true" :ondragstart="drag" id="drag9">
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
    };
  },
  created() {
    this.item = dataLog["item"];
  },
  // mounted() {
  //   var item_list = ["item1","item2","item3","item4","item5","item6","item7","item8","item9"]
  //   for (let i in item_list){
  //     this.dragElement(item_list[i]);
  //   }
  // },
  methods: {
    allowDrop(ev) {
      ev.preventDefault();
    },
    drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    },
    drop(ev) {
      var dataPosition = ev.target.offsetParent.parentNode.parentNode; // Target Node
      if (dataPosition.id == "drag_position") {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        var originParentNode = document.getElementById(data).parentNode; // Source Node
        console.log(data,dataPosition.children[0].id)
        originParentNode.appendChild(dataPosition.children[0]); // Target Node Child => Source Node
        dataPosition.appendChild(document.getElementById(data)); // Source Node Child => Target Node
      }
    },
    // dragElement(className) {
    //   var elmnt = document.getElementsByClassName(className)[0]
    //   console.log("CCCCCCCCC", elmnt);
    //   var pos1 = 0,
    //     pos2 = 0,
    //     pos3 = 0,
    //     pos4 = 0;
    //   elmnt.onmousedown = dragMouseDown;

    //   function dragMouseDown(e) {
    //     e = e || window.event;
    //     e.preventDefault();
    //     // get the mouse cursor position at startup:
    //     pos3 = e.clientX;
    //     pos4 = e.clientY;
    //     document.onmouseup = closeDragElement;
    //     // call a function whenever the cursor moves:
    //     document.onmousemove = elementDrag;
    //   }

    //   function elementDrag(e) {
    //     e = e || window.event;
    //     e.preventDefault();
    //     // calculate the new cursor position:
    //     pos1 = pos3 - e.clientX;
    //     pos2 = pos4 - e.clientY;
    //     pos3 = e.clientX;
    //     pos4 = e.clientY;
    //     // set the element's new position:
    //     elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    //     elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    //     console.log("!!!!!!!!",elmnt.style.top,elmnt.style.left)
    //     // var id_list = ["item1","item2","item3"]
    //     // for (let i in id_list) {
    //     //   var queryInfo = document.getElementById(id_list[i])
    //     //   if (id_list[i] == id) queryInfo.style["z-index"] = 1000
    //     //   else queryInfo.style["z-index"] = 0
    //     // }
    //   }

    //   function closeDragElement() {
    //     /* stop moving when mouse button is released:*/
    //     document.onmouseup = null;
    //     document.onmousemove = null;
    //     // var id_list = ["item1","item2","item3"]
    //     // for (let i in id_list) {
    //     //   var queryInfo = document.getElementById(id_list[i])
    //     //   if (id_list[i] == id) queryInfo.style["z-index"] = 1000
    //     //   else queryInfo.style["z-index"] = 0
    //     // }
    //   }
    // },

  },
};
</script>

<style lang="scss">
#drag_position {
  width: 100%;
  animation: delay_state 1s;
}
// #item1 {
//   animation: delay_state 1s;
// }
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
