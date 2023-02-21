import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


document.addEventListener(
  'scroll', () => {
    let position = document.documentElement.scrollTop ;
    if (position > 1400) {
      document.getElementById('skillsArrow')?.classList.add('arrowAnimation')
    } 

    if (position > 2400) {
      document.getElementById('portfolioArrow')?.classList.add('arrowAnimation')
    }
  },
  {passive:true }
)





  // function onWindowScroll($event: any) {
  //   console.log('11')
  // }
