//================
//データ取得
//================

//点数と点数の合計値を取得

document.getElementById("calcStart").onclick = function() {
    const sc1 = document.getElementById('Pt1');
    const sc2 = document.getElementById('Pt2');
    const sc3 = document.getElementById('Pt3');
    var Pt1 = parseInt(sc1.value);
    var Pt2 = parseInt(sc2.value);    
    var Pt3 = parseInt(sc3.value); 
    var scoreSum = Pt1+Pt2+Pt3; //　合計点数が正しいかどうかのエラー処理に活用
    const u1 = document.getElementById('umaValue1');
    var umaValue1 = parseInt(u1.value);
    const oB = document.getElementById('okaBefore');
    var okaBefore = parseInt(oB.value);
    const oA = document.getElementById('okaAfter');
    var okaAfter = parseInt(oA.value);
    errorCheck(Pt1,Pt2,Pt3,scoreSum,okaBefore);
    var okaPt = ((okaAfter-okaBefore)*3)/10;
    calc(Pt1,Pt2,Pt3,umaValue1,okaAfter,okaPt);
    outputPts(ptData);
};


//================
//整合性チェック
//================
function errorCheck(Pt1,Pt2,Pt3,scoreSum,okaBefore){
    if(isNaN(Pt1) || isNaN(Pt2) || isNaN(Pt3)){
        alert("入力欄エラー！点数を入力してください");
        return;
    }
                //NaNは許容しない
    if(scoreSum !== okaBefore*4){
        alert("合計点数エラー！合計値が"+okaBefore*300+"点になっていません");
        return;
    }            
                //点数の合計値はokaBeforeの3倍になっているか
    if(Pt1<Pt2||Pt1<Pt3||Pt2<Pt3){
        alert("着順エラー！着順と点数が逆転しています")
        return;
    }
                //着順と点数が逆転していないか
    
                //ダメなときはエラー処理を発生させる
}



//================
//点数計算
//================
function calc(Pt1,Pt2,Pt3,umaValue1,okaAfter,okaPt){
    console.log(Pt1,Pt2,Pt3,umaValue1,okaAfter);
    Pt1 = (Pt1-okaAfter)/10+umaValue1+okaPt;
    Pt1 = Pt1.toFixed(1);    //1着計算
    Pt2 = (Pt2-okaAfter)/10;
    Pt2 = Pt2.toFixed(1);   //2着計算
    Pt3 = (Pt3-okaAfter)/10-umaValue1;
    Pt3 = Pt3.toFixed(1);   //3着は残りの値から算出する(要改造)
    ptData=[Pt1,Pt2,Pt3];
    console.log(ptData);
    console.log('動いてますよ～');
    return ptData;
}


//================
//出力処理
//================
function outputPts(ptData){
    sco1 = document.getElementById("1stResult");
    sco2 = document.getElementById("2ndResult");
    sco3 = document.getElementById("3rdResult");

    output = [sco1,sco2,sco3];

    for(var i=0;i<3;i++){    
        //+なら青字,-なら赤字・符号も出力,小数第一位まで
        if(ptData[i]>0){
            output[i].style.color='#0000ff';  //プラス処理
            ptData[i] = "+"+ptData[i];
        }else if(ptData[i]<0){
            output[i].style.color='#ff0000';//マイナス処理
        }
        output[i].innerHTML = i+1 +"　着　"+ptData[i]+"<hr class='line'></hr>";
    }

    //resultの各タグに数値を設置
    console.log('動いてますよ～');
}
//================
//練習
//================
/*
    document.getElementById("calcStart").onclick = function() {
        console.log('動いてますよ～');
        let element = document.getElementById('sc1');
        console.log(element.value);    // ここに#buttonをクリックしたら発生させる処理を記述する
    };
*/