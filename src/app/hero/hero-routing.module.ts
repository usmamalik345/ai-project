import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { QuickstartComponent } from './quickStart/quickstart/quickstart.component';

const routes: Routes = [ ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
