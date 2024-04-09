var a =10
function fun1(){
 console.log(a)
}
function fun2(){
 var a = 20
 fun1()
}
fun2()