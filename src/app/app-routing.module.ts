import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TwoAwayBlindingComponent } from './components/two-away-blinding/two-away-blinding.component';
import { ItemDatailComponent } from './Components/item-datail/item-datail.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'parent-data', component: ParentDataComponent},
  {path: 'if-render', component: IfRenderComponent},
  {path: 'evertos', component: EventosComponent},
  {path: 'emitter', component: EmitterComponent},
  {path: 'pipe', component: PipeComponent},
  {path: 'TAB', component: TwoAwayBlindingComponent},
  {path: 'list/:id', component: ItemDatailComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
