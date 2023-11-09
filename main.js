const bill = document.querySelector('.bill')
const select = document.querySelector('.select')
const people = document.querySelector('.people')
const sum = document.querySelector('.sumbtn')
const reset = document.querySelector('.rstbtn')
const errorAlert = document.querySelector(".modal-bg")
const errorMessage = document.querySelector(".error-message")

sum.addEventListener("click", function(){
    console.log(bill.value, select.value, people.value)
    if(bill.value === "" || select.value === "" || people.value === ""){

        errorAlert.style.display = "flex"
        errorMessage.textContent = "Please fill in the field"

        setTimeout(function(){
            errorAlert.style.display = "none"
            errorMessage.textContent = ""
        },5000)

    }
    else if(!Number(bill.value) || !Number(select.value) || !Number(people.value)){
        errorAlert.style.display = "flex"
        errorMessage.textContent = "Please all fields should be numbers"

        setTimeout(function(){
            errorAlert.style.display = "none"
            errorMessage.textContent = ""
        },5000)
    }
    else{
        const billAmount = Number(bill.value)
        const tipPercent = Number(select.value)
        const numPersons = Number(people.value)

        const totalAmountperperson = billAmount/numPersons
        const tipAmountPerPerson = ((tipPercent/100) * billAmount)/numPersons
        const totalAmount = totalAmountperperson + tipAmountPerPerson
        document.querySelector('.tip-per-person').textContent = "$"+tipAmountPerPerson
        document.querySelector('.total-per-person').textContent = "$"+totalAmount
        console.log(totalAmount)
        
    }
})

reset.addEventListener("click", function(){
    location.reload()
})


document.querySelector(".btn").addEventListener("click", () => {
    errorAlert.style.display = "none"
    errorMessage.textContent = ""
})