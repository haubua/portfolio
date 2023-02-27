import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

let mobile = false;


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


document.addEventListener(
  'scroll', () => {
    let position = document.documentElement.scrollTop;
    skillArrowAnimation(position);
    portfolioArrowAnimation(position);
    projectsAnimation(position);
  }
  ,
  { passive: true }
)

function skillArrowAnimation(position) {
  if (position > 1550 && window.innerWidth >= 1100)
    document.getElementById('skillsArrow')?.classList.add('arrowAnimation')
  if (position > 1550 && window.innerWidth < 1100)
    document.getElementById('skillsArrow')?.classList.add('arrowAnimation1100')
  if (position > 1550 && window.innerWidth <= 400)
    document.getElementById('skillsArrow')?.classList.add('arrowAnimation400')
  if (position > 1550 && window.innerWidth <= 300)
    document.getElementById('skillsArrow')?.classList.add('arrowAnimation300')
}


function portfolioArrowAnimation(position) {
  if (position > 2635 && window.innerWidth >= 1800)
    document.getElementById('portfolioArrow')?.classList.add('arrowAnimation')
  if (position > 2635 && window.innerWidth < 1800)
    document.getElementById('portfolioArrow')?.classList.add('arrowAnimation1800')
  if (position > 2635 && window.innerWidth <= 1100)
    document.getElementById('portfolioArrow')?.classList.add('arrowAnimation1100')
  if (position > 2635 && window.innerWidth <= 400)
    document.getElementById('portfolioArrow')?.classList.add('arrowAnimation400')
}


function projectsAnimation(position) {
  if (position > 3360 && mobile == true)
    document.getElementById('container0').classList.add('showContainerMobile')
  if (position > 4050 && mobile == true)
    document.getElementById('container1').classList.add('showContainerMobile')
  if (position > 4737 && mobile == true)
    document.getElementById('container2').classList.add('showContainerMobile')
  if (position > 5430 && mobile == true)
    document.getElementById('container3').classList.add('showContainerMobile')
}

window.addEventListener('resize', (event) => {

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    mobile = true;
  } else {
    mobile = false;
  }
})


window.onload = function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    mobile = true;
  }
}