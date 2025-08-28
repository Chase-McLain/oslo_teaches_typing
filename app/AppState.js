import { Oslo } from './models/osloModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  oslos = [
    new Oslo({
      name: 'Simple Oslo',
      body: 'Oslo Sells Sea Shells By The Sea Store For Bananas.'
    }),
    new Oslo({
      name: 'Middiling Oslo',
      body: 'Oslo was a farmer who could farm any crop for he was the greatest farmer who ever farmered. One day he farmered too hard and passed away in his farm.'
    }),
    new Oslo({
      name: 'Radical Oslo',
      body: `But in his free time, he liked to read about Unicorns. There are many books about unicorns, giving Oslo plenty to choose from. But his favorite book about unicorns is titled "A Monkey's Guide to Caring For Unicorns".`



    })




  ]

  activeOslo = null







}

export const AppState = createObservableProxy(new ObservableAppState())