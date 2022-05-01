const FizzbuzzService = require("./../lib/services/FizzbuzzService");
const explorers = require("./../explorers.json");

describe("testing fizzbuzz", () => {
  test("prueba que valide el trick con fizzbuzz", () => {
    // const ajolonauta = FizzbuzzService.applyValidationInExplorer(explorers[14]);
    // expect(ajolonauta).toBe(explorers[1].score);

    // const ajolonauta1 = FizzbuzzService.applyValidationInExplorer(
    //   explorers[14]
    // );
    // expect(ajolonauta1).toBe("FIZZ");

    // const ajolonauta2 = FizzbuzzService.applyValidationInExplorer(
    //   explorers[14]
    // );
    // expect(ajolonauta2).toBe("BUZZ");

    const ajolonauta3 = FizzbuzzService.applyValidationInExplorer(
      explorers[14]
    );
    expect(ajolonauta3).toBe("FIZZBUZZ");
  });
});
