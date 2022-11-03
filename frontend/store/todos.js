import axios from 'axios'
// import { set } from 'vue'
// import Vue from 'vue'

const todosService = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const state = () => ({
  list: []
})

export const mutations = {
  getTodos (s) {
    todosService.get('/todos').then(({ data }) => {
      // eslint-disable-next-line no-console
      console.log('data', data, s)
      s.list = data
      // Object.assign(state,  )
    })
  },
  add (state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}
