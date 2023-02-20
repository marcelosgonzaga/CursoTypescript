import React, {createContext} from 'react';

// 4 importação de componentes
import FistComponent from './components/FistComponent';

// 5 desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';


// 6 - useState
import State from './components/State';

// 10 utilizando
import Context from "./components/Context";

// 8 - type
type textOrNull = string | null

type fixed = "isso" | "ou" | "aquilo";

// 9 - context

interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 variaveis (5)
const name: string = "Marcelo";
const age: number = 30;
const isWorking: boolean = true;

// 2 - funções(6)

const userGreeting = (name: string): string => {
  return `Olá, ${name}!`;
}

// 8 - type
const myText: textOrNull = "Tem algum texto aqui";
let mySecondText: textOrNull = null;

mySecondText = "Opa";

const testandoFixed: fixed = "isso"

// 9 - context
const contextValue: IAppContext = {
  language: "JavaScript",
  framework: "Express",
  projects: 5,
};

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
    <h1>TypeScript com React</h1>
    <h2>Nome: {name}</h2>
    <p>Idade: {age}</p>
    {isWorking &&  (
      <div>
        <p>Está trabalhando!</p>
        </div>
        )}
      <h3>{userGreeting(name)}</h3>
      
      <FistComponent/> {/* adicionado */}
      <SecondComponent name = "Segundo"/>
      <Destructuring
      title='Primeiro post'
      content='Algum conteúdo'
      commentsQty={10}
      tags={["ts", "js"]}
      category={Category.TS}
       />
      <Destructuring
      title='Segundo post'
      content='Mais conteúdo'
      commentsQty={5}
      tags={["Java"]} 
      category={Category.P}
      />
      <State />
      {myText && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na variável</p>}
      <Context />
    </div>
    </AppContext.Provider>
  );
}

export default App;
