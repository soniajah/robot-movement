<template>
  <div class="home">
    <h3>Robot movement application</h3>
    <Form :allData="allData" v-on:submit-form="postMovementInstructions" />
    <Result :allData="allData" />
  </div>
</template>

<script>
import axios from 'axios';
import Form from '@/components/Form.vue';
import Result from '@/components/Result.vue';

const apiUrl = 'http://localhost:4000';

export default {
  name: 'Home',
  components: {
    Form,
    Result
  },
  data: () => {
    return {
      allData: {
        endX: '',
        endY: '',
        endDirection: '',
        roomDimensionX: 5,
        roomDimensionY: 5,
        startPositionX: 0,
        startPositionY: 0,
        startDirection: 'E',
        instructions: '',
      }
    }
  },
  methods: {
     postMovementInstructions() {
      let self = this
      axios.post(apiUrl + '/api/movement-instructions', {
        roomDimension: {
          x: parseInt(this.allData.roomDimensionX),
          y: parseInt(this.allData.roomDimensionY)
        },
        startPosition: {
          x: parseInt(this.allData.startPositionX),
          y: parseInt(this.allData.startPositionY),
          direction: this.allData.startDirection
        },
        instructions: this.allData.instructions.toUpperCase()
      })
      .then(async function (response) {
        self.allData.endX =  response.data.x
        self.allData.endY = response.data.y
        self.allData.endDirection = response.data.direction
      })
      .catch(function (error) {
        console.log(error)
      });
    }
  }
}
</script>

