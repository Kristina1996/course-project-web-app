import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReadUsersComponent } from './read-users/read-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SettingsTableComponent } from './settings-table/settings-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
	{ path: 'listusers', component: ReadUsersComponent },
	{ path: 'edit/:id', component: EditUserComponent },
	{ path: 'createuser', component: CreateUserComponent },
	{ path: 'settings', component: SettingsTableComponent },
	{ path: '', redirectTo: '/listusers', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
