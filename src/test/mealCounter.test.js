import { mealCounterApi } from "../modules/mealCounterApi";

describe("Meal counter", () => {
  const mockFetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue([1, 2, 3, 4, 5]),
  });

  test("Receive meals quantity", async () => {
    //arrage
    global.fetch = mockFetch;

    //act
    const result = await mealCounterApi();

    //assert
    expect(typeof result).toBe("number");
  });

  test("Receive not null", async () => {
    //arrage
    global.fetch = mockFetch;

    //act
    const result = await mealCounterApi();

    //assert
    expect(result).not.toBe(null);
  });
});