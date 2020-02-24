import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterBarComponent } from './character-bar/character-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TeamSelectComponent } from './team-select/team-select.component';
import { LevelSelectComponent } from './level-select/level-select.component';
import { MultiplayerComponent } from './multiplayer/multiplayer.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { TeamInfoComponent } from './team-info/team-info.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CharacterBarComponent,
    WelcomeComponent,
    TeamSelectComponent,
    LevelSelectComponent,
    MultiplayerComponent,
    CharacterInfoComponent,
    TeamInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HTMLCanvasElement,
    HttpClient  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
