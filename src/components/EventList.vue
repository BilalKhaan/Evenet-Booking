<template>
  <div class="events--list">
    <div 
      v-for="(event, index) in events"
      :key="index"
      class="desktop event"
      >
        <event-item 
          :event="event" />
    </div>
    <div
      v-for="(event, index) in events.slice(0, 4)"
      :key="index"
      class="tab event">
      <tab-event-item 
        :event="event" />
    </div>
  </div>
</template>
<script>
import EventItem from './EventItem.vue'
import TabEventItem from './tab/TabEventItem.vue'
export default {
  components: {
    EventItem,
    TabEventItem
  },
  props: {
    events: {
      type: Array,
      default: []
    }
  }
}
</script>
<style scoped>
.events--list {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-between;
}
.desktop {
  display: block;
}
.tab {
  display: none;
}
.event {
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  margin-bottom: 24px;
}
@media (max-width: 1280px) { 
  .events--list {
    display: block;
  }
  .desktop {
    display: none;
  }
  .event {
    box-sizing: border-box;
    padding: 24px;
  }
  .tab {
    display: block;
  }
}
</style>
