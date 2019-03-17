import React from 'react';

const MonCard = (props) => (
  <div className="col col-sm-6 col-md-3">
    <div className="card my-3 border border-danger card-bg">
      <img src={props.mon.default_img} alt={props.mon.name}></img>
      <hr/>
      <div className="card-body">
        <h3 className="text-center">
          {`#${props.mon.id} ${props.mon.name.toUpperCase()}`}
        </h3>
      </div>
    </div>
  </div>
)


export default MonCard;

<div class="card">
  <div class="card-header">
    Quote
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>