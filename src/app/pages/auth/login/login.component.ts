import { Component, inject, signal, ViewChild } from '@angular/core';
import { InputControlComponent } from '../../../UI/controls/input-control/input-control.component';
import { ViajewelsButtonComponent } from '../../../UI/buttons/viajewels-button/viajewels-button.component';
import { InfoMessageComponent } from '../../../UI/info/info-message/info-message.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { validateLoginForm } from '../../../../utils/schemas/validateLoginForm';
import { ThemeService } from '../../../theme.service';
import { applyThemeClasses } from '../../../../utils/functions/applyThemeClasses';

@Component({
  selector: 'app-login',
  imports: [
    InputControlComponent,
    ViajewelsButtonComponent,
    InfoMessageComponent,
    NgIf,
    FormsModule
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  errorMessage = signal<string>(``);
  @ViewChild(`login`) login!: InputControlComponent;
  @ViewChild(`password`) password!: InputControlComponent;

  onSubmit() {
    const login = this.login.getValue();
    const password = this.password.getValue();
    const validate = validateLoginForm.safeParse({ login, password });

    if (!validate.success) {
      this.errorMessage.set(validate.error.errors[0].message);
      return;
    }
    console.log(`Executing login: `, login);
    console.log(`Executing password: `, password);
  }

  protected readonly applyThemeClasses = applyThemeClasses;
}
