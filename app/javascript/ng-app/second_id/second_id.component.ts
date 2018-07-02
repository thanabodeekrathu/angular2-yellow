import { Component } from '@angular/core';
import templateString from './second_id.html';
import { MyDataService } from '../my_data/my_data.service';
import { MyData } from '../my_data/my_data';
import { ActivatedRoute } from '@angular/router';


@Component({
  template: templateString,
  providers: [ MyDataService ]
})
export class Second_IdComponent {
  private myDatas: any;
  private attrs: any
  private newMyData: MyData;
  private createLabel;
  private myText;
  private id;
  private id_route;

  constructor(private myDataService: MyDataService,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe(params => {
        this.id_route = params['id'];
        console.log(this.id_route); // Print the parameter to the console. 
      });
  }

  ngOnInit() {

    this.id = this.id_route;
    this.getAll();
    this.newMyData = new MyData();
    this.createLabel = "create";

  }

  getAll() {
    this.myDataService.all().subscribe(resp => {
      console.log(resp[this.id - 1]);
      this.myDatas = resp[this.id - 1];
    }, e => {
      console.log(e);
    })
  }

  update(id, string_test, integer_test, boolean_test) {
    this.attrs = {
      string_test: string_test,
      integer_test: integer_test,
      boolean_test: boolean_test
    }
    this.myDataService.update(id, this.attrs).subscribe(resp => {
      console.log(resp);
      this.myDatas = resp;
    }, e => {
      console.log(e);
    })
  }

  create(newMyData) {
    console.log(newMyData.getCreateParam())
    this.myDataService.create(newMyData.getCreateParam()).subscribe(resp => {
      console.log(resp);
      this.myDatas = resp;
      this.newMyData = new MyData();
    }, e => {
      console.log(e);
    })
  }


}
