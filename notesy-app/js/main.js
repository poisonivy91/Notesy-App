import NotesAPI from "./NotesAPI.js";

NotesAPI.saveNotes({
    title: "New Note!",
    body: "I am a new note."
});



console.log(NotesAPI.getAllNotes());