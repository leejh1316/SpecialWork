import { DirectiveBinding } from 'vue';

export default {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;
    const isDisabled = value?.disabled ?? false;
    if(isDisabled) return;
    const scale = value?.scale ?? 0.94; // 기본 스케일 값
    const transitionTime = value?.transitionTime ?? '0.25s'; // 기본 전환 시간

    el.style.transition = `transform ${transitionTime}`;
    el.style.transform = 'scale(1)';

    // 이벤트 핸들러 정의
    const scaleDown = () => el.style.transform = `scale(${scale})`;
    const scaleUp = () => el.style.transform = 'scale(1)';

    // 이벤트 리스너 등록
    el.addEventListener('mousedown', scaleDown);
    el.addEventListener('touchstart', scaleDown);
    el.addEventListener('mouseup', scaleUp);
    el.addEventListener('touchend', scaleUp);

    // 추후 정리를 위한 속성 추가
    el._scaleDown = scaleDown;
    el._scaleUp = scaleUp;
  },
  unmounted(el: HTMLElement) {
    // 이벤트 리스너 제거
    el.removeEventListener('mousedown', el._scaleDown);
    el.removeEventListener('touchstart', el._scaleDown);
    el.removeEventListener('mouseup', el._scaleUp);
    el.removeEventListener('touchend', el._scaleUp);
  }
}