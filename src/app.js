import {PLATFORM} from 'aurelia-pal';
  
  export class App {
    configureRouter(config, router){
      config.title = 'analytics';
      config.options.pushState = true;
      config.options.root = '/';
      config.map([
        { route: '', moduleId: PLATFORM.moduleName('home/home'),   title: 'home' },
        { route: 'results', moduleId: PLATFORM.moduleName('results/results'), name:'results' }
      ]);
  
      this.router = router;
    }
  }
