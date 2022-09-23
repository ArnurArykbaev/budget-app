<template>
  <time class="time">{{ currentDate }}</time>
  <div class="budget-filter-wrap"> 

    <ElRow>
      <ElCol :span="24">
        <BudgetFilterTitle :total="total"/>
      </ElCol>
    </ElRow>

    <ElRow :gutter="24" justify="space-between">
      <ElCol :span="12" :style="{ padding: '0px' }" >
        <BudgetFilterTitle :total="income" class="sa"/>
      </ElCol>
      <ElCol :span="12" :style="{ padding: '0px' }" >
        <BudgetFilterTitle :total="outcome"/>
      </ElCol>

    </ElRow>
  </div>
</template>

<script>
import { ref } from 'vue';
import BudgetFilterTitle from '@/components/BudgetFilterTitle.vue';

export default {
  name: "BudgetFilter",
  data: () => ({
    currentDate: ref(new Date())
  }),
  props: {
      total: {
        type: Number,
        default: 0,
      },
      income: {
        type: Number,
        default: 0,
      },
      outcome: {
        type: Number,
        default: 0,
      },
  },
  components: {
    BudgetFilterTitle
  },
}
</script>

<style scoped>
.budget-filter-wrap {
  max-width: 500px;
  margin: auto;
  padding: 0;
}
.el-row {
  margin-bottom: 12px;
}
</style>