import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { ReadUsersComponent } from './read-users/read-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsTableComponent } from './settings-table/settings-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
	declarations: [
		AppComponent,
		ReadUsersComponent,
		EditUserComponent,
		SettingsTableComponent,
		PageNotFoundComponent,
		CreateUserComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		AppRoutingModule,
		InfiniteScrollModule,
		FormsModule, ReactiveFormsModule
	],
	providers: [],
	entryComponents: [SettingsTableComponent],
	bootstrap: [AppComponent]
})

export class AppModule { }
