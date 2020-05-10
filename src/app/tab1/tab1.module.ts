import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import {AllUsersComponent} from "../all-users/all-users.component";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "../all-users/user.service";
import {NavComponent} from "../nav/nav.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    HttpClientModule
  ],
    declarations: [Tab1Page, NavComponent]
})
export class Tab1PageModule {}
