import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-heroe-crear',
  templateUrl: './heroe-crear.component.html',
  styleUrls: ['./heroe-crear.component.css'],
})
export class HeroeCrearComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private heroeService: HeroeService,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getById();
  }

  createForm() {
    this.form = this.fb.group({
      id: [{ value: null, disabled: true }],
      nombre: [, Validators.required],
      poder: [, Validators.required],
      isVivo: [true],
    });
  }

  getById() {
    const id = this.activatedRoute.snapshot.params.id;
    if (id !== 'nuevo')
      this.heroeService
        .getById(id)
        .subscribe((res) => this.form.patchValue(res));
  }

  onSubmit() {
    console.log('form values', this.form.value, this.form.getRawValue());
    const values = this.form.getRawValue();
    Swal.fire({
      title: 'Espere por favor...',
      allowOutsideClick: false,
    });
    Swal.showLoading();
    if (!values.id)
      this.heroeService.create(values).subscribe((result) => {
        this.form.patchValue(result);
        Swal.fire(values.nombre, 'Se creo correctamente', 'success');
      });
    else
      this.heroeService.update(values).subscribe((res) => {
        Swal.fire(values.nombre, 'Se actualizo correctamente', 'success');
      });
  }
}
