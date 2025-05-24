<template>
  <main>
    <p> Hi! </p>
  </main>
</template>


<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavBar from './NavBar.vue'

definePageMeta({
  layout: 'default'
})

const router = useRouter()
const route = useRoute()

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  }
})
</script>

<style scoped  type="text/css">
main {
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  margin-top: 7em;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: rgb(2, 114, 206);
  border-radius: 25px;
}
</style>