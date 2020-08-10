import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const setTodosInLocalStore = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export default new Vuex.Store({
  state: {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
  },
  mutations: {
    addTodo: (state, payload) => {
      state.todos.unshift(payload);
      setTodosInLocalStore(state.todos);
    },
    deleteTodo: (state, payload) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
      setTodosInLocalStore(state.todos);
    },
    editTodo: (state, payload) => {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);
      state.todos[index] = payload;
      setTodosInLocalStore(state.todos);
    },
    completeTodo: (state, payload) => {
      const index = state.todos.findIndex((todo) => todo.id === payload);
      state.todos[index].completed = true;
      setTodosInLocalStore(state.todos);
    },
  },
  actions: {},
  getters: {
    getTodoById: (state) => (id) => state.todos.find((todo) => todo.id === id),
    getCompletedTodos: (state) => state.todos.filter((todo) => todo.completed === true),
    getUncompletedTodos: (state) => state.todos.filter((todo) => todo.completed === false),
  },
  modules: {},
});
