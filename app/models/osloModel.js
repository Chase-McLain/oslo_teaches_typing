import { generateId } from "../utils/GenerateId.js"






export class Oslo {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.body = data.body



    this.startTime = null
    this.endTime = null
    this.fastestTime = null || 0
  }

  activeOslo = null


  get levelList() {
    return `
   <h3>LEVELS</h3>
        <span>
          <button onclick="appstate.osloController.setActiveOslo()" class="btn btn-warning text-success">START</button> ${this.name} ${this.fastestTime}
        </span>
  `
  }





}
















