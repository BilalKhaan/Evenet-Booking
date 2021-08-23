<template>
  <div class="nav">
    <div class="desktop-tab nav--logo">
      <img src= "../assets/Vector.png" alt="logo" />
      <img class="ml-4" src="../assets/LOGOIPSUM.png" alt="ipsum" />
    </div>
    <div class="mobile nav--logo">
      <img 
        src= "../assets/mobile/mobile-logo.png"
        alt="logo"
        width="34"
        height="32"/>
      <img 
        class="ml-4"
        src="../assets/mobile/mobile-ipsum.png"
        alt="ipsum"
        width="149"
        height="19" />
    </div>
    <div class="nav--list">
      <div 
        v-for="(item, index) in navList"
        :key="index">
      <span 
        class="nav--item"
        :class="{'active': item.id === activeNav}"
        @click="activeNav=item.id"> {{ item.name }} </span>
      </div>
    </div>
    <div class="nav--icon">
      <img
        :src="navIcon"
        @click="setSidebar(!isSidebar)"
        alt="nav-icon" 
        width="24"
        height="21"
      />
    </div>
  </div>    
  <!-- <div 
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
  </div> -->
  <sidebar 
    :navList="navList"/>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import sidebar from './sidebar.vue'
export default {
  components: { sidebar },
  data () {
    return {
      navList: [{
        id: 1,
        name: 'Dasboard'
      }, {
        id: 2,
        name: 'Help'
      }, {
        id: 3,
        name: 'Events'
      }, {
        id: 4,
        name: 'Logout'
      }],
      activeNav: 3
    }
  },
  computed: {
    navIcon() {
      return this.isSidebar ? require('../assets//mobile/cross.png') : require('../assets/burger.png')
    },
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
.nav {
  background-color: #5C524D;
  display: flex;
  align-items: center;
  padding: 27px 130px;
  justify-content: space-between;
}
.nav--logo {
  display: flex;
  align-items: center;
}
.nav--list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav--item {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  color:  rgba(255, 255, 255, 0.75);;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  margin-left: 40px;
  cursor: pointer;
}
.nav--icon {
  display: none;
}
.active {
  border-bottom: 10px solid #86EAAE;
  padding-bottom: 32px;
  color: white;
}
.ml-4 {
  margin-left: 16px;
}
.desktop-tab {
  display: block;
}
.mobile {
  display: none;
}
@media (max-width: 1280px) {
  .nav {
    padding: 16px 32px; 
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  }
  .nav--list {
    display: none;
  }
  .nav--icon {
    display: block;
  }
}
@media  (max-width: 760px) {
  .nav {
    padding: 16px 24px; 
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  }
  .desktop-tab {
    display: none;
  }
  .mobile {
    display: flex;
  }
}
</style> 