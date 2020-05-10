import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "../all-users/user.service";
import {AllUsersComponent} from "../all-users/all-users.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
      HttpClientModule
  ],
  declarations: [Tab2Page, AllUsersComponent],
  providers: [UserService]
})
export class Tab2PageModule {}
