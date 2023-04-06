# mydani-footer

`mydani-footer` is an Angular library for adding a simple and elegant footer to your project. It uses Bootstrap to ensure a responsive design and style.

## Prerequisites

Before using `mydani-footer`, make sure you have installed:

1. [Node.js](https://nodejs.org/)
2. [Angular CLI](https://cli.angular.io/)

## Installation

To install `mydani-footer` in your Angular project, follow these steps:

1. Install the library using npm:

```bash
npm install mydani-footer

2. Install Bootstrap in your project, as mydani-footer uses Bootstrap styles:


npm install bootstrap

3. Add the Bootstrap import to your angular.json file in the styles section:


"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],

4. Import MydaniFooterModule in your app.module.ts file:


import { MydaniFooterModule } from 'mydani-footer';

@NgModule({
  imports: [
    // ...
    MydaniFooterModule
  ],
  // ...
})
export class AppModule { }

## Usage

To use the mydani-footer component in your project, simply add the following tag to your HTML file where you want the footer to appear:


<lib-mydani-footer></lib-mydani-footer>

if you want the footer to be always attached to the footer, here is an example that you can use
In app.components .html you can structure it as follows:

```bash
<app-navbar></app-navbar>

<div class="container">

    <router-outlet></router-outlet>

</div>

<lib-mydani-footer></lib-mydani-footer>

In the component app.component.scss put:

.container {
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
}


## Customization

You can customize the footer styling by modifying the styles in your global CSS file or in the styles file specific to your component. 

Custom styles will override the default styles of the mydani-footer component.

Here is an example of how to do this.

<lib-mydani-footer [footerColor]="'#FFD700'" [footerText]="'Mi texto personalizado'"></lib-mydani-footer>


## License

mydani-footer is open-source software with an MIT license.

## Author

DGO