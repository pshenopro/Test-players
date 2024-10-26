<template>
  <h1>Редактирование игроков</h1>

  <div
    v-for="(item, i) in playersList"
    :key="i"
    class="row"
  >
      <input v-model="item.name" type="text">
      <button
          type="button"
          class="button"
          :disabled="item.life === 0"
          @click="onRating(item, 'minus')">-</button>
      <span class="life">{{item.life}}</span>
      <button type="button" class="button" @click="onRating(item, 'plus')">+</button>
  </div>

  <h2>Рейтинг</h2>
  <table>
    <tr
        v-for="(item, index) in rating"
        :class="{
            'rating_minus': item.minus,
            'rating_plus': item.plus
        }"
        :key="index"
    >
        <td v-text="`${index + 1}`"></td>
        <td v-html="`У игрока <b>${item.name}</b> ${item.life} жизней`"></td>
    </tr>
  </table>
</template>

<script setup>
import { computed } from 'vue'

import { playersList } from '@/composables/usePlayers'

const onRating = async (el, type) => {
    if (type === 'minus') el.life--

    if (type === 'plus') el.life++

    el[type] = true

    await new Promise(res => {
        setTimeout(() => {
            res()
        }, 300)
    }).then(() => {
        el[type] = false
    })
}

const rating = computed(() => [...playersList.value].sort((a, b) => b.life - a.life))
</script>

<style lang="scss">
    .rating_minus {
        animation-name: toMinus;
        animation-duration: .4s;
    }

    .rating_plus {
        animation-name: toPlus;
        animation-duration: .4s;
    }

    .row {
        display: flex;
        align-items: center;
        margin-top: 20px;

        input {
            margin-right: 12px;
            width: 100%;
            height: 24px;
        }

        .button {
            width: 24px;
            height: 24px;
        }

        .life {
            width: 20px;
            margin: 0 12px;
        }
    }

    table {
      width: 100%;

      td {
        border: 1px solid #2c3e50;
      }
    }

    @keyframes toMinus {
        from {
            outline: 2px solid red;
        }
        to {
            outline: 2px solid transparent;
        }
    }

    @keyframes toPlus {
        from {
            outline: 2px solid lightgreen;
        }
        to {
            outline: 2px solid transparent;
        }
    }
</style>
