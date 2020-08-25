import { Component, OnInit } from '@angular/core';
import { KlantService } from '../service/klant.service';

@Component({
  selector: 'app-klant-home',
  templateUrl: './klant-home.component.html',
  styleUrls: ['./klant-home.component.css'],
})
export class KlantHomeComponent implements OnInit {
  constructor(private klantService: KlantService) {}

  ngOnInit() {
    this.klantService.getKlantById(3).subscribe((data) => {
      console.log(data.name);
    });
  }
}
