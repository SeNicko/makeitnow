<template>
  <form @submit.prevent="validateForm(submitForm)">
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input
          v-model="todo.title"
          class="input"
          :class="titleError && 'is-danger'"
          type="text"
          id="title"
          placeholder="I.E Go shopping"
        />
        <p v-if="titleError" class="help is-danger">Title field cannot be empty!</p>
      </div>
    </div>
    <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <textarea
          v-model="todo.content"
          class="textarea"
          id="content"
          placeholder="I.E Buy onions and tortillas."
        ></textarea>
      </div>
    </div>
    <div class="field is-grouped">
      <p class="control">
        <button type="submit" class="button is-link">
          Add to list
        </button>
      </p>
      <p class="control">
        <router-link :to="{ path: '/' }" class="button is-danger">
          Cancle
        </router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  props: ['submitForm', 'todo'],
  setup() {
    const titleError = ref(false);

    const validateForm = (submitForm) => {
      titleError.value = false;

      const title = document.querySelector('#title').value;

      if (title) submitForm();
      else if (!title) titleError.value = true;
    };

    return {
      validateForm,
      titleError,
    };
  },
};
</script>
