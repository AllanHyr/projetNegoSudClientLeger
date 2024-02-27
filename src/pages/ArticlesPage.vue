<template>
  <q-layout view="lHh Lpr lFf">
    <div>PAGE ARTICLES</div>
    <div>la data ici = {{ data }}</div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const data = ref(null);

function loadData() {
  api
    .get('/stock')
    .then((response) => {
      data.value = response.data;
      console.log(data);
    })
    .catch(() => {
      $q.notify({
        color: 'negative',
        position: 'top',
        message: 'Loading failed',
        icon: 'report_problem',
      });
    });
}

onMounted(() => {
  loadData();
});
</script>
