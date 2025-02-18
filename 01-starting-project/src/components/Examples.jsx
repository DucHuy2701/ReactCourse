import { useState } from 'react'

import TabButton from "./TabButton"
import Section from './Section';
import Tabs from './Tabs';
import { EXAMPLES } from "../data-with-examples"

export default function Examples(){
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
        <Section title="Examples" id="examples">
            <Tabs
                item={
                    <>
                        <TabButton 
                            isSelected={selectedTopic === 'components'} 
                            onClick={() => handleSelector('components')}
                        >
                            Components
                        </TabButton>
                        <TabButton 
                            isSelected={selectedTopic === 'jsx'} 
                            onClick={() => handleSelector('jsx')}
                        >
                            JSX
                        </TabButton>
                        <TabButton 
                            isSelected={selectedTopic === 'props'} 
                            onClick={() => handleSelector('props')}
                        >
                            Props
                        </TabButton>
                        <TabButton 
                            isSelected={selectedTopic ==='state'} 
                            onClick={() => handleSelector('state')}
                        >
                            State
                        </TabButton>
                    </>
                }
            >
                {TabContent}
            </Tabs>
        </Section>
    );
}