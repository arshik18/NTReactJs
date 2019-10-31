import React,{Component} from 'react';
import './sidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faCalculator,faIdCard,
        faIdCardAlt,faRupeeSign,faFileAlt,faFile,faBatteryHalf,faBatteryFull,
        faCaretDown,faCaretUp} from "@fortawesome/free-solid-svg-icons";

class Sidenav extends Component{

    state={
        isPanCardClicked:false,
        isCertificateClicked:false,
        isTransactionClicked:false,
        isWalletClicked:false,
        isReportClicked:false,
        isReportPanClicked:false,
        isReportCertificateClicked:false,
        isReportBirthDeathClicked:false

        
    }

    onPanCardClick= ()=>{
        this.setState({isPanCardClicked:!this.state.isPanCardClicked})
    }
    onCertificateClick= ()=>{
        this.setState({isCertificateClicked:!this.state.isCertificateClicked})
    }
    onTransactionClick= ()=>{
        this.setState({isTransactionClicked:!this.state.isTransactionClicked})
    }
    onWalletClick= ()=>{
        this.setState({isWalletClicked:!this.state.isWalletClicked})
    }
    onReportClick =()=>
    {
        this.setState({isReportClicked:!this.state.isReportClicked})
    }
    onReportPanClicked =()=>
    {
        this.setState({isReportPanClicked:!this.state.isReportPanClicked})
    }
    onReportCertificateClicked =()=>
    {
        this.setState({isReportCertificateClicked:!this.state.isReportCertificateClicked})
    }
    onReportBirthDeathClicked =()=>
    {
        this.setState({isReportBirthDeathClicked:!this.state.isReportBirthDeathClicked})
    }

