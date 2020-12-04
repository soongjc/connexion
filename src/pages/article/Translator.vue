<template>
  <general-layout>
    <template #content>
      <section class="container-fluid py-5">
        <div class="row justify-content-center">
          <div class="col-md-6 border-right">
            <div class="row">
              <div v-if="!hasArticleId" class="col-md-1">
                <ul class="list-group text-center sticky">
                  <li class="list-group-item" role="button"><i class="fas fa-bold"></i></li>
                  <li class="list-group-item" role="button"><i class="fas fa-italic"></i></li>
                  <li class="list-group-item" role="button"><i class="fas fa-underline"></i></li>
                  <li class="list-group-item" role="button"><i class="fas fa-list-ul"></i></li>
                  <li class="list-group-item" role="button"><i class="fas fa-list-ol"></i></li>
                </ul>
              </div>
              <div v-else class="col-md-4">
                <div class="sticky user-profile">
                  <UserProfile
                    :image="profile.image"
                    :username="profile.username"
                    :name="profile.name"
                    :followers="profile.followers"
                    :information="profile.information"
                    :skills="profile.skills"
                    :is-personal-profile="true"
                  />
                </div>
              </div>
              <div class="col-md-8">
                <h4 class="text-center">{{ article.title }}.</h4>
                <img :src="article.image" class="d-block mx-auto img-fluid my-3" />
                <p>{{ article.content }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-1">
                <ul class="list-group text-center sticky">
                  <li class="list-group-item" role="button"><i class="fas fa-bold"></i></li>
                  <li class="list-group-item" role="button"><i class="fas fa-italic"></i></li>
                  <li class="list-group-item" role="button"><i class="fas fa-underline"></i></li>
                  <li class="list-group-item" role="button"><i class="fas fa-list-ul"></i></li>
                  <li class="list-group-item" role="button"><i class="fas fa-list-ol"></i></li>
                </ul>
              </div>
              <div class="col-md-8">
                <h4 class="text-center">
                  Syarikat Penerbangan yang Menerima Moratorium telah Membiayai Pembayaran Bank
                </h4>
                <img :src="article.image" class="d-block mx-auto img-fluid my-3" />
                <p>
                  Lebih daripada 90% syarikat penerbangan utama dan pelanggan pinjaman rumah yang mengambil bahagian
                  dalam program moratorium automatik enam bulan sebelumnya telah melunaskan pembayaran semula, kata bank
                  itu. Dalam satu kenyataan, seorang pengarah bank mengatakan bahawa ia terus memberi tumpuan untuk
                  membantu minoriti pelanggan yang masih terjejas. Sementara itu, bank itu berkata mulai 23 November dan
                  seterusnya, pelanggan B40 dan M40 dan mikro mungkin memohon secara dalam talian untuk rancangan
                  bantuan pembayaran disasarkan yang disempurnakan yang diumumkan awal bulan ini oleh Menteri Kewangan.
                  Program bantuan pembayaran balik yang disasarkan berlangsung dari 1 Disember 2020 hingga 30 Jun 2021.
                  Hanya pinjaman yang telah diluluskan sebelum 1 Okt 2020 dan tidak mempunyai tunggakan melebihi 90 hari
                  pada tarikh permintaan peminjam layak untuk pembayaran sasaran yang disempurnakan pertolongan.
                  Peningkatan pada rancangan bantuan melibatkan pelanggan B40 yang merupakan penerima Bantuan Sara Hidup
                  (BSH) atau Bantuan Prihatin Rakyat (BPR), pelanggan M40 pada Bantuan Prihatin Nasional (BPN), dan
                  syarikat mikro dengan pinjaman atau pembiayaan di mana jumlah kemudahan asal meningkat hingga
                  RM150,000. Dikatakan di bawah program bantuan pembayaran balik yang disasarkan, pelanggan B40 yang
                  layak boleh memilih penangguhan ansuran tiga bulan atau pengurangan ansuran enam bulan sebanyak 50%,
                  dengan membuat permohonan secara dalam talian tanpa perlu memberikan dokumentasi apa pun. Walaupun
                  pelanggan kumpulan M40 yang ingin memohon pengurangan ansuran selama enam bulan sebanyak 50% juga
                  tidak perlu memberikan dokumen, pernyataan diri akan diperlukan.
                </p>
                <div class="mt-5 text-center">
                  <a class="btn btn-primary px-5 mx-auto" :href="'/saravanan-0234'">Post Article</a>
                </div>
              </div>
            </div>
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
import UserProfile from '@/components/UserProfile';
import CommentUtilityBar from '@/components/CommentUtilityBar';
export default {
  components: {
    GeneralLayout,
    Footer,
    UserProfile,
    CommentUtilityBar,
  },
  data() {
    return {
      profile: {},
      article: {},
    };
  },
  computed: {
    articleId: function () {
      return _.get(this.$route.params, 'articleId', null);
    },
    hasArticleId: function () {
      const articleId = _.get(this.$route.params, 'articleId', null);
      return !_.isNull(articleId);
    },
  },
  created() {
    this.profile = this.$root.$data.personal;
  },
  mounted() {
    this.getPost(this.articleId);
  },
  methods: {
    getPost(articleId) {
      return this.$http.get(`${this.$root.$data.url}/posts?post_id=${articleId}`).then((res) => {
        this.article = res.data[0];
      });
    },
  },
};
</script>

<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
}
.sticky.user-profile {
  top: 160px;
}
</style>
