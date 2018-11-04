import { Seeder } from './Seeder'

const HeavySpecialsSeeder = Object.create(Seeder)

HeavySpecialsSeeder.getCharacters = () => '@%&*()+=|,.<>/?;:{}[]'

export { HeavySpecialsSeeder }