const getSleepHours = day => {
    if (day === 'Monday'){
      return 8;
    }else if(day === 'Tuesday'){
      return 8;
    }else if(day === 'Wednesday'){
      return 8;
    }else if(day === 'Thursday'){
      return 8;
    }else if(day === 'Friday'){
      return 8;
    }else if(day === 'Saturday'){
      return 8;
    } else if (day === 'Sunday'){
      return 8;
    }else 
      console.log('thats not a day of the week')
  }
  
  
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')
  // console.log(getActualSleepHours())
  
  
  const getIdealSleepHours = () => {
    let idealHours = 8.5;
    return idealHours * 7;
  }
  // console.log(getIdealSleepHours())
  
  const calculateSleepDept = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    let overSleptHours = Math.abs(getIdealSleepHours() - getActualSleepHours());
    let underSleptHours = Math.abs(getActualSleepHours() - getIdealSleepHours());
      if(actualSleepHours === idealSleepHours){
        console.log('I got the perfect amount of sleep')
      } else if (actualSleepHours > idealSleepHours){
        console.log('I got more sleep than I needed. I overslep by ' +overSleptHours + 'hours')
      } else 
        console.log('I need more rest. I underslept by ' + underSleptHours + ' hours')
  }
  
  calculateSleepDept()