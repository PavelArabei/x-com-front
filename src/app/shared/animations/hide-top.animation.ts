import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const hideTopAnimation = trigger('toggleNav', [
  state(
    'visible',
    style({
      height: '*',
      transform: 'translateY(0)',
      overflow: 'hidden',
    })
  ),
  state(
    'hidden',
    style({
      height: '0px',
      transform: 'translateY(-100%)',
      overflow: 'hidden',
    })
  ),
  transition('visible <=> hidden', [animate('0.3s ease-in-out')]),
]);
