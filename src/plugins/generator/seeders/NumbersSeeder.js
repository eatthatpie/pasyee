import { Seeder } from "./Seeder";

const NumbersSeeder = Object.create(Seeder);

NumbersSeeder.getCharacters = () => "0123456789";

export { NumbersSeeder };
