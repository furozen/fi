import {Component, inject} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {LanguageService} from '@cabinet/shared';
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'language-switcher',
  standalone: true,
  imports: [MatSelectModule, MatIconModule, UpperCasePipe],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
  protected readonly lang = inject(LanguageService);
}
