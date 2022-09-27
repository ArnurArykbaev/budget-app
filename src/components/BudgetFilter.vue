<template>
  <time class="time">{{ currentDate }}</time>
  <div class="budget-filter-wrap"> 

    <ElRow>
      <ElCol :span="24">
        <BudgetFilterTitle :total="total" @click="selectedType('ALL')"/>
      </ElCol>
    </ElRow>

    <ElRow :gutter="24" justify="space-between">
      <ElCol :span="12" :style="{ padding: '0px' }" >
        <BudgetFilterBalance :income="income" :outcome="outcome"/>
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import { ref } from 'vue';
import BudgetFilterTitle from '@/components/BudgetFilterTitle.vue';
import BudgetFilterBalance from '@/components/BudgetFilterBalance.vue'
import { mapActions } from 'vuex';

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
    BudgetFilterTitle,
    BudgetFilterBalance
  },
  methods: {
    ...mapActions("budgetList", ["selectFilter"]),
    selectedType(data) {
      this.selectFilter(data);
    }
  }
}
</script>

<style scoped>
.budget-filter-wrap {
  max-width: 500px;
  margin: auto;
  padding: 0;
  margin-bottom: 60px;
}
.el-row {
  margin-bottom: 6px;
}
</style>