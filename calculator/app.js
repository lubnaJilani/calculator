function pick(val){
 document.getElementById('input').value += val


}
function eq(){
 let a =  document.getElementById('input')
 a.value = eval(a.value) 
}
function del(){
    let b = document.getElementById("input")
    b.value = ""
}
function del1(){
    let b = document.getElementById("input")
    b.value =b.value.slice(0, -1)    
}