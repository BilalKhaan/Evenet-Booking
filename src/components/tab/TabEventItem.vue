<template>
  <div class="event--container flex  align-start">
    <img 
      class="event--img" 
      :src="require(`../../assets/events/tab/tab-event-${event.id}.png`)"
      alt="event img" />
    <div class="event--info">
      <div class="event--item title">
        <span>
          {{ event.title }}
        </span>
      </div>
      <div class="mt-3">
        <span class="event--item"> {{ event.date }} </span>
      </div>
      <div class="mt-2">
        <span class="event--item">Tickets Available: {{ event.tickets }}</span>
      </div>
    </div>
    <div class="event--icon">
      <img 
        src="../../assets/events/book.png"
        alt="event-icon"
        width="14"
        height="16" />
    </div>  
  </div>
</template>
<script>
export default {
  props: {
    event: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>
.event--container {
  position: relative;
}
.event--info {
  width: 80%;
  margin-left: 24px;
  margin-right: 24px;
}
.event--icon {
  position: absolute;
  top: 45%;
  right: 0
}
.title {
  font-weight: bold;
  font-size: 24px;
  line-height: 27px;
}

@media  (max-width: 760px) {
  .event--img {
    display: none;
  }
  .event--info {
    width: 80%;
    margin-left: 0 !important;
    margin-right: 0;
  }
  .title {
    font-weight: bold;
    font-size: 18px !important;
    line-height: 20px !important;
  } 
}
</style>