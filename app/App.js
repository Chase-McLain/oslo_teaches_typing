import { ExampleController } from './controllers/ExampleController.js';
import { GameController } from './controllers/GameController.js';
import { OsloController } from './controllers/osloController.js';


class App {
  osloController = new OsloController()
  gameController = new GameController()


}

window['app'] = new App()


