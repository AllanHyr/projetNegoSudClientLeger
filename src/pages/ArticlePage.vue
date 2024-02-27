<template>
  <q-layout view="lHh Lpr lFf">
    <div>PAGE ARTICLE</div>
    <div>{{ data }}</div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'
import { useRoute } from 'vue-router'

const $q = useQuasar()
const data = ref(null)
const articleId = ref(null)
const route = useRoute()

function loadData() {
  api.get('/article/' + articleId.value)
    .then((response) => {
      data.value = response.data
      console.log(data)
    })
    .catch(() => {
      $q.notify({
        color: 'negative',
        position: 'top',
        message: 'Loading failed',
        icon: 'report_problem'
      })
    })
}

onMounted(() => {
  articleId.value = route.params.id
  loadData()
})
</script>