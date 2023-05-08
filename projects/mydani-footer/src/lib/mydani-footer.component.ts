import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-mydani-footer',
  template: `
    <footer class="footer py-3" [style.backgroundColor]="footerColor">
    <div class="row">
      <div class="col">
        <a href="https://github.com/danideveloperweb" target="_blank" [innerHTML]="footerText" [style.color]="textColor" [style.font-family]="textFontFamily" [style.font-size]="textSize"></a>
      </div>
    </div>
  </footer>
  `,
  styles: [`
    * {
      text-decoration: none;
    }

    footer {
      height: 50px;
      font-weight: 400;
      margin-top: 5%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media screen and (max-width: 767px) {
      footer {
        flex-direction: column;
        height: auto;
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }

    .col a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class MydaniFooterComponent {
  @Input() footerColor: string = '#F8F5E4';
  @Input() footerText: string = 'DGO 2023 ©Danideveloperweb';
  @Input() textColor: string = 'black';
  @Input() textFontFamily: string = 'Roboto, sans-serif';
  @Input() textSize: string = '0.8rem';
}
