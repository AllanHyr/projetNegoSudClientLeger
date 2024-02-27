import { defineStore } from 'pinia';

export const useApiStore = defineStore('api', {
  state: () => ({
    counter: parseInt(localStorage.getItem('counter') ?? '0', 10)
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
      localStorage.setItem('counter', this.counter.toString());
    },
  },
});
