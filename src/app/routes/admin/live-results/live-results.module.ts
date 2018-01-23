import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveResultsComponent } from './live-results.component';
import { MatCardModule } from '@angular/material';
import { FirestoreModule } from '../../../services/firestore/firestore.module';
import { LoaderModule } from '../../../shared/loader/loader.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    LoaderModule,
    FirestoreModule
  ],
  declarations: [LiveResultsComponent],
  exports: [LiveResultsComponent]
})
export class LiveResultsModule { }
