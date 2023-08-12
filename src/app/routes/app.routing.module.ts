import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { route } from './app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(route, { useHash: true }), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
