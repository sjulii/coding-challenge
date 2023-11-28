function arrayDiff(a, b) {
    let result=[]
    for(let i =0; i<a.length; i++){
      let c=0
      for (let j=0; j<b.length;j++){
        if(b[j]!==a[i])
          c++
      }
      if(c===b.length)
        result.push(a[i])
    }
  return(result)
  }