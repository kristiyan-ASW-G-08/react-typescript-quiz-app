import { create } from "mobx-persist";
import { createContext } from "react";
import QuestionsStore  from "./QuestionsStore";
import IdStore  from "./IdStore";

const hydrate = create({
  storage: localStorage,
  jsonify: true
});
export class RootStore {
  questionsStore = new QuestionsStore();
  idStore = new IdStore()
  constructor() {
    // console.log('nani')
    // hydrate("id", this.idStore)
    // hydrate("expenses", this.expensesStore)
  }
}

 const RootStoreContext = createContext(new RootStore());
 export default RootStoreContext