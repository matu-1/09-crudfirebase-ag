import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { API } from '../constants/api';
import { map } from 'rxjs/operators';
import { setParams } from '../utils/param';

@Injectable({
  providedIn: 'root',
})
export class HeroeService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get(API.HEROE.GET_ALL)
      .pipe(
        map((res: any): HeroeModel[] =>
          res == null
            ? []
            : Object.keys(res).map((key) => ({ ...res[key], id: key }))
        )
      );
  }

  create(heroe: HeroeModel) {
    return this.http.post(API.HEROE.GET_ALL, heroe).pipe(
      map((res: any) => {
        heroe.id = res.name;
        return heroe;
      })
    );
  }

  update(heroe: HeroeModel) {
    const { id, ...body } = heroe;
    return this.http.put<HeroeModel>(setParams(API.HEROE.EDIT, { id }), body);
  }

  getById(id: string) {
    return this.http.get<HeroeModel>(setParams(API.HEROE.EDIT, { id })).pipe(
      map((res: any) => {
        res.id = id;
        return res;
      })
    );
  }

  delete(id: string) {
    return this.http.delete<HeroeModel>(setParams(API.HEROE.EDIT, { id }));
  }
}
