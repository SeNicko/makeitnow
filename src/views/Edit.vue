<template>
  <section>
    <TodoForm :submitForm="submitForm" :todo="todo" />
  </section>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useMutations, useRouter, useGetters } from '@u3u/vue-hooks';

import TodoForm from '@/components/TodoForm.vue';

export default {
  components: {
    TodoForm,
  },
  setup() {
    const {
      getTodoById: { value: getTodoById },
    } = useGetters(['getTodoById']);
    const { editTodo } = useMutations(['editTodo']);
    const { router, route } = useRouter();

    const todo = ref(getTodoById(route.value.params.id));

    const submitForm = () => {
      editTodo(todo);
      router.push({ path: '/' });
    };

    return {
      todo,
      submitForm,
    };
  },
};
</script>
