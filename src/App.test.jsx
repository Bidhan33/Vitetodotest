import App from "./App";
import TodoTable from './TodoTable';
import { render, screen, fireEvent } from "@testing-library/react"; // Make sure fireEvent is imported
import '@testing-library/jest-dom';

test("add todo", () => {
    render(<App />);
    const descInput = screen.getByPlaceholderText("Description");
    fireEvent.change(descInput, { target: { value: "Go to coffee" } });
  
    const dateInput = screen.getByPlaceholderText("Date");
    fireEvent.change(dateInput, { target: { value: "29.01.2023" } });
  
  
    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);
 
    const table = screen.getByRole("table");
    expect(table).toHaveTextContent(/Go to coffee/i);
    expect(table).toHaveTextContent(/29.01.2023/i);
  });