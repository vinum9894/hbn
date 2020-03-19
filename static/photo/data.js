var data = [];

var dataStr = "1<br>\
test<br>\
Photographer Mix let's take moment ans remeber all good deeds<br>\
<br>\
<br>\
2<br>\
<br>\
Sleeping Mix<br>\
<br>\
<br>\
3<br>\
<br>\
Model Mix<br>\
<br>\
<br>\
4<br>\
<br>\
Angry Mix<br>\
<br>\
<br>\
5<br>\
<br>\
Happy Mix<br>\
<br>\
<br>\
6<br>\
<br>\
Pretty Mix<br>\
<br>\
<br>\
7<br>\
<br>\
Gangster Mix<br>\
<br>\
<br>\
8<br>\
<br>\
Sunflower Mix<br>\
<br>\
<br>\
9<br>\
<br>\
Wow Mix<br>\
<br>\
<br>\
10<br>\
<br>\
Scary Mix<br>\
<br>\
<br>\
11<br>\
<br>\
Rajnikanth Mix<br>\
<br>\
<br>\
12<br>\
<br>\
Fat Mix<br>\
<br>\
<br>\
13<br>\
test<br>\
Photographer Mix let's take moment ans remeber all good deeds<br>\
<br>\
<br>\
14<br>\
test<br>\
Photographer Mix let's take moment ans remeber all good deeds<br>\
<br>\
<br>\
15<br>\
test<br>\
Photographer Mix let's take moment ans remeber all good deeds<br>\
<br>\
<br>\
16<br>\
test<br>\
Photographer Mix let's take moment ans remeber all good deeds<br>\
<br>\
<br>\
17<br>\
test<br>\
Photographer Mix let's take moment ans remeber all good deeds<br>\
<br>\
<br>\
18<br>\
test<br>\
Photographer Mix let's take moment ans remeber all good deeds<br>\
<br>\
<br>\
19<br>\
test<br>\
Photographer Mix let's take moment ans remeber all good deeds<br>\
<br>\
<br>\
20<br>\
test<br>\
Photographer Mix let's take moment ans remeber all good deeds<br>\
<br>\
<br>\
21<br>\
test<br>\
Photographer Mix let's take moment ans remeber all good deeds<br>\
<br>\
<br>\
22<br>\
test<br>\
Photographer Mix let's take moment ans remeber all good deeds<br>\
<br>\
<br>\
23<br>\
test<br>\
Photographer Mix let's take moment ans remeber all good deeds<br>\
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