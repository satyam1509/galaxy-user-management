import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './shared/guards/auth-guard.guard';

const routes: Routes = [

  {
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule),
    // canActivate:[AuthGuardGuard]
  },
  {
    path:'admin',
    loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule),
    canActivate:[AuthGuardGuard]
  },
  {
    path:'public',
    loadChildren:()=>import('./public/public.module').then(m=>m.PublicModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'auth/login'
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
