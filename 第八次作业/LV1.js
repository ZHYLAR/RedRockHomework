Function.prototype.mycall = function (context) {
    context.fn = this;
    context.fn();
    delete context.fn;
  }

  Function.prototype.myapply = function () {
    const [ctx, args] = arguments; 
    ctx.fn = this || window;
    const result = ctx.fn(...args);
    delete ctx.fn;
    return result;
  }



 