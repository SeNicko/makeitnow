<template>
  <form @submit.prevent="submitForm">
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input v-model="todo.title" class="input" type="text" placeholder="I.E Go shopping" />
      </div>
    </div>
    <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <textarea
          v-model="todo.content"
          class="textarea"
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
export default {
  props: ['submitForm', 'todo'],
};
</script>
