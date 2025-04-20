import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarGroupModule, AvatarModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    console.log('Token after removal:', localStorage.getItem('token'));
    this.router.navigate(['/login']);
  }

  goToForm() {
    console.log('called');
    // this.router
    //   .navigate(['expense', 'expense-form'])
    //   .then((res) => {
    //     console.log('success', res);
    //   })
    //   .catch((err) => {
    //     console.log('err', err);
    //   });
  }
}
