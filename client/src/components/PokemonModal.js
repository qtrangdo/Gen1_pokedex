import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { closeModal } from '../actions/actions';

class PokemonModal extends Component {
  close() {
    const { onCloseModal } = this.props;
    onCloseModal();
  }

  displayTypes(types) {
    return types.map(type => (
      <span className={`mr-3 p-2 text-white font-weight-bold rounded ${type}`} key={type}>{type}</span>
    ));
  }

  displayEvolutions(forms) {
    let result = `${forms.shift()} ➢➢`;
    while (forms.length) {
      let item = forms.shift();
      result += ` ${item} ➢➢`
    }
    return result.slice(0, result.length - 3);
  }

  render() {
    const { oneMon, modalOn } = this.props;
    return (
      <div>
        {oneMon.length && (
          <div
            className="modal"
            show={modalOn.toString()}
            style={{
              display: 'block',
            }}
            id="PokemonStat"
            tabIndex="-1"
            role="dialog"
            onClick={this.close.bind(this)}
            aria-labelledby="ModalStatTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content modal-bg">
                <div className="modal-header">
                  <h5 className="modal-title mx-auto text-danger">{`#${oneMon[0].id} ${oneMon[0].name.toUpperCase()}`}</h5>
                  <button type="button" className="close ml-0" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col col-md-6 col-12 text-center">
                      <img src={oneMon[0].gif_img} alt={oneMon.name} className="mx-auto img-fluid img-responsive"></img>
                    </div>
                    <div className="col col-md-6 col-12">
                      <p className="description">{oneMon[0].description}</p>
                    </div>
                  </div>
                  <div className="container">
                    {this.displayTypes(oneMon[0].type)}
                  </div>
                </div>
                <div className="modal-footer justify-content-center">
                  <div className="row">
                    <div className="col col-md-3 col-12 text-center text-danger">
                      <p>EVOLUTIONS</p>
                    </div>
                    <div className="col col-md-9 col-12 text-primary text-center">
                      <p>{this.displayEvolutions(oneMon[0].evolutions)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        )}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    oneMon: state.pokemon.oneMon,
    modalOn: state.pokemon.modalOn,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onCloseModal: () => dispatch(closeModal()),
  }
);

PokemonModal.propTypes = {
  oneMon: Proptypes.instanceOf(Array).isRequired,
  modalOn: Proptypes.bool.isRequired,
  onCloseModal: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonModal);

