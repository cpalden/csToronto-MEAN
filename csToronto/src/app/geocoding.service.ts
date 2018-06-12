import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  private _apiKEY = 'AIzaSyAuNre_l4nGqY4gP9SeQD-PyGbfuBzB168';
  private _locationUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=`;

  constructor(private _http: HttpClient) { }

  getAddFromLatLng(latitude: number, longitude: number): Observable<any> {
    // const joinedLatlng = [];
    // if (latitude) {joinedLatlng.push(latitude); }
    // if (longitude) {joinedLatlng.push(longitude); }
    // const url = `${this._locationUrl}${joinedLatlng.join(',')}`;

    return this._http.get(this._locationUrl + latitude + ',' + longitude + '&key=' + this._apiKEY)
                     .pipe(map(response => {
                       return response;
                          }),
                          retry(2),
                          catchError(error => {
                            return throwError(error.message || 'No address returned!');
                          })
                        );
  }
}
