import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class FooterComponent {
        public category: string []=["Smartphone","Pc","Computer","Headphone","Components"]
}
