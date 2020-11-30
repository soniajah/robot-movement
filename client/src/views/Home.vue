<template>
  <div class="home">
    <h3>Robot movement application</h3>
    <Form :allData="allData" v-on:submitForm="postMovementInstructions" />
    <Result :allData="allData" />
  </div>
</template>

<script>
import axios from 'axios';
import Form from '@/components/Form.vue';
import Result from '@/components/Result.vue';

const url = 'http://localhost:4000';

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
     postMovementInstructions(formData) {
      let self = this

      axios.post(url + '/api/movement-instructions', {
        roomDimension: {
          x: parseInt(formData.roomDimensionX),
          y: parseInt(formData.roomDimensionY)
        },
        startPosition: {
          x: parseInt(formData.startPositionX),
          y: parseInt(formData.startPositionY),
          direction: formData.startDirection
        },
        instructions: formData.instructions.toUpperCase()
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

