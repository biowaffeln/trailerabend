import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoteRoutingModule } from './vote-routing.module';
import { VoteComponent } from './vote.component';
import { GuardsModule } from '../../guards/guards.module';
import { VotingCardModule } from './voting-card/voting-card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    VoteRoutingModule,
    VotingCardModule,
    FormsModule, ReactiveFormsModule,
    GuardsModule
  ],
  declarations: [VoteComponent]
})
export class VoteModule { }
