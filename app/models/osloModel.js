import { generateId } from "../utils/GenerateId.js"






export class Oslo {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.body = data.body



    this.startTime = null || 0
    this.endTime = null
    this.fastestTime = null || 0
  }



  get levelList() {
    return `
   <h3>LEVELS</h3>
        <span>
          <button onclick="app.osloController.setActiveOslo('${this.id}')" class="btn btn-warning text-success">START</button> ${this.name} ${this.fastestTime}
        </span>
  `
  }


  get typingSectionTemplate() {
    return `
    
    <section class="row">
      <div class="col">
        <h1>Oslo Teaches Typing</h1>
      </div>
      <div class="col-12">
        <h2>${this.name}</h2>
      </div>
      <div class="col-md-7">
        <p>${this.startTime}</p>
        <p>${this.body}</p>
      </div>
      <div class="col-md-6 p-5">
        <form >
          <textarea class="form-control" id="textbox"> </textarea>
          </form> 
          <button class="btn btn-success text-warning" onclick = "app.OsloController.SubmitText()"> Submit </button>
        
      </div>
    </section>
    `



  }




}
















