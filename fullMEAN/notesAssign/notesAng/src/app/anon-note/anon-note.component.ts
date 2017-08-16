import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NoteCallsService } from './../note-calls.service'

@Component({
  selector: 'app-anon-note',
  templateUrl: './anon-note.component.html',
  styleUrls: ['./anon-note.component.css']
})
export class AnonNoteComponent implements OnInit {
  note:string = ""
  notes:string[] = []

  constructor(private _notes: NoteCallsService) { }

  ngOnInit() {
  }

  addNote () {
    this._notes.addNote(this.note)
      .then (data => console.log(data))
      .catch (err => console.log(err))
  }

}
