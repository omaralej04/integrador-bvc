import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'personal', loadChildren: './personal/personal.module#PersonalPageModule' },
  { path: 'agencia', loadChildren: './agencia/agencia.module#AgenciaPageModule' },
  { path: 'ayuda', loadChildren: './ayuda/ayuda.module#AyudaPageModule' },
  { path: 'bloact', loadChildren: './bloact/bloact.module#BloactPageModule' },
  { path: 'comercial', loadChildren: './comercial/comercial.module#ComercialPageModule' },
  { path: 'config', loadChildren: './config/config.module#ConfigPageModule' },
  { path: 'social', loadChildren: './social/social.module#SocialPageModule' },
  { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialPageModule' },
  { path: 'vol', loadChildren: './vol/vol.module#VolPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
