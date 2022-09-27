<template>
    <div class="card">
      <ElCol>
        <ElCard 
          :style="{boxShadow: '--el-box-shadow-dark', border: 0, backgroundColor: incomeBalance.bg }"
          shadow="hover" 
          :body-style="{ padding: '0px' }" 
          @click="selectedType(incomeBalance.type)"
          >
          <div class="card-block balance-card" shadow="hover" >
            <div class="card-block-info">
                <span>{{ incomeBalance.title }}</span>
                <h4>$ {{ income }}</h4>
            </div>
            <img class="card-block-img" :src="require(`../assets/${incomeBalance.img}`)" alt="">
          </div>
        </ElCard>
      </ElCol>
      <ElCol>
        <ElCard 
          :style="{boxShadow: '--el-box-shadow-dark', border: 0, backgroundColor: outcomeBalance.bg }"
          shadow="hover" 
          :body-style="{ padding: '0px' }" 
          @click="selectedType(outcomeBalance.type)"
          >
          <div class="card-block balance-card" shadow="hover" >
            <div class="card-block-info">
                <span>{{ outcomeBalance.title }}</span>
                <h4>$ {{ outcome }}</h4>
            </div>
            <img class="card-block-img" :src="require(`../assets/${outcomeBalance.img}`)" alt="">
          </div>
        </ElCard>
      </ElCol>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "BudgetFilterBalance",
  props: {
      income: {
          type: Number,
          default: 0,
      },
      outcome: {
          type: Number,
          default: 0,
      }
  },
  data: () => ({
    incomeBalance: {
      title: "Income",
      img: "money-bag.png",
      type: "INCOME",
      bg: "#04A777"
    }, 
    outcomeBalance: {
      title: "Outcome",
      img: "coin.png",
      type: "OUTCOME",
      bg: "#D90368"
    }
  }),
  methods: {
    ...mapActions("budgetList", ["selectFilter"]),
    selectedType(data) {
      this.selectFilter(data);
    },
  },
}
</script>

<style scoped>

.card {
  position: relative;
  display: flex;
  padding: 0;
}
.el-col:active {
  border: 1px solid transparent;
  color: red;
}
.el-card:hover {
  cursor: pointer;
}
.card-block {
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  text-align: start;
}
.card-block-img {
  max-width: 60px;
  width: 100%;
  margin: auto 0;
}
.card-block-info {    
  display: flex !important;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: #ffff;
}
h4 {
  font-size: 25px;
  margin: 0;
}
span {
  padding: 5px 0;
  font-size: 14px;
}
</style>