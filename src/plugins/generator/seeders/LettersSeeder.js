import { Seeder } from "./Seeder";

const LettersSeeder = Object.create(Seeder);

LettersSeeder.getCharacters = () => "qwertyuiopasdfghjklzxcvbnm";

export { LettersSeeder };
