import * as React from "react";
// import {  } from "css";
//import "./App.css";
//import { Layout } from "antd";
//const { Header, Footer, Sider, Content } = Layout;

export interface HelloProps {
  userName: string;
  lang: string;
}

// const listStylus: CSS.Properties = {
//   'maxHeight': '120px',
//   'overflow': 'hidden',
// }

const App = (props: HelloProps) => {
  return (
    <div className="App">
      {/* <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout> */}
    </div>
  );
};

export default App;
