/* eslint-disable no-unused-vars */
import { getCoffees, getSnacks, getNaps, getStudies } from '../selectors/moodSelector';
import { isTired, isHyper, isEducated, isHungry } from '../selectors/moodSelector';

describe('Mood Selectors', () => {
  describe('Get stuff', () => {
    it('should get a coffee', () => {
      const state = {
        mood: {
          coffees: 2,
          snacks: 0,
          naps: 0,
          studies: 0
        }
      };
      const coffee = getCoffees(state);
      expect(coffee).toBe(2);
    });
  
    it('should get a snack', () => {
      const state = {
        mood: {
          coffees: 0,
          snacks: 2,
          naps: 0,
          studies: 0
        }
      };
      const snacks = getSnacks(state);
      expect(snacks).toBe(2);
    });
  
    it('should get a nap', () => {
      const state = {
        mood: {
          coffees: 0,
          snacks: 0,
          naps: 10,
          studies: 0
        }
      };
      const nap = getNaps(state);
      expect(nap).toBe(10);
    });
  
    it('should get studies', () => {
      const state = {
        mood: {
          coffees: 0,
          snacks: 0,
          naps: 0,
          studies: 1
        }
      };
      const study = getStudies(state);
      expect(study).toBe(1);
    });
  });
});
