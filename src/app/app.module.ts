import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioAlumnosComponent } from './formulario-alumnos-registro/formulario-alumnos-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorHelperModule } from './shared/components/form-error-helper/form-error-helper.module';

@NgModule({
  declarations: [
    AppComponent,
    FormularioAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormErrorHelperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
