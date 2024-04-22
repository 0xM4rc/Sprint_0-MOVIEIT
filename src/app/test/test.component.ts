import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export interface TestItem {
  id?: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  testItems: TestItem[] = [];
  newItem: TestItem = { name: '', description: '' };

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.firestore.collection<TestItem>('testItems').snapshotChanges().subscribe(data => {
      this.testItems = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as TestItem
        };
      });
    });
  }

  addItem() {
    if (this.newItem.name && this.newItem.description) {
      this.firestore.collection('testItems').add(this.newItem).then(() => {
        console.log('Item added successfully!');
        this.newItem = { name: '', description: '' }; // Reset
      }).catch(error => {
        console.error('Error adding item:', error);
      });
    }
  }
}
