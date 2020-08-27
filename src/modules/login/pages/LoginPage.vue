<template>
  <main class="login">
    <div class="login__main">
      <div class="login__main-wrapper">
        <div class="login__main-content">
          <div class="login__head">
            <div class="login__head-title text-h4 text-xl-h3">
              Welcome to manggis backoffice
            </div>
            <div class="login__head-subtitle text-subtitle1 text-xl-h5">
              Please login to continue
            </div>
          </div>
          <div class="login__body">
            <v-form
              class="base__form"
              ref="form"
              v-model="valid"
              :lazy-validation="lazy"
            >
              <v-text-field
                v-model="form.email"
                :rules="[emailRules.required, emailRules.format]"
                label="Email Address"
                required
              ></v-text-field>

              <v-text-field
                v-model="form.password"
                :append-icon="showPassword ? passwordEyeOpen : passwordEyeOff"
                :rules="[passwordRules.required, passwordRules.min]"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                counter
                @click:append="showPassword = !showPassword"
              ></v-text-field>

              <v-btn
                :disabled="!valid"
                class="base__button-submit mr-4"
                large
                block
                :loading="loading"
                @click="validate"
              >
                Sign In
              </v-btn>
            </v-form>
          </div>
        </div>
        <div class="login__footer">
          <div class="login__footer-content">
            <div class="login__footer-title text-xl-h5">
              Powered By
            </div>
            <img src="/img/member.id-logo.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="login__aside">
      <div class="login__aside-section">
        <div class="login__aside-caption text-h4 text-xl-h3 font-weight-bold">
          Manage your loyalty program & food ordering system with ease.
        </div>
        <div class="login__aside-image__top-right">
          <img src="/img/member-manage.svg" alt="" />
        </div>
        <div class="login__aside-image__bottom-left">
          <img src="/img/member-reward.svg" alt="" />
        </div>
        <div class="login__aside-image__bottom-right">
          <img src="/img/member-deliv.svg" alt="" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    passwordEyeOpen: {
      type: String,
      default: "$eyeOpen",
    },
    passwordEyeOff: {
      type: String,
      default: "$eyeOff",
    },
  },
  data: () => ({
    isForm: "ForgotPassword",
    valid: true,
    validSendEmail: true,
    showPassword: false,
    form: {
      email: "",
      password: "",
      sendEmail: "",
    },
    email: "",
    password: "",
    emailRules: {
      required: (v) => !!v || "E-mail is required",
      format: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    },
    passwordRules: {
      required: (value) => !!value || "Password is required",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    lazy: true,
  }),
  mounted() {
    this.isForm = "Login";
  },
  methods: {
    validate() {
      const valid = this.$refs.form.validate();
      if (valid) {
        this.handleSubmit();
      }
    },
    async handleSubmit() {
      // const form = {
      //   email: this.form.email,
      //   password: this.form.password,
      // };
      // const response = await this.$store.dispatch("postAuthentication", form);
      // if (response === true) {
      //   const notify = {
      //     isNotify: true,
      //     message: "Login Success",
      //     status: "SUCCESS",
      //   };

      //   this.$store.dispatch("queryNotify", notify);

      //   this.$router.push({ path: "/member" });
      // } else {
      //   const notify = {
      //     isNotify: true,
      //     message: "Incorrect Email / Password, Please Try Again ",
      //     status: "ERROR",
      //   };

      //   this.$store.dispatch("queryNotify", notify);
      // }
      this.$router.push({ path: "/admin" });
    },
    async sendPasswordReset() {
      const valid = this.$refs.formSendEmail.validate();
      if (valid) {
        const form = {
          email: this.form.sendEmail,
        };
        const response = await this.$store.dispatch("postForgotPassword", form);
        if (response === "success") {
          const notify = {
            isNotify: true,
            message: "Send Password Reset Success",
            status: "SUCCESS",
          };

          this.$store.dispatch("queryNotify", notify);
        } else {
          const notify = {
            isNotify: true,
            message: "Incorrect Email, Please Try Again ",
            status: "ERROR",
          };

          this.$store.dispatch("queryNotify", notify);
        }
      }
    },
  },
};
</script>

<style lang="scss"></style>
