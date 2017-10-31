<template>
  <div>
    <b-container class="bv-example-row" fluid>
      <b-row>
          <b-col>1 of 3</b-col>
          <b-col>2 of 3</b-col>
          <b-col>3 of 3</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import { bContainer, bRow, bCol } from 'bootstrap-vue/lib/components'

export default {
  components: {
    bContainer,
    bRow,
    bCol
  }
}
</script>
