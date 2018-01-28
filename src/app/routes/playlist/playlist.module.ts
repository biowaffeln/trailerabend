import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';

@NgModule({
  imports: [
    CommonModule,
    PlaylistRoutingModule
  ],
  declarations: [PlaylistComponent]
})
export class PlaylistModule { }
