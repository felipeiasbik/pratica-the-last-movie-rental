import rentalsRepository from "../../src/repositories/rentals-repository";
import { cleanDb } from "../utils";

beforeEach(async () => {
  await cleanDb();
})

describe("Rentals Service Tests", () => {
  
  it("should get all rentals", async () => {
    const rentals = [
      {
        date: "2023-07-15",
        endDate: "2023-07-20",
        userId: 1,
        closed: false
      },
      {
        date: "2023-07-17",
        endDate: "2023-07-21",
        userId: 2,
        closed: false
      }
    ]

    jest.spyOn(rentalsRepository, "getRentals").mockImplementationOnce((): any => {
      return rentals;
    });

    const result = await rentalsRepository.getRentals();
    expect(result).toEqual(rentals);

  });

  it("should get rentals by ID", async () => {
    const movie = {
      id: 1,
      name: "Titanic",
      adultsOnly: false,
      rentalId: 1
    }

    jest.spyOn(rentalsRepository, "getRentalById").mockImplementationOnce((): any => {
      return movie;
    });

    const result = await rentalsRepository.getRentalById(movie.id);
    expect(result).toEqual(movie);

  });

  it("should create a new rental", async () => {
    const body = {
      userId: 1,
      moviesId: [1,4]
    }

    jest.spyOn(rentalsRepository, "createRental").mockImplementationOnce((): any => {
      return body;
    });

    const result = await rentalsRepository.createRental(body);
    expect(result).toEqual(body);
  });

});