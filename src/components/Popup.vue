<template>
  <div
    @click.stop="$emit('togglePopup')"
    class="alert alert-success alert-dismissible fade show"
    role="alert"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'popupItem'
}
</script>
