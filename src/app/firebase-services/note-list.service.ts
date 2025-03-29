import { Injectable, inject } from '@angular/core';
import { collectionData, Firestore, collection, doc, onSnapshot, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/note.interface';


@Injectable({
  providedIn: 'root'
})
export class NoteListService {

  trashNotes: Note[] = [];
  normalNotes: Note[] = [];

  unsubNotes;
  unsubTrash;


  firestore = inject(Firestore);


  constructor() {
    this.unsubNotes = this.subNotesList();
    this.unsubTrash = this.subTrashList();
  }


  async addNote(item: Note){
    await addDoc(this.getNotesRef(), item).catch(
      (err) => { console.error(err)}
    ).then(
      (docRef) => {console.log("Document written with ID: ", docRef?.id); }
    )
  }

  

  ngOnDestroy() {
    this.unsubNotes();
    this.unsubTrash();
  }


  subNotesList() {
    return onSnapshot(this.getNotesRef(), (list) => {
      this.normalNotes = [];
      list.forEach(element => {
        this.normalNotes.push(this.setNoteObject(element.data(), element.id));
      });
    });
  }


  subTrashList() {
    return onSnapshot(this.getTrashRef(), (list) => {
      this.trashNotes = [];
      list.forEach(element => {
        this.trashNotes.push(this.setNoteObject(element.data(), element.id));
      });
    });
  }

  getNotesRef() {
    return collection(this.firestore, 'notes');
  }

  getTrashRef() {
    return collection(this.firestore, 'trash');
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }

  setNoteObject(obj: any, id: string): Note {
    return {
      id: id,
      type: obj.type || "note",
      title: obj.title || "",
      content: obj.content || "",
      marked: obj.marked || false,
    }
  }

}
