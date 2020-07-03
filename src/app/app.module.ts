import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import {MatCardModule} from '@angular/material/card';
import { FeverticSyrupComponent } from './products/fevertic-syrup/fevertic-syrup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HepaLivDsSyrupComponent } from './products/hepa-liv-ds-syrup/hepa-liv-ds-syrup.component';
import { MRonSyrupComponent } from './products/m-ron-syrup/m-ron-syrup.component';
import { NaveDanLepComponent } from './products/nave-dan-lep/nave-dan-lep.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProstocareCapsuleComponent } from './products/prostocare-capsule/prostocare-capsule.component';
import { SpermCareCapsuleComponent } from './products/sperm-care-capsule/sperm-care-capsule.component';
import { TulsiAmritComponent } from './products/tulsi-amrit/tulsi-amrit.component';
import { TulsiDsCoughSyrupComponent } from './products/tulsi-ds-cough-syrup/tulsi-ds-cough-syrup.component';
import { UricDsCapsuleComponent } from './products/uric-ds-capsule/uric-ds-capsule.component';
import { ZomocidSyrupComponent } from './products/zomocid-syrup/zomocid-syrup.component';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FeverticSyrupComponent,
    HepaLivDsSyrupComponent,
    MRonSyrupComponent,
    NaveDanLepComponent,
    ProductListComponent,
    ProstocareCapsuleComponent,
    SpermCareCapsuleComponent,
    TulsiAmritComponent,
    TulsiDsCoughSyrupComponent,
    UricDsCapsuleComponent,
    ZomocidSyrupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
