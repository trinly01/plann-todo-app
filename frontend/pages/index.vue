<template>
  <div class="pt-6 px-6 move-up is-text-color">
    <div class="br-4 px-5 pt-5 pb-5 column has-background-white welcome-section is-uppercase has-text-weight-bold">
      <div class="greet">
        Hi <span class="name has-text-primary">Trinmar</span>,
      </div>
      <div class="welcome-back">
        Welcome back 👋
      </div>
    </div>
    <div class="columns is-desktop mt-4 p-0 m-0 ">
      <div class="column p-0 m-0">
        <div class="br-4 greet column has-background-white">
          <!-- Hi <span class="name has-text-primary">Christy</span>, -->
        </div>
      </div>
      <div class="p-5  todos p-0 m-0 br-4 has-background-white ">
        <div class="pb-5 has-text-centered is-uppercase has-text-weight-bold">
          Your to-dos for today
        </div>
        <!-- {{ todos }} -->
        <p-todo v-for="todo in todos" :key="todo.id" class="mb-3" :value="todo" />
      </div>
    </div>
  </div>
</template>

<script>
import pTodo from '~/components/pTodo.vue'

export default {
  name: 'IndexPage',
  components: {
    pTodo
  },
  computed: {
    todos () {
      return this.$store.state.todos.list.slice(0, 5)
    }
  },
  mounted () {
    this.$store.commit('todos/getTodos')
  }
}
</script>

<style scoped>

.welcome-section {
  box-shadow: 0px 4px 19px #ECEEF3;
}

.move-up {
  position: relative;
  bottom: 10px;
}

.greet {
  font-size: 32px;
}

.welcome-back {
  font-size: 48px;
}

.columns {
  column-gap: 20px;
  row-gap: 20px;
}

</style>
