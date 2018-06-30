<template>
  <div id="app">
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      foo: (magicNumber) => {
        if(magicNumber % 2 !== 0) {
          return 'bar'
        }
        return 'foo'
      }
    }
  }
</script>

<style lang="stylus">
</style>
