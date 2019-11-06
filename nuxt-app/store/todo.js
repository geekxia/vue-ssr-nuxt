export const state = () => ({
  list: [1,2,3,4],
  msg: 'hehe'
})

export const mutations = {
  add (state, text) {
    state.list.push(text)
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}
