<template>
  <div class="card text-white bg-info shadow">
    <div class="card-body">
      <span class="badge badge-pill badge-light announcement-time position-absolute border mx-auto">{{ date }}</span>
      <div class="d-flex justify-content-start align-items-center">
        <h2 class="mb-0 mr-3 text-warning"><i class="fas fa-bullhorn"></i></h2>
        <div class="mb-0 text-announcement">
          <figure class="figure mb-0">
            <img :src="user.user_image" class="rounded-circle" />
            <a :href="`/${user.username}`">
              <span class="text-white">{{ user.name }}</span>
            </a>
          </figure>
          just bought into
          <span class="text-white">{{ sharename }}</span> at
          <a class="text-white" :href="`/broker/${encodeURIComponent(brokername)}/registration`">{{ brokername }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true,
    },
    user: {
      type: Object,
      required: function () {
        return {
          username: '',
          name: '',
          user_image: '',
        };
      },
    },
    brokername: {
      type: String,
      required: true,
    },
    sharename: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          label: 'Electrical appliances',
          url: 'electrical-appliances',
        },
        {
          id: 2,
          label: 'Aviation',
          url: 'aviation',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.text-announcement {
  color: #7fffe8;
}
.announcement-time {
  top: -12px;
  left: 0;
  right: 0;
  width: fit-content;
}
.figure {
  img {
    width: 25px;
  }
}
</style>
