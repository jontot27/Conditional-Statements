let fil = 74;
let sci = 74;
let eng = 74;
let mat = 74;
let his = 74;

console.log(`English = ${eng}
Science = ${sci}
Filipino = ${fil}
Math = ${mat}
History = ${his}
Ave: ${grade=(fil + sci + eng + mat + his) / 5}`);

if (grade > 100){
    console.log(`Invalid Grade`);
}else if(grade >= 98){
    console.log(`With Highest honor`);
}else if (grade >= 95){
    console.log(`With High Honor`);
}else if (grade >= 90){
    console.log(`With Honor`);
}else if (grade >= 75){
    console.log(`Passed`);
}else if (grade <= 74){
    console.log(`Failed`);
}else{
    console.log(`Invalid Grade`);
}

if(grade >= 101){
    console.log(`Grade is Invalid. See you Advisor.`);
}else if (grade >=101){
    console.log(`Congrat!`);
}else{
    console.log(`See you next Year!`);
}
