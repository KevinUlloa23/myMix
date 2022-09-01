import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Productservice } from '../../../service/product.service';

@Component({
  selector: 'app-crear-product',
  templateUrl: './crear-product.component.html',
  styleUrls: ['crear-product.component.scss'],
})
export class CrearProductComponent implements OnInit {
  creatingForm: FormGroup = new FormGroup({});
  id = '';
  form: [] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private productService: Productservice
  ) {}

  ngOnInit(): void {
    this.creatingForm = this.initForm();
    this.id = this.route.snapshot.paramMap.get('id')!;

    const productData = this.productService.getProductDataById();
    if (productData) {
      this.creatingForm.patchValue(productData);
    }

    this.creatingForm.get('type')?.valueChanges.subscribe((type) => {
      // console.log('minItemSelected value changed')
      // console.log(type)
      if (type === 'one') {
        this.creatingForm.get('minItemSelected')?.disable();
        this.creatingForm.get('minItemQuantity')?.disable();
        this.creatingForm.get('minAggregated')?.disable();
        this.creatingForm.get('maxItemSelected')?.disable();
        this.creatingForm.get('maxItemQuantity')?.disable();
        this.creatingForm.get('maxAggregated')?.disable();
      } else {
        this.creatingForm.get('minItemSelected')?.enable();
        this.creatingForm.get('minItemQuantity')?.enable();
        this.creatingForm.get('minAggregated')?.enable();
        this.creatingForm.get('maxItemSelected')?.enable();
        this.creatingForm.get('maxItemQuantity')?.enable();
        this.creatingForm.get('maxAggregated')?.enable();
      }
    });
  }

  initForm(): FormGroup {
    return this.fb.group({
      brandName: ['', [Validators.required]],
      internalName: ['', [Validators.required, Validators.minLength(3)]],
      displayName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],

      type: ['one', [Validators.required]],
      minItemSelected: [{ value: '', disabled: true }, [Validators.required]],
      minItemQuantity: [{ value: '', disabled: true }, [Validators.required]],
      minAggregated: [{ value: '', disabled: true }, [Validators.required]],

      status: ['', [Validators.required]],
      maxItemSelected: [{ value: '', disabled: true }, [Validators.required]],
      maxItemQuantity: [{ value: '', disabled: true }, [Validators.required]],
      maxAggregated: [{ value: '', disabled: true }, [Validators.required]],

      productId: [{ value: '' }, []],
      SKU: [{ value: '' }, [Validators.required]],
      price: [{ value: '' }, [Validators.required]],
    });
  }

  editItem() {
    const data = this.creatingForm.getRawValue();
    this.productService.editItem(data);
  }

  // Enviar data al svc
  // buscar data dentro del array (index o ID)
  // como poner indice en una tabla de angular material, enviar a la funcion para que la funcion lo envie al servicio.

  // initForm2(): FormGroup {
  //   return this.fb.group({

  //   })
  // }
}
