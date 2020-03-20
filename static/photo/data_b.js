var data = [];

var dataStr = "mix1<br>\
<br>\
Photographer Mix<br>\
<br>\
<br>\
mix2<br>\
<br>\
Sleeping Mix<br>\
<br>\
<br>\
mix3<br>\
<br>\
Model Mix<br>\
<br>\
<br>\
mix4<br>\
<br>\
Angry Mix<br>\
<br>\
<br>\
mix5<br>\
<br>\
Happy Mix<br>\
<br>\
<br>\
mix6<br>\
<br>\
Pretty Mix<br>\
<br>\
<br>\
mix7<br>\
<br>\
Gangster Mix<br>\
<br>\
<br>\
mix8<br>\
<br>\
Sunflower Mix<br>\
<br>\
<br>\
mix9<br>\
<br>\
Wow Mix<br>\
<br>\
<br>\
mix10<br>\
<br>\
Scary Mix<br>\
<br>\
<br>\
mix11<br>\
<br>\
Rajnikanth Mix<br>\
<br>\
<br>\
mix12<br>\
<br>\
Fat Mix<br>\
<br>\
<br>\
"
  


var d = dataStr.split("<br><br><br>");
var cap = ["#VINUM", "YO YO YO!!!!!", "NAMU VIPS(YO)", ":)", "VIPSNAMU", "PRESENTED - VIPDEVS", " :) ", "NAMRATA AND VIPUL"];
var dec = [

  "तू नज़्म नज़्म सा मेरे\n" +
  "होंठो पे ठहर जा\n" +
  "मैं ख्वाब ख्वाब सा तेरी\n" +
  "आँखों में जागूं रे\n" +
  "तू इश्क इश्क सा मेरे\n" +
  "रूह में आ के बस जा\n" +
  "जिस ओर तेरी सहनाई\n" +
  "उस ओर मैं भागूं रे  <br><br>#विनम",

  "इक वारि आ भी जा यारा\n" +
  "इक वारि आ..\n" +
  "राह ताकुं मैं बेचारा\n" +
  "इक वारि आ..\n" +
  "\n" +
  "ढल रही शाम है\n" +
  "दिल तेरे नाम है\n" +
  "इसकी आदत बनी है तेरी यारियां\n" +
  "\n" +
  "चाँद हूँ मैं, तू है तारा\n" +
  "इक वारि आ\n" +
  "इक वारि आ भी जा यारा\n" +
  "इक वारि आ.." +
  "<br><br>#विनम",


  "एन्ना सोना क्यूँ रब्ब ने बनाया.......\n" +
  "आवां जावां ते मैं यारा नु मनावां\n" +
  "आवन जावन ते मैं यारा नु मनावां\n" +
  "एन्ना सोना एन्ना सोना\n" +
  "एन्ना सोना ओ..\n" +
  "\n" +
  "एन्ना सोना क्यूँ रब्ब ने बनाया\n" +
  "एन्ना सोना ओ..\n" +
  "एन्ना सोना ओ..\n" +
  "एन्ना सोना एन्ना सोना..\n" +
  "\n" +
  "कोल होवे ते सेख लगदा ऐ\n" +
  "दूर जावे ते दिल जल्दा ऐ\n" +
  "कहदी अग्ग नाल रब्ब ने बनाया\n" +
  "रब्ब ने बनाया, रब्ब ने बनाया\n" +
  "\n" +
  "एन्ना सोना क्यूँ रब्ब ने बनाया\n" +
  "एन्ना सोना क्यूँ रब्ब ने बनाया\n" +
  "आवां जावां ते मैं यारा नु मनावां\n" +
  "आवां जावां ते मैं यारा नु मनावां" +
  "<br><br>#विनम",

  "बावरा मन राह ताके तरसे रे\n" +
  "नैना भी मल्हार बनके बरसे रे\n" +
  "बावरा मन राह ताके तरसे रे\n" +
  "नैना भी मल्हार बनके बरसे रे\n" +
  "\n" +
  "आधे से अधुरे से\n" +
  "बिन तेरे हम हुवे\n" +
  "फीका लगे है मुझको सारा जहां\n" +
  "\n" +
  "बावरा मन राह ताके तरसे रे\n" +
  "नैना भी मल्हार बनके बरसे रे\n" +
  "\n" +
  "ये कैसी ख़ुशी है\n" +
  "जो मॉम सी है\n" +
  "आँखों के रस्ते हंसके पिघलने लगी\n" +
  "मन्नत के धागे ऐसे हैं बांधे\n" +
  "टूटे ना रिश्ता जुडके तुझसे कभी\n" +
  "टूटे ना रिश्ता जुडके तुझसे कभी\n" +
  "\n" +
  "सौ बालाएं ले गया तू सर से रे\n" +
  "नैना ये मल्हार बनके बरसे रे\n" +
  "\n" +
  "बावरा मन राह ताके तरसे रे\n" +
  "नैना भी मल्हार बनके बरसे रे" +
  "<br><br>#विनम",


];
for(var i = 1; i<9; i++){
  var c = d[i].split("<br><br>");
  //console.log((c[0].split('.'))[1]);
  data.push({
    img: i+ ".jpg",
    caption: cap[Math.floor(Math.random() * cap.length)],
    desc: dec[Math.floor(Math.random() * dec.length)]
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