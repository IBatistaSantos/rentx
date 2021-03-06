import { container } from "tsyringe";

import "../../modules/accounts/provider";
import "./providers";
import { UserRepository } from "@modules/accounts/infra/typeorm/repositories/UserRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { IUsersTokens } from "@modules/accounts/repositories/IUsersTokens";
import { CarImageRepository } from "@modules/cars/infra/typeorm/repositories/CarImageRepository";
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ICarImageRepository } from "@modules/cars/repositories/ICarImageRepository";
import { ICarRepository } from "@modules/cars/repositories/ICarRepository";
import { ICategoryRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { RentalRepository } from "@modules/rentals/infra/typeorm/repositories/RentalRepository";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ICarRepository>("CarsRepository", CarsRepository);

container.registerSingleton<ICarImageRepository>(
  "CarsImageRepository",
  CarImageRepository
);

container.registerSingleton<IRentalsRepository>(
  "RentalRepository",
  RentalRepository
);

container.registerSingleton<IUsersTokens>(
  "UserTokensRepository",
  UsersTokensRepository
);
