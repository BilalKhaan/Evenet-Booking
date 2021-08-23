<template>
  <div>
    <navbar />
    <search />
  </div>  
</template>
<script>
import Navbar from './Navbar.vue'
import Search from './Search.vue'
export default {
  components: { 
    Navbar,
    Search
  },
}
</script>