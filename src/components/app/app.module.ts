import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ProdutosServicosComponent } from './produtos-servicos/produtos-servicos.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { HeaderComponent } from './header/header.component';
import { QualidadesComponent } from './qualidades/qualidades.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    ContatosComponent,
    ProdutosServicosComponent,
    QuemSomosComponent,
    HeaderComponent,
    QualidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
