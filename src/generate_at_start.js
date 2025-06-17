// Note that, unless this has been set up when making the graph, it will erase it
const expressions=Calc.getExpressions()
for (let i = 0; i < 7; i++) {
  console.log(expressions[i])
  if ((expressions[i] !== undefined)) {
      if ((expressions[i].id)===(watchID+i.toString())) {
          isAlreadyGenerated = true
      }
  }
}

if (!isAlreadyGenerated) {
    Calc.setBlank()
    for (let i = 0; i < 7; i++) {
      Calc.setExpression({
        latex: String.raw`V_{${i}}=0`,
        id: watchID + i.toString(),
        secret: true
      });
    }
}
Calc.removeExpression({id:'1'})
