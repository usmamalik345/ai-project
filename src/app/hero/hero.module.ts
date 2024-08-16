import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { QuickstartComponent } from './quickStart/quickstart/quickstart.component';
import { UsecasesComponent } from './usecases/usecases.component';
import { FrequentlyAskedQuestionsComponent } from './frequently-asked-questions/frequently-asked-questions.component';


@NgModule({
  declarations: [
    HeroBannerComponent,
    QuickstartComponent,
    UsecasesComponent,
    FrequentlyAskedQuestionsComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
   
  ],
  exports: [ HeroBannerComponent,QuickstartComponent,UsecasesComponent,FrequentlyAskedQuestionsComponent]

})
export class HeroModule { }
