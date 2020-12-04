<template>
  <div>
    <header>
      <div class="d-flex flex-column flex-md-row align-items-center px-3 py-2 px-md-4 bg-white border-bottom shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal">CONNEXION</h5>
        <a class="btn btn-outline-primary" :href="`/1`">Sign up</a>
      </div>
    </header>
    <section class="bg-light bg">
      <div>
        <div class="position-relative container-lg">
          <div class="d-md-flex flex-items-center">
            <div class="col-md-7 text-center text-md-left align-self-center text-white">
              <h1 class="mb-3">Built for investors</h1>
              <p class="mb-4">
                "Social Trust Attract People", <br />
                Connexion a social-first platform to <br />
                connect investors with one another.
              </p>
            </div>
            <div class="mx-auto col-sm-8 col-md-5 hide-sm bg-light rounded">
              <div class="rounded-1 text-gray bg-gray-light py-4 px-4 px-md-3 px-lg-4">
                <form class="text-gray-dark">
                  <dl class="form-group mt-0">
                    <dt class="input-label">
                      <label class="form-label">Username</label>
                    </dt>
                    <dd>
                      <input type="text" class="form-control input-block" autocomplete="off" value="matthew" />
                    </dd>
                  </dl>
                  <dl class="form-group">
                    <dt class="input-label">
                      <label class="form-label">Email</label>
                    </dt>
                    <dd>
                      <input
                        type="text"
                        class="form-control input-block"
                        autocomplete="off"
                        value="matthew@gmail.com"
                      />
                    </dd>
                  </dl>
                  <dl class="form-group">
                    <dt class="input-label">
                      <label class="form-label">Password</label>
                    </dt>
                    <dd>
                      <input type="password" class="form-control input-block" autocomplete="off" value="123123" />
                    </dd>
                  </dl>

                  <a :href="`/1`" class="btn btn-primary py-2 btn-block my-3">Sign up for SmartInvest</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-5 pt-md-5 pb-3 pb-md-5 position-relative" style="padding-top: 120px !important">
      <div class="container-xl px-lg-4">
        <div class="d-lg-flex mx-auto p-4 p-md-7 bg-white rounded-2 shadow position-relative">
          <div class="d-none d-md-block position-absolute investment-one p-3">
            <img src="./../assets/invest1.png" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-3 text-center text-lg-left my-3 align-self-center">
            <h2 class="h1-mktg lh-condensed mb-3 text-primary">Get started with Connexion</h2>
          </div>
          <div class="col-lg-3 text-center text-lg-left my-3 align-self-center">
            <h5 class="mb-3">Connexion connects people</h5>
            <p class="f3 text-gray mr-lg-6">Follow and see what other investors have in mind.</p>
          </div>
          <div class="col-lg-3 text-center text-lg-left my-3 align-self-center">
            <h5 class="mb-3">Build a trusted community</h5>
            <p class="f3 text-gray mr-lg-6">Endorsement-based approach and get recognised by the community</p>
          </div>
          <div class="col-lg-3 text-center text-lg-left my-3 align-self-center">
            <h5 class="mb-3">Make investments easy</h5>
            <p class="f3 text-gray mr-lg-6">View Broker Shoutouts on your newsfeed</p>
          </div>
        </div>
      </div>
    </section>
    <section class="container-xl py-5 py-md-6 py-lg-7">
      <div class="bg-info text-white rounded-2 box-shadow-large mx-md-2 position-relative promo-banner-bg">
        <div class="position-relative d-lg-flex flex-justify-between px-4 px-md-6 py-4 py-md-5 gutter-md-spacious z-2">
          <div class="col-lg-9 d-lg-flex">
            <div>
              <h2 class="mb-1 lh-condensed lh-md-default">Connexion is free to download</h2>
              <p class="mb-3 mb-lg-0 f4">
                Duis mattis hendrerit ex et facilisis. Nam iaculis mi nec neque lobortis faucibus. Curabitur id pretium
                dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
              </p>
            </div>
          </div>
          <p class="col-lg-3 mb-0 align-self-center">
            <a class="btn btn-primary py-3 btn-block">Try Connexion App Now</a>
          </p>
        </div>
      </div>
    </section>
    <section class="pt-5 bg-light">
      <div class="row">
        <div class="col-12 text-center">
          <h2>Some articles</h2>
          <p>Donec in mi at mi viverra vestibulum a id purus. Ut viverra euismod dui, ut fringilla ex elementum ut.</p>
        </div>
      </div>
    </section>
    <section class="py-5 bg-light">
      <div class="d-flex bg-light flex-wrap flex-items-stretch flex-justify-center container-xl mx-auto mb-3">
        <div class="card-deck">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This card
                has even longer content than the first to show that equal height action.
              </p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/layouts/Footer';

export default {
  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background: url('./../assets/background.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  > div {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}

.investment-one {
  max-width: 450px;
  transform: translateY(-85%);
  top: 0;
  right: 0;
}
</style>
