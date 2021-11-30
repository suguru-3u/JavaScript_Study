const { title } = require("process");

const fs = require('fs');

let fetchNotes = () => {
    try{
        let noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }catch(e){
        return [];
    }
};
let saveNotes = notes => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

// メモの追加
let addNote = (title,body) =>{

    let notes = fetchNotes();
    let note = {
        title,
        body
    }
 
    let duplicatiionNotes = notes.filter( note => note.title === title);

    if(duplicatiionNotes.length === 0){
        console.log(title,body);
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}
// メモ一覧の表示
let showAll = () =>{
    return notes = fetchNotes();
}
// メモの詳細表示
let readNote = title =>{
    let notes = fetchNotes();
    let filteredNote = notes.filter(note => note.title === title);
    return filteredNote[0];
}
// メモの削除
let removeNote = title =>{
    let notes = fetchNotes();
    let filteredNote = notes.filter(note => note.title !== title);
    saveNotes(filteredNote);
    return notes.length !== filteredNote.length;
}
// メモの表示結果
let logNote = note => {
    console.log('------------');
    console.log(`タイトル:${note.title}`)
    console.log(`内容:${note.body}`)
}
// モジュール化した関数
module.exports = {
    addNote,showAll,readNote,removeNote,logNote
};