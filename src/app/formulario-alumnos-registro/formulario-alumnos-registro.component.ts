import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-formulario-alumnos-registro',
  templateUrl: './formulario-alumnos-registro.component.html',
  styleUrls: ['./formulario-alumnos-registro.component.css']
})


export class FormularioAlumnosComponent {

  password: any[] = [];

  provincias = [
    'Buenos Aires',
    'Ciudad Autónoma de Buenos Aires',
    'Catamarca',
    'Chaco',
    'Chubut',
    'Córdoba',
    'Corrientes',
    'Entre Ríos',
    'Formosa',
    'Jujuy',
    'La Pampa',
    'La Rioja',
    'Mendoza',
    'Misiones',
    'Neuquén',
    'Río Negro',
    'Salta',
    'San Juan',
    'San Luis',
    'Santa Cruz',
    'Santa Fe',
    'Santiago del Estero',
    'Tierra del Fuego', 
    'Antártida e Islas del Atlántico Sur',
    'Tucumán'];

  cursos =[
      'Artes Digitales',
      'Diseño UX/UI',
      'Marketing Digital',
      'Programación y Desarrollo',
      'Data',
      'Inversiones & Finanzas',
      'Business',
      'Ciberseguridad',
      'Producto',
    'No-Code'];

  nombreControl = new FormControl(
    '',
    [
      Validators.required,
     
    ]
  );

  apellidoControl = new FormControl(
       '',
    [
      Validators.required,
    ]
  );

  edadControl = new FormControl(
       '',
    [
      Validators.required,
      this.mayorDeEdad(),
    ]
  );

  provinciaControl = new FormControl(
       '',
    [
      Validators.required,
      this.selectSomething(),
    ]
  );

  emailControl = new FormControl(
       '',
    [
      Validators.required,
      Validators.email,
    ]
  );

  cursoControl = new FormControl(
       '',
    [
      Validators.required,
      this.selectSomething(),
    ]
  );

  passwordControl = new FormControl(
       '',
    [
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z]).{5,12}'),
    ]
  );
  
  confirmPasswordControl = new FormControl(
       '',
    [
      Validators.required,
      this.passwordMatch(),
    ]
  );

  


  registerForm: FormGroup;

      
  constructor(){
    this.registerForm = new FormGroup({
      
      nombre: this.nombreControl,

      apellido: this.apellidoControl,

      edad: this.edadControl,

      provincia: this.provinciaControl,

      email: this.emailControl,

      curso: this.cursoControl,

      password: this.passwordControl,

      confirmPassword: this.confirmPasswordControl,

    });
  }



 
  get nombreControlIsInvalid(): boolean{
    return !!(this.nombreControl.invalid && this.nombreControl.touched);
  }

  get apellidoControlIsInvalid(): boolean{
    return !!(this.apellidoControl.invalid && this.apellidoControl.touched);
  }

  get edadControlIsInvalid(): boolean{
    return !!(this.edadControl.invalid && this.edadControl.touched);
  }

  get provinciaControlIsInvalid(): boolean{
    return !!(this.provinciaControl.invalid && this.provinciaControl.touched);
  }

  get emailControlIsInvalid(): boolean{
    return !!(this.emailControl.invalid && this.emailControl.touched);
  }

  get cursoControlIsInvalid(): boolean{
    return !!(this.cursoControl.invalid && this.cursoControl.touched);
  }

  get passwordControlIsInvalid(): boolean{
    return !!(this.passwordControl.invalid && this.passwordControl.touched);
  }

  get confirmPasswordControlIsInvalid(): boolean{
    return !!(this.confirmPasswordControl.invalid && this.confirmPasswordControl.touched);
  }

  selectSomething(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null =>{
      if (control.value?.includes('Elige..')){
        return {
          noSelect: true
        }
      }
      else {
        return null
      }
    }
  }


  passwordMatch(): ValidatorFn{

    return (control: AbstractControl): ValidationErrors | null =>{
      if (control.value != this.passwordControl.value ){
        return {
          noMatch: true
        }
      }
      else {
        return null
      }
    }
  }

  mayorDeEdad(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null =>{
      if (control.value < 18 && control.value > 0 ){
        return {
          noMayor: true
        }
      }
      else {
        return null
      }
    }
  }


  onSubmit(): void {
    if (this.registerForm.valid){ 
    this.registerForm.reset();
    alert('¡Gracias por crear tu cuenta! Te enviamos un correo para qu verifiques tus datos')
    } else {
      this.registerForm.markAllAsTouched();
      alert('Por favor corregir los campos con ERROR')
    }
  }

 


}

