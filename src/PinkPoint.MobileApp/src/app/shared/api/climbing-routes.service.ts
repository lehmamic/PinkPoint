import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Guid } from 'guid-typescript';

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

  public queryClimbingSites(
    queryParam: { skip?: number; take?: number },
    correlationId = Guid.create(),
  ): Observable<ClimbingSiteResponse[]> {
    const params = new HttpParams()
      .set('skip', queryParam.skip !== undefined ? `${queryParam.skip}` : '0')
      .set('take', queryParam.take !== undefined ? `${queryParam.take}` : '10');

    const headers = new HttpHeaders()
      .set('CorrelationId', `${correlationId}`);

    return this.http.get<ClimbingSiteResponse[]>(`${environment.apiRootUri}/r/climbing-sites`, { params, headers });
  }

  public loadClimbingSite(id: string, correlationId = Guid.create()): Observable<ClimbingSiteResponse> {
    const headers = new HttpHeaders()
      .set('CorrelationId', `${correlationId}`);

    return this.http.get<ClimbingSiteResponse>(`${environment.apiRootUri}/r/climbing-sites/${id}`, { headers });
  }

  public queryClimbingRoutes(
    siteId: string,
    queryParam: { skip?: number; take?: number },
    correlationId = Guid.create(),
    ): Observable<ClimbingRouteResponse[]> {
    const params = new HttpParams()
      .set('skip', queryParam.skip !== undefined ? `${queryParam.skip}` : '0')
      .set('take', queryParam.take !== undefined ? `${queryParam.take}` : '10');

    const headers = new HttpHeaders()
      .set('CorrelationId', `${correlationId}`);

    return this.http.get<ClimbingRouteResponse[]>(
      `${environment.apiRootUri}/r/climbing-sites/${siteId}/climbing-routes`,
      { params, headers }
    );
  }

  public loadClimbingRoute(siteId: string, id: string, correlationId = Guid.create()): Observable<ClimbingRouteResponse> {
    const headers = new HttpHeaders()
      .set('CorrelationId', `${correlationId}`);

    return this.http.get<ClimbingRouteResponse>(`${environment.apiRootUri}/r/climbing-sites/${siteId}/climbing-routes/${id}`, { headers });
  }
}
