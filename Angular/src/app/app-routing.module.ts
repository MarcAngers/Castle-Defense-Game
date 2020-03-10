import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game/game.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LevelSelectComponent } from './level-select/level-select.component';
import { MultiplayerComponent } from './multiplayer/multiplayer.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { TypeinfoComponent } from './typeinfo/typeinfo.component';
import { CharacterInfoComponent } from './character-info/character-info.component';

const routes: Routes = [
  { path: "game/:id/:team/:side", component: GameComponent },
  { path: "levelselect", component: LevelSelectComponent },
  { path: "multiplayer", component: MultiplayerComponent },
  { path: "game/10000", component: MultiplayerComponent },
  { path: "teaminfo", component: TeamInfoComponent },
  { path: "typeinfo", component: TypeinfoComponent },
  { path: "characterinfo/:team/:name", component: CharacterInfoComponent },
  { path: "", component: WelcomeComponent },
  { path: "**", component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ 
  GameComponent, 
  WelcomeComponent, 
  LevelSelectComponent,
  MultiplayerComponent,
  TeamInfoComponent,
  TypeinfoComponent,
  CharacterInfoComponent
];
