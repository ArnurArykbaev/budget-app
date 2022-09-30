<template>
  <div class="budget-list-wrap">
    <ElCard class="card">
      <template #header>
        <div class="card-header">{{ currentFilter }}</div>
      </template>
      <template v-if="!isEmpty">
        <BudgetListItem
          v-for="(item, list) in userBudget"
          :key="list"
          :item="item"
        />
      </template>
      <ElAlert
        v-else
        type="info"
        :title="emptyTitle"
        :closable="false"
      ></ElAlert>
    </ElCard>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BudgetListItem from "@/components/BudgetListItem";

export default {
  name: "BudgetList",
  components: {
    BudgetListItem,
  },
  data: () => ({
    header: "",
    emptyTitle: "Empty List",
  }),
  methods: {
  },
  computed: {
    ...mapGetters("budgetList", ["userBudget", "currentType"]),
    isEmpty() {
      return !Object.keys(this.userBudget).length;
    },
    currentFilter() {
      return this.currentType[0].toUpperCase() + this.currentType.slice(1).toLowerCase();
    }
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
  margin-bottom: 12px;
}
.filter-row {
  margin-bottom: 20px;
}
.card-header {
  font-family: "RubikDirt-Regular", "Arial", serif;
  font-size: 16px !important;
  color: #409EFF;
}
</style>
