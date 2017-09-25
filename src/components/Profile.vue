<template>
<div>
  <img src="../assets/profile.jpeg">
  <p>Username: {{ username }}</p>
  <p>Gender: {{ gender }}</p>
</div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      username: 'Runrioter Wung',
      gender: 'male'
    }
  }
}
</script>

<style scoped>
img {
  width: 230px;
  height: 230px;
}
</style>


