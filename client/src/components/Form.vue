<template>
  <div>
      <form action="#" @submit.prevent="$emit('submit-form')">
      <h6>Room Dimensions</h6>
      <div>
        <label for="roomDimensionX">x:</label>
        <input type="number" v-model="allData.roomDimensionX" :min="1">
        <label for="roomDimensionY">y:</label>
        <input type="number" v-model="allData.roomDimensionY" :min="1">
      </div>
      <h6>Start Position</h6>
      <div>
        <label for="startPositionX">x:</label>
        <input type="number" v-model="allData.startPositionX" :min="0" :max="allData.roomDimensionX - 1">
        <label for="startPositionY">y:</label>
        <input type="number" v-model="allData.startPositionY" :min="0" :max="allData.roomDimensionY - 1">
        <label for="startDirection">Direction:</label>
        <select v-model="allData.startDirection" id="direction">
          <option value="N">North</option>
          <option value="E">East</option>
          <option value="S">South</option>
          <option value="W">West</option>
        </select>
      </div>
      <h6>Moving Instructions</h6>
      <div>
        <label for="instructions">Instructions</label>
        <input type="text" id="instructions" v-model="allData.instructions" placeholder="example RFRFFRF or rfrffr" @keyup="validateInstructions()" @change="validateInstructions()">
      </div>
      <input type="submit" value="Submit" class="submit-button">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: ['allData'],
  methods: {
    validateInstructions() {
      this.allData.instructions = this.allData.instructions.replace(/[^lLrRfF]/gi, '')
      this.allData.instructions = this.allData.instructions.toUpperCase()
    }
  }
}
</script>

<style scoped>
input {
  width: 40px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
}

select {
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
  border-width: 2px;
  border-color: grey;
}

#instructions {
  width: 200px;
}

.submit-button {
  width: 100px;
  border-radius: 50px;
  margin-top: 10px;
  padding: 5px;
}
</style>