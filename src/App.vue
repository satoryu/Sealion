<template>
  <router-view></router-view>
</template>

<script>
export default {
  async created() {
    this.$store.dispatch('loadTodos')
  }
}
</script>
