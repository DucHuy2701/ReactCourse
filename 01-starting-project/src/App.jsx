import { useState } from 'react'

import Header from '../src/components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import {CORE_CONCEPTS} from './data.js'
import TabButton from './components/TabButton.jsx'
import {EXAMPLES} from './data-with-examples.js'

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelector(selectedButton){
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let TabContent = <p>Please select a topic!</p>;

  if(selectedTopic){
    TabContent = 
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    ;
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton onSelect={() => handleSelector('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelector('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelector('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelector('state')}>State</TabButton>
          </menu>
        </section>
        {TabContent}
      </main>
    </div>
  );
}

export default App;
