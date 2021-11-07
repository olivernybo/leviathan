import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './global/navbar/navbar.component';
import { FooterComponent } from './global/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormComponent } from './pages/contact/form/form.component';
import { InfoComponent } from './pages/contact/info/info.component';
import { LinkComponent } from './global/navbar/link/link.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './pages/projects/project/project.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
		HomeComponent,
		ContactComponent,
		FormComponent,
		InfoComponent,
		LinkComponent,
		ProjectsComponent,
		ProjectComponent
	],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, SweetAlert2Module],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
