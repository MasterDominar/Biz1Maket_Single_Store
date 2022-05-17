import { Component } from '@angular/core'
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cui-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  loginfo: any;
  CompanyId: any;
  StoreId: any;
  constructor(private Auth: AuthService,  private router: Router){

  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem("user"))
    const store = JSON.parse(localStorage.getItem("store"))
    this.CompanyId = user.companyId
    this.StoreId = user.storeid

    // this.Auth.getdbdata(['loginfo']).subscribe(data => {
    //   this.loginfo = data['loginfo'][0]
    //   this.CompanyId = this.loginfo.CompanyId
    //   this.StoreId = this.loginfo.StoreId
    //   console.log(this.loginfo)
    //   // this.sync()
    // })
  }

  sync() {
    this.Auth.getstoredata(this.CompanyId, this.StoreId, 1).subscribe(data1 => {
      console.log(data1)
      this.Auth.getstoredatadb(data1).subscribe(d => {
        this.router.navigateByUrl('/auth/pinscreen')
      })
    })
  }
}
