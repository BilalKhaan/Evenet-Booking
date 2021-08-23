<template>
  <div class="billing">
    <div class="billing--container">
      <div class="billing--theme">
        <span class="title"> {{ event.title}} </span>
      </div>
      <div class="billing--theme mt-4 mb-2">
        <span class="date-ticket"> {{ event.date }} </span>
      </div>
      <div class="billing--theme">
        <span class="date-ticket">Tickets Available: <span class="ticket--count"> {{ event.tickets }} </span></span>
      </div>
      <div class="billing--divider mt-4"></div>
      <div class="form mt-8">
        <!-- Name -->
        <div class="billing--theme label">
          <label> Name </label> <span style="color:red">*</span>
            <input 
              type="text"
              required
              class="billing--input mt-2"
              v-model="form.name"
              placeholder="First Name Last Name" />
            <i v-if="nameError"><span style="color:red"> Invalid Name </span></i>  
        </div>
        <!-- Email -->
        <div class="billing--theme label mt-8">
          <label> Email </label> <span style="color:red">*</span>
          <input 
            type="email"
            required
            class="billing--input mt-2"
            v-model="form.email"
            placeholder="mbilalanjummba@gmail.com" />
          <i v-if="emailError"><span style="color:red"> Invalid Email </span></i>  
        </div>
        <!-- phone -->
        <div class="billing--theme label mt-8">
          <label> Phone </label>
          <input 
            type="number"
            class="billing--input mt-2"
            v-model="form.phone"
            placeholder="+923075376602" />
          <i v-if="phoneError"><span style="color:red"> Invalid Phone Number </span></i>  
        </div>
        <div class="billing--theme label mt-8">
          <label> Attende </label>
        </div>
        <div 
          class="flex justify-between align-center billing--theme label mt-3"
          v-for="(attende, index) in attendes"
          :key="index">
          <label>{{ index + 1 }} </label> <span style="color:red">*</span>
          <input 
            type="text"
            class="billing--input attende mt-2"
            v-model="attende.name"
            placeholder="First Name Last Name" />
        </div>
        <div class="flex justify-end align-center my-3">
          <img src="../assets/add.png" alt="add" class="mr-2 cp" @click="addAttende" />
          <span class="billing--theme add cp" @click="addAttende">Add Attende </span>
        </div>
        <div class="billing--divider mt-8"></div>
        <div class="flex justify-between align-center mt-8">
          <div :disabled="disabeled || nameError || emailError" class="cp button button--primary" @click="book">
            Book Tickets
          </div>
          <div class="cp button button--cancel" @click="cancel">
            Cancel
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      form: {},
      disabeled: false,
      attendes: [{
        name: ''
      }]
    }
  },
  created () {
    this.fetchEvents()
  },
  computed: {
    ...mapGetters({
      events: 'eventsList'
    }),

    event () {
      return this.events.find(e => e.id == this.$route.params.id)
    },
    nameError () {
      if(this.form.name) {
        return /[0-9]/.test(this.form.name)
      }
      return false
    },
    emailError () {
      if(this.form.email) {
        return !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email))
      }
      return false
    },
    phoneError () {
      if(this.form.phone) {
        return this.form.phone.length > 13
      }
      return false
    }
  },
  methods: {
    ...mapActions({
      fetchEvents: 'fetchEvents'
    }),
    addAttende () {
      if(this.attendes.length <= this.event.tickets) {
        if(this.attendes[this.attendes.length-1].name) {
          this.attendes.push({
            name: ''
          })
        } else {
          this.disabeled = true
          alert('please fill last attende Name')
        }
      } else {
        this.disabeled = true
        alert('No Enough Tickets')
      }
    },
    book () {
      console.log(this.attendes)
      if(!this.nameError && !this.email && this.attendes.map(a => a.name == '').includes(false)) {
        alert('your tickets have been booked')
        this.$router.push('/')
      } else {
        alert('Fill red * fields')
      }
    },
    cancel () {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.billing {
  display: flex;
  justify-content: center;
}
.billing--container {
  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-top: 56px;
  margin-bottom: 56px;
  padding: 32px;
  width: 510px;
}
.billing--theme {
  font-style: normal;
  text-align: center;
  text-transform: capitalize;
  color: #212121;
}
.title {
  font-weight: bold;
  font-size: 24px;
  line-height: 27px;
}
.date-ticket {
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
}
.ticket--count {
  color: #FC732F;
}
.billing--divider {
  width: 100%;
  border: 1px solid #D5D5D5;
}
.label {
  text-align: left;
}
.billing--input {
  border: 1px solid #D5D5D5;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px;
  width: 100%;
}
.billing--input::placeholder {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  text-transform: capitalize;
  color: #999999;
}
.attende {
  width: 90%;
}
.add {
  font-weight: bold;
  color: #FC732F;
}
.button {
  border-radius: 4px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  text-transform: capitalize;
  padding: 16px 71px;
}
.button--primary {
  background: #FC732F;
  border: 2px solid #FC732F;
  color: #FFFFFF; 
}
.button--cancel {
  background: #FFFFFF;
  border: 2px solid #FC732F;
  color: #FC732F; 
}
</style>