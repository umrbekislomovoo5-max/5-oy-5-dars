function check(id:string|number){
    if(typeof(id)==="string"){
        return ` salom sizning ${id} raqamingiz strinng formatda`
    }else if(typeof(id)==="number"){
        return ` siznig ${id} raqamingiz number formatda`

     
    }
}
console.log(check("45"))
