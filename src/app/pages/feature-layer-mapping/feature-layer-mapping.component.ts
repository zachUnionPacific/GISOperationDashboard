import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FeatureLayer { id: string; name: string; serviceUrl: string; mapsUsedIn: string[]; ownerTeam: string; }

@Component({
  selector: 'app-feature-layer-mapping',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feature-layer-mapping.component.html',
  styleUrls: ['./feature-layer-mapping.component.css']
})
export class FeatureLayerMappingComponent {
  layers: FeatureLayer[] = [
    { id: 'layers/rail-lines', name: 'Rail Lines',    serviceUrl: 'https://gis.example/rail/lines',    mapsUsedIn: ['RailView', 'Dispatcher Map'], ownerTeam: 'Geo Ops' },
    { id: 'layers/switches',   name: 'Track Switches',serviceUrl: 'https://gis.example/rail/switches', mapsUsedIn: ['RailView'],                  ownerTeam: 'Geo Ops' },
    { id: 'layers/crossings',  name: 'Rail Crossings',serviceUrl: 'https://gis.example/rail/crossings',mapsUsedIn: ['Public Viewer','Dispatcher Map'], ownerTeam: 'Platform' }
  ];

  term = '';
  onlyWithMaps = false;

  get filtered() {
    const q = this.term.trim().toLowerCase();
    return this.layers.filter(l => (!q ||
      l.name.toLowerCase().includes(q) ||
      l.ownerTeam.toLowerCase().includes(q) ||
      l.serviceUrl.toLowerCase().includes(q) ||
      l.mapsUsedIn.some(m => m.toLowerCase().includes(q))
    ) && (!this.onlyWithMaps || l.mapsUsedIn.length > 0));
  }

  copy(url: string) {
    navigator.clipboard.writeText(url);
    alert('Service URL copied to clipboard');
  }
}
