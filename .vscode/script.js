const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {

  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists) {
    alert("Dia já Incluso! ಠ_ಠ")
    return
  }
  
  alert("Adicionado com Sucesso! ╰(*°▽°*)╯")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

//const data = {
//  study: ['01-20', '01-21', '01-22'],
//  water: ['01-16', '01-17', '01-18', '01-19', '01-20', '01-21'],
//  food: ['01-16', '01-17', '01-18', '01-19', '01-20', '01-21'],
//  work: ['01-16', '01-17', '01-18', '01-19', '01-21'],
//  biking: ['01-18', '01-19', '01-21'],
//  sleep: ['01-16', '01-17', '01-18', '01-19', '01-20', '01-21'],
//}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
