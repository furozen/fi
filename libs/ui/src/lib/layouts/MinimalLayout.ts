import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'lib-minimal-layout',
  imports: [
    RouterOutlet
  ],
  templateUrl: './MinimalLayout.html',
  styleUrl: './MinimalLayout.scss',
})
export class MinimalLayout {}
