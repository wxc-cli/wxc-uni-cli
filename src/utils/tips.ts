import { showToast } from 'vant';
export const warning = (message: string, cb: () => void) => {
  showToast({ message, type: 'fail' });
  cb?.();
};
