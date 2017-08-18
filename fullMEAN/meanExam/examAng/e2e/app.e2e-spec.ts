import { ExamAngPage } from './app.po';

describe('exam-ang App', () => {
  let page: ExamAngPage;

  beforeEach(() => {
    page = new ExamAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
