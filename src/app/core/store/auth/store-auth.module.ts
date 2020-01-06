import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthEffects } from '@core/store/auth/effects/auth.effects';
import { AuthReducer } from '@core/store/auth/reducers/auth.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('auth', AuthReducer),
        EffectsModule.forFeature([AuthEffects])
    ],
    providers: [AuthEffects]
})
export class StoreAuthModule {}
