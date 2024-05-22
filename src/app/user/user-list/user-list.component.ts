import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ApiMasterService } from 'src/app/services/api-master.service';
import { ToastrServiceService } from 'src/app/services/toastr-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  arrData: any = {};
  isLoading: boolean = false;
  isNoData: boolean = false;

  constructor(
    private title: Title,
    private meta: Meta,
    private apiMaster: ApiMasterService,
    private toastrService: ToastrServiceService,

  ){}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.isLoading = true; this.isNoData = false; this.arrData = [];
    this.apiMaster.getUser().subscribe((resp)=>{
      if(resp && resp.length > 0){
        this.arrData = resp;
      }else {
        this.isNoData = true;
      }
      this.isLoading = false;
    })
  }

  deleteUser(id: string) {
    this.apiMaster.deleteUser(id).subscribe((resp) => {
      if (resp == null) {
        this.toastrService.showSuccess('User deleted successfully!', '');
        this.getUser();
      } else {
        this.toastrService.showError("Something wrong, please try after sometime.", "");
      }
    });
  }


}
