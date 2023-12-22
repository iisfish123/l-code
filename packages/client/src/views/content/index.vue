<template>
  <div>
    <div class="l-c-container">
      <Draggable
        id="first"
        data-source="juju"
        :list="material"
        class="flex-material list-group component-content"
        draggable=".item"
        :group="{name: 'components', pull: 'clone', put: false}"
        @change="log"
      >
        <div
          class="item material-drag-item"
          v-for="element in material"
          :key="element.id"
        >
          {{element.name}}
        </div>
      </Draggable>
      <Draggable
        :list="myArray2"
        class="drag"
        draggable=".item"
        group="components"
        @change="log"
      >
        <!-- <div
          class="item"
          v-for="element in myArray2"
          :key="element.id"
        >
          <Index :element="element"/>
        </div> -->
        <!-- <Index :elements="myArray2" /> -->
        <div class="item">
          <Render :elements="myArray2"/>
        </div>
      </Draggable>
      <div class="flex-material attrs-content">3</div>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import Render from '@/views/designer/index.js'

export default {
  name: 'HomeView',
  components: { Draggable, Render },
  data() {
    return {
      material: [{ id: 1, name: 'Input' }, { id: 2, name: 'Select' }],
      myArray2: [],
      drag: false
    }
  },
  methods: {
    log(e) {
      console.log(e)
    },
    update(e) {
      console.log(e)
      return false
    }
  }
}
</script>
<style lang="scss" scoped>
.l-c-container {
  display: flex;
  justify-content: space-between;
  & > .flex-material {
    width: 400px;
    overflow: hidden;
    height: calc(100vh - 50px);
  }
  .component-content {
    background-color: aqua;
  }
  .attrs-content {
    background-color: red;
  }
  .material-drag-item {
    cursor: move;
  }
  .drag {
    flex: 1;
    width: 100%;
  }
}
</style>
