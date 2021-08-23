<template>
  <div 
    v-if="isSidebar"
    class="sidebar">
    <div
      v-for="(item, index) in navList"
      class="nav--item"
      :class="{'active': item.id === activeNav}"
      :key="index">
      <span
        @click="goTo(item.id)">
        {{item.name }}
      </span>  
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  props: {
    navList: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      activeNav: 3
    }
  },
  computed: {
    ...mapGetters({
      isSidebar: 'sidebar'
    })
  },
  methods: {
    ...mapMutations({
      setSidebar: 'setSidebar'
    }),
    goTo (id) {
      this.activeNav = id
      this.setSidebar(!this.isSidebar)
    }
  }
}
</script>
<style scoped>
.sidebar {
  height: calc(100vh - 69px);
  background-color: #5C524D;
  padding: 64px 32px 0 32px;
}
.nav--item { 
  margin-left: 0;
  margin-bottom: 40px;
}
.active {
  border-bottom: 2px solid #86EAAE;
}
</style>