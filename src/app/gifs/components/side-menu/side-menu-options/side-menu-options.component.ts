import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

interface MenuOption {
  icon: string;
  label: string;
  router: string;
  subLabel: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {

  menuOptions:MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      router: '/dashboard/trending',
      subLabel: 'Populars Gifs'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      router: '/dashboard/search',
      subLabel: 'Search Gifs'
    },
  ]
 }
