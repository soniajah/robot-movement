<template>
  <div>
    <h6>End position</h6>
    <div>x: {{allData.endX}} y: {{allData.endY}} Direction: {{allData.endDirection}}</div>
    <table >
      <tr v-for="row in parseInt(allData.roomDimensionY)" :key="row">
        <td v-for="column in parseInt(allData.roomDimensionX)" :key="column" class="td-demo">
          <span class="td-coordinates">{{row - 1}}, {{column - 1}}</span>
          <span v-if="row - 1 == allData.startPositionY && column - 1 == allData.startPositionX">Start<br>{{allData.startDirection}}</span>
          <span v-else-if="row - 1 == allData.endY && column - 1 == allData.endX">End<br>{{allData.endDirection}}</span>
          <span v-else></span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: ['allData']
}
</script>

<style scoped>
  table {
    border: 2px;
    margin: 0 auto;
    margin-top: 5px;
  }
  .td-demo {
    height: 50px;
    width: 50px;
    background-color:rgb(238, 238, 238);
    color: rgb(65, 65, 65);
    font-size: 15px;
    position: relative;
  }

  .td-coordinates {
    position: absolute;
    font-size: 10px;
    right: 2px;
    top: 2px;
    color: rgb(65 65 65 / 60%);
  }
</style>