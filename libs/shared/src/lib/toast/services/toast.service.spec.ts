import { ToastService } from './toast.service';
describe('ToastService', () => {
  const service = new ToastService();

  it('Should show and hide error message', () => {
    jest.useFakeTimers();
    service.showError('error');
    let toast = document.getElementById(`${service['id']}`);
    expect(toast).toBeTruthy();
    jest.runAllTimers();
    toast = document.getElementById(`${service['id']}`);
    expect(toast).toBeFalsy();
  });
});
