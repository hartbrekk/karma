import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { KarmaSharedModule } from 'app/shared/shared.module';
import { KarmaCoreModule } from 'app/core/core.module';
import { KarmaAppRoutingModule } from './app-routing.module';
import { KarmaHomeModule } from './home/home.module';
import { KarmaEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    KarmaSharedModule,
    KarmaCoreModule,
    KarmaHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    KarmaEntityModule,
    KarmaAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class KarmaAppModule {}
