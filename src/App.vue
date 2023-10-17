<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import { useStore } from '@/stores/user';

const store = useStore();

onLaunch(async () => {
  // 获取token
  store.checkLocalToken();
  console.log('App Launch');
});
onShow(() => {
  console.log('App Show');
});
onHide(() => {
  console.log('App Hide');
});
</script>
