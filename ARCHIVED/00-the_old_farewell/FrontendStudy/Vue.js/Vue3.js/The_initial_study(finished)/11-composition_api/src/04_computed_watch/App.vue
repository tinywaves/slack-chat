<template>
  <div>
    <h2>{{firstName}} {{lastName}}</h2>
    <h2>{{fullName}}</h2>
    <button @click="changeFirstName">修改 firstName</button>
    <watch-effect/>
    <setup-ref/>
    <watch/>
  </div>
</template>

<script>
  import { ref, computed } from 'vue'

  import WatchEffect from './WatchEffect.vue'
  import SetupRef from './SetupRef.vue'
  import Watch from './Watch.vue'

  export default {
    setup() {
      const firstName = ref('tiny')
      const lastName = ref('ripple')

      // const fullName = computed(() => firstName.value + ' ' + lastName.value)
      const fullName = computed({
        get: () => firstName.value + ' ' + lastName.value,
        set(newValue) {
          const names = newValue.split(' ')
          firstName.value = names[0]
          lastName.value = names[1]
        }
      })

      const changeFirstName = () => {
        // firstName.value = 'testChange'
        fullName.value = 'zhengdonghui ZDH'
      }

      return {
        firstName,
        lastName,
        fullName,
        changeFirstName
      }
    },
    components: {
      WatchEffect,
      SetupRef,
      Watch
    }
  }
</script>

<style scoped>

</style>