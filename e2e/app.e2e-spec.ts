import { TemplateAngularMaterialPage } from './app.po';

describe('template-angular-material App', () => {
  let page: TemplateAngularMaterialPage;

  beforeEach(() => {
    page = new TemplateAngularMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
