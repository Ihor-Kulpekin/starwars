import React, { Component } from 'react';

type State = {
  error: Error | null;
  eventId?: string;
};

class ErrorBoundary extends Component<any, State> {
  state = {
    error: null,
    eventId: undefined
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('error',error)
    this.setState({error})
  }

  render() {
    if (this.state.error){
      return <h1 style={{color:'red'}}>Something went wrong</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
