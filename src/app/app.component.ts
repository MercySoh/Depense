import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {}

  async initializeApp() {
    // Initialize storage
    this._storage = await this.storage.create();
  }
}
