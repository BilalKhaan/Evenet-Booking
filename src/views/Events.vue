<template>
  <div 
    v-if="!isSidebar"
    class="main">
    <div
      v-if="searchedEvents.length" 
      class="main--header">
      <span> Events </span>
      <span class="main--header count">({{searchedEvents.length}})</span>
    </div>
    <event-list 
      v-if="searchedEvents.length"
      :events="searchedEvents" />
    <div 
      v-else
      class="main--header flex justify-center">
      No results found!
    </div>  
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import EventList from '../components/EventList.vue' 
  export default {
    components: {
      EventList
    },
    mounted () {
      this.fetchEvents()
    },
    computed: {
      ...mapGetters({
        events: 'eventsList',
        search: 'query',
        isSidebar: 'sidebar'
      }),
      searchedEvents () {
        if(this.search) {
          let data = this.events.filter(e => e.title.toLowerCase().match(this.search.toLowerCase()))
          return data
        }
        return this.events
      }
    },
    methods: {
      ...mapActions({
        fetchEvents: 'fetchEvents'
      })
    },
  }
</script>
<style scoped>
.main {
  padding: 64px 130px 0px 130px;
  background: #FFFFFF;
}
.main--header {
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 40px;
  text-transform: uppercase;
  color: #212121;
}
.count {
  font-weight: 300;
  padding-left: 8px;
}
@media (max-width: 1280px) {
  .main {
    padding: 64px 32px 0px 32px;
  }
}
@media  (max-width: 760px) {
  .main {
    padding: 40px 24px 0px 24px;
  }
  .main--header {
    font-size: 24px;
    line-height: 27px;
  }
}

</style>