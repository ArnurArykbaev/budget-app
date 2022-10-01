<template>
    <div class="header-wrap">
        <el-menu
            class="el-menu-demo header-menu"
        >
            <el-menu-item index="0">
                <h5>
                    {{ currentMonth.toUpperCase() }} {{ currentDay }}
                </h5>
            </el-menu-item>
        </el-menu>
    </div>
    
</template>

<script>
import { ref } from 'vue';

export default{
  name: "HeaderDate",
  data: () => ({
    month: '',
    currentDate: ref(new Date()),

  }),
  methods: {
    toStringDate(month) {
        switch (month) {
            case 0:
                month = 'January';                
                return month;
            case 1:
                month = 'February';                
                return month;
            case 2:
                month = 'March';                
                return month;
            case 3:
                month = 'April';                
                return month;
            case 4:
                month = 'May';                
                return month;
            case 5:
                month = 'June';                
                return month;
            case 6:
                month = 'July';                
                return month;
            case 7:
                month = 'August';                
                return month;
            case 8:
                month = 'September';          
                return month;
            case 9:
                month = 'October';                
                return month;
            case 10:
                month = 'November';                
                return month;
            case 11:
                month = 'December';                
                return month;
            default:
                break;
        }
    }
  },
  computed: {
    currentMonth() {
        let month = this.currentDate.getMonth();
        return this.toStringDate(month);
    },
    currentDay() {
        return this.currentDate.getDate();
    }
  }
}
</script>

<style>
    .header-wrap {
        display: flex;
        max-width: 500px;
        margin-top: 10px;
        margin: auto;
    }
    .el-menu {
        border: none !important;
        padding: 0 !important;
    }
    .el-menu-item {
        font-family: "RubikDirt-Regular", serif;
        padding: 0 !important;
    }
    h4 {
        font-weight: normal;
    }
    h5 {
        font-size: 23px;
        font-weight: normal;
        color: #049c6e;
    }

</style>