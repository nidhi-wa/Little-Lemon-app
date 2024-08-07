
import { render, screen, waitFor,fireEvent } from '@testing-library/react';
import Main from './component/Main';
import BookingForm from './component/BookingForm';
import { fetchAPI } from './MockApi.js'; // Update this path to where your MockApi is located
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

test('Renders the BookingForm heading', () => {

// Mock available times and necessary functions
const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const dispatch = jest.fn();
  render(<BookingForm  availableTimes={availableTimes} dispatch={dispatch}/>);

    const headingElement = screen.getByText("Book Now!");
    expect(headingElement).toBeInTheDocument();
})

// HTML5 Form validation  Test


test('Renders date input with required attribute', () => {
  render(<BookingForm availableTimes={[]} />);
  const dateInput = screen.getByLabelText(/Choose date/i);
  expect(dateInput).toHaveAttribute('required');
});

test('Renders time select with required attribute', () => {
  render(<BookingForm availableTimes={[]} />);
  const timeSelect = screen.getByLabelText(/Choose time/i);
  expect(timeSelect).toHaveAttribute('required');
});

test('Renders guests input with required and min attributes', () => {
  render(<BookingForm availableTimes={[]} />);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('min', '1');
});

test('Renders occasion select with required attribute', () => {
  render(<BookingForm availableTimes={[]} />);
  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toHaveAttribute('required');
});

//  javascript/Recat Client-side Form Validation Test


test('Submit button is disabled if form is invalid', () => {
  render(<BookingForm availableTimes={[]} />);
  const submitButton = screen.getByText(/make your reservation/i);
  expect(submitButton).toBeDisabled();
});

test('Submit button is enabled if form is valid', () => {
  const dispatch = jest.fn();
  render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={dispatch}/>);
  
  const dateInput = screen.getByLabelText(/Choose date/i);
  const timeSelect = screen.getByLabelText(/Choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);
  const submitButton = screen.getByText(/make your reservation/i);
  
  fireEvent.change(dateInput, { target: { value: '2023-12-25' } });
  fireEvent.change(timeSelect, { target: { value: '17:00' } });
  fireEvent.change(guestsInput, { target: { value: '2' } });
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
  
  expect(submitButton).not.toBeDisabled();
});

test('Submit button remains disabled if form is invalid', () => {
  const dispatch = jest.fn();
  render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={dispatch} />);
  
  const dateInput = screen.getByLabelText(/Choose date/i);
  const timeSelect = screen.getByLabelText(/Choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);
  const submitButton = screen.getByText(/make your reservation/i);
  
  fireEvent.change(dateInput, { target: { value: '2023-12-25' } });
  fireEvent.change(timeSelect, { target: { value: '' } });
  fireEvent.change(guestsInput, { target: { value: '0' } });
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
  
  expect(submitButton).toBeDisabled();
});

 // Adjust the import path accordingly




 // Mock fetchAPI function
jest.mock('./MockApi', () => ({
  fetchAPI: jest.fn(),
}));

// Reducer function
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
      return action.payload;
    case 'UPDATE_TIMES':
         return action.payload;
    default:
      return state;
  }
};

// Initial state function
const initializeTimes = async () => {
  const today = new Date().toISOString().split('T')[0];
  const times = await fetchAPI(today);
  return times;
};

describe('Reducer and Initialization Tests', () => {

  describe('timesReducer', () => {
    it('should return the initial state', () => {
      const initialState = [];
      const action = { type: 'UNKNOWN_ACTION' };
      const state = timesReducer(initialState, action);
      expect(state).toEqual(initialState);
    });

    it('should handle INITIALIZE_TIMES', () => {
      const initialState = [];
      const action = { type: 'INITIALIZE_TIMES', payload: ['18:00', '19:00'] };
      const state = timesReducer(initialState, action);
      expect(state).toEqual(['18:00', '19:00']);
    });

    it('should handle UPDATE_TIMES', () => {
      const initialState = ['18:00'];
      const action = { type: 'UPDATE_TIMES', payload: ['20:00', '21:00'] };
      const state = timesReducer(initialState, action);
      expect(state).toEqual(['20:00', '21:00']);
    });
  });

  describe('initializeTimes', () => {
    it('should initialize times with a non-empty array', async () => {
      // Mock the fetchAPI function to return a non-empty array
      fetchAPI.mockResolvedValue(['18:00', '19:00', '20:00']);

      const times = await initializeTimes();

      expect(fetchAPI).toHaveBeenCalledWith(new Date().toISOString().split('T')[0]);
      expect(times).toEqual(['18:00', '19:00', '20:00']);
    });
  });
});

