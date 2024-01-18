import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector:'app-title',
  standalone: true,
  imports: [],
  template:`
    <h1 class="mb-5 text-3xl">{{title}}</h1>
  `,
  styles: ``
})
export class TitleComponent {
  @Input({required:true}) title!:string;
  @Input({transform:booleanAttribute}) withShadow:boolean=false;
}
