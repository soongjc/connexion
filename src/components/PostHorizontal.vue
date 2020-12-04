<template>
  <article class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="https://via.placeholder.com/150" class="card-img" />
      </div>
      <div class="col-md-8 position-relative">
        <div class="card-body">
          <h5 class="card-title mb-0">Card title</h5>
          <div class="d-flex justify-content-between mb-3">
            <Enlight /> <i role="button" class="far fa-bookmark"></i>
          </div>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content.
          </p>
          <div class="d-flex justify-content-between mb-3">
            <figure class="figure mb-0">
              <img src="https://via.placeholder.com/20" class="rounded-circle" />
              <a :href="'/john-4999'">
                <span class="text-muted small">John Smith</span>
              </a>
            </figure>
            <small class="text-muted ml-3">01 November 2020</small>
          </div>
          <div>
            <TagSmall v-for="(tag, n) in tags" :key="n" :label="tag" />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Enlight from '@/components/Enlight';
import TagSmall from '@/components/TagSmall';

export default {
  components: {
    Enlight,
    TagSmall,
  },
  // dummy data
  data() {
    return {
      tags: ['Medical', 'Statistics', 'Taxes'],
    };
  },
};
</script>
