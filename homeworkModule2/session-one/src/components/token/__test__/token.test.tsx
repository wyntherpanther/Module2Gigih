import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from '../store'
import data from '../../../storage/module'
import Playlist from '../../../Pages/Home/mainPage'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import App from '../../../App'

jest.mock('axios');

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json(data))
  }),
)

const HeaderA = () => {
  return (
    <Router>
      <Provider store={store}>
        <Playlist />
      </Provider>
    </Router>
  )
}

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())



test('testing if the Search works', async () => {
  render(<HeaderA />);
  const Input = screen.getByRole('textbox', { name: "song search" });
  userEvent.type(Input, "A Night At The Opera (2011 Remaster)");
  await waitFor(() => { expect(Input).toHaveValue("A Night At The Opera (2011 Remaster)"); })
});

test('testing if the Submit works', async () => {

  render(<App />);

  const button = screen.getByTestId("songTitle");
  const Input = screen.getByRole('textbox', { name: "song search" });
  const search = screen.getByTestId("buttonSearch");
  const title = screen.getByTestId("songTitle");


  userEvent.click(button)
  userEvent.type(Input, "A Night At The Opera (2011 Remaster)");
  userEvent.click(search)
  await waitFor(() => { expect(title).toBeCalled(); })

});
