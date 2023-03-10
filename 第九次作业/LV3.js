Function.prototype.before = function(beforeFn) {
    const originalFn = this;
    return function(...args) {
      beforeFn.apply(this, args);
      return originalFn.apply(this, args);
    }
  }
  
  Function.prototype.after = function(afterFn) {
    const originalFn = this;
    return function(...args) {
      const result = originalFn.apply(this, args);
      afterFn.apply(this, args);
      return result;
    }
  }

  let func = function(){
    console.log(2);
}

func = func.before((a=1) => {
    console.log(a);
}).after((b=3) => {
    console.log(b);
})

func()
//实现func.before()以及func.after()