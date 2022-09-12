

export function getMonth(date = new Date()){
    const month = date.getMonth();
    const year = date.getFullYear();
    let firstDayOfTheMonth = new Date(year,month,1).getDay();
    let col = 5;

    let currentMonthCount = -(0 + firstDayOfTheMonth%7);
    if(+firstDayOfTheMonth === 0){
        currentMonthCount = -6;
        col = 6;
    }
    const daysMatrix = new Array(col).fill([]).map((item)=>{
       return new Array(7).fill(null).map(()=>{
            currentMonthCount++;
            return new Date(year,month,currentMonthCount);
        })
    })
    return daysMatrix;
}


