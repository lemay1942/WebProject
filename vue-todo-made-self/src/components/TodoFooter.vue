<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">모두삭제</span>
  </div>
</template>

<script>

export default {
  methods: {
      clearTodo(){
        localStorage.clear()
    }
  },
  }

</script>
