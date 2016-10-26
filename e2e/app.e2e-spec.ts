import { DualListPage } from './app.po';

describe('dual-list App', function() {
  let page: DualListPage;

  beforeEach(() => {
    page = new DualListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
