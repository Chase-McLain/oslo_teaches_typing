import { AppState } from "../AppState.js"
import { osloService } from "../services/OsloService.js"


export class OsloController {
  constructor() {


    this.drawLevelSelect()
  }

  drawLevelSelect() {
    let LevelSelect = ''
    AppState.oslos.forEach((oslo) => {
      LevelSelect += oslo.levelList
    })
    const levelSelectElement = document.getElementById("Levels")
    levelSelectElement.innerHTML = LevelSelect
  }


  setActiveOslo(name) {

    // console.log('oslo')
    osloService.setActiveOslo



  }






}

