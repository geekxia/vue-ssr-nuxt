
// 这里的写法和 @vue/cli 项目中的写法，是不一样的，注意区分

export const state = () => ({
  list: [1,2,3,4,5]
})

export const mutations = {
  add (state, payload) {
    state.list.push(payload)
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}
