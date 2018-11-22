import { A7projectPage } from './app.po';

describe('a7project App', function() {
  let page: A7projectPage;

  beforeEach(() => {
    page = new A7projectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
