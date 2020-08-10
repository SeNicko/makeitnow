<template>
  <section>
    <TodoForm :submitForm="submitForm" :todo="todo" />
  </section>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useMutations, useRouter } from '@u3u/vue-hooks';
import { nanoid } from 'nanoid';

import TodoForm from '@/components/TodoForm.vue';

export default {
  components: {
    TodoForm,
  },
  setup() {
    const { addTodo } = useMutations(['addTodo']);
    const { router } = useRouter();

    const todo = ref({
      title: '',
      content: '',
    });

    const submitForm = () => {
      addTodo({
        id: nanoid(),
        title: todo.value.title,
        content: todo.value.content,
        completed: false,
      });

      router.push({ path: '/' });
    };

    return {
      todo,
      submitForm,
    };
  },
};
</script>
