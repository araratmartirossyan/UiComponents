<template>
  <button
    class="btn"
    @click="callParent"
  >
    {{title}}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    handleCall: Function,
    fontColor: String,
    title: {
      type: String,
      default: 'Fucj'
    }
  },
  methods: {
    callParent() {
      this.$emit('handleCall')
    }
  }
}
</script>

<style lang="stylus">
  .btn
    width 100px
    height 100px
    background #fff
    color var(--colorText)

  .white
    color white
</style>
