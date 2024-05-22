import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrServiceService } from 'src/app/services/toastr-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchText: any = '';

  @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private toastr: ToastrServiceService
  ){

  }

  onSearchChange(){
    this.searchTextChange.emit(this.searchText);
  }

  onClickSearch(inputEl: HTMLInputElement ){
    this.searchText = inputEl.value;
    this.searchTextChange.emit(this.searchText);

    if(inputEl.value == ''){
      this.toastr.showError('Please enter something to search.', '');
    }
  }

}
