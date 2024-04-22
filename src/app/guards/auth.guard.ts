import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../modules/shared/services/auth.service';
import { TokenModel } from '../modules/shared/models/token-model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const token = localStorage.getItem('token');
      const expiration = localStorage.getItem('expiration');

      if (!token || !expiration) {
        this.router.navigate(['/login']); // Token veya expiration yoksa kullanıcıyı login sayfasına yönlendir
        return false;
      }

      const tokenModel: TokenModel = {
        token: token,
        expiration: new Date(expiration)
      };

      if (this.authService.isAuthenticated(tokenModel)) {
        return true;
      } else {
        this.router.navigate(['/login']); // Token geçersiz ise kullanıcıyı login sayfasına yönlendir
        return false;
      }
  }
}
