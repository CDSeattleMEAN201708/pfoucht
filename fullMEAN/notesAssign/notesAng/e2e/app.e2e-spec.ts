import { NotesAngPage } from './app.po';

describe('notes-ang App', () => {
  let page: NotesAngPage;

  beforeEach(() => {
    page = new NotesAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
