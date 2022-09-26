<template>
    <div class="card">
      <ElCol
        v-for="(item, id) in budget" :key="id"
      >
        <ElCard 
          :style="{boxShadow: '--el-box-shadow-dark', border: 0, backgroundColor: item.bg }"
          shadow="hover" 
          :body-style="{ padding: '0px' }" 
          @click="selectedType(item.type)"
          >
          <div class="card-block balance-card" shadow="hover" >
            <div class="card-block-info">
                <span>{{ item.title }}</span>
                <h4>$ {{ item.balance }}</h4>
            </div>
            <img class="card-block-img" :src="require(`../assets/${item.img}`)" alt="">
          </div>
        </ElCard>
      </ElCol>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "BudgetFilterBalance",
    props: [
        'income',
        'outcome'
    ],
    data() {
      let data = {
        budget: {
          income: {
            title: "Income",
            balance: this.income,
            img: "money-bag.png",
            type: "INCOME",
            bg: "#04A777"
          }, 
          outcome: {
            title: "Outcome",
            balance: this.outcome,
            img: "coin.png",
            type: "OUTCOME",
            bg: "#D90368"
          }
        }
      }
      data = Object.assign({}, data, this.income, this.outcome);
      return data;
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

.card {
  position: relative;
  display: flex;
  padding: 0;
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