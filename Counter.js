const value = document.querySelector('#counter')

const Increment=() =>{
    let newValue = parseInt(value.innerText)
    newValue=newValue+1
    value.innerText=newValue
}

const Decrement=() =>{
    let newValue = parseInt(value.innerText)
    newValue=newValue-1
    value.innerText=newValue
}