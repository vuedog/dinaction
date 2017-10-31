<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import VdHead from '@/components/VdHeader'

export default {
  name: 'app',
  components: {
    VdHead
  }
}
</script>

<style>
.bv-example-row .row + .row {
  margin-top: 1rem;
}

.bv-example-row .row > .col:not(.header),
.bv-example-row .row > [class^=col-] {
  padding-top: .75rem;
  padding-bottom: .75rem;
  background-color: rgba(86, 61, 124, .15);
  border: 1px solid rgba(86, 61, 124, .2);
}

.bv-example-row-flex-cols .row {
  min-height: 10rem;
  background-color: rgba(255, 0, 0, .1);
}
</style>
