import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Telas/login/login.component';
import { CadastroComponent } from './Telas/cadastro/cadastro.component';
import { ConsultaComponent } from './Telas/consulta/consulta.component';
import { IntegrantesComponent } from './Telas/integrantes/integrantes.component';
import { NavegacaoComponent } from './Telas/navegacao/navegacao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Telas/header/header.component';
import { FooterComponent } from './Telas/footer/footer.component';
import { NavAgendarComponent } from './Telas/navegacao/nav-agendar/nav-agendar.component';
import { NavVerificarComponent } from './Telas/navegacao/nav-verificar/nav-verificar.component';
import { HomepageComponent } from './Telas/homepage/homepage.component';
import { VerificarComponent } from './Telas/verificar/verificar.component';
import { MatList, MatListModule } from '@angular/material/list';
import { SenhaComponent } from './Telas/senha/senha.component';
import { EsquecisenhaComponent } from './Telas/esquecisenha/esquecisenha.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavegacaoComponent,
    CadastroComponent,
    IntegrantesComponent,
    ConsultaComponent,
    HeaderComponent,
    FooterComponent,
    NavAgendarComponent,
    NavVerificarComponent,
    HomepageComponent,
    VerificarComponent,
    SenhaComponent,
    EsquecisenhaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



