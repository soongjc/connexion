<template>
  <!-- Modal -->
  <div id="commentModal" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <p class="modal-title mb font-weight-bold">Comments</p>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <input
              ref="post"
              class="form-control"
              placeholder="Write a comment"
              @keyup.enter="postComment($event.target.value)"
            />
          </div>

          <div v-for="(comment, n) in commentsList" :key="n" class="mb-3">
            <div class="media">
              <img :src="comment.user_image" class="align-self-center mr-3 rounded-circle" />
              <div class="media-body mb-0 bg-light py-2 px-3 rounded">
                <label class="font-weight-bold mb-0">{{ comment.name }}</label>
                <p class="mb-2">{{ comment.comment }}</p>
                <div class="d-flex justify-content-between">
                  <small class="text-muted">{{ formatDate(comment.createdAt) }}</small>
                  <small><Enlight :count="comment.likes" /></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Enlight from '@/components/Enlight';
export default {
  components: {
    Enlight,
  },
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  watch: {
    comments: {
      deep: true,
      handler: function (val) {
        this.commentsList = val;
      },
    },
  },
  data() {
    return {
      commentsList: [],
    };
  },
  methods: {
    postComment(comment) {
      if (comment == '') return;

      const { image: user_image, name } = this.$root.$data.personal;
      this.commentsList.unshift({
        name,
        comment,
        user_image,
        createdAt: moment().format('YYYY-MM-DDTHH:mm:ss.SSS'),
      });
      this.clearPostInput();
    },
    clearPostInput() {
      this.$refs['post'].value = '';
    },
    formatDate(date) {
      return moment(date, 'YYYY-MM-DDTHH:mm:ss.SSS').format('YYYY-MMM-DD hh:mm A');
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 35px;
}
</style>
