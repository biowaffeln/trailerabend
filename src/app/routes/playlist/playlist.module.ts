import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    MatButtonModule
  ],
  declarations: [PlaylistComponent]
})
export class PlaylistModule { }
