<template>
  <div>
    <TheHeader />
    <EnrollForm />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "../layout/TheHeader.vue";
import TheFooter from "../layout/TheFooter.vue";
import EnrollForm from "../sections/EnrollForm.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    EnrollForm,
  },
};
</script>
