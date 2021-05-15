import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementFormComponent } from './advertisement-form/advertisement-form.component';
import { ListAdvertisementComponent } from './list-advertisement/list-advertisement.component';
import { UpdateAdvertisementComponent } from './update-advertisement/update-advertisement.component';

const routes: Routes = [
  { component: AdvertisementFormComponent, path: 'add' },
  { component: ListAdvertisementComponent, path: 'list' },
  { component: UpdateAdvertisementComponent, path: 'update' },
  { component: UpdateAdvertisementComponent, path: 'update/:title' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
