import { FormGroup } from "@angular/forms";

export function usuarioSenhaIguaisValidator(formGroup : FormGroup){
    const userName = formGroup.get('userName')?.value ?? '';
    const passWord = formGroup.get('password')?.value ?? '';

    if (userName != '' && userName != '') {
        return userName==passWord ? {senhaIgualUsuario : true} : null;}
     else{
         return null;
     }
}