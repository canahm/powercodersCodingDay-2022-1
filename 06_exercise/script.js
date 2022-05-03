let day=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]
const weekNumbersToWords = day => {
    if (day < 1 || day > 7) return null
 
    switch (day) {
     case 1:
       return 'Sunday'
       break
     case 2:
       return 'Monday'
       break
     case 3:
       return 'Tuesday'
       break
     case 4:
       return 'Wednesday'
       break
     case 5:
       return 'Thursday'
       break
     case 6:
       return 'Friday'
       break
     case 7:
       return 'Saturday'
    }
 }
 console.log(weekNumbersToWords(3))
