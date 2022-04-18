import { render, screen } from '@testing-library/react';
import Item from "../Item"
import data from "../../../storage/module"

test('Item tester', () => {
    render(<Item key={data[0].uri} track={data[0]} selected={false} />);
    const title = screen.getByText('A Night At The Opera (2011 Remaster)');
    const image = screen.getByAltText('Bohemian Rhapsody - Remastered 2011');
    const name = screen.getByText("Queen");
    const duration = screen.getByText('05:54');
    const button = screen.getByRole('button', {name:"Select"});
    expect(title).toBeTruthy();
    expect(name).toBeTruthy();
    expect(duration).toBeTruthy();
    expect(button).toBeTruthy();
    expect(image).toBeTruthy();
  });
  