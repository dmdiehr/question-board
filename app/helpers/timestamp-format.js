import Ember from 'ember';

export function timestampFormat(params) {
  var dateObject = new Date(params[0]);
  var monthNumber = dateObject.getMonth();
  var monthString="";
  if (monthNumber===0){monthString="January";}
  if (monthNumber===1){monthString="February";}
  if (monthNumber===2){monthString="March";}
  if (monthNumber===3){monthString="April";}
  if (monthNumber===4){monthString="May";}
  if (monthNumber===5){monthString="June";}
  if (monthNumber===6){monthString="July";}
  if (monthNumber===7){monthString="August";}
  if (monthNumber===8){monthString="September";}
  if (monthNumber===9){monthString="October";}
  if (monthNumber===10){monthString="November";}
  if (monthNumber===11){monthString="December";}
  var dateNumber = dateObject.getDate();
  var dateString = "";
  if (dateNumber===1){dateString="1<sup class='ordinal'>st</sup>";}
  else if (dateNumber===2){dateString='2<sup class="ordinal">nd</sup>';}
  else if (dateNumber===3){dateString='3<sup class="ordinal">rd</sup>';}
  else if (dateNumber===21){dateString='21<sup class="ordinal">st</sup>';}
  else if (dateNumber===22){dateString='22<sup class="ordinal">nd</sup>';}
  else if (dateNumber===23){dateString='23<sup class="ordinal">rd</sup>';}
  else if (dateNumber===31){dateString='31<sup class="ordinal">st</sup>';}
  else {dateString=dateNumber+"<sup class='ordinal'>th</sup>";}
  var yearNumber = dateObject.getFullYear() % 100;
  var yearString = "<span class='apostrophe'>&rsquo;</span>"+yearNumber;
  var hourNumber = dateObject.getHours();
  var periodString='';
  if (hourNumber<11){periodString='am';}
  if (hourNumber>11){periodString='pm';}
  var minuteNumber = dateObject.getMinutes();
  var minuteString = "";
  if (minuteNumber<10){minuteString = "0"+minuteNumber;}
  else{minuteString=""+minuteNumber;}
  var timeString = (hourNumber%12)+":"+minuteString+periodString;
  var returnString = "<div class='timestamp-format'>"+monthString+ " "+dateString+" "+yearString+" at "+timeString+"</div>";
  return returnString;
}

export default Ember.Helper.helper(timestampFormat);
