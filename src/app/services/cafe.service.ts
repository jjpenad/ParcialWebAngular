import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CafeModel } from '../models/CafeModel';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private apiUrl = "https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json";

  constructor(private http: HttpClient) { }

  getCafes(): Observable<CafeModel[]> {
    return this.http.get<Array<CafeModel>>(this.apiUrl);
  }

  /*getExhibitionbyId(idMuseum:number, idExhibition: number): Observable<Exhibition> {
    return this.http.get<Exhibition>(this.apiUrl + '/museums/' + idMuseum + '/exhibitions/ ' + idExhibition);
  }*/

}
