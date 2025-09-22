import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

type AppHealth = 'UP' | 'DEGRADED' | 'DOWN';
interface AppStatus { id: string; name: string; ownerTeam: string; onCall?: string; status: AppHealth; lastCheck: string; notes?: string; }

@Component({
  selector: 'application-stat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  apps: AppStatus[] = [
    { id: 'railview', name: 'RailView', ownerTeam: 'Geo Ops', onCall: 'A. Abbas', status: 'UP', lastCheck: new Date().toISOString() },
    { id: 'trackwatch', name: 'TrackWatch', ownerTeam: 'Geo Ops', onCall: 'J. Patel', status: 'DOWN', lastCheck: new Date().toISOString(), notes: 'DB pool exhausted' },
    { id: 'spatial-api', name: 'Spatial API', ownerTeam: 'Platform', onCall: 'M. Chen', status: 'DEGRADED', lastCheck: new Date().toISOString(), notes: 'High P95 latency' },
    { id: 'tile-svc', name: 'Tile Service', ownerTeam: 'Platform', onCall: 'K. Soto', status: 'UP', lastCheck: new Date().toISOString() }
  ];

  term = '';
  statusFilter: AppHealth | 'ALL' = 'ALL';
  sortKey: keyof AppStatus | 'status' = 'name';
  sortDir: 'asc' | 'desc' = 'asc';

  ngOnInit(): void {
    this.route.queryParams.subscribe(p => {
      if (typeof p['q'] === 'string') this.term = p['q'];
    });
  }

  get filtered(): AppStatus[] {
    const q = this.term.trim().toLowerCase();
    let out = this.apps.filter(a => !q ||
      a.name.toLowerCase().includes(q) ||
      a.ownerTeam.toLowerCase().includes(q) ||
      (a.onCall ?? '').toLowerCase().includes(q) ||
      a.status.toLowerCase().includes(q)
    );
    if (this.statusFilter !== 'ALL') out = out.filter(a => a.status === this.statusFilter);

    return [...out].sort((a, b) => {
      const dir = this.sortDir === 'asc' ? 1 : -1;
      const va = (this.sortKey === 'status' ? a.status : (a[this.sortKey] as any)) ?? '';
      const vb = (this.sortKey === 'status' ? b.status : (b[this.sortKey] as any)) ?? '';
      return String(va).localeCompare(String(vb)) * dir;
    });
  }

  setSort(key: keyof AppStatus | 'status') {
    if (this.sortKey === key) this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    else { this.sortKey = key; this.sortDir = 'asc'; }
  }
}
