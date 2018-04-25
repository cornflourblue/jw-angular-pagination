import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { JwPaginationComponent } from 'jw-angular-pagination';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        JwPaginationComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }