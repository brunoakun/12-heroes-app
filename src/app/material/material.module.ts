import { NgModule } from '@angular/core'; 

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [],
  exports:[
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule

  ]
})
export class MaterialModule { }
