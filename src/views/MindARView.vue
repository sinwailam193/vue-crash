<script setup>
import { ref, onMounted } from "vue";
const ele = ref(null);

onMounted(() => {
    ele.value = document.getElementById("asda");
    console.log(ele.value);
});
console.log(ele.value);
</script>

<template>
    <div id="asda"></div>
</template>
