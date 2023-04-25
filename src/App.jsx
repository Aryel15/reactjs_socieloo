import React from "react";
import api from "./api";


class App extends Component{
    state={
      CNAE:[]
    }
    async componentDidMount(){
      const response = await api.get('');
      console.log(response.data);

      this.setState({ CNAE: response.data});
    }


render(){

    UseEffect(() => { console.log(cnae)})
  const{CNAE}=this.state;

  return(
    <div>
      <h1> Lista </h1>
    </div>
  );
};
};
export default App;