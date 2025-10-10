import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { QuestionsService } from './app/services/questions.service';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { NotPageComponent } from './app/components/not-page/not-page.component';
import { QuestionsComponent } from './app/components/questions/questions.component';
import { ResultsComponent } from './app/components/results/results.component';
import { VegatablesComponent } from './app/components/vegatables/vegatables.component';
import { RoomComponent } from './app/components/room/room.component';
import { KitchenComponent } from './app/components/kitchen/kitchen.component';
import { VegatablesResaultComponent } from './app/components/vegatables-resault/vegatables-resault.component';
import { RoomResaultComponent } from './app/components/room-resault/room-resault.component';
import { KitchenResaultComponent } from './app/components/kitchen-resault/kitchen-resault.component';
import { SuggestionsComponent } from './app/components/suggestions/suggestions.component';

bootstrapApplication(AppComponent, {
  providers: [
    QuestionsService,
    provideRouter([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'suggestions', component: SuggestionsComponent },
      { path: 'questions', component: QuestionsComponent },
      { path: 'vegatables', component: VegatablesComponent },
      { path: 'room', component: RoomComponent },
      { path: 'kitchen', component: KitchenComponent },
      { path: 'result', component: ResultsComponent },
      { path: 'vegatablesResult', component: VegatablesResaultComponent },
      { path: 'roomResult', component: RoomResaultComponent },
      { path: 'kitchenResult', component: KitchenResaultComponent },
      { path: '**', component: NotPageComponent },
    ]),
  ],
});
