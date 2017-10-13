export default Vue.component('vue-robust-pagination', {
  props: {
    pages: {
      type: Number,
      required: true
    },
    navigation: {
      type: Boolean,
    },
    url: {
      type: String
    },
    initialactive: {
      type: Number
    }
  },
  template: `
    <div class="vue-robust-pagination">
      <ul class="vue-robust-pagination__list">
        <li v-if="navigation" class="vue-robust-pagination__item"
          @click="goPrev()">
          <a v-if="url" :href="prevUrl"  class="vue-robust-pagination__link">prev</a>
          <a v-else class="vue-robust-pagination__link">prev</a>
        </li>
        <li class="vue-robust-pagination__item"
          :class="{'vue-robust-pagination__item_active': index === activePage}"
          @click="setActivePage(index)"
          v-for="(page, index) in pagination">
          <a  v-if="url" :href="(url + (index + 1))" class="vue-robust-pagination__link" v-text="index + 1"></a>
          <a v-else class="vue-robust-pagination__link" v-text="index + 1"></a>
        </li>
        <li v-if="navigation" class="vue-robust-pagination__item"
          @click="goNext()">
          <a v-if="url" :href="nextUrl" class="vue-robust-pagination__link">next</a>
          <a v-else class="vue-robust-pagination__link">next</a>
        </li>
      </ul>
    </div>
  `,
  data() {
    return {
      activePage: 0
    }
  },
  computed: {
    pagination() {
      return new Array(this.pages);
    },
    prevUrl() {
      let newPage = Math.max(0, this.activePage - 1);
      return this.url + (newPage + 1);
    },
    nextUrl() {
      let newPage = Math.min(this.pages - 1, this.activePage + 1);
      return this.url + (newPage + 1);
    }
  },
  methods:{
    setActivePage(index) {
      this.activePage = index;
      this.$emit('onchange', this.activePage + 1);
    },
    goPrev() {
      let newPage = Math.max(0, this.activePage - 1);
      this.setActivePage(newPage);
    },
    goNext() {
      let newPage = Math.min(this.pages - 1, this.activePage + 1);
      this.setActivePage(newPage);
    }
  },
  created() {
    if (this.initialactive) {
      this.activePage = this.initialactive - 1;
    }
  },
  watch: {
    pages() {
      console.log(this.pages);
      Vue.nextTick(() => {
        // let paginationList = this.$el.querySelector('.vue-robust-pagination__list');
        // let paginationItems = this.$el.querySelectorAll('.vue-robust-pagination__item');
        // let paginationItemWidth = paginationItems[0].clientWidth;
        // let vueRobustPaginationWidth = this.$el.clientWidth;
        // let vueRobustPaginationCommonWidth = paginationItemWidth * paginationItems.length;
        // let hiddenItemsCount = ~~((vueRobustPaginationCommonWidth - vueRobustPaginationWidth) / paginationItemWidth) + 2;
        // let visiblePaginationMiddle = ~~(vueRobustPaginationWidth / paginationItemWidth / 2);
        // let itemsGap = document.createElement('li');
        // itemsGap.classList.add('vue-robust-pagination__item');
        // itemsGap.innerHTML = `<a class="vue-robust-pagination__link">...</a>`;
        //
        // paginationList.replaceChild(itemsGap, paginationItems[visiblePaginationMiddle]);
        //
        // for (let i=0; i<hiddenItemsCount; i++) {
        //   paginationItems[visiblePaginationMiddle++].style.display = 'none';
        //   console.log(paginationItems[visiblePaginationMiddle]);
        // }
        // console.log('vueRobustPaginationWidth: ', vueRobustPaginationWidth);
        // console.log('vueRobustPaginationCommonWidth: ', vueRobustPaginationCommonWidth);
        // console.log('hiddenItemsCount: ', hiddenItemsCount);
        // console.log('visiblePaginationMiddle: ', visiblePaginationMiddle);

      });
    }
  }
});
