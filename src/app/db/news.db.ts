import { IArticle } from '../interfaces/iarticle.interface';

export const NEWS: IArticle[] = [
  {
    title: 'Descubren nueva especie en la Amazonia',
    image:
      'https://images.unsplash.com/photo-1518737743670-3f217c4def4a?q=80&w=3543&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Científicos han descubierto una nueva especie de insecto en la selva amazónica, lo que podría tener implicaciones importantes para la biodiversidad local.',
    date: new Date('2025-02-16'),
  },
  {
    title: 'Innovación en tecnología médica',
    image:
      'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Una startup ha lanzado un dispositivo revolucionario que promete mejorar la precisión en diagnósticos médicos, facilitando la detección temprana de enfermedades.',
    date: new Date('2025-02-17'),
  },
];
