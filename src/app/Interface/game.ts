export interface IGame{
    name:string;
    released:string;
    description:string;
    background_image:string;

}
export class Game implements IGame{
    name:string;
    released:string;
    description:string;
    background_image:string;

    constructor(name:string,released:string,description:string,background_image:string){
        this.name = name;
        this.released = released;
        this.description = description;
        this.background_image = background_image;
    }
}