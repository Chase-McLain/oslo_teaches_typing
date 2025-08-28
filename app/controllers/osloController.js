import { AppState } from "../AppState.js"
import { osloService } from "../services/OsloService.js"


export class OsloController {
  constructor() {

    AppState.on('oslos', this.drawLevelSelect)
    AppState.on('activeOslo', this.drawActiveOslo)
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

  drawActiveOslo() {
    const typingDisplayElement = document.getElementById('typing-section')
    const ActiveTypingDisplay = AppState.activeOslo
    typingDisplayElement.innerHTML = ActiveTypingDisplay.typingSectionTemplate
  }


  setActiveOslo(name) {

    // console.log('oslo')
    osloService.setActiveOslo(name)



  }






}

