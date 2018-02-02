import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { MatButtonModule } from '@angular/material';
import { LoaderModule } from '../../shared/loader/loader.module';

@NgModule({
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    MatButtonModule,
    LoaderModule
  ],
  declarations: [PlaylistComponent]
})
export class PlaylistModule { }
