<template>
    <div class="router-block">
        <h2><router-link to="/new">Создать игрока</router-link></h2>
        <h2><router-link to="/Edit">Редактировать игрока</router-link></h2>
    </div>

    <router-view />
</template>

<script setup>
import { onMounted } from 'vue'

import { fetchPlayers } from '@/composables/usePlayers'

onMounted(fetchPlayers)
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 600px;
}

.router-block {
    display: flex;
    align-items: center;
    justify-content: center;

    * > a {
        color: black;
        text-decoration: none;
        margin-right: 20px;
        border-bottom: 1px solid transparent;
        transition: all .3s;

        &:hover {
            border-bottom-color: lightgray;
        }

        &.router-link-active {
            border-bottom-color: black;
        }
    }
}
</style>
