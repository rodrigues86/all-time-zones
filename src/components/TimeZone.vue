<template>
  <div class="greetings">
    <h1 class="gray">{{ msg }}</h1>
    <h3>
      <v-card >
        <v-list>
          <v-list-subheader>TIMEZONES</v-list-subheader>

          <v-list-item
            v-for="(item, i) in updatedAllTimes"
            :key="i"
            :value="item"
            active-color="primary"
            rounded="shaped"
          >

            <v-list-item-title>{{item.timeZone}} - {{item.strTime}}</v-list-item-title>
             <v-divider></v-divider>
          </v-list-item>
         
        </v-list>
      </v-card>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'TimeZone',
  data() {
    return {
      msg: 'TimeZone around the World!',
      allTimes: []
    }
  },
  mounted() {
    setInterval(() => {
      this.getAllTimes()
    }, 1000)
  },
  methods: {
    getAllTimes() {
      const arrayTimeZones = Intl.supportedValuesOf('timeZone')
      const date = new Date()
      this.allTimes = []

      arrayTimeZones.forEach((timeZone) => {
        let strTime = date.toLocaleString('en-US', { timeZone: `${timeZone}` })
        const objTimeZone = { timeZone, strTime }
        this.allTimes.push(objTimeZone)
      })
    }
  },
  computed: {
    updatedAllTimes() {
      return this.allTimes
    }
  }
}
</script>
