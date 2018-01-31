import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveResultsComponent } from './live-results.component';
import { MatCardModule, MatCheckboxModule } from '@angular/material';
import { FirestoreModule } from '../../../services/firestore/firestore.module';
import { LoaderModule } from '../../../shared/loader/loader.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    LoaderModule,
    FirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LiveResultsComponent],
  exports: [LiveResultsComponent]
})
export class LiveResultsModule { }
