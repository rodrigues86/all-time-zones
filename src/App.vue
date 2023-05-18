<template>
  <v-app class="pa-4">
    <div class="d-flex">
      <div class="">
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      </div>
      <div class="ml-auto">
        <v-icon
          icon="mdi-theme-light-dark"
          title="light/dark mode"
          @click="toggleTheme"
          class="ml-auto"
        ></v-icon>
      </div>
    </div>
    <time-zone />
  </v-app>
</template>

<script>
import { useTheme } from 'vuetify'
import TimeZone from './components/TimeZone.vue'

export default {
  components: { TimeZone },
  setup() {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark')
    }
  }
}
</script>

