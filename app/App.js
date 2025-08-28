import { ExampleController } from './controllers/ExampleController.js';
import { OsloController } from './controllers/osloController.js';


class App {
  osloController = new OsloController()


}

window['app'] = new App()


