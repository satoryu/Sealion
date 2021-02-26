<template>
  <router-view></router-view>
</template>

<script>
export default {
  async created() {
    const url = window.location.href + 'api/todos'
    const response = await fetch(`${window.location.href}/api/todos`)
    this.todos = response.json();
  }
}
</script>
