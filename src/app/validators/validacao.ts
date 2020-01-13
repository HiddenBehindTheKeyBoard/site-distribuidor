import { AbstractControl, ValidatorFn } from "@angular/forms";

export class Validacoes {
    static ValorMinimo = (valorMinimo: number) => {
        return (control: AbstractControl) => {
            var valorDigitado = control.value;

            if (parseFloat(valorDigitado) < valorMinimo) {
                return { valorPermitido: true };
            }
            
            return null;
        }
    }
}