    render(){
        let pancardSubMenu = "";
        let certificateSubMenu = "";
        let walletSubMenu= "";
        let reportSubMenu="";
        let reportPanSubSubMenu="";
        let reportCertificateSubSubMenu="";
        let reportBirthDeathSubSubMenu="";

        if(this.state.isPanCardClicked){
            pancardSubMenu=(
                <div>
                <div className="row side-sub-menu-row" >  
                <FontAwesomeIcon className="side-menu-icon-left" icon={faIdCard}  size="lg" />
                <span className="side-sub-menu-label">&nbsp;New</span>  
                </div>
                <div className="row side-sub-menu-row" >  
                <FontAwesomeIcon className="side-menu-icon-left" icon={faIdCard}  size="lg" />
                <span className="side-sub-menu-label">&nbsp;Update</span>  
                </div>
                </div>
            )
        }
        if(this.state.isCertificateClicked){
            certificateSubMenu=(
                <div>
                <div className="row side-sub-menu-row" >  
                <FontAwesomeIcon className="side-menu-icon-left" icon={faIdCard}  size="lg" />
                <span className="side-sub-menu-label">&nbsp;AJN</span>  
                </div>
                <div className="row side-sub-menu-row" >  
                <FontAwesomeIcon className="side-menu-icon-left" icon={faIdCard}  size="lg" />
                <span className="side-sub-menu-label">&nbsp;Birth</span>  
                </div>
                <div className="row side-sub-menu-row" >  
                <FontAwesomeIcon className="side-menu-icon-left" icon={faIdCard}  size="lg" />
                <span className="side-sub-menu-label">&nbsp;Death</span>  
                </div>
                </div>
            )
        }
        if(this.state.isWalletClicked){
            walletSubMenu=(
                <div>
                <div className="row side-sub-menu-row" >  
                <FontAwesomeIcon className="side-menu-icon-left" icon={faIdCard}  size="lg" />
                <span className="side-sub-menu-label">&nbsp;Add Balance</span>  
                </div>
                <div className="row side-sub-menu-row" >  
                <FontAwesomeIcon className="side-menu-icon-left" icon={faIdCard}  size="lg" />
                <span className="side-sub-menu-label">&nbsp;Check Balance</span>  
                </div>
                </div>
            )
        }
        if(this.state.isReportPanClicked){
            reportPanSubSubMenu=(
                <div>
                <div className="row side-sub-sub-menu-row" >  
                <FontAwesomeIcon className="side-menu-icon-left" icon={faBatteryHalf}  size="lg" />
                <span className="side-sub-sub-menu-label">&nbsp;Pending</span>  
                </div>
                <div className="row side-sub-sub-menu-row" >  
                <FontAwesomeIcon className="side-menu-icon-left" icon={faBatteryFull}  size="lg" />
                <span className="side-sub-sub-menu-label">&nbsp;Complete</span>  
                </div>
                </div>
            )
        }
        if(this.state.isReportCertificateClicked){
            reportCertificateSubSubMenu=(
                <div>
                <div className="row side-sub-sub-menu-row" >  
                <FontAwesomeIcon className="side-menu-icon-left" icon={faBatteryHalf}  size="lg" />
                <span className="side-sub-sub-menu-label">&nbsp;Pending</span>  
                </div>
                <div className="row side-sub-sub-menu-row" >  
                <FontAwesomeIcon className="side-menu-icon-left" icon={faBatteryFull}  size="lg" />
                <span className="side-sub-sub-menu-label">&nbsp;Complete</span>  
                </div>
                </div>
            )
        }
        if(this.state.isReportBirthDeathClicked){
            reportBirthDeathSubSubMenu=(
                <div>
                <div className="row side-sub-sub-menu-row" >  
                <FontAwesomeIcon className="side-menu-icon-left" icon={faBatteryHalf}  size="lg" />
                <span className="side-sub-sub-menu-label">&nbsp;Pending</span>  
                </div>
                <div className="row side-sub-sub-menu-row" >  
                <FontAwesomeIcon className="side-menu-icon-left" icon={faBatteryFull}  size="lg" />
                <span className="side-sub-sub-menu-label">&nbsp;Complete</span>  
                </div>
                </div>
            )
        }
        if(this.state.isReportClicked){
            reportSubMenu=(
                <div>
                <div className="row side-sub-menu-row" onClick={this.onReportPanClicked} >  
                <FontAwesomeIcon className="side-menu-icon-left" icon={faIdCard}  size="lg" />
                <span className="side-sub-menu-label">&nbsp;PAN</span>  
                <FontAwesomeIcon className="side-menu-icon-right" 
                                 icon={this.state.isReportPanClicked ?  faCaretUp: faCaretDown }
                                size="md" />
                </div>
                {reportPanSubSubMenu}
                <div className="row side-sub-menu-row" onClick={this.onReportCertificateClicked} >  
                <FontAwesomeIcon className="side-menu-icon-left" icon={faIdCardAlt}  size="lg" />
                <span className="side-sub-menu-label">&nbsp;Certificate</span>  
                <FontAwesomeIcon className="side-menu-icon-right" 
                                 icon={this.state.isReportCertificateClicked ?  faCaretUp: faCaretDown }
                                size="md" />
                </div>
                {reportCertificateSubSubMenu}
                            
                <div className="row side-sub-menu-row" onClick={this.onReportBirthDeathClicked} >  
                <FontAwesomeIcon className="side-menu-icon-left" icon={faFileAlt}  size="lg" />
                <span className="side-sub-menu-label">&nbsp;Birth/Death</span>  
                <FontAwesomeIcon className="side-menu-icon-right" 
                                 icon={this.state.isReportBirthDeathClicked ?  faCaretUp: faCaretDown }
                                size="md" />
                </div>
                {reportBirthDeathSubSubMenu}
                </div>
            )
        }
       
       

        
        return(
            <div>
            <div className="row side-menu-row" >  
                                        <FontAwesomeIcon className="side-menu-icon-left" icon={faHome}  size="lg" />
                                        <span className="side-menu-label">&nbsp;Dashboard</span>  
                            </div>
                            <div className="row side-menu-row" onClick={this.onPanCardClick} >  
                                        <FontAwesomeIcon className="side-menu-icon-left" icon={faIdCard}  size="lg" />
                                        <span className="side-menu-label">&nbsp;Pancard</span>  
                                        <FontAwesomeIcon className="side-menu-icon-right" 
                                                            
                                                         icon={this.state.isPanCardClicked ?  faCaretUp: faCaretDown }
                                                         size="md" />
                            </div>
                            {pancardSubMenu}
                            <div className="row side-menu-row" onClick={this.onCertificateClick} >  
                                        <FontAwesomeIcon className="side-menu-icon-left" icon={faIdCardAlt}  size="lg" />
                                        <span className="side-menu-label">&nbsp;Certificate</span> 
                                        <FontAwesomeIcon className="side-menu-icon-right"
                                                         
                                                         icon={this.state.isCertificateClicked ?  faCaretUp: faCaretDown }  
                                                         size="md" /> 
                            </div>
                            {certificateSubMenu}
                                                        
                            <div className="row side-menu-row" onClick={this.onTransactionClick} >  
                                        <FontAwesomeIcon className="side-menu-icon-left" icon={faCalculator}  size="lg" />
                                        <span className="side-menu-label">&nbsp;Transaction</span>  
                            </div>
                                                         
        
                            <div className="row side-menu-row" onClick={this.onWalletClick}  >  
                                        <FontAwesomeIcon className="side-menu-icon-left" icon={faRupeeSign}  size="lg" />
                                        <span className="side-menu-label">&nbsp;Wallet</span>  
                                        <FontAwesomeIcon className="side-menu-icon-right" 
                                                         icon={this.state.isWalletClicked ?  faCaretUp: faCaretDown }  
                                                         size="md" />
                            </div>
                            {walletSubMenu}
                            <div className="row side-menu-row" onClick={this.onReportClick} >  
                                        <FontAwesomeIcon className="side-menu-icon-left" icon={faFile}  size="lg" />
                                        <span className="side-menu-label">&nbsp;Report</span>  
                                        <FontAwesomeIcon className="side-menu-icon-right" 
                                                         
                                                         icon={this.state.isReportClicked ?  faCaretUp: faCaretDown }  
                                                         size="md" />
                            </div>
                            {reportSubMenu}
                            
                            
                            </div>
        )
    }
}

export default Sidenav;