import { createStore } from "vuex";
import axios from "axios";
import EventMaper from './EventMaper'
export default createStore({
  state: {
    query: '',
    events: [],
    sidebar: false
  },


  mutations: {
    searchQuery (state, data) {
      state.query = data
    },
    saveEvents (state, data) {
      state.events = data
    },
    setSidebar (state, data) {
      state.sidebar = data
    }    
  },


  actions: {
    async fetchEvents (context) {
      console.log(process, 'mode')
      const baseUrl = process.env.NODE_ENV == 'production' ? '' : 'http://localhost'
      const port = process.env.NODE_ENV == 'production' ? 5000 : 8080
      await axios.get(`${baseUrl}:${port}/events.json`).then(response => { 
        let data = EventMaper.mapEvents(response.data)
        context.commit('saveEvents', data)
      })
    }
  },


  getters: {
    eventsList(state) {
      return state.events
    },
    query (state) {
      return state.query
    },
    sidebar (state) {
      return state.sidebar
    }
  }
});