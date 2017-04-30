import { CodeTreatisePage } from './app.po';

describe('code-treatise App', () => {
  let page: CodeTreatisePage;

  beforeEach(() => {
    page = new CodeTreatisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
