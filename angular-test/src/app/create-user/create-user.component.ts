import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService }  from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css'],
    providers: [UserService]
})

export class CreateUserComponent implements OnInit {
	
	create_user_form: FormGroup;
	title = 'Создание нового пользователя';
	

	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
		private location: Location,
		private formBuilder: FormBuilder
	) { 
		this.create_user_form = this.formBuilder.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            age: ['', Validators.required],
            position: ['', Validators.required],
			inn: ['', Validators.required]
        });
	}

	ngOnInit() {
	}
  
	/**
	 * Сохранить введенные значения о пользователе через userService
     */
	save() {
		
        this.userService.createUser(this.create_user_form.value)
            .subscribe(
                user => {
                   this.goBack();
                },
                error => console.log(error)
            );
	}
	
	/**
	 * Вернуться обратно на страницу со списком пользователей
     */
	goBack(): void {
		this.location.back();
	}

    /**
	 * Сброс формы 
     */
	resetForm(): void {
        // Закладка данных в форму
        this.create_user_form.patchValue({
            name: '',
            surname: '',
            age: '',
            position: '',
			inn: ''
		});
	}

}
