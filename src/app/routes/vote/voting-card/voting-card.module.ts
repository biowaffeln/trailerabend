import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingCardComponent } from './voting-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VotingCardComponent],
  exports: [VotingCardComponent],
})
export class VotingCardModule { }
