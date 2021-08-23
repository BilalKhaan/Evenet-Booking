<template>
  <div 
    v-if="!isSidebar"
    class="search"
  >
    <input 
      class="search--input"
      type="text"
      placeholder="Search by event Title ..."
      v-model="searchText" />
      <img class="search--icon" src="../assets/search-icon.png" alt="search-icon" />
  </div>    
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      searchText: ''
    }
  },
  computed: {
    ...mapGetters({
      isSidebar: 'sidebar'
    })
  },
  methods: {
    ...mapMutations({
      search: 'searchQuery'
    })
  },
  watch: {
    searchText (data) {
      this.search(data)
    }
  }
}
</script>
<style scoped>
.search {
  position: relative;
  margin-left: 130px;
  padding-top: 24px;  
  padding-bottom: 24px;
  /* make py-6  for this*/
}
.search--input {
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px;
  width: 60%;
  border: 1px solid #D5D5D5
}
.search--input::placeholder {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: #757575;
  text-transform: capitalize;
}
.search--icon {
  position: absolute;
  top: 42%;
  right: 42%;
}
@media (max-width: 1280px) {
  .search {
    margin-left: 0px;
    padding: 24px 32px !important; 
  }
  .search--input {
    width: 100% !important;
  }
  .search--icon {
    right: 6%;
  }
}
@media (max-width: 760px) {
  .search {
    margin-left: 0px;
    padding: 24px 16px !important; 
  }
  .search--icon {
    right: 9%;
  }
}
</style>