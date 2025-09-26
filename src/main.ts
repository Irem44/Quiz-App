import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { QuestionsService } from './app/services/questions.service';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { NotPageComponent } from './app/components/not-page/not-page.component';
import { QuestionsComponent } from './app/components/questions/questions.component';

bootstrapApplication(AppComponent, {
  providers: [
    QuestionsService,
    provideRouter([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'questions', component: QuestionsComponent },
      { path: '**', component: NotPageComponent },
    ]),
  ],
});
