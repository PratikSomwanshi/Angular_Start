import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { PropsComponent } from './props/props.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgpropertyComponent } from './ngproperty/ngproperty.component';
import { PipesComponent } from './pipes/pipes.component';
import { RushPipe } from './rush.pipe';
import { JokesComponent } from './jokes/jokes.component';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PropsComponent,
    ChildComponent,
    NgifComponent,
    NgswitchComponent,
    NgpropertyComponent,
    PipesComponent,
    RushPipe,
    JokesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
