import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
    this.setupLabelAnimation();
  }

  onSubmit() {
    // Add your login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // You can call an authentication service here
  }

  setupLabelAnimation() {
    const labels = document.querySelectorAll('.form-control label');
    let delay = 50;
  
    labels.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.innerHTML = element.textContent!
          .split('')
          .map(
            (el, index) =>
              `<span style="transition-delay: ${delay * index}ms;">${el}</span>`
          )
          .join('');
      }
    });
  }
}
