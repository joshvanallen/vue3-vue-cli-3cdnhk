import { reactive, readonly, toRefs, ref, shallowReactive, computed } from 'vue'
import _isNil from 'lodash/isNil'
import _pick from 'lodash/pick'

const state = reactive({
  count: 0,
  items: [],
  foobar: '',
})

export function useFilterState() {
  return {
    state: toRefs(state),
    incrementCount: () => {
      state.count++
    },
    decrementCount: () => {
      state.count--
    },
    addItem: item => {
      state.items = state.items.concat(item)
    },
  }
}

export function getSpecificKeyFromState(...selectedKeys) {
  console.log(`Keys ${selectedKeys}`)
  return computed(() => {
    return _pick(readonly(toRefs(state)), selectedKeys)
  })
}
