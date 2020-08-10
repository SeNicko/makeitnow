<template>
  <section class="mt-6">
    <p v-if="todos.length === 0">
      No todos here... 🤙🤙
    </p>
    <div
      class="card mb-4"
      v-for="todo in todos"
      :key="todo.id"
      :class="todo.completed ? 'has-background-success has-text-success-light' : ''"
    >
      <div class="card-content">
        <h1 class="is-size-3 has-text-weight-semibold">{{ todo.title }}</h1>
        <div class="content">
          {{ todo.content }}
        </div>
        <div class="field is-grouped">
          <p class="control" v-if="!todo.completed">
            <button @click="completeTodo(todo.id)" class="button is-success">
              Complete
            </button>
          </p>
          <p class="control" v-if="!todo.completed">
            <router-link :to="{ name: 'Edit', params: { id: todo.id } }" class="button is-warning">
              Edit
            </router-link>
          </p>
          <p class="control">
            <button @click="deleteTodo(todo.id)" class="button is-danger">
              Delete
            </button>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { watchEffect, ref } from '@vue/composition-api';
import { useState, useMutations, useGetters } from '@u3u/vue-hooks';

export default {
  props: ['displayOption'],
  setup(props) {
    const { deleteTodo, completeTodo } = useMutations(['deleteTodo', 'completeTodo']);
    const { todos } = useState(['todos']);
    const { getCompletedTodos, getUncompletedTodos } = useGetters([
      'getCompletedTodos',
      'getUncompletedTodos',
    ]);

    const filteredTodos = ref(todos.value);

    watchEffect(() => {
      const filter = props.displayOption;

      if (filter === 'show-all') {
        filteredTodos.value = todos.value;
      } else if (filter === 'show-completed') {
        filteredTodos.value = getCompletedTodos.value;
      } else if (filter === 'show-uncompleted') {
        filteredTodos.value = getUncompletedTodos.value;
      }
    });

    return {
      todos: filteredTodos,
      deleteTodo,
      completeTodo,
    };
  },
};
</script>
