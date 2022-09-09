import { IHeroe } from './../interfaces/heroe';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe:IHeroe): string {
    return `../../../../assets/heroes/${heroe.id}.jpg`;
  }

}
