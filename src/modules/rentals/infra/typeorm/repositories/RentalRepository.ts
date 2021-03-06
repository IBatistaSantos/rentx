import { getRepository, Repository } from "typeorm";

import { ICreateRentalDTO } from "@modules/rentals/dtos/ICreateRentalDTO";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

import { Rental } from "../entities/Rental";

class RentalRepository implements IRentalsRepository {
  private repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }
  async findByUserId(user_id: string): Promise<Rental[]> {
    const rentals = await this.repository.find({
      where: { user_id },
      relations: ["car"],
    });

    return rentals;
  }
  async findById(id: string): Promise<Rental | undefined> {
    const rental = await this.repository.findOne(id);
    return rental;
  }

  async create({
    user_id,
    car_id,
    expect_return_date,
    id,
    end_date,
    total,
  }: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create({
      user_id,
      car_id,
      expect_return_date,
      id,
      end_date,
      total,
    });

    await this.repository.save(rental);

    return rental;
  }
  async findOpenRentalByCar(car_id: string): Promise<Rental | undefined> {
    const openCar = await this.repository.findOne({
      where: {
        car_id,
        end_date: null,
      },
    });
    return openCar;
  }
  async findOpenRentalByUser(user_id: string): Promise<Rental | undefined> {
    const openUser = await this.repository.findOne({
      where: {
        user_id,
        end_date: null,
      },
    });
    return openUser;
  }
}

export { RentalRepository };
