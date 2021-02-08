<template>
  <li>{{ todo.task }}</li>
</template>

<script>
export default {
  props: {
    todo: Object
  }
}
</script>