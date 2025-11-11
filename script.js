let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")

let verify = document.getElementById("verify")
let result = document.getElementById("result")

verify.onclick = () => {
    let horizontallyContained = true
    let verticallyContained = true
  
    let aval = parseInt(a.value)
    let bval = parseInt(b.value)
    let cval = parseInt(c.value)
    let dval = parseInt(d.value)

    if (aval > cval) horizontallyContained = false
    if (bval > dval) horizontallyContained = false

    if (aval > dval) verticallyContained = false
    if (bval > cval) verticallyContained = false

    if (horizontallyContained || verticallyContained) { 
        result.value = "может"
    } else result.value = "не может"

}


