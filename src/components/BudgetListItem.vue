<template>
    <div class="list-item" v-show="selectedComp(currentType, item.type)">
        <ElIcon v-show="item.type === 'INCOME'" class="icon icon-style" color="#67C23A">
            <ArrowUpBold />
        </ElIcon>
        <ElIcon v-show="item.type !== 'INCOME'" class="icon icon-style" color="#F56C6C">
            <ArrowDownBold />
        </ElIcon>
        <span class="budget-comment">{{ item.comment }}</span>
        <span class="budget-value">{{ item.value }}</span>
        <ElButton type="danger" size="small" @click="confirmDialog = true">
            <Delete style="width: 1em; height: 1em; margin-right: 8px" />
            <span>Delete</span>
        </ElButton>
    </div>

    <ElDialog v-model="confirmDialog" width="300px" title="Warning" center>
        <span>Do you really want to delete this item?</span>
        <template #footer>
            <span class="dialog-footer" center>
                <ElButton type="primary" @click="deleteItem(item.id)">Confirm</ElButton>
                <ElButton @click="confirmDialog = false">Cancel</ElButton>
            </span>
        </template>
    </ElDialog>
</template>

<script>
import { ArrowUpBold, ArrowDownBold, Delete } from '@element-plus/icons-vue';
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
    name: "BudgetListItem",
    components: {
        ArrowUpBold,
        ArrowDownBold,
        Delete,
    },
    props: {
        item: {
            default: () => ({}),
        }
    },
    data: () => ({
        confirmDialog: false
    }),
    computed: {
        ...mapGetters("budgetList", ["userBudget", "currentType"]),
    },
    emits: ["selectFilter"],
    methods: {
        ...mapActions("budgetList", ["deleteSomeUser"]),
        selectedComp(currentType, type) {
            if(currentType === type) {
                return true
            } else if(currentType === 'ALL') {
                return true
            }
        },
        deleteItem(id) {
            /* let deleteQuestion = confirm('Do you really wannt to remove this item?');
            if(!deleteQuestion) {
                return;
            } */
            this.confirmDialog = false;
            this.deleteSomeUser(id);
        },
    },
}
</script>

<style scoped>
.list-item {
    display: flex;
    font-family: "Quicksand-Regular", Arial, sans-serif;
    align-items: center;
    padding: 10px 15px;
}
.budget-comment {
    word-break: break-word;
    padding-right: 10px;
    text-align: start;
}
.budget-value {
    font-weight: bold;
    margin-left: auto;
    margin-right: 20px;
}
.dialog-footer {
    font-style: 12px;
}
.icon-style {
    width: 1em;
    height: 1em;
    margin-right: 1em
}
.confirm-dialog {
    width: 60%;
}
.el-dialog {
    min-width: 300px !important;
}
</style>