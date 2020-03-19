var data = [];

var dataStr = "1<br>\
26th May 2019<br>\
Siddhi vinayak MANDIR, Bachus manat competed. Don't know what was the manta but it's completed<br>\
<br>\
<br>\
2<br>\
3rd Feb 2019<br>\
 <br>\
<br>\
<br>\
3<br>\
9th June 2019<br>\
Dosa center<br>\
<br>\
<br>\
4<br>\
9th June 2019<br>\
Dosa center<br>\
<br>\
<br>\
5<br>\
31st March 2019<br>\
Aquarium visit in surat well spend day don't know how to take good pic but some of them are just awesome<br>\
<br>\
<br>\
6<br>\
31st October 2019<br>\
May be this top is not your, is it?<br>\
<br>\
<br>\
7<br>\
17th Feb 2019<br>\
The pic on which you say awesome, I was just like chal kuch tho aacha laga :) <br>\
<br>\
<br>\
8<br>\
3rd Feb 2019<br>\
Namu's PICS nothing to say just enjoy the pic<br>\
<br>\
<br>\
9<br>\
3rd Feb 2019<br>\
One of my common way joke on which you laugh for PIC :D <br>\
<br>\
<br>\
10<br>\
20th April 2019<br>\
Visit to my home...:)) <br>\
<br>\
<br>\
11<br>\
16th March 2019<br>\
Tik tok vale babu :)<br>\
<br>\
<br>\
12<br>\
16th December 2018<br>\
OHHH cool till now oldest one..<br>\
<br>\
<br>\
13<br>\
3rd Feb 2019<br>\
Fir leya dil iss din ke pic ko :o<br>\
<br>\
<br>\
14<br>\
16th March 2019<br>\
Sala pic ke liye kuch be kare ga.. Right???<br>\
<br>\
<br>\
15<br>\
31st March 2019<br>\
Aquarium againnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn...... :) Mom ko boa thana tune jare hai!!!!!<br>\
<br>\
<br>\
16<br>\
21st April 2019<br>\
Family does not allow to meet after so much of try, so we meet unofficial as always :) <br>\
<br>\
<br>\
17<br>\
26th May 2019<br>\
After bapa ka darshan with darshan visit to marin drive<br>\
<br>\
<br>\
18<br>\
26th May 2019<br>\
Again and again drshn kya bola tha kem betha tha bane full raste :):):):):D<br>\
<br>\
<br>\
19<br>\
9th June 2019<br>\
Dosa center vala sukun <br>\
<br>\
<br>\
20<br>\
21st April 2019<br>\
Kalam beach vo kaas ke tera gale lagana :)<br>\
<br>\
<br>\
21<br>\
20th January 2019<br>\
Mera miky pic vala ha, not talking about you ;) ;)<br>\
<br>\
<br>\
22<br>\
9th june 2019<br>\
LAKHU LAKHU LAKHU<br>\
<br>\
<br>\
23<br>\
THE DAY kindly guess the date<br>\
Hope you remember this date!!!! if not it's ok STILL LOVE YOU (::)<br>\
<br>\
<br>\
"

  


var d = dataStr.split("<br><br><br>");
for(var i = 0; i<d.length-1; i++){
  var c = d[i].split("<br>");
  //console.log((c[0].split('.'))[1]);
  data.push({
    img: c[0]+ ".jpg",
    caption: c[1],
    desc: c[2]
  });
  //console.log(c[1]);
}

// console.log(data);


// "1.DeathNote<br>\
// <br>\
// Japanese Cartoon<br>\
// <br>\
// <br>\
// 2.FateUBW<br>\
// <br>\
// Japanese Cartoon<br>\
// <br>\
// <br>\
// 3.FateZero<br>\
// <br>\
// Japanese Cartoon<br>\
// <br>\
// <br>\
// 4.GoneGirl<br>\
// <br>\
// American Movie<br>\
// <br>\
// <br>\
// 5.Shameless<br>\
// <br>\
// American TV Series<br>\
// <br>\
// <br>\
// 6.theDarkKnight<br>\
// <br>\
// American Movie<br>\
// <br>\
// <br>\
// 7.ToyStory<br>\
// <br>\
// American Movie<br>\
// "