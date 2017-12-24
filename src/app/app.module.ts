import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedService } from './shared.service'
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
