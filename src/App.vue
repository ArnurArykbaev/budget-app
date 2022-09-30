<template>
  <div id="App">
    <HeaderDate />
    <BudgetFilter :total="totalBalance" :income="incomeBalance" :outcome="outcomeBalance"/>
    <FormBalance/>
    <BudgetList />
  </div>
</template>

<script>
import HeaderDate from "@/components/HeaderDate.vue"
import BudgetFilter from "@/components/BudgetFilter.vue"
import BudgetList from "@/components/BudgetList.vue";
import FormBalance from "@/components/FormBalance.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    HeaderDate,
    BudgetFilter,
    BudgetList,
    FormBalance,
  },
  computed: {
    ...mapGetters("budgetList", ["userBudget"]),
    totalBalance() {
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
  }
};
</script>

<style>
@font-face {
    font-family: 'RubikDirt-Regular';
    src: local('RubikDirt-Regular'),
         url('~@/assets/fonts/RubikDirt-Regular.woff2') format('woff2'),
         url('~@/assets/fonts/RubikDirt-Regular.woff') format('woff'),
         url('~@/assets/fonts/RubikDirt-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Quicksand-Regular';
    src: local('Quicksand-Regular'),
         url('~@/assets/fonts/Quicksand-Regular.woff2') format('woff2'),
         url('~@/assets/fonts/Quicksand-Regular.woff') format('woff'),
         url('~@/assets/fonts/Quicksand-VariableFont_wght.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

html {
  background-color: #f7f7f7;
}
#app {
  font-family: "Quicksand-Regular", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
:root {
  --el-fill-color-blank: #f7f7f7 !important;
  --el-bg-color-overlay: #f7f7f7 !important;
}

</style>
