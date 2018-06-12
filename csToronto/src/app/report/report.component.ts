import { Component, OnInit, NgModule } from '@angular/core';
import { GeocodingService } from '../geocoding.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
// import { CheckBoxGroupComponent  } from './checkbox-group/checkbox-group.component';
// import { CheckBoxComponent } from './checkbox/checkbox.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  lat = 43.65;
  lng = -79.38;
  address: any;
  submittedProlemData: any;
  locationChosen = false;
  selectedItems: any = null;
  form: FormGroup = new FormGroup({
    items: new FormControl(null)
  });

  constructor(private _geocodingService: GeocodingService,
              private _authService: AuthService,
              private _router: Router ) { }

  ngOnInit() {
  }

  clickedLocation(event) {
    // coords of the clickedLocation is passed with event object.
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
    // retriving address from the latitude and longitude
    this._geocodingService.getAddFromLatLng(this.lat , this.lng)
                          .subscribe(response => {
                            if (response.status === 'OK') {
                              this.address = response.results[0].formatted_address;
                            }
                          });
  }

 /* onSubmit() {
    this._authService.registerProblem(this.submittedProlemData)
                      .subscribe(res => {
                        console.log(res);
                        this._router.navigate(['/report']);
                      });
  }*/
  onSubmit() {
   // this.submitted = true;
  }

  // TODO: Remove this when we're done
  // Added a diagnostic property to return a JSON representation of the model. It'll help to
  // see what you're doing during development; you've left yourself a cleanup note to discard it later.
  // get diagnostic() { return JSON.stringify(this.model); }
}
