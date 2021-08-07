export class HeroeModel {
  id?: string;
  nombre?: string;
  poder?: string;
  isVivo: boolean;

  constructor() {
    this.isVivo = true;
  }
}
