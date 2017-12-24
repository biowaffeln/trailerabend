import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardsModule } from '../../guards/guards.module';
import { VotingCardModule } from './voting-card/voting-card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VotingComponent } from './voting.component';
import { VotingRoutingModule } from './voting-routing.module';

@NgModule({
  imports: [
    CommonModule,
    VotingRoutingModule,
    VotingCardModule,
    FormsModule, ReactiveFormsModule,
    GuardsModule
  ],
  declarations: [VotingComponent]
})
export class VotingModule { }
