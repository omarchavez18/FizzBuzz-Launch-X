const fullFizzBuzz = require("./../../app/app");
//require fullFizzBuzz
class FizzbuzzService {
  static applyValidationInExplorer(explorer) {
    return fullFizzBuzz(explorer).trick;
  }
}

module.exports = FizzbuzzService;
