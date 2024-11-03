import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private loginService:LoginService,private cookieService: CookieService,private router: Router) {
    this.loginForm = this.fb.group({
      accountUsername: ['', Validators.required],
      accountPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    debugger
    console.log("|||"+this.cookieService.get('Authorization')+"|||")
    if (this.cookieService.get('Authorization') !== null && this.cookieService.get('Authorization').length>0) {
      // 如果有 token，则重定向
      this.router.navigate(['/']); // 将 '/home' 替换为你想要的路由
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formValues = this.loginForm.value;
      let usr = {
        username:formValues.accountUsername,
        password:formValues.accountPassword
      }
      this.loginService.postData(usr).subscribe(
        (response) => {
          debugger
          console.log(response); // Log the response data to the console
          this.cookieService.delete('Authorization'); // 替换为你的 cookie 名称
          this.cookieService.set('Authorization',"Bearer "+response.data); // 替换为你的 cookie 名称
          this.router.navigate(['/page']);
        },
        (error) => {
          debugger
          console.error('Error fetching data:', error); // Log any errors
        }
      );
    }
  }
}
