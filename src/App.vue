<template>
  <div id="App">
    <BudgetFilter :total="totalBalance" :income="incomeBalance" :outcome="outcomeBalance"/>
    <FormBalance @submitForm="onFormSubmit"/>
    <BudgetList />
  </div>
</template>

<script>
import BudgetFilter from "@/components/BudgetFilter.vue"
import BudgetList from "@/components/BudgetList.vue";
import FormBalance from "@/components/FormBalance.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    BudgetFilter,
    BudgetList,
    FormBalance,
  },
  computed: {
    ...mapGetters("budgetList", ["userBudget"]),
    totalBalance() {
      console.log(this.userBudget)
      return Object.values(this.userBudget).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
    incomeBalance() {
      const incomeArray = Object.values(this.userBudget).filter(item => item.value > 0);
       return Object.values(incomeArray).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
    outcomeBalance() {
      const outcomeArray = Object.values(this.userBudget).filter(item => item.value < 0);
       return Object.values(outcomeArray).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
  },
  methods: {
    ...mapActions("budgetList", ["addNewUser"]),
    onFormSubmit(data) {
      this.addNewUser(data);
    }
  }
};
</script>

<style>
html {
  background-color: #f7f7f7;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
:root {
  --el-fill-color-blank: #f7f7f7 !important;
  --el-bg-color-overlay: #f7f7f7 !important;
}
</style>
