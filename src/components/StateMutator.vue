<template>
  <div>
    <h3>State</h3>
    <p>{{ state }}</p>
  </div>
  <div>
    <h3>Mutate Count</h3>
    <button type="button" @click="incrementCount">Increment</button>
    <button type="button" @click="decrementCount">Decrement</button>
  </div>
  <div>
    <h3>Mutate Items</h3>
    <input v-model="inputValue" />
    <button type="button" @click="submitItem">Add Item</button>
    {{ inputValue }}
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useFilterState } from './filter.state'
let inputValue = ref('')
const { state, incrementCount, decrementCount, addItem } = useFilterState()
const submitItem = () => {
  addItem(inputValue.value)
}
</script>
