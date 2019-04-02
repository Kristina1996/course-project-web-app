import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private _http: Http) { }
	
	/**
	readUsers(): Observable<User[]> {
        return this._http
			.get("http://api/dao/read.php")
            .pipe(map((res: Response) => res.json()));
    }
	**/
	
	readUsers(): Observable<User[]> {
        return this._http
			.get("http://localhost:8084/rest-service/users")
            .pipe(map((res: Response) => res.json()));
    }
	
	createUser(user): Observable<User> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		return this._http.post(
			"http://localhost:8084/rest-service/users",
			user,
			options
		).pipe(map((res: Response) => res.json()));
	}
	
	getUserswithPage(page: number): Observable<User[]> {
		return this._http.get("http://api/dao/getUserswithPage.php?page="+page)
						 .pipe(map((res: Response) => res.json()));
	}
	
	/**
	getUser(id): Observable<User> {
		return this._http.get("http://api/dao/read_one.php?id="+id)
			.pipe(map((res: Response) => res.json()));
	}
	**/
	
	getUser(id): Observable<User> {
		return this._http.get("http://localhost:8084/rest-service/user/"+id)
			.pipe(map((res: Response) => res.json()));
	}
	
	/**
	updateUser(user): Observable<User> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		return this._http.put(
			"http://api/dao/update.php",
			user,
			options
		).pipe(map((res: Response) => res.json()));
	}
	**/
	
	//updateUser(user): Observable<User> {
	updateUser(user) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		return this._http.post(
			"http://localhost:8084/rest-service/update",
			user,
			options
		).pipe(map((res: Response) => res.json()));
	}
	
	
	deleteUser(id) {
		console.log(id);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		return this._http.delete(
			"http://localhost:8084/rest-service/users/"+id,
			options
		);
		//.pipe(map((res: Response) => res.json()));
	}
}
