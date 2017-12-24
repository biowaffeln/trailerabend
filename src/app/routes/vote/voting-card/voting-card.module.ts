import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingCardComponent } from './voting-card.component';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [VotingCardComponent],
  exports: [VotingCardComponent],
})
export class VotingCardModule { }
