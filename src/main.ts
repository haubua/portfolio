import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


document.addEventListener(
  'scroll', (event) => {
    let position = document.documentElement.scrollTop ;
    console.log(position)
    if (position > 1400) {
      document.getElementById('skillsArrow')?.classList.add('arrowAnimation')
    } 

    if (position > 2450) {
      document.getElementById('portfolioArrow')?.classList.add('arrowAnimation')
    }
  },
  {passive:true }
)



  // function onWindowScroll($event: any) {
  //   console.log('11')
  // }
