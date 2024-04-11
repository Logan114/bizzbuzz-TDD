export function bizBuzz(n){
    let eredmeny=""
    if (n<=0){
        eredmeny="nincs ilyen sorozat"
    }
    else {
        for (let index = 1; index <=n; index ++){
            if (index === n){
                console.log("🦀",n)
            }
            eredmeny += seged(index)
        }

    }
    return eredmeny
}
function seged(n){
    let eredmeny=""
    if (n === 1){
        eredmeny = "1";
    }
    else if ((n%2 === 0) && (n%3===0)){
        eredmeny = "BIZZBUZZ"
    }
    else if(n%2==0){
        eredmeny=", BIZ"
    }
    else if (n%3 ===0){
        eredmeny = "BUZ"
    }
    else{
        eredmeny = n
    }

    return eredmeny

}