'use strict';

function countdown(due){
    //定数nowに現在時刻を代入
    const now = new Date();
    //定数restに未来時刻-現在時刻の計算結果を代入
    const rest = due.getTime() - now.getTime();
    //定数secに残り時間rest(ミリ秒)を秒単位にして代入
    const milli = Math.floor(rest) % 100;
    const sec = Math.floor(rest/1000) % 60;
    const min = Math.floor(rest/1000/60) % 60;
    const hours = Math.floor(rest/1000/60/60) % 24;
    //秒数を計算結果として出力

    const count = [hours,min,sec,milli];

    return count;
}

let goal = new Date();

goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);
goal.setMilliseconds(99);

console.log(countdown(goal));

const counter = countdown(goal);
for(let i=0;i<4;i++){
    if(counter[i] < 10){
        counter[i] = '0'+counter[i];
    }    
}

const time = `${counter[0]}:${counter[1]}:${counter[2]}:${counter[3]}`;
console.log(time);

document.getElementById('timer').textContent = time;

function recalc(){
    console.log(countdown(goal));
    const counter = countdown(goal);
    for(let i=0;i<4;i++){
        if(counter[i] < 10){
            counter[i] = '0'+counter[i];
        }    
    }
    const time = `${counter[0]}:${counter[1]}:${counter[2]}:${counter[3]}`;
    console.log(time);
    document.getElementById('timer').textContent = time;

    refresh();
}

function refresh(){
    setTimeout(recalc,100);
}

recalc();

//残り時間が0になったら爆発音&爆発メッセージ（24時間のタイマーならToday is Over!!とか）
//Icelandのフォントを使ってみたい