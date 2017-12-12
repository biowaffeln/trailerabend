import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoteRoutingModule } from './vote-routing.module';
import { VoteComponent } from './vote.component';
import { GuardsModule } from '../../guards/guards.module';

@NgModule({
  imports: [
    CommonModule,
    VoteRoutingModule,
    GuardsModule
  ],
  declarations: [VoteComponent]
})
export class VoteModule { }
