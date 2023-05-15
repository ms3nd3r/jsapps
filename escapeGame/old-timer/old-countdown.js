'use strict';

var minutes_txt=prompt("ゲーム時間(分数)を入力してください");//分数を入力して数値を保存
var minutes = parseInt(minutes_txt);
var Cnt = 0; 
console.log(minutes);//値の受け渡しOK
//定数nowに現在時刻を代入
var now = new Date();
//定数restに未来時刻-現在時刻の計算結果を代入
var rest =new Date();
rest.setMinutes(now.getMinutes()+minutes); //制限時間をミリ秒化してセット
console.log("rest:"+rest);

//============グローバル変数がundifined
function countdown(rest,now){//分数,秒数,ミリ秒を算出する
    console.log(now);
    rest.setMinutes(rest.getTime()-now.getTime());//設定した終了時間から現在時間を引く
    //定数secに残り時間rest(ミリ秒)を秒単位にして代入
    const milli = Math.floor(rest) % 100;
    const sec = Math.floor(rest/1000) % 60;
    const min = Math.floor(rest/1000/60) % 60;
    const hours = Math.floor(rest/1000/60/60) % 24;
    //秒数を計算結果として出力

    const count = [hours,min,sec,milli];//計算結果が正常に動かない

    return count;
}
//===========ゴールは示されているのでいらないかも？＝＝＝＝＝＝＝＝＝＝＝＝
//let goal = new Date();

//goal.setHours(0);
//goal.setMinutes(minutes);
//goal.setSeconds(0);
//goal.setMilliseconds(0);//設定した瞬間の残り時間

//console.log(countdown(goal));

const counter = countdown(rest,now);
for(let i=0;i<4;i++){
    if(counter[i] < 10){
        counter[i] = '0'+counter[i];
    }    
}

const time = `00:${counter[1]}:${counter[2]}:${counter[3]}`;//時間を表示


document.getElementById('timer').textContent = time;

function recalc(){
//    console.log(countdown(goal));
    const counter = countdown(rest);
    for(let i=0;i<4;i++){
        if(counter[i] < 10){
            counter[i] = '0'+counter[i];
        }    
    }
    const time = `00:${counter[1]}:${counter[2]}:${counter[3]}`;
//    console.log(time);
    document.getElementById('timer').textContent = time;
    Cnt++;
    refresh();
}

function refresh(){
    setTimeout(recalc,100);
    if(counter[0]==0||counter[1]==0||counter[2]==0||counter[3]==0){
        return;
    }
}

recalc();

//残り時間が0になったら爆発音&爆発メッセージ（24時間のタイマーならToday is Over!!とか）
//Icelandのフォントを使ってみたい