lastValue=''
function getExprValue(expr) {
    return expr.latex.slice(6);
}

function checkInputChange() {
  const expressions = Calc.getExpressions();
  const expr = expressions[0];
  const current = getExprValue(expr);

  if (current !== lastValue) {
      lastValue = current;
      functiontorun=Number(getExprValue(expressions[0]))
      parameters=[getExprValue(expressions[1]),getExprValue(expressions[2]),(getExprValue(expressions[3])),(getExprValue(expressions[4])),(getExprValue(expressions[5]))]
      
      Calc.setExpression({
          id:(watchID+'6'),
          latex:String.raw`V_{6}=${(functions[functiontorun])(parameters[0],parameters[1],parameters[2],parameters[3],parameters[4])}`
      })
  }
}
setInterval(checkInputChange, 100);
