import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
  check:boolean=false

  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
if(this.check){
  return true
}
this.router.navigate(["/test1"])
return false
  }
// user the example compoentn login1
  Setvalue(che:boolean){
this.check=che;
  }


}
