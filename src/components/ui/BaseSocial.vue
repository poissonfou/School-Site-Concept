<template>
  <div>
    <img :src="require(`../../assets/${icon}`)" alt="" />
  </div>
</template>

<script>
export default {
  props: ["icon"],
};
</script>

<style scoped>
img {
  width: 2rem;
  padding: 0.2em 1em;
}

img:hover {
  cursor: pointer;
}
</style>
