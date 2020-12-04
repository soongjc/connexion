<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <div class="form-group">
        <textarea class="form-control" rows="5" placeholder="What's your investment tips?">
Southwest Airlines is in talks with Boeing to acquire more 737 Max aircraft, Bloomberg is reporting
        </textarea>
        <TagSmall v-for="(tag, n) in tags" :key="n" :label="tag.label" :active="tag.active" />
      </div>
      <div class="row">
        <div class="col-4">
          <button class="btn btn-sm btn-outline-primary btn-block"><i class="fas fa-camera"></i> Photo</button>
        </div>
        <div class="col-4">
          <button class="btn btn-sm btn-outline-primary btn-block"><i class="fas fa-video"></i> Video</button>
        </div>
        <div class="col-4">
          <a class="btn btn-sm btn-outline-primary btn-block" :href="`/article/create`">
            <i class="fas fa-newspaper"></i> Article
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TagSmall from '@/components/TagSmall';

export default {
  components: {
    TagSmall,
  },
  data() {
    return {
      tags: [
        { label: 'Medical', active: true },
        { label: 'Apparel and footwear', active: true },
        { label: 'Taxes', active: false },
        { label: 'Statistics', active: false },
        { label: 'Aviation', active: false },
      ],
    };
  },
};
</script>
