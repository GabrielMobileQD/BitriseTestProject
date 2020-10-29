describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('Dashboard'))).toBeVisible();
  });
  it('should have a step two instead of a step one text', async () => {
    await element(by.id('mainScrollView')).swipe('up', 'slow');
    await element(by.id('changeTextAbove')).tap() 
    await element(by.id('mainScrollView')).swipe('down', 'slow');
    await expect(element(by.text('Step Two'))).toBeVisible();
  });
  it('should have a visible Dashboard', async () => {
    await expect(element(by.id('Dashboard'))).toBeVisible();
  });
});
