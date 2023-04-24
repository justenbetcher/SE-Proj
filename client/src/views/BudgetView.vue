<script setup lang="ts">
  import { ref } from 'vue';
  import session from '@/stores/session';
  import { getServerTime, getWeekNo} from '@/stores/time';
  import router from '@/router';
  import type { Budget } from '@/stores/budgets';

  const currentBudgetIndex = ref<number>(0);
  const currentBudget = ref<Budget>();
  const currentSpendingCategoryDropdown = ref<boolean[]>();

   function setCurrentBudgetIndex(i: number) {
    if (session.user && i >= 0 && i < session.user.budgets.length) {
      currentBudgetIndex.value = i
      currentBudget.value = session.user.budgets[i]

      currentSpendingCategoryDropdown.value = [];
      if (currentBudget) {
        for (let j = 0; j < currentBudget.value.spending.length; j++) {
          currentSpendingCategoryDropdown.value[j] = false;
        }
      }


    }
  }

  if (session.user) {
      setCurrentBudgetIndex(0)
  } else {
      router.push("/")
  }
</script>

<template>
  <main>
    <div class="box fades-in">
        Week {{ currentBudget?.weekNo }}

        <div v-for="(category, i) in currentBudget?.spending" class="box">
          <div class="level mb-0 pb-0">
            <div class="level-left">
              {{ category.description }}
            </div>

            <div class="level-right">

            </div>
          </div>

          <div v-for="(entry, j) in category.entries">
            <div class="level">
            <div class="level-left">
              &emsp;{{ entry.description }}
            </div>
            <div class="level-right has-text-primary">
              {{ entry.value }}
            </div>
          </div>
          </div>
        </div>

        <div class="buttons has-addons is-centered input-group">
          <div class="button" @click="setCurrentBudgetIndex(currentBudgetIndex + 1)">
              <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="button" @click="setCurrentBudgetIndex(currentBudgetIndex - 1)">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </div>
  </main>
</template>