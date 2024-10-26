import { ref } from 'vue'

export const playersList = ref([])

export const fetchPlayers = async () => {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')

    const parseData = await data.json()
    playersList.value = parseData.map(({ name, email}) => {
      return {
        name,
        minus: false,
        plus: false,
        life: email.length
      }
    }).filter(el => el.life < 20)
  } catch (e) {
    if (e) console.error(e)
  }
}
