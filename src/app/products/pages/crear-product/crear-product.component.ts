import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-product',
  templateUrl: './crear-product.component.html',
  styleUrls: ['crear-product.component.scss'],
})
export class CrearProductComponent implements OnInit {

  creatingForm : FormGroup = new FormGroup({});
  id = '';


  constructor( private fb: FormBuilder,
               private router: Router,
               private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.creatingForm  = this.initForm();
    this.id = this.route.snapshot.paramMap.get('id')!

    const product = JSON.parse(localStorage.getItem('product')!);
    if (product) {
      this.creatingForm.patchValue(product);
    }



    this.creatingForm.get('type')?.
    valueChanges.subscribe(type => {
      // console.log('minItemSelected value changed')
      // console.log(type)
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
      internalName    : ['', [Validators.required, Validators.minLength(3)] ],
      displayName     : ['', [Validators.required, Validators.minLength(3)] ],
      description     : ['', [Validators.required, Validators.minLength(3)] ],

      type            : ['one', [Validators.required] ],
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

