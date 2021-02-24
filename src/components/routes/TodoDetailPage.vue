<template>
  <todo-detail :id="1"></todo-detail>
</template>

<script>
import TodoDetail from '../TodoDetail.vue'

export default {
  props: ["id"],
  components: { TodoDetail }
}
</script>