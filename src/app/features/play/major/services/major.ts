import { Injectable } from '@angular/core';
import majorsData from "../../../../../../public/assets/data/majors.json"
import { Major } from '../models/major';

@Injectable({
  providedIn: 'root',
})
export class MajorService {

  readonly majors: Major[] = majorsData.majors;

  getAll(): Major[] {
    return [...this.majors];
  }

  getById(id: string): Major | undefined {
    return this.majors.find( m => m.id === id );
  }

  getRandom(): Major {
    const index = Math.floor(Math.random() * this.majors.length);

    return this.majors[index];
  }
}
