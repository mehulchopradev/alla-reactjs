import { Component } from "react";

// Error boundary
class ErrorHandler extends Component {

  state = {
    errorMessage: '',
  }

  static getDerivedStateFromError(error) {
    return {
      errorMessage: error.toString(),
    } // render()
  }

  componentDidCatch(error, errorInfo) {
    // send this error to the logging service
    console.log('Error caught in the ErrorBoundary');
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if(this.state.errorMessage) {
      return (
        <>
          <h2>Something went wrong! Please try again later</h2>
          <p>Reason: {this.state.errorMessage}</p>
        </>
      )
    }
    return this.props.children;
  }
}

export default ErrorHandler;