
monthChanged = false
function onclickEvent(Date, filteredDateEvents) {
   
    var event = filteredDateEvents[0]
    if(event != undefined && !monthChanged) {
        window.open(event.to, '_blank');
        return false
    }
    return false
}   
const dates  = document.querySelectorAll('ul.table li')
if(dates) {
    calenderNode = document.createElement("div")
    calenderExplan = document.createElement("h4")
    calenderExplan.setAttribute('style', 'padding-left:50px;')
    calenderExplan.innerHTML = "日期下有黑點即為當日有影片，點選另開分頁"
    calenderNode.setAttribute('id', 'color-calendar')
    calenderNode.setAttribute('style', 'padding-left:30px;')
    table = document.querySelector('ul.table')
    table.parentElement.appendChild(calenderNode)
    table.parentElement.appendChild(calenderExplan)
    table.remove()
    var calender = new Calendar({
        calendarSize: "large",
        theme: "basic",
        customWeekdayValues: ["日", "一", "二", "三", "四", "五", "六"],
        dateChanged : ( Date, filteredDateEvents)=> {
            monthChanged = onclickEvent(Date, filteredDateEvents)
        },
        selectedDateClicked : ( Date, filteredDateEvents)=> {
     
            monthChanged = onclickEvent(Date, filteredDateEvents)
        },
        monthChanged : ( Date, filteredDateEvents)=> {
            monthChanged = true
        },
    });
    events_data = []
    
    dates.forEach(function(element) {
        var link = element.getElementsByTagName('a')[0]
        date = link.innerHTML
        video_link = link.getAttribute('href');
        events_data.push({
            start: date + 'T00:00:00',
            end: date + 'T00:00:00',
            date: date,
            to: video_link
            })
        
    })
    calender.setEventsData(events_data)
    monthChanged = false
}