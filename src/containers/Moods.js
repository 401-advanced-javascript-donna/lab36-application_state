import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getActions, getFace } from '../selectors/moodSelector';
import { saveGame } from '../action/gameActions';
import { getGameHistory } from '../selectors/gameSelector';
import GameHistory from '../components/gameHistory/GameHistory';


const Moods = ({ actions, emoji, handleSelection, handleSave, histories }) => {
  return (
    <>
      <Controls actions={actions} handleSelection={handleSelection} handleSave={handleSave} />
      <Face emoji={emoji} />
      <GameHistory histories={histories}/>
    </>
  );
};

Moods.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
  emoji: PropTypes.string.isRequired,
  handleSelection: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  histories: PropTypes.array
};

const mapStateToProps = (state) => ({
  emoji: getFace(state),
  actions: getActions(state),
  histories: getGameHistory(state)
});

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch({
      type: name
    });
  },
  handleSave(state) {
    dispatch(saveGame(state));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);
