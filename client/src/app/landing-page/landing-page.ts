import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-landing-page',
  templateUrl: 'landing-page.html',
  styleUrls: ['./landing-page.scss'],
  providers: [],
  imports: [MatCardModule, RouterLink, MatInputModule, MatFormFieldModule, MatSelectModule]
})
export class HomeComponent {
  readonly nextGame;
  constructor(private httpClient: HttpClient) {
  }

  createGame() {
    let gameCode = this.httpClient.get(this.nextGame);
    this.httpClient.post<{id: number}>('/game/', {id: this.nextGame});
  }
}
