<template>
  <div class="form-card">
    <ElCollapse accordion>
      <ElCollapseItem>
        <template #title>
          <ElCol>
            <ElCard 
              :style="{boxShadow: '--el-box-shadow-dark', border: 0}"
              shadow="hover" 
              :body-style="{ padding: '0px' }" 
              >
              <div class="card-block balance-card" shadow="hover" >
                  <div class="card-block-info">
                      <h2>Add new item</h2>
                  </div>
                  <img class="card-block-img" src="../assets/images/plus.png" alt="">
              </div>
            </ElCard>
          </ElCol>
        </template>
        <FormSpoiler @submitForm="onFormSubmit"/>
      </ElCollapseItem>
    </ElCollapse>

  </div>
</template>

<script>
import FormSpoiler from "@/components/FormSpoiler.vue";
import { mapActions } from "vuex";

export default {
  name: "FormBalance",
  components: {
    FormSpoiler
  },
  data: () => ({
  }),
  methods: {
    ...mapActions("budgetList", ["addNewUser"]),
    onFormSubmit(data) {
      this.addNewUser(data);
    }
  }
};
</script>

<style scoped>
.form-card {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  margin-bottom: 20px;
}
.card {
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
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  text-align: start;
  background-color: #04A777;
}
.card-block-img {
  max-width: 50px;
  width: 100%;
  height: 100%;
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
</style>
