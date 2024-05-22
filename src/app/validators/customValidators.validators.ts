import { AbstractControl, FormControl } from "@angular/forms";

const takenUserNames = ['test', 'mike', 'john'];
export class CustomValidators {
    static noSpaceAllowed = (control: any) => {
        if (control.value != null && control.value.indexOf(' ') != -1) {
            return { noSpaceAllowed: true };
        }
        return null;
    }

    static checkUserName = (control: AbstractControl) => { //: Promise< any>
        // return userNameAllowed(control.value);
        return (takenUserNames.includes(control.value) ? { checkUserName: true } : null);
    }
    static isMatchUserName = (control: AbstractControl) => {
        return (takenUserNames.includes(control.value) ? { isMatchUserName: true } : null );
    }

}

function userNameAllowed(userName: string) {
    const takenUserNames = ['test', 'mike', 'john'];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (takenUserNames.includes(userName)) {
                resolve({ checkUserName: true });
            } else {
                resolve(null);
            }
        }, 5000);
    })

}