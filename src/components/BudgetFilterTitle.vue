<template>
    <div class="card">
      <ElCol>
        <ElCard 
          :style="{boxShadow: '--el-box-shadow-dark', border: 0}"
          shadow="hover" 
          :body-style="{ padding: '0px' }" 
          >
          <div class="card-block balance-card" shadow="hover" >
            <div class="card-block-info">
                <span>Balance</span>
                <h4>$ {{ total }}</h4>
            </div>
            <img class="card-block-img" src="../assets/images/wallet.png" alt="">
          </div>
        </ElCard>
      </ElCol>
    </div>
</template>

<script>
export default {
    name: "BudgetFilterTitle",
    props: {
        total: {
            type: Number,
            default: 0,
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
  color: transparent;
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
  background-color: #e9a424;
}
.card-block-img {
  max-width: 100px;
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
  font-size: 35px;
  margin: 0;
}
span {
  padding: 5px 0;
  font-size: 16px;
}
</style>