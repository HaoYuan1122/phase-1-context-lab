/* Your Code Here */
function createEmployeeRecord(array){
    let obj={
        firstName:array[0],
        familyName:array[1],
        title:array[2],
        payPerHour:array[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    return obj
}
function createEmployeeRecords(arrays){
    return arrays.map(createEmployeeRecord)
}
function createTimeInEvent(employeeRecord, dateStamp){
    let obj={}
    obj.type='TimeIn'
    obj.hour=parseInt(dateStamp.split(' ')[1])
    obj.date=dateStamp.split(' ')[0]
    employeeRecord.timeInEvents.push(obj)
    return employeeRecord
}
function createTimeOutEvent(employeeRecord, dateStamp){
    let obj={}
    obj.type='TimeOut'
    obj.hour=parseInt(dateStamp.split(' ')[1])
    obj.date=dateStamp.split(' ')[0]
    employeeRecord.timeOutEvents.push(obj)
    return employeeRecord
}
// function hoursWorkedOnDate(employeeRecord, date){
//     const timeInOjb=employeeRecord.timeInEvents.find(e=>e.date===date)
//     const timeOutOjb=employeeRecord.timeOutEvents.find(e=>e.date===date)
//     return (timeOutOjb.hour-timeInOjb.hour)/100
// }
// function wagesEarnedOnDate(employeeRecord, date){
//     return hoursWorkedOnDate(employeeRecord, date)*employeeRecord.payPerHour
// }
// function allWagesFor(employeeRecord){
//     const dates=employeeRecord.timeInEvents.map(e=>e.date)
//     const wagesOnEachDate=dates.map(date=>wagesEarnedOnDate(employeeRecord, date))
//     return wagesOnEachDate.reduce((accumulator,element)=>{
//         accumulator+=element
//         return accumulator
//     },0)
// }

// function calculatePayroll(arrayOfEmployeeRecords){
//     const wagesForEachEmployee=arrayOfEmployeeRecords.map(allWagesFor)
//     return wagesForEachEmployee.reduce((accumulator,element)=>{
//         accumulator+=element
//         return accumulator
//     },0)
// }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

