class Mission{
    mission_name: string;
    reward: number;
    time: number;
    difficulty: string;
    description: string;

    constructor(mission_name: string, reward: number, time: number, difficulty: string, description: string){
        this.mission_name = mission_name;
        this.reward = reward;
        this.time = time;
        this.difficulty = difficulty;
        this.description = description;
    }

    getCoins(): number{
        return this.reward;
    }

    getTime(): number{
        return this.time;
    }

    getDifficulty(): string{
        return this.difficulty;
    }

    getDescription(): string{
        return this.description;
    }

    getMissionName(): string{
        return this.mission_name;
    }

    getMissionInfo(): string{
        return `Mission Name: ${this.mission_name}\nReward: ${this.reward} coins\nTime: ${this.time} minutes\nDifficulty: ${this.difficulty}\nDescription: ${this.description}`;
    }

    setMissionName(mission_name: string): void{
        this.mission_name = mission_name;
    }

    setCoins(reward: number): void{
        if(reward < 0){
            throw new Error("Reward cannot be negative");
        }
        this.reward = reward;
    }

    setTime(time: number): void{
        this.time = time;
    }

    setDifficulty(difficulty: string): void{
        this.difficulty = difficulty;
    }

    setDescription(description: string): void{
        this.description = description;
    }

    EditMission(mission_name: string, reward: number, time: number, difficulty: string, description: string): void{
        this.mission_name = mission_name;
        this.reward = reward;
        this.time = time;
        this.difficulty = difficulty;
        this.description = description;
    }
}