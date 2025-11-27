import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './gif-list-item.component.html',
})
export class GifListItemComponent {
  imageUrl = input.required<string>();
 }
