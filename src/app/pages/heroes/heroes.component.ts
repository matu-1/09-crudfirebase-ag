import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { HeroeModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes?: HeroeModel[];

  constructor(private heroeService: HeroeService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.heroeService.getAll().subscribe((res) => (this.heroes = res));
  }

  delete(id: string) {
    Swal.fire({
      title: '¿Esta seguro de eliminarlo?',
      showCancelButton: true,
      icon: 'question',
    }).then((result) => {
      if (result.isConfirmed)
        this.heroeService.delete(id).subscribe((_) => {
          this.heroes = this.heroes?.filter((item) => item.id !== id); // o usar splice
        });
    });
  }
}
