import { AppState } from "../AppState.js"








class OsloService {






  setActiveOslo(osloid) {
    console.log(name)

    let currentOslo = AppState.oslos.find((oslo) => oslo.id == osloid)
    AppState.activeOslo = currentOslo
    console.log(AppState.activeOslo)

  }


}




export const osloService = new OsloService







