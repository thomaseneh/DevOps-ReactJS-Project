import { Component } from "react";

export const coreExample = {
  Component: {
    title: "Component",
    description:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output",

    code: `function Welcome() {
      return <h1>Hello World!</h1>;
    },`,
  },

  JSX: {
    title: "JSX",
    description:
      "JSX is a Javascript syntax extension. It is similar to template. It is similar to a template language, but it has full power of Javascript (e.g, it may output dynamic content)",

    code: `
      <div>
        <h1>Welcome {userName}</h1>;
        <p>Time to learn React!</p>
      </div>
      },`,
  },

  Props: {
    title: "Props",
    description:
      "Components accept arbitrary imputs called props. They are like function arguments.",

    code: `function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      },`,
  },

  State: {
    title: "State",
    description:
      "State allows React components to change their output over time in response to user actions, network responses, and any other things else.",

    code: `function Counter() {
        const [content, setContent] = useState(false)

        function handleClickEvent(){
          setContent(true)
        }

        return(
          <div>
            <button onClick={handleClickEvent}>Show Details</button>
            {content && <p>Amazing content!</p>} 
          </div>
        );
      },`,
  },
};
