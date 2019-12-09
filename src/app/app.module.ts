import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FeaturesModule } from '@features/features.module';
import { CoreModule } from '@core/core.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
// import { fakeBackendProvider } from '../assets/fake-backend';
import { JwtInterceptor } from '@core/helpers/jwt.interceptor';
import { ErrorInterceptor } from '@core/helpers/error.interceptor';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FeaturesModule,
        SharedModule,
        CoreModule,
        RouterModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // fakeBackendProvider
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
