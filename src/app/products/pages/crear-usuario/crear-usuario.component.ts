import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['crear-usuario.component.scss'],
})
export class CrearUsuarioComponent implements OnInit {

  creatingForm!: FormGroup;

  constructor( private readonly fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.creatingForm = this.initForm();
  }

  onSubmit():void {
    // console.log('Form -->');
  }

  initForm():FormGroup {
   return  this.fb.group({
      brandName   : ['', [Validators.required]],
      internalName: ['', [Validators.required, Validators.minLength(3)]],
      displayName : ['', [Validators.required, Validators.minLength(3)]],
      description : ['', [Validators.required, Validators.maxLength(100)]],
    })
  }
}
