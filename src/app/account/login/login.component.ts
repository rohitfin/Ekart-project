import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ApiMasterService } from 'src/app/services/api-master.service';
import { GeneralService } from 'src/app/services/general.service';
import { ToastrServiceService } from 'src/app/services/toastr-service.service';
import { CustomValidators } from 'src/app/validators/customValidators.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //#region form
  myForm !: FormGroup;
  isSubmitted: boolean = false;
  isSubmiting: boolean = false;
  //#endregion

  constructor(
    private title: Title,
    private meta: Meta,
    private formBuilder: FormBuilder,
    private toastrService: ToastrServiceService,
    private apiMaster: ApiMasterService,
    private generalService: GeneralService
  ){
    
  }

  ngOnInit(): void {
    this.initForm();
  }

  //#region init form
  initForm() {
    this.myForm = this.formBuilder.group({
      userName: new FormControl('', [Validators.required]), //, CustomValidators.isMatchUserName
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, CustomValidators.noSpaceAllowed])
    })
  }
  get myFormControlValidation(): {[key: string]: AbstractControl} { //
    return this.myForm.controls;
  }
  //#endregion

  //#region submit


  onSubmit(){
    this.isSubmitted = true; console.log(this.myForm.controls);
    if(this.myForm.invalid){
      this.toastrService.showWarning('Field the required data', '');
      return;
    }else {
      this.isSubmiting = true;
      var data = this.myForm.value;
      // this.apiMaster.addUser(data).subscribe((resp: any)=>{
      //   if (resp && resp.name) {
      //     this.toastrService.showSuccess('Data submited successfully!', '');
      //   }else {
      //     this.toastrService.showSuccess('Something went wrong, try again', '');
      //   }
      //   this.isSubmitted = this.isSubmiting = false;
      // })
    }
  }

  //#endregion




}
