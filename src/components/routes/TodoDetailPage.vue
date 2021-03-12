<template>
  <todo-detail :id="id"></todo-detail>
</template>

<script>
import TodoDetail from '../TodoDetail.vue'

export default {
  props: ["id"],
  components: { TodoDetail }
}
</script>