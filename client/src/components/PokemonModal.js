import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { closeModal } from '../actions/actions';

class PokemonModal extends Component {
  close() {
    const { onCloseModal } = this.props;
    onCloseModal();
  }
  render() {
    const { oneMon, modalOn } = this.props;
    return (
      <div>
        {modalOn && (
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
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
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

