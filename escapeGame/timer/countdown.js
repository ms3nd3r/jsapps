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
        displayRemainingTime(remainingTimeMilliSecond);
    }
    refresh(endTimeMilliSecond);
};

function refresh(endTimeMilliSecond) {
    setTimeout(function() {
        reCalc(endTimeMilliSecond);
    }, 50);
}

function displayRemainingTime(remainingTimeMilliSecond) {
    let milli = Math.floor(remainingTimeMilliSecond/10) % 100;
    if(milli < 10){milli = "0"+milli;}
    let sec = Math.floor(remainingTimeMilliSecond/1000) % 60;
    if(sec < 10){sec = "0"+sec;}
    let min = Math.floor(remainingTimeMilliSecond/1000/60) % 60;
    if(min < 10){min = "0"+min;}

    document.getElementById('timer').textContent = min+":"+sec+":"+milli;
}

timeCalc(endTimeMilliSecond, startTimeMilliSecond);