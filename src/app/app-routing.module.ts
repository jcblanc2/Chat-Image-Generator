import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { GenerationComponent } from './generation/generation.component';
import { VariationComponent } from './variation/variation.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'generation', component: GenerationComponent },
  { path: 'variation', component: VariationComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
