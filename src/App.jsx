import componentImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";
import TabButton from "./coreConcept/CoreConcept";
import { useState } from "react";
import { coreExample } from "./coreConcept/subComponent";

import { CoreConcept } from "./coreConcept/CoreConcept";
import Header from "./header/Header";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedTopic) {
    setSelectedTopic(selectedTopic);
    // console.log(selectedTopic);
  }
  return (
    <section>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept
              image={componentImg}
              title="Components"
              description="The core UI building block - compose the user interface by combining multiple components."
            />

            <CoreConcept
              image={propsImg}
              title="Props"
              description="Make components configurable (and therefore reusable) by passing input data to them."
            />

            <CoreConcept
              image={jsxImg}
              title="JSX"
              description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
            />

            <CoreConcept
              image={stateImg}
              title="State"
              description="React-managed data which, when changed, causes the component to re-render & the UI to update."
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <li>
              <TabButton
                isSelected={selectedTopic === "Component"}
                onSelect={() => handleSelect("Component")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "JSX"}
                onSelect={() => handleSelect("JSX")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "Props"}
                onSelect={() => handleSelect("Props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "State"}
                onSelect={() => handleSelect("State")}
              >
                State
              </TabButton>
            </li>
            {!selectedTopic ? (
              <p>Please, select a topic to view its content</p>
            ) : (
              <div id="tab-content">
                <h3>{coreExample[selectedTopic].title}</h3>
                <p>{coreExample[selectedTopic].description}</p>
                <pre>
                  <code>{coreExample[selectedTopic].code}</code>
                </pre>
              </div>
            )}
          </menu>
        </section>
      </main>
    </section>
  );
}

export default App;
