<template>
  <div class="budget-list-wrap">
    <ElCard class="card" :header="header">
      <template v-if="!isEmpty">
        <BudgetListItem
          v-for="(item, list) in userBudget"
          :key="list"
          :item="item"
          :selectedType="selectedType"
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
    selectedType: "All",
    header: "Budget List",
    emptyTitle: "Empty List",
  }),
  methods: {
  },
  computed: {
    ...mapGetters("budgetList", ["userBudget"]),
    isEmpty() {
      return !Object.keys(this.userBudget).length;
    },
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
</style>
