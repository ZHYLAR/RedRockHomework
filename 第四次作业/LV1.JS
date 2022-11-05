//循环法
function sumTo(n){
    var a = 1;
    var sum = 0;
    for(a=1;a<=n;a++){
        sum = sum + a;
    }
    return sum;
}

//递归法
function sumTo2(n){
    if(n==1){
        return 1;
    }
    else{
        return n + sumTo2(n-1);
    }
  
}


//测试
console.log(sumTo(100));
console.log(sumTo2(100));