import { Question } from '@/models/Question';

const questions: Question[] = [
    {
        difficulty: 'hard',
        question:
            'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correct: 'Simien Jackel',
        incorrect: ['Ethiopian Coyote', 'Amharic Fox', 'Canis Simiensis'],
    },
    {
        difficulty: 'easy',
        question:
            'Which of these is NOT a main playable character in &quot;Grand Theft Auto V&quot;?',
        correct: 'Lamar',
        incorrect: ['Trevor', 'Michael', 'Franklin'],
    },
    {
        difficulty: 'easy',
        question:
            'This Greek goddess&#039;s name was chosen for the dwarf planet responsible for discord on Pluto&#039;s classification amongst astronomers.',
        correct: 'Eris',
        incorrect: ['Charon', 'Ceres', 'Dysnomia'],
    },
    {
        difficulty: 'hard',
        question:
            'Disney&#039;s Haunted Mansion is home to a trio of Hitchhiking Ghosts. Which of these is NOT one of them?',
        correct: 'Harry',
        incorrect: ['Gus', 'Phineas', 'Ezra'],
    },
    {
        difficulty: 'medium',
        question:
            'Which of these is NOT a faction included in the game Counter-Strike: Global Offensive?',
        correct: 'BOPE',
        incorrect: ['GSG-9', 'Elite Crew', 'Phoenix Connexion'],
    },
    {
        difficulty: 'easy',
        question: 'What is the first weapon you acquire in Half-Life?',
        correct: 'A crowbar',
        incorrect: ['A pistol', 'The H.E.V suit', 'Your fists'],
    },
    {
        difficulty: 'hard',
        question: 'What genetic disease is caused by having an extra Y chromosome (XYY)?',
        correct: 'Jacob&#039;s Syndrome',
        incorrect: ['Klinefelter&#039;s Syndrome', 'Turner&#039;s Syndrome', 'Down Syndrome'],
    },
    {
        difficulty: 'medium',
        question: 'What is Meg&#039;s full name in &quot;Family Guy&quot;?',
        correct: 'Megatron Griffin',
        incorrect: ['Who-Cares Griffin', 'Neil Griffin', 'Megan Griffin'],
    },
    {
        difficulty: 'hard',
        question:
            'Which of the following was not one of Joseph Stalin&#039;s ten blows during World War II?',
        correct: 'Vistula-Oder Offensive',
        incorrect: ['Crimean Offensive', 'Leningrad-Novgorod Offensive', 'Operation Bagration'],
    },
    {
        difficulty: 'medium',
        question: 'In &quot;Resident Evil 2&quot;, which virus was William Birkin mutated by?',
        correct: 'G-Virus',
        incorrect: ['T-Virus', 'C-Virus', 'E-Virus'],
    },
];

export default questions;
