const day = {
    input: document.getElementById('input-day'),
    error: document.getElementById('day-error'),
    label: document.getElementById('day-label'),
    output: document.getElementById('output-day')
}

const month = {
    input: document.getElementById('input-month'),
    error: document.getElementById('month-error'),
    label: document.getElementById('month-label'),
    output: document.getElementById('outer-month'),
}

const year = {
    input: document.getElementById('input-year'),
    error: document.getElementById('year-error'),
    label: document.getElementById('year-label'),
    output: document.getElementById('outer-year'),
}

const daysInMonts = [31, 29, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31]

let border_color = "hsl(0, 0%, 86%)"
let light_red = "hsl(0, 100%, 67%)"
let smokey_grey = "hsl(0, 1%, 44%)"
let date = new Date(0,0,0)
let now = new Date(Date.now())

console.log(date)
day.input.addEventListener("input", () =>{
    setNormal(day)
    if(Validate().day){
        setError(day)
    } else{
        setDate()
        calculateAge()
    }
})

month.input.addEventListener("input", () =>{
    setNormal(month)
    if(Validate().month){
        setError(month)
    } else{
        setDate()
        calculateAge()
    }
})
year.input.addEventListener("input", () =>{
    setNormal(year)
    if(Validate().year){
        setError(year)
    } else{
        setDate()
        calculateAge()
    }
})

//functions

const setNormal = (value) => {
    value.input.style.borderColor = border_color
    value.error.style.visibility = "hidden";
    value.label.style.color = smokey_grey
}
const setError = (value) => {
    value.error.style.visibility = "visible"
    value.input.style.borderColor = light_red
    value.label.style.color = light_red
}
const calculateAge = () => {
    let age = new Date(Date.parse(now) - Date.parse(date))

    if(!(Validate().year || Validate().month || Validate().day)){
            let years = age.getFullYear() - 1970
            age.setFullYear(years)
            year.output.innerText = `${age.getFullYear()}`
            month.output.innerText = `${age.getMonth()}`
            day.output.innerText = `${age.getDate()}`
    }
}
const setDate = () => {
    date.setFullYear(year.input.value)
    date.setMonth(month.input.value - 1)
    date.setDate(day.input.value)

}
const Validate = () => {
    let validation = {
        day: day.input.value > daysInMonts[date.getMonth()] || day.input.value.length < 1,
        month: month.input.value > 12 || month.input.value < 1 || month.input.length < 1,
        year: year.input.value > now.getFullYear() || year.input.value < 1000 || year.input.length < 1
    }
    return validation
}
