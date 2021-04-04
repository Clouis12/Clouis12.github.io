// target something by class... use the .
// target something by id... use the #
$("#currentDay").text(moment().format('dddd, MMMM Do '));

for (let i = 0; i < 9; i++){
    let timeId = moment(9+i, 'H').format('ha'); 
    let currentTime = parseInt(moment().format("H"));  // MILITARY TIME 13 or 10... 
    let classHour = "present"; 

    if (i+9 < currentTime){
        classHour = "past"
    }else if (i+9 > currentTime){
        classHour = "future";
    }
        
    var baseCode = `<div class="time-block hour">${timeId}</div>
<textarea class="description ${classHour}" id='${timeId}'>${getEvent("#"+timeId)}</textarea>
<button class="saveBtn" onclick="saveEvent('#${timeId}')"><i class="fa fa-save"></i></button>`;
$(".container").append($("<div>").attr("class", "row").html(baseCode));
}

function saveEvent(timeId){
    localStorage.setItem(timeId,$(timeId).val());
    alert(`The ${timeId} event has been updated`);
}

function getEvent(timeId){
    return localStorage.getItem(timeId) || ""; 
}
