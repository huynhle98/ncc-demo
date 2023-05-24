import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  items = [
    {
      label: 'Lorem ipsum dolor sit amet',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor
      pellentesque sem, eu posuere erat hendrerit quis.Maecenas vel consequat turpis.Nam facilisis, ligula in mattis
      sodales, augue justo tristique nulla, sed lacinia ante eros ut mi.Morbi vitae diam augue.Aliquam vel mauris a
      nibh
      auctor commodo.Praesent et nisi eu justo eleifend convallis.Quisque suscipit maximus vestibulum.Phasellus
      congue
      mollis orci, sit amet luctus augue tristique eu.Donec vulputate odio neque, sed semper turpis pellentesque a.`,
      imgUrl: '../../../assets/imgs/icon1.png'
    },
    {
      label: 'Lorem ipsum dolor sit amet',
      description: `  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis.
        Donec
        imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum
        congue.
        Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
        ullamcorper id. Aenean consequat condimentum velit ut
        tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.`,
      imgUrl: '../../../assets/imgs/icon2.png'
    },
    {
      label: 'Lorem ipsum dolor sit amet',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis.
        Donec
        imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum
        congue.
        Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
        ullamcorper id. Aenean consequat condimentum velit ut
        tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.`,
      imgUrl: '../../../assets/imgs/icon3.png'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
