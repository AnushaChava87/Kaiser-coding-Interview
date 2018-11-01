import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiServiceService } from './api-service.service';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import 'rxjs';
import { NamePipePipe } from './name-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NamePipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
