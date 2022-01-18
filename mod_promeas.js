const dividir = (num1,num2)=>
{
    return new Promise(
        (resolve,reject)=>{
            if(num2==0){
                reject('Error: Division por cero');
            }else{
                resolve(num1/num2);
            }
        }
    )
}

module.exports = {dividir};
