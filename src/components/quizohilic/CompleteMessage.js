import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {completeQuizohilic} from '../../actions/login';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement(document.getElementById('App'));

class CompleteMessage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: true,
      secondTime: false
    }

    this.final = false;

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.continueModal = this.continueModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.completeMessage = this.completeMessage.bind(this);
    this.violationMessage = this.violationMessage.bind(this);
    this.timeoutMessage = this.timeoutMessage.bind(this);

    this.setSecondTime = this.setSecondTime.bind(this);
  }

  componentDidUpdate() {
    if(this.props.modal === 'Voilation') {
    this.setSecondTime();
     this.props.handleSetActive();  
    }
  }

  setSecondTime() {
    this.final = true;
    this.setState({secondTime: true})
    console.log(this.state.secondTime, this.final)
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }
  continueModal() {
    this.setState({ modalIsOpen: false });
    this.props.continueModal();
  }
  closeModal() {
    this.props.dispatch(completeQuizohilic());
    this.setState({ modalIsOpen: false });
    this.props.closeModal();
  }



  completeMessage() {
    return (
      
        <div>
          <div className="head">
            <h4>Completed!</h4>
          </div>
          <div className="content">
            <div className="good-job">
              <i className="fa fa-hourglass-end" aria-hidden="true"></i>
              <h4>We will publish the results shortly</h4>
              <button className="button-done shadow" onClick={this.closeModal}>Done</button>
            </div>
          </div>
        </div>

    )
  }

  violationMessage() {
    return (
      
        <div>
          <div className="head-oops">
            <h4>Oops!</h4>
          </div>
          <div className="content">
            <div className="oops">
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
              <h4>Quiz is not yet completed, Do you want to leave ?</h4>
              <div className="btn-yes-no"> 
                <button className="button-yes shadow-sm" onClick={this.final ? this.closeModal : this.continueModal}>Yes</button>
              </div>
             
            </div>
          </div>
        </div>

    )
  }


  timeoutMessage() {
    return (
      
        <div>
          <div className="head">
            <h4>Timesup !</h4>
          </div>
          <div className="content">
            <div className="good-job">
              <i className="fa fa-hourglass-end" aria-hidden="true"></i>
              <h4>You are not allowed to minimize as the quiz is not completed!</h4>
              <button className="button-done shadow" onClick={this.closeModal}>Done</button>
            </div>
          </div>
        </div>

    )
  }



  render() {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
        contentLabel="Example Modal"
      >


      { this.props.modal === 'Completed' ? this.completeMessage() : this.props.modal === 'Timeout' ? this.timeoutMessage() : this.violationMessage() }

      </Modal>
    )
  }
}

export default connect()(CompleteMessage);