function eh_primo(num) {

    let cont = 1;

    if (num <= 100){

        if (num > 1) {

            for (i = 2; i <= num; i++) {

                if (num%i == 0){
                    cont += 1;
                }

            }

            if (cont == 2) {
                return true
            }

            else {
                return false
            }

        }

    

        else {
            return false
        }

    }

    else {
        return "Numero excede o limite maximo"
    }

}

console.log(eh_primo(1))
console.log(eh_primo(3))
console.log(eh_primo(8))
console.log(eh_primo(101))