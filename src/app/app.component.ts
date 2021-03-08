import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ball-atom-spinner';
  loading

  showSpinner() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 5000)
  }
}
