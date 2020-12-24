<template>
  <div class="wrapper container"> 

  <header style="margin: 36px 0">
    <div class="navbar">
      
          <div class="logo">Калькулятор расчета заработной платы на VueJS</div>
            
    </div>
  </header>

  <div class="calculator-container">
    <div v-if="!isCorrect" class="wrongDataMes">Введены неверные данные!</div>
    <div class="calculatorOutput">
    <div class="calculatorOutputItem">
      <label>Полная зарплата</label>
      <p>{{calculatorOutput.payrollFull}}</p>
    </div>

    <div class="calculatorOutputItem">
      <label>НДФЛ</label>
      <p>{{calculatorOutput.payrollTaxes}}</p>
    </div>

    <div class="calculatorOutputItem">
      <label>Зарплата на руки</label>
      <p>{{calculatorOutput.payrollOnHands}}</p>
    </div>
  </div>
  <div >
    <calculator :calculatorInput="calculatorInput" @payrollCalculate="payrollCalculate"/>
  </div>
  
  
  </div>
  </div>
</template>

<script>
import calculator from '@/components/Calculator.vue'
export default {
  components: {
    calculator
  },
  data(){
    return{
      isCorrect: true,
      calculatorInput: {
        salary: 0,
        premium: 0,
        districtCoeff: 100,
        workingDaysAmount: 0,
        workingDaysConsider: 0
      },
      calculatorOutput: {
        payrollFull: 0,
        payrollTaxes: 0,
        payrollOnHands: 0
      }
    }
  },
  methods: {
    payrollCalculate() {
      console.log('copy')
      let{salary, premium, districtCoeff, workingDaysAmount, workingDaysConsider} = this.calculatorInput
      if(salary == 0){
        this.isCorrect = false
        return false
      }
      if(workingDaysAmount == 0){
        this.isCorrect = false
        return false
      }
      console.log(typeof(this.calculatorOutput.payrollFull))
      console.log(typeof(premium))
      this.calculatorOutput.payrollFull= Math.round(((salary*(districtCoeff/100)*workingDaysConsider)/workingDaysAmount)+Number(premium))
      this.calculatorOutput.payrollTaxes=this.calculatorOutput.payrollFull*0.13
      this.calculatorOutput.payrollOnHands=this.calculatorOutput.payrollFull-this.calculatorOutput.payrollTaxes

      this.isCorrect = true 
    }
  }
}
</script>

<style lang="scss">
.navbar{
  width: auto;
  text-align: center;
  font-weight: bold;
}
.navbar-link{
  &.router-link-exact-active{
    color: #0f0f0f;
  }
}

.calculatorOutput{
  margin: 70px 0;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;

}
.calculatorOutputItem{
  margin-right: 30px
}
.wrongDataMes{
  text-align: center;
  padding-top: 30px;
  color: rgb(231, 43, 43);
}
</style>
