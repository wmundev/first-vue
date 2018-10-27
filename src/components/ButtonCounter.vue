<template>
    <button v-on:click="count++">
        You have clicked on me {{count}} times
    </button>
</template>

<script>
export default {
  name: "ButtonCounter",
  data() {
    return {
      count: 1
    };
  }
};
</script>

<style scoped>
</style>
