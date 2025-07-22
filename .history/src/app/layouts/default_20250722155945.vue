<template>
  <div>
    <div>Test layouts</div>
    <WidgetsHeader /> 
    <slot />   
    <WidgetsFooter /> 
  </div>
</template>

<script setup>
import WidgetsHeader from '~/widgets/header/Header.vue'

definePageMeta({
  layout: 'default'
})
</script>