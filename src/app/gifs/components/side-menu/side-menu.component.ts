import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideMenuOptionsComponent } from "./side-menu-options/side-menu-options.component";
import { SideMenuHeaderComponent } from "./side-menu-header/side-menu-header.component";

@Component({
  selector: 'gifs-side-menu',
  standalone: true,
  imports: [
    CommonModule,
    SideMenuOptionsComponent,
    SideMenuHeaderComponent
],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {

  
}
