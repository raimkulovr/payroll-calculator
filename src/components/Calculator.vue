<template>
    <div class="calculator">
        <div class="calculator-box">
            <div class="calculator-item">
                <label>Оклад</label>
                <input v-model="calculatorInput.salary" type="number">
            </div>
            <div class="calculator-item">
                <label>Премия</label>
                <input v-model="calculatorInput.premium" type="number">
            </div>
            <div class="calculator-item">
                <label>Районный коэффициент, %</label>
                <input v-model="calculatorInput.districtCoeff" type="number">
            </div>
            <div class="calculator-item">
                <label>Количество рабочих дней в месяце	</label>
                <input v-model="calculatorInput.workingDaysAmount" type="number">
            </div>
            <div class="calculator-item">
                <label>Количество отработанных дней в месяце</label>
                <input v-model="calculatorInput.workingDaysConsider" type="number">
            </div>
        </div>
        <button class="btn btnPrimary newNoteButton" @click="payrollCalculate">Вычислить</button>
    </div>
</template>

<script>
export default {
    props: {
        calculatorInput: {
            type: Object,
            required: true
        }
    },
    methods: {
        payrollCalculate() {
            console.log('got that')
            this.$emit('payrollCalculate', this.calculatorInput)
        }
    }
}
</script>

<style lang="scss" scoped>
.calculator{
    text-align: center;
}
.calculator-box{
    
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: left
}
.calculator-item{
    min-width: 400px;
    margin-right: 10px;
}
.btn{
    margin-top: 70px;
}
</style>