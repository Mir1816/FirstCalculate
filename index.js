class Calculator{
    constructor(previous, current){
        this.previous = previous
        this.current = current
        this.clear()
    }
    clear(){
        this.currentOperand =""
        this.previousOperand = ""
        this.operation = undefined
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)

    }
    appendNumber(number){
        if(number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation){
        if(this.chooseOperation === "") return
        if(this.previousOperand !== ""){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }
    compute(){
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case "+":
                computation = prev + current
                break
            case "-":
                computation = prev - current
                break
            case "*":
                computation = prev * current
                break 
            case "/":
                computation = prev / current
                break
            default:    
                return           
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ""

    }
    uppDesplay(){
        this.current.innerText = this.currentOperand
        if(this.operation != null){
            this.previous.innerText = `${this.previousOperand} ${this.operation}`
        }   
        
    }
}





const numberButtonc = document.querySelectorAll("[data-numbers]")
const operatorButtonc = document.querySelectorAll("[data-operation]")
const equals = document.querySelector("[data-egulas]")
const dell = document.querySelector("[data-dell]")
const allCleare = document.querySelector("[data-all-clear]")
const previous = document.querySelector("[data-previos]")
const current = document.querySelector("[data-curretn]")


const calculator = new Calculator(previous, current)

numberButtonc.forEach(button=>{
    button.addEventListener("click", ()=>{
        calculator.appendNumber(button.innerText)
        calculator.uppDesplay()
    })
})

operatorButtonc.forEach(button=>{
    button.addEventListener("click", ()=>{
        calculator.chooseOperation(button.innerText)
        calculator.uppDesplay()
    })
})


equals.addEventListener("click", button=>{
    calculator.compute()
    calculator.uppDesplay()
})
allCleare.addEventListener("click", button=>{
    calculator.clear()
    calculator.uppDesplay()
})
dell.addEventListener("click", button=>{
    calculator.delete()
    calculator.uppDesplay()
})