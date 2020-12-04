<template>
  <general-layout>
    <template #content>
      <section class="container-xl py-5">
        <div class="row justify-content-center">
          <div class="col-md-6 bg-white p-5 shadow">
            <img :src="getLogo(brokername)" class="logo img-fluid d-block mx-auto" alt="" />
            <p class="text-center mb-4 text-capitalize">
              <span class="h4">{{ brokername }}</span>
              <br />
              account opening
            </p>
            <form>
              <div class="form-group mb-4">
                <label for="exampleInputEmail1">Name (As per IC)</label>
                <input class="form-control" value="Matthew Yong" />
              </div>
              <div class="form-group mb-4">
                <label for="exampleInputEmail1">IC Number</label>
                <input class="form-control" value="900830146833" />
              </div>
              <div class="form-group mb-4">
                <label for="exampleInputEmail1">Phone Number</label>
                <input class="form-control" value="01122120312" />
              </div>
              <div class="form-group mb-4">
                <label>Email address</label>
                <input type="email" class="form-control" value="matthew@gmail.com" />
              </div>
              <div class="form-group mb-4">
                <label>Front IC image (optional)</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                  </div>
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label class="custom-file-label" for="inputGroupFile01">ic_front.png</label>
                  </div>
                </div>
              </div>

              <img src="./../../assets/ic_front.jpg" class="img-fluid d-block mx-auto" />

              <div class="text-center">
                <small class="form-text text-muted">
                  Your information will be securely stored and sent to your desired broker.
                </small>
                <button type="submit" class="btn btn-primary mt-3">Register Now</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </template>
  </general-layout>
</template>

<script>
import GeneralLayout from '@/layouts/General';
import Footer from '@/layouts/Footer';
import Logos from '@/pages/forms/logo';

export default {
  components: {
    GeneralLayout,
    Footer,
  },
  computed: {
    brokername: function () {
      return this.$route.params.broker;
    },
  },
  data() {
    return {
      logos: Logos,
    };
  },
  methods: {
    getLogo(name) {
      const found = _.find(this.logos, { name });
      return require(`@/assets/logo/${found.logo}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  max-width: 100px;
}
</style>
