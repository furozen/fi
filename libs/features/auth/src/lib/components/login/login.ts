// libs/features/auth/src/lib/components/login/login.ts
import {Component, inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
// Импортируем стабильный API сигнальных форм Angular 22
import {email, form, FormField, required} from '@angular/forms/signals';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {FormsModule} from "@angular/forms";
import {Router} from '@angular/router';
import {CabinetApiFacade} from "@cabinet/api";
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    CommonModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule, MatFormFieldModule, MatInputModule,
    FormField
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private api= inject(CabinetApiFacade);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  private readonly credentialsState = signal({
    email: '',
    password: ''
  });


  protected readonly loginForm = form(this.credentialsState,
    (structure) => {
      required(structure.email, {message: 'Email is required'});
      email(structure.email, {message: 'Enter a valid email address'});
      required(structure.password, {message: 'Password is required'});
    }
  );


  protected readonly hidePassword = signal<boolean>(true);

  protected onSubmit(event: Event): void {
    event.preventDefault();

    // Проверяем валидность всей формы через встроенный сигнал invalid()
    if (this.loginForm().invalid()) return;

    // Считываем значения полей (они автоматически синхронизированы в сигнале)
    const { email, password } = this.credentialsState();

    // Заглушка: реального бэкенда пока нет, помечаем пользователя авторизованным
    // и возвращаемся на защищённый маршрут. Когда появится API — заменим на вызов
    // authService.login(token) по результату запроса.
    console.log('Авторизация через Signal Forms:', { email: email, password });
    console.log('api', this.api.name);

    this.auth.login();
    void this.router.navigate(['/']);
  }


}
