import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Address {
  street: string;
  postCode: string;
  city: string;
  state: string;
  country: string;
}

export interface ClimbingSiteResponse {
  id: string;
  name: string;
  address: Address;
}

export type ClimbingRouteType =
  'SportClimbing' |
  'Bouldering';

export interface ClimbingRouteResponse {
  id: string;
  name: string;
  description: string;
  grade: string;
  type: ClimbingRouteType;
  imageUri: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClimbingRoutesService {

  constructor(private http: HttpClient) { }

  public queryClimbingSites(queryParam: { skip?: number; take?: number }): Observable<ClimbingSiteResponse[]> {
    const params = new HttpParams()
      .set('skip', queryParam.skip !== undefined ? `${queryParam.skip}` : '0')
      .set('take', queryParam.take !== undefined ? `${queryParam.take}` : '10');

    return this.http.get<ClimbingSiteResponse[]>(`${environment.apiRootUri}/climbingsites`, { params });
  }

  public queryClimbingRoutes(queryParam: { skip?: number; take?: number }): Observable<ClimbingRouteResponse[]> {
    const params = new HttpParams()
      .set('skip', queryParam.skip !== undefined ? `${queryParam.skip}` : '0')
      .set('take', queryParam.take !== undefined ? `${queryParam.take}` : '10');

    return this.http.get<ClimbingRouteResponse[]>(`${environment.apiRootUri}/climbingroutes`, { params });
  }
}
