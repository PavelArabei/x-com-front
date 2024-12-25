import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const toggleAnimation = trigger('toggle', [
  transition(':enter', [
    style({ height: '0px', transform: 'translateY(-100%)', opacity: 0 }),
    animate(
      '0.3s ease-in-out',
      style({ height: '*', transform: 'translateY(0)', opacity: 1 })
    ),
  ]),

  transition(':leave', [
    animate(
      '0.3s ease-in-out',
      style({ height: '0px', transform: 'translateY(-100%)', opacity: 0 })
    ),
  ]),

  state(
    'visible',
    style({
      height: '*',
      transform: 'translateY(0)',
      overflow: 'hidden',
      opacity: 1,
    })
  ),
  state(
    'hidden',
    style({
      height: '0px',
      transform: 'translateY(-100%)',
      overflow: 'hidden',
      opacity: 0,
    })
  ),
  transition('visible <=> hidden', [animate('0.3s ease-in-out')]),
]);
