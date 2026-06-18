import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {brandingConfig} from "@cabinet/brands";

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = brandingConfig.name + brandingConfig.enabledFeatures.payments;
}
