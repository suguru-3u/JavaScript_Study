// 関数のモジュール
const notes = require('./node.js');
// ファイルシステムのモジュール読み込み
const fs = require('fs');
// OSモジュールの読み込み
// const os = require('os');
const yargs = require('yargs');

// コマンドライン周りの処理が行えるモジュール
const ysrgs = require('yargs')
const argv = ysrgs.argv;


// コマンドラインから文字列の情報を取得
let commond = argv._[0];
// console.log(`コマンド　${commond}`);

// 取得した文字列ごとに処理を分岐化させる
if(commond === 'add'){
    let note = notes.addNote(argv.title,argv.body);
    if(note){
        console.log('保存されました');
        notes.logNote(note);
    }else{
        console.log('保存できませんでした');
        console.log('タイトルが重複しています');
    }
}else if(commond === 'list'){
    let allNotes =  notes.showAll();
    console.log(`表示数:${allNotes.length}`);
    console.log('------------');
    allNotes.forEach(element => {
        console.log(element.title);
    });
}else if(commond === 'read'){
    let note = notes.readNote(argv.title);
    if(note){
        console.log('見つかりました');
        notes.logNote(note);
    }else{
        console.log('データが見つかりませんでした');
    }
}else if(commond === 'remove'){
    let noteRemove = notes.removeNote(argv.title);
    let message = noteRemove?'削除されました':'削除に失敗しました';
    console.log(message);
}