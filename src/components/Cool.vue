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

import bContainer from 'bootstrap-vue/es/components/layout/container'
import bRow from 'bootstrap-vue/es/components/layout/row'
import bCol from 'bootstrap-vue/es/components/layout/col'

export default {
  components: {
    bContainer,
    bRow,
    bCol
  }
}
</script>
