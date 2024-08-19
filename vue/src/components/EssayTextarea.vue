<template>
     <a-textarea  v-model:value="essayText" style="height: 200px;"></a-textarea>
     <p style="float: right; margin-top: 10px;">Words: {{ wordsCount }}</p>
</template>

<script setup>
defineProps({
    essayText: String,
    wordsCount: Number
})
</script>