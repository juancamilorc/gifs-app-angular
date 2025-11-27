import { CommonModule } from '@angular/common';
import {  Component, input } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item/gif-list-item.component";

@Component({
  selector: 'gif-list',
  standalone: true,
  imports: [
    CommonModule,
    GifListItemComponent
],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {

  gifs = input.required<string[]>();

}
