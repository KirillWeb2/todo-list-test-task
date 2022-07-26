import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Поиск заголовка', () => {
  render(<App />);
  const title = screen.getByText(/todos/i);
  expect(title).toBeInTheDocument();
});


test('Проверка блокировки кнопки', () => {
  render(<App />);
  const input = screen.getByTestId('form-input');
  const btn = screen.getByTestId('form-btn');
  fireEvent.change(input, { target: { value: "qw" } });
  expect(btn).toBeDisabled()
  fireEvent.change(input, { target: { value: "qwqwe" } });
  expect(btn).toBeEnabled()
});