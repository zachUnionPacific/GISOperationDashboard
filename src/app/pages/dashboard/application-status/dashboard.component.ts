import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'Dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class Dashboard {
  // keep this simple; you can flesh it out later
  directory = [
    { name: 'RailView', desc: 'Viewer for rail assets & incidents', team: 'Geo Ops' },
    { name: 'TrackWatch', desc: 'Track condition monitoring & alerts', team: 'Geo Ops' },
    { name: 'Spatial API', desc: 'Internal geospatial REST API', team: 'Platform' },
    { name: 'Tile Service', desc: 'Vector/raster tile rendering & CDN', team: 'Platform' },
  ];
}