import React, { Component } from "react";

class Jumbo extends Component {
  render() {
    return (
        <div className="Jumbotron">
          <div class="jumbotron">
          <h1 class="display-4">Start your party!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4"></hr>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>
        </div>
      );
    }
  }
  
  export default Jumbo;