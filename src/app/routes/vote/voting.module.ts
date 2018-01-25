import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardsModule } from '../../guards/guards.module';
import { VotingCardModule } from './voting-card/voting-card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VotingComponent } from './voting.component';
import { VotingRoutingModule } from './voting-routing.module';
import { LoaderModule } from '../../shared/loader/loader.module';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    VotingRoutingModule,
    VotingCardModule,
    MatButtonModule,
    FormsModule, ReactiveFormsModule,
    LoaderModule,
  ],
  declarations: [VotingComponent]
})
export class VotingModule { }
