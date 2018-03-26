import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/pagina1', pathMatch: 'full' },
  // { path: 'pagina1', component: Pagina1Component },
  //{ path: 'pagina2', component: Pagina2Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }