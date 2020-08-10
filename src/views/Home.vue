<template>
  <div class="home">
    <nav class="navbar mt-6 is-sticky-top" role="navigation" aria-label="dropdown navigation">
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
      <div class="navbar-end">
        <a href="https://github.com/SeNicko/makeitnow" target="_blank" class="navbar-item">
          <span class="pr-4">
            check on github
          </span>
          <img src="@/assets/Octocat.png" alt="Octocat from github" />
        </a>
      </div>
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

<style lang="scss">
.is-sticky-top {
  position: sticky !important;
  top: 0;
}
</style>
