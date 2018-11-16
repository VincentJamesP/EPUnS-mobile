import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import "rxjs/Rx";
import { Storage } from "@ionic/storage";
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  ip_address: string = "172.16.123.168";
  port: string = "80";
  constructor(public http: HttpClient, public storage: Storage) {
    console.log("Hello UserProvider Provider");
  }

  getCardNum(cardnum) {
    return new Promise(resolve => {
      this.http
        .get(
          "http://" +
            this.ip_address +
            ":" +
            this.port +
            "/EPUnS/includes/api.php?card_number=" +
            cardnum +
            "&receiveCard="
        )

        .subscribe(
          (__data: any) => {
            // var __data_length = __data.data == null ? 0 : __data.data.length;
            console.log(__data);
            // if (__data_length > 0) {
            // console.log(__data);
            // this.storage.set("card_id", __data.data[0].id);
            // } else resolve(false);
          },
          error => {
            resolve(error);
          }
        );
    });
  }

  getUserAccount(username, password) {
    return new Promise(resolve => {
      this.http
        .get(
          "http://" +
            this.ip_address +
            ":" +
            this.port +
            "/EPUnS/includes/api.php?user_username=" +
            username +
            "&user_password=" +
            password +
            "&clientSignIn"
        )
        .subscribe(
          (__data: any) => {
            var __data_length = __data.data == null ? 0 : __data.data.length;
            console.log(__data);
            if (__data_length > 0) {
              console.log(__data);
              if (__data.data[0].privilege == 1)
                this.storage.set("user_id", __data.data[0].id);
              else resolve(false);
              resolve(true);
            } else resolve(false);
          },
          error => {
            resolve(error);
          }
        );
    });
  }

  postUserAccount(fname, lname, email, username, password) {
    console.log("execute postUserAccount");
    return new Promise(resolve => {
      this.http
        .get(
          "http://" +
            this.ip_address +
            ":80/EPUnS/includes/api.php?fname=" +
            fname +
            "&lname=" +
            lname +
            "&username=" +
            username +
            "&password=" +
            password +
            "&email=" +
            email
        )
        .subscribe(
          (data: any) => {
            console.log(data.result);
            resolve(data.result);
          },
          error => {
            resolve(error);
          }
        );
    });
  }
}
