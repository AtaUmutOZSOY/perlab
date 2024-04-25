import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../modules/admin/services/auth.service';
import { TokenModel } from '../modules/admin/models/token-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
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

      // AuthService'den gelen boolean cevabı Observable'e çevir
      const isAuthenticated = this.authService.checkAuthentication(tokenModel);
      if (isAuthenticated) {
        return of(true);
      } else {
        this.router.navigate(['/login']);
        return of(false);
      }
  }
}
