type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
    difficulty: Difficulty;
    question: string;
    correct: string;
    incorrect: string[];
}
