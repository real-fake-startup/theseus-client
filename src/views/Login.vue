<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="email" type="text" name="email" />
      <input v-model="password" type="password" name="password" />
      <br />
      <button>Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      email: "test@test.com",
      password: "test123@"
    };
  },
  methods: {
    ...mapActions("auth", ["authenticate"]),

    handleSubmit() {
      const { email, password, authenticate, $router } = this;

      authenticate({ strategy: "local", email, password }).then(() => {
        $router.push("/account");
      });
    }
  }
};
</script>
