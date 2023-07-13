<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    let arrayStorage = JSON.parse(localStorage.getItem("arrayRequests"));
    console.log(arrayStorage);
  },
};
</script>
