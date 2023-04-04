import { Component } from '@angular/core';

@Component({
  selector: 'lib-mydani-footer',
  template: `
     <footer class="footer py-3">
    <div class="row">
      <div class="col">
        <a href="https://github.com/danideveloperweb" target="_blank">DGO 2023 ©Danideveloperweb</a>
      </div>
    </div>
  </footer>
  `,
  styles: [`
    * {
      text-decoration: none;
      color: black;
    }

    footer {
      background-color: #F8F5E4;
      height: 50px;
      font-family: 'Roboto', sans-serif;
      font-size: 0.8rem;
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

}
