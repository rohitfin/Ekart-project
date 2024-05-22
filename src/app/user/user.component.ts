import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrServiceService } from '../services/toastr-service.service';
import { Title } from '@angular/platform-browser';
import { CustomValidators } from '../validators/customValidators.validators';
import { ApiMasterService } from '../services/api-master.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  //#region form
  myForm !: FormGroup;
  isSubmitted: boolean = false;
  isSubmiting: boolean = false;
  //#endregion

  arrSkills = [
    { name: 'HTML', value: 'Html' },
    { name: 'CSS 3', value: 'CSS3' },
    { name: 'Jquery', value: 'Jquery' },
    { name: 'JavaScript', value: 'Javascript' },
    { name: 'Bootstrap', value: 'Bootstrap' },
    { name: 'Angular', value: 'Angular' },
    { name: 'NodeJs', value: 'NodeJs' },
    { name: 'MongoDB', value: 'MongoDB' },
    { name: 'Git Hub', value: 'GitHub' },
  ];
  arrSkillsSetting = {  idField: 'value', textField: 'name', allowSearchFilter: true }

  constructor(
    private title: Title,
    private formBuilder: FormBuilder,
    private toastrService: ToastrServiceService,
    private apiMaster: ApiMasterService
  ){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.title.setTitle('User Profile');
    this.initForm();

    this.myForm.get('email')?.statusChanges.subscribe((val)=>{
      console.log('First Name => '+ val);
    })

  }

  //#region Init form
  initForm(){
    this.myForm = this.formBuilder.group({
      userName: new FormControl('', [Validators.required, CustomValidators.checkUserName]),
      firstName: new FormControl('', [Validators.required, CustomValidators.noSpaceAllowed]),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[7-9][0-9]{9}$")]),
      date: new FormControl(''),
      gender: new FormControl(''),
      addressDetail: new FormGroup({
        address: new FormControl(''),
        address2: new FormControl(''),
        country: new FormControl('', [Validators.required]),
        state: new FormControl(''),
        district: new FormControl(''),
        pincode: new FormControl(''),
      }),

      skills: new FormControl(''),
      experiences: this.formBuilder.array([this.newExperience()])

    })
  }
  get myFormControl(): {[key: string]: AbstractControl} { //
    return this.myForm.controls;
  }
  //#endregion

  //#region Form Array
  experience(): FormArray {
    return this.myForm.get("experiences") as FormArray;
  }
  experienceControlValidator(index: number) {
    // var experienceList = this.myForm.get('experiences') as FormArray;
    // const formGroup = experienceList.controls[index] as FormGroup;
    // return formGroup;
    return this.experience().controls[index] as FormGroup;

  }
  newExperience(): FormGroup {
    return this.formBuilder.group({
      companyName: new FormControl(null, [Validators.required]),
      experience: new FormControl(null, [Validators.required]),
      formDate: new FormControl(null),
      toDate: new FormControl(null)
    })
  }
  addExperience() {
    this.experience().push(this.newExperience());
  }
  removeExperience(index: number) {
    this.experience().removeAt(index);
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

      this.apiMaster.addorUpdateUser(data).subscribe((resp) => {
        if (resp) {
          this.toastrService.showSuccess("User Added Successfully!", "");
          this.myForm.reset();
        } else {
          this.toastrService.showError("Something wrong, please try after sometime.", "");
        }
        this.isSubmitted = this.isSubmiting = false;
      })
    }
  }

  //#endregion

}
