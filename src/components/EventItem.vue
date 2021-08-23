<template>
  <img 
    class="event--img" 
    :src="require(`../assets/events/event-${event.id}.png`)" 
    alt="event-icon"/>
  <div class="event--info">
    <div class="event--item title">
      <span>
        {{ event.title }}
      </span>
    </div>
    <div class="event--status">
      <span class="event--item"> {{ event.date }} </span>
      <span class="event--item">Tickets Available: {{ event.tickets }}</span>
    </div>
    <button 
      class="button"
      :class="event.tickets != 'N/A'? 'enable' : 'disable'"
      @click="goTo(event)">
      <img 
        class="button--icon"
        :src="require(`../assets/events/${event.buttonIcon}.png`)"
        alt="button icon" />
      <span class="button--text"> 
        {{ event.buttonText }}
      </span>
    </button>
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
    return 
    {

    }
  },
  methods: {
    goTo (event) {
      if(event.tickets != 'N/A') {
        this.$router.push(`/billing/${event.id}`)
      }
    }
  }
}
</script>
<style scoped>
.event--img {
  width: 100%;
  object-fit: cover;
}
.event--info {
  padding: 24px;
}
.title {
  font-weight: bold;
  font-size: 24px;
  line-height: 27px;
  height: 54px;
}
.event--status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 32px;
}
.button {
  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  width: 100%;
  height: fit-content;
  padding: 16px;
  cursor: pointer;
}
.button--icon {
  margin-right: 10px;
}
.button--text {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
}
.disable {
  color: #757575;
  border: 2px solid #D5D5D5;
}
.enable {
  border: 2px solid #FC732F;
  color: #FC732F;
}
</style>