import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { UserInfo } from './user-info.model';

@Component({
    selector: 'app-numeric-conditionalExpression-template-driven-validation-directives',
    templateUrl: './numeric-conditional-expression.component.html'
})
export class NumericConditionalExpressionTemplateDrivenValidationDirectivesComponent implements OnInit {
    userinfo: UserInfo
					dataTypes = [ "Real", "Integer",];

    constructor(
    ) { }

    ngOnInit() {
       this.userinfo= new UserInfo()
    }
}
