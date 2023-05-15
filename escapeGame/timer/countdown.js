'use strict';

var gameMinutesTxt=prompt("ゲーム時間(minutes)を入力してください");//分数を入力して数値を保存
if(isNaN(gameMinutesTxt) || gameMinutesTxt === '' || gameMinutesTxt == null){
    alert('数値を入力してください!このページは閉じるボタンを押すとリロードされます');
    location.reload();
}

var gameMinutes = parseInt(gameMinutesTxt);


// 現在時刻をミリ秒単位で取得
var startTimeMilliSecond = new Date().getTime();

// 現在時間にゲーム時間を引いた時間を取得
var endTimeMilliSecond = startTimeMilliSecond + gameMinutes * 60 * 1000;
//  A + 10分
console.log(endTimeMilliSecond);

// ゲーム時間の算出
function timeCalc(endTimeMilliSecond, startTimeMilliSecond){
    var remainingTimeMilliSecond = endTimeMilliSecond - startTimeMilliSecond; // 10分 = 終了時刻 - 開始時刻   
    console.log(remainingTimeMilliSecond);

    displayRemainingTime(remainingTimeMilliSecond);
    // 残り時間を出す処理
    
    refresh(endTimeMilliSecond);
};

function reCalc(endTimeMilliSecond){
    var nowTimeMilliSecond = new Date().getTime();
    console.log(endTimeMilliSecond);
    var remainingTimeMilliSecond = endTimeMilliSecond - nowTimeMilliSecond;
    console.log(remainingTimeMilliSecond);

    displayRemainingTime(remainingTimeMilliSecond);
    // 残り時間を出力する関数

    if(remainingTimeMilliSecond <= 100){
        remainingTimeMilliSecond = 0;
            // もし残り時間が0以下になったら終了演出
        document.getElementById('gameOver').textContent = "Game Over";
    }
    refresh(endTimeMilliSecond);
};

function refresh(endTimeMilliSecond) {
    setTimeout(function() {
        reCalc(endTimeMilliSecond);
    }, 100);
}

function displayRemainingTime(remainingTimeMilliSecond) {
    const milli = Math.floor(remainingTimeMilliSecond/10) % 100;
    const sec = Math.floor(remainingTimeMilliSecond/1000) % 60;
    const min = Math.floor(remainingTimeMilliSecond/1000/60) % 60;
    const hours = Math.floor(remainingTimeMilliSecond/1000/60/60) % 24;

    document.getElementById('timer').textContent = hours+":"+min+":"+sec+":"+milli;
}

timeCalc(endTimeMilliSecond, startTimeMilliSecond);