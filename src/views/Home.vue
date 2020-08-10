<template>
  <div class="home">
    <nav class="mt-6">
      <nav class="navbar" role="navigation" aria-label="dropdown navigation">
        <div class="navbar-item px-0">
          <div class="select is-success">
            <select @change="changeDisplay">
              <option value="show-all">Show all</option>
              <option value="show-uncompleted">Show uncompleted</option>
              <option value="show-completed">Show completed</option>
            </select>
          </div>
        </div>
        <div class="navbar-item">
          <router-link class="button is-success" :to="{ path: '/create' }">Create</router-link>
        </div>
      </nav>
    </nav>
    <TodoList :displayOption="currentLabel" />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import TodoList from '@/components/TodoList.vue';

export default {
  components: {
    TodoList,
  },
  setup() {
    const labels = ['show-all', 'show-uncompleted', 'show-completed'];
    const currentLabel = ref(labels[0]);

    const changeDisplay = (event) => {
      currentLabel.value = event.target.value;
    };

    return {
      changeDisplay,
      currentLabel,
    };
  },
};
</script>
