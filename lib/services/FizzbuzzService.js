const fullFizzBuzz = require("./../../app/app");

class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        return fullFizzBuzz(explorer).trick;
    }

    static applyValidationInNumber(number) {
        if (number % 3 === 0 && number % 5 === 0) {
            return "FIZZBUZZ";
        } else if (number % 3 === 0) {
            return "FIZZ";
        } else if (number % 5 === 0) {
            return "BUZZ";
        } else {
            return number;
        }
    }
}

module.exports = FizzbuzzService;
