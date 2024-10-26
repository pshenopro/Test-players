<template>
    <h1>Добавить нового игрока</h1>
    <div class="row">
        <input id="name" type="text" v-model="state.name" placeholder="Имя"/>
        <input id="life" type="number" v-model.number="state.life" placeholder="Жизней" />
        <button type="button" @click="createPlayer">Создать</button>
    </div>

    <div v-if="errors.length" style="color: red; padding-top: 20px">
        <h4 v-for="error in errors" :key="error">
            {{ error }}
        </h4>
    </div>
</template>


<script setup>
import { reactive, ref } from 'vue'
import { playersList } from '@/composables/usePlayers'

const errors = ref([])
const state = reactive({
    name: '',
    life: 0
})

const valid = () => {
    errors.value = []

    let checkFail = false

    if (!state.name || state.name.length < 2) {
        errors.value.push('Укажите имя (Минимум 3 символа)')
        checkFail = true
    }

    if (!state.life) {
        errors.value.push('Значение не может быть меньше или ровно нулю');
        checkFail = true
    }

    return checkFail
}

const createPlayer = () => {
    if (valid()) return

    playersList.value?.push({
        ...state
    })
    Object.assign(state, {
        name: '',
        life: 0
    })
}
</script>

<style lang="scss">
    .row {
        display: flex;
        margin-top: 20px;

        input {
            margin-right: 12px;
            width: 100%;
            height: 24px;
        }

        button {
            width: 70px;
        }
    }

    #life {
        width: 70px;
    }
</style>
