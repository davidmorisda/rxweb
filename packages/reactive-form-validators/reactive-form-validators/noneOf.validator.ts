import {
  ValidatorFn,
  AbstractControl
} from "@angular/forms";

import { ObjectMaker } from "../util/object-maker";
import { ArrayConfig } from "../models/config/array-config";
import { AnnotationTypes } from "../core/validator.static";
import { ValidatorValueChecker } from "../util/validator-value-checker";
import { ApplicationUtil } from "../util/app-util";
export function noneOfValidator(config: ArrayConfig): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    config = ApplicationUtil.getConfigObject(config);
    if (ValidatorValueChecker.passArrayValue(control, config)) {
      var testResult = false;
      for (let value of config.matchValues) {
        testResult = control.value.some((y) => y == value);
        if (testResult)
          break;
      }
      if (testResult)
        return ObjectMaker.toJson(AnnotationTypes.noneOf, config, [control.value]);
    }
    return ObjectMaker.null();
  }
}
