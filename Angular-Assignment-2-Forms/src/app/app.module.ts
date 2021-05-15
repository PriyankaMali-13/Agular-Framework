import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvertisementFormComponent } from './advertisement-form/advertisement-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ListAdvertisementComponent } from './list-advertisement/list-advertisement.component';
import { UpdateAdvertisementComponent } from './update-advertisement/update-advertisement.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementFormComponent,
    ListAdvertisementComponent,
    UpdateAdvertisementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
