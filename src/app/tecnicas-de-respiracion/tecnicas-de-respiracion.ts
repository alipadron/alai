import { TecnicaDeRespiracion } from './tecnica-de-respiracion.interface';

export const TECNICAS_DE_RESPIRACION: TecnicaDeRespiracion[] = [
  {
    id: 1,
    titulo: 'La respiración profundo o diafragmática',
    descripcion:
      'Para comenzar sentarse y apoyar la espalda completamente en una silla o en la pared y posicionar una mano sobre el vientre y la otra en el pecho.',
    parrafos: [
      'Tomar aire por la nariz, lenta y profundamente, mientras se cuenta hasta tres llenando bien de aire los pulmones. Si la mano situada en el vientre se levanta y la del pecho no se mueve estamos haciéndolo de forma correcta.',
      'Retener el aire durante 3 segundos.',
      'Soltar el aire por la boca lentamente, contando de nuevo hasta tres. El abdomen volverá a su posición natural.',
      'Repetir el proceso dos o tres veces.',
    ],
  },
  {
    id: 2,
    titulo: 'La técnica 4-7-8',
    descripcion:
      'Puede realizarse en cualquier postura cómoda, pero para iniciar es preferentemente hacerlo sentado y con la espalda recta.',
    parrafos: [
      'Cierra tu boca e inhala el aire a través de la nariz.',
      'Cuenta hasta cuatro.',
      'Aguanta la respiración durante siete segundos.',
      'Expira completamente el aire de tus pulmones durante ocho segundos (es importante realizar un sonido/soplido que puedas oír).',
    ],
  },
];
