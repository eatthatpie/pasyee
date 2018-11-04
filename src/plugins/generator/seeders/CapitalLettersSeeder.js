import { Seeder } from './Seeder'

const CapitalLettersSeeder = Object.create(Seeder)

CapitalLettersSeeder.getCharacters = () => 'QWERTYUIOPASDFGHJKLZXCVBNM'

export { CapitalLettersSeeder }