import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['crear-usuario.component.scss'],
})
export class CrearUsuarioComponent implements OnInit {

  creatingForm : FormGroup = new FormGroup({});



  constructor( private readonly fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.creatingForm  = this.initForm();


    this.creatingForm.get('type')?.
    valueChanges.subscribe(type => {
      console.log('minItemSelected value changed')
      console.log(type)

      if ( type === 'one' ) {
        this.creatingForm.get('minItemSelected')?.disable()
        this.creatingForm.get('minItemQuantity')?.disable()
        this.creatingForm.get('minAggregated')  ?.disable()
        this.creatingForm.get('maxItemSelected')?.disable()
        this.creatingForm.get('maxItemQuantity')?.disable()
        this.creatingForm.get('maxAggregated')  ?.disable()
      } else {
        this.creatingForm.get('minItemSelected')?.enable()
        this.creatingForm.get('minItemQuantity')?.enable()
        this.creatingForm.get('minAggregated')  ?.enable()
        this.creatingForm.get('maxItemSelected')?.enable()
        this.creatingForm.get('maxItemQuantity')?.enable()
        this.creatingForm.get('maxAggregated')  ?.enable()
      };

   })

  }

  initForm():FormGroup {
   return  this.fb.group({
      brandName       : ['', [Validators.required] ],
      internalName    : ['', [Validators.required] ],
      displayName     : ['', [Validators.required] ],
      description     : ['', [Validators.required] ],

      type            : ['', [Validators.required] ],
      minItemSelected : ['', [Validators.required] ],
      minItemQuantity : ['', [Validators.required] ],
      minAggregated   : ['', [Validators.required] ],

      status          : ['', [Validators.required] ],
      maxItemSelected : ['', [Validators.required] ],
      maxItemQuantity : ['', [Validators.required] ],
      maxAggregated   : ['', [Validators.required] ],

    })
  }


  // initForm2(): FormGroup {
  //   return this.fb.group({


  //   })
  // }





}

