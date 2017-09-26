<template>
  <div>
    <div>Username: {{$route.params.username}}</div>
    <div>
      <router-link to="/user/runrioter">Runrioter Wung</router-link>
      <router-link to="/user/peter">Peter</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  beforeCreate () {
    console.log('Before create')
  },
  created () {
    console.log('Created')
  },
  beforeMount () {
    console.log('Before mount')
  },
  mounted () {
    console.log('Mounted')
  },
  beforeRouteUpdate (to, from, next) {
    console.log('from', from, 'to', to)
    next()
  }
}
</script>

