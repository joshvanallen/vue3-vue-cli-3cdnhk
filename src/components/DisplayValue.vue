<template>
  <h4>All Valeus</h4>
  <p>{{ allValues }}</p>
  <h4>Count</h4>
  <p>{{ countValue }}</p>
  <h4>Items</h4>
  <p>{{ itemsValue }}</p>
</template>
<script>
import { getSpecificKeyFromState } from './filter.state'

export default {
  setup() {
    const countValue = getSpecificKeyFromState('count')
    const itemsValue = getSpecificKeyFromState('items')
    const allValues = getSpecificKeyFromState('count', 'items', 'foobar')
    return { countValue, itemsValue, allValues }
  },
}
</script>
