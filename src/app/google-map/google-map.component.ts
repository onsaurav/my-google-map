import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-google-map',
  imports: [],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.css'
})
export class GoogleMapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const map = L.map('map').setView([23.8103, 90.4125], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([23.8103, 90.4125]).addTo(map)
      .bindPopup('Dhaka')
      .openPopup();
  }
}
