'use strict';

var gameMinutesTxt=prompt("ゲーム時間(minutes)を入力してください");//分数を入力して数値を保存
//入力値エラー処理を後ほど作成

var gameMinutes = parseInt(gameMinutesTxt);
var Cnt = 0; 

// ゲーム時間のm秒化
var gameMilliSec = gameMinutes * 60 * 1000 

// ゲーム時間の算出
function timeCalc(gameMilliSec){//分数,秒数,ミリ秒を算出する
    const milli = Math.floor(gameMilliSec/10) % 100;
    const sec = Math.floor(gameMilliSec/1000) % 60;
    const min = Math.floor(gameMilliSec/1000/60) % 60;
    const hours = Math.floor(gameMilliSec/1000/60/60) % 24;
    //秒数を計算結果として出力

    var time = [hours,min,sec,milli];

    return time;
}

var timeArray  = timeCalc(gameMilliSec);

// ゲーム時間の出力
function zeroCheck(timeArray){
    // timeArray.map(Number);
    for(let i=0;i<4;i++){
        if(timeArray[i] < 10){
            timeArray[i] = '0'+timeArray[i];
        }    
    }
    return(timeArray);
}
zeroCheck(timeArray);

const nowGameTime = timeArray[0]+":"+timeArray[1]+":"+timeArray[2]+":"+timeArray[3];
document.getElementById('timer').textContent = nowGameTime;

// ゲーム時間の減算
function countdown(gameMilliSec){
    gameMilliSec-=63;//1処理ごとに63m秒減算(見た目的にいい速度に見える)
    return gameMilliSec;
}

// 残りが0になったら終了演出
function gameOverCheck(gameMilliSec,endflg){
    if(gameMilliSec < 150){
        gameMilliSec = 0;
        timeArray = timeCalc(gameMilliSec);
        timeArray = zeroCheck(timeArray);
        var nowGameTimeZero = timeArray[0]+":"+timeArray[1]+":"+timeArray[2]+":"+timeArray[3];
        document.getElementById('timer').textContent = nowGameTimeZero;
        document.getElementById('gameOver').textContent = "Game Over";
        endflg=1;
    }
    return(endflg);
}

//以下再計算して繰り返す
function recalc(){
    var endflg = 0;
    console.log(gameMilliSec);
    endflg = gameOverCheck(gameMilliSec,endflg);
    if(endflg == 0){
        gameMilliSec = countdown(gameMilliSec);
        timeArray = timeCalc(gameMilliSec);
        timeArray = zeroCheck(timeArray);
        var nowGameTime = timeArray[0]+":"+timeArray[1]+":"+timeArray[2]+":"+timeArray[3];
        document.getElementById('timer').textContent = nowGameTime;
        refresh();
    }
}

function refresh(){
    setTimeout(recalc,63);
}

recalc();

