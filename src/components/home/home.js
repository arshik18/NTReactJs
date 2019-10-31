import React,{Component} from 'react';
import './home.css';
import TopNav from '../top-nav/topnav';
import SideNav from '../sidenav/sidenav';
import Card from '../card/card';
        

class Home extends Component{
    
        state = {
            windowHeight:'',
            windowWidth:'',
            headerClientHeight:'',
            headerClientWidth:''

        };
componentWillMount(){
          
          this.setState({
                        windowHeight: window.innerHeight-56 + 'px',
                        windowWidth:window.innerWidth+'px', 
            })
            
      
    }
componentDidMount(){
        let { clientHeight, clientWidth } = this.refs.header;
            console.log("Header Height",clientHeight, clientWidth);
        
      } 

    render(){
        const style={
                height:this.state.windowHeight
        }
        console.log("Window Height : ",this.state.windowHeight,"Window Width :",this.state.windowWidth);
        return(
            <div>
                <header ref="header" ><TopNav/></header>
                    <div className="col-container" style={style}>
                        <div className="col-md-2 side-menu" >
                            <SideNav/>  
                            </div>
                           
                    
                    <div className="col-md-10 main">
                        <div class="row">
                        <Card color="#4875b4" body="New PAN Card"/>
                        <Card color="#4875b4" body="New PAN Card"/>
                        <Card color="#4875b4" body="New PAN Card"/>
                        </div>
                        <Card color="#4875b4" body="New PAN Card"/>
                        <Card color="#4875b4" body="New PAN Card"/>
                        <Card color="#4875b4" body="New PAN Card"/>
                        </div>
                    </div>
                
            </div>
        )
    }
}
export default Home;