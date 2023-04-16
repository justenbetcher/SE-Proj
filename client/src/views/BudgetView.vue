<script setup lang="ts">
    import { reactive, ref } from 'vue';
    import session from '@/stores/session';
    import { getServerTime, compareTime, getWeekNum } from '@/stores/time';
    import router from '@/router';
    import { getLatestBudget, type Budget } from '@/stores/budgets';

    const serverTime = ref()
    const latestBudget = ref<Budget>()
    const isBudgetCurrent = ref(false)

    function initializePageInfo() {
        getServerTime().then(now => {
            serverTime.value = now
            updateLatestBudget()

            if (latestBudget.value)
                isBudgetCurrent.value = getWeekNum(latestBudget.value.start) === getWeekNum(now);
        })
    }

    function updateServerTime() {
        getServerTime().then(result => serverTime.value = result)
    }

    function updateLatestBudget() {
        if (session.user) {
            latestBudget.value = getLatestBudget(session.user.budgets)
        }
    }

    if (session.user) {
        initializePageInfo()
    } else {
        router.push("/")
    }
</script>

<template>
  <main>
    <div class="box fades-in">
        <div class="box">{{ latestBudget?.start?.month }} / {{ latestBudget?.start?.day }} / {{ latestBudget?.start?.year }}</div>
        <div class="box">{{ isBudgetCurrent }}</div>
    </div>
  </main>
</template>