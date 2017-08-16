import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class NoteCallsService {

  constructor(private _http: Http) { }

  addNote(note: string) {
    return this._http.post('/addNote', {'textkey': 'textvalue'})
      .map(data => data.json())
      .toPromise()
  }

}
