import { FlexLayoutPage } from './app.po';

describe('flex-layout App', () => {
  let page: FlexLayoutPage;

  beforeEach(() => {
    page = new FlexLayoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
