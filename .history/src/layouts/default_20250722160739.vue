<template>
  <div>
    <div>Test layouts</div>
    <WidgetsHeader /> 
    <slot />   

  </div>
</template>

<script setup>
import WidgetsHeader from '~/widgets/header/Header.vue'
</script>