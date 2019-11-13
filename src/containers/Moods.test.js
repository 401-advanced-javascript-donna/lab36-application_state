import React from 'react';
import { shallow } from 'enzyme';
import store from '../store';
import Moods from './Moods';

describe('Moods', () => {
  describe('container', () => {
    let wrapper;
    store.dispatch = jest.fn();
    beforeEach(() => {
      wrapper = shallow(<Moods store={store} />).dive();
    });

    it('matches a snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('updates state on DRINK_COFFEE selection', () => {
      wrapper.props().handleSelection('DRINK_COFFEE');

      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'DRINK_COFFEE'
      });
    });

    it('updates state on TAKE_NAP selection', () => {
      wrapper.props().handleSelection('TAKE_NAP');

      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'TAKE_NAP'
      });
    });

    it('updates state on EAT_SNACK selection', () => {
      wrapper.props().handleSelection('EAT_SNACK');

      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'EAT_SNACK'
      });
    });

    it('updates state on STUDY selection', () => {
      wrapper.props().handleSelection('STUDY');

      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'STUDY'
      });
    });
  });
});
