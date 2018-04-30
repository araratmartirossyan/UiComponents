<template>
  <input
    :type="type"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: {
      default: '',
      type: String
    },
    type: {
      default: '',
      type: String
    }
  }
}
</script>
