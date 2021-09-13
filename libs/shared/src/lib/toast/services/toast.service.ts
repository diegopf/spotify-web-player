import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private id = 'spotify-web-player-toast';

  /**
   *
   * @param message {string} error message to show to the user
   */
  showError(message: string) {
    let toast = document.getElementById(this.id);
    if (toast) {
      toast.innerHTML = message;
    }

    toast = document.createElement('div');
    toast.setAttribute('id', this.id);
    toast.innerHTML = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      const toast = document.getElementById(this.id);
      if (toast) {
        document.body.removeChild(toast);
      }
    }, 1500);
  }
}
