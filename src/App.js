import React, { Component } from "react";
import "./App.css";
//import Greet from "./components/Greet";
//import Hello from './hello';
//import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
// import ShoppingList from "./components/shopping-list";
// import Stylesheet from "./components/Stylesheet";
// import Welcome from "./components/welcome";
// import Form from "./components/Form";
// import Todos from "./components/Todos";
// import Todoitems from "./components/Todoitems";
// import LifeCycleA from "./components/LifeCycleA";
// import FragmentDemo from "./components/FragmentDemo";
// import LifeCycleB from "./components/LifeCycleB";
// // import PureComponent from './PureComponent';
// import ParentComp from "./components/ParentComp";
// import RefsDemo from "./components/RefsDemo";
// import FocusInput from "./components/FocusInput";
// import FRParentInput from "./components/FRParentInput";
// import PortalDemo from "./components/PortalDemo";
// import Hero from "./components/Hero";
// import ErrorBoundary from "./components/ErrorBoundary";
// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
// import ClickCounterTwo from "./components/ClickCounterTwo";
// import HoverCounterTwo from "./components/HoverCounterTwo";
// import User from "./components/User";
// import { UserProvider } from "./components/UserContext";
// import ContextC from "./components/ContextC";

class App extends Component {
  state = {
    completed: true,
  };
  render() {
    return (
      <div className="App">
        {/* <UserProvider value="venky" />
        <ContextC />
        <Hero />
        <UserProvider />
        <ClickCounterTwo />
        <HoverCounterTwo />
        <User name="venky" />
        <ErrorBoundary />
        <Hero heroName="prabhas" />
        <ErrorBoundary />
        <Hero heroName="allu arjun" />
        <ErrorBoundary />
        <ClickCounter />
        <HoverCounter />
        <LifeCycleA />
        <LifeCycleB />
        <ParentComp />
        <PortalDemo /> 
        {/* <RefsDemo />
        <FRParentInput />
        <FocusInput />
        <FragmentDemo />
        <Stylesheet />
        <Form />
        
        <Todos todos={this.state.todos} /> */}
        {/* <Todoitems /> */}
        <NameList />
        {/* <UserGreeting />
        <FunctionClick />
        <ClassClick />
        <Greet name="venky" heroName="stranger" />
        <ShoppingList />
        <Counter />
        <Message />
        <Welcome /> */}
      </div>
    );
  }
}

export default App;
