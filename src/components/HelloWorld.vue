<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      <div v-for="obj in allTimes" :key="obj">
        {{obj.strTime}}
      </div>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'TimeZone around the World!',
      allTimes: [],
    }
  },
  mounted() {
    setInterval(() => {
      console.log('smoke');
      this.getAllTimes()
    }, 1000);
  },
  methods: {
    getAllTimes() {
      const arrayTimeZones = Intl.supportedValuesOf('timeZone')
      const date = new Date()
      this.allTimes = [];

      arrayTimeZones.forEach((timeZone) => {
        let strTime = date.toLocaleString('en-US', { timeZone: `${timeZone}` })
        const objTimeZone = { timeZone, strTime }
        this.allTimes.push(objTimeZone);
      })
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
