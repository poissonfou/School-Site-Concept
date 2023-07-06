<template>
  <div>
    <h3>Contact and Follow Us</h3>
    <h2>(56)153486245</h2>
    <div class="social-links">
      <base-social>
        <a href="#"><i class="bi bi-envelope-at"></i></a>
        <p class="email">Email</p>
      </base-social>
      <base-social>
        <a href="#"><i class="bi bi-instagram"></i></a>
        <p>Instagram</p>
      </base-social>
      <base-social>
        <a href="#"><i class="bi bi-facebook"></i></a>
        <p class="facebook">Facebook</p>
      </base-social>
      <base-social>
        <a href="#"><i class="bi bi-twitter"></i></a>
        <p class="twitter">Twitter</p>
      </base-social>
      <base-social>
        <a href="#"><i class="bi bi-tiktok"></i></a>
        <p class="tiktok">Tik Tok</p>
      </base-social>
    </div>
  </div>
</template>

<script>
import BaseSocial from "../ui/BaseSocial.vue";

export default {
  components: BaseSocial,
};
</script>

<style scoped>
h3 {
  color: gray;
  margin-left: 2.5rem;
  margin-bottom: 0;
  font-size: 1.5rem;
}

h2 {
  color: gray;
  margin-left: 4rem;
  margin-top: 0.5rem;
}

div {
  width: 21rem;
  margin: 0;
}

i {
  font-size: 5rem;
  margin-bottom: 0;
  margin-left: 7rem;
}

p {
  font-size: 1.8rem;
  margin-top: 0;
  margin-left: 5.5rem;
}

a {
  color: black;
}

.social-links {
  margin-bottom: 2rem;
}

.email {
  margin-left: 7.4rem;
}

.facebook {
  margin-left: 5.8rem;
}

.twitter {
  margin-left: 6.6rem;
}

.tiktok {
  margin-left: 6.5rem;
}

@media (min-width: 768px) {
  .social-links {
    display: flex;
    flex-direction: row;
  }

  i {
    font-size: 4rem;
    margin-bottom: 0;
    margin-left: 4rem;
  }

  .bi-instagram {
    padding-left: 2.3rem;
  }

  .bi-facebook {
    padding-left: 2.9rem;
  }

  .bi-twitter {
    padding-left: 2.8rem;
  }

  p {
    font-size: 1.5rem;
    margin-top: 0;
    margin-left: 5rem;
  }

  .email {
    margin-left: 4rem;
  }

  .facebook {
    margin-left: 5.8rem;
  }

  .twitter {
    margin-left: 6.6rem;
  }

  .tiktok {
    margin-left: 3.5rem;
    width: 5rem;
  }

  base-social {
    width: 10rem;
  }

  h3 {
    margin-left: 13rem;
    font-size: 2.5rem;
    width: 30rem;
  }

  h2 {
    margin-left: 18rem;
    margin-top: 0.5rem;
    font-size: 1.8rem;
  }
}

@media (min-width: 992px) {
  h3 {
    margin-left: 16rem;
    font-size: 3rem;
  }

  h2 {
    margin-left: 22.5rem;
    font-size: 2.3rem;
  }

  i {
    font-size: 5.2rem;
  }

  p {
    margin-left: 5.7rem;
  }

  .social-links {
    margin-top: 4.5rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
  }

  .email {
    margin-left: 4.7rem;
  }

  .facebook {
    margin-left: 6.5rem;
  }

  .twitter {
    margin-left: 6.7rem;
  }

  .tiktok {
    margin-left: 6.5 rem;
  }

  base-social {
    width: 12rem;
  }
}
</style>
