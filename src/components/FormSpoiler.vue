<template>
    <ElCard class="form-block">
        <ElForm  :model="formData" ref="addItemForm" :rules="rules" lable-position="top" class="form">
        <ElFormItem label="Type" prop="type">
            <ElSelect
            class="type-select"
            v-model="formData.type"
            placeholder="Choose type..."
            >
            <ElOption label="Income" value="INCOME" />
            <ElOption label="Outcome" value="OUTCOME" />
            </ElSelect>
        </ElFormItem>
        <ElFormItem label="Comments" prop="comment">
            <ElInput v-model="formData.comment" />
        </ElFormItem>
        <ElFormItem label="Value" prop="value">
            <ElInput v-model.number="formData.value" />
        </ElFormItem>
        <ElButton @click="onSubmit" :style="{ backgroundColor: '#04A777', color: '#ffff' }" type="">Submit</ElButton>
        </ElForm>
    </ElCard>
</template>

<script>
export default {
  name: "FormSpoiler",
  data: () => ({
    formData: {
      type: "INCOME",
      comment: "",
      value: 0,
    },
    rules: {
      type: [
        { required: true, message: "Please select type", trigger: "blur" }
      ],
      comment: [
        { required: true, message: "Please input comment", trigger: "change" }
      ],
      value: [
        { required: true, message: "Please input value", trigger: "change" },
        { type: "number", message: "Value must be a number", trigger: "change" }
      ]
    },
  }),
  methods: {    
    onSubmit() {
      this.$refs.addItemForm.validate(valid => {
        if (valid) {
          if(this.formData.type === "OUTCOME" && this.formData.value > 0) {
            this.formData.value = -this.formData.value;
          } else if(this.formData.type === "INCOME" && this.formData.value < 0) {
            this.formData.value = -this.formData.value;
          }
          this.$emit("submitForm", { ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      });
    }
  }   
}
</script>

<style>
.type-select {
  width: 100%;
}
.el-icon {
  display: none !important;
}
.el-form {
  margin-top: 20px;
}
</style>