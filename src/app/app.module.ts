import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeuturedModule } from './feutured/feutured.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeuturedModule,
    SharedModule,
    CoreModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
