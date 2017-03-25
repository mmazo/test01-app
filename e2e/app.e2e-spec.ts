import { Test01AppPage } from './app.po';

describe('test01-app App', () => {
  let page: Test01AppPage;

  beforeEach(() => {
    page = new Test01AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
