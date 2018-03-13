export interface IIngredient {
	ingredient: string;
	measure: string;
	remark: string;
}

export interface IInstruction {
	instruction: string;
	photo: string;
}

export class Recipe {
	public title: string;
	public description: string;
	public ingredients: IIngredient[];
	public instructions: IInstruction[];
	public cover_photo: string;
	constructor(
					t: string,
					d: string,
					ingr: IIngredient[],
					instr: IInstruction[],
					cp: string
				) 
	{
		this.title = t;
		this.description = d;
		this.ingredients = ingr;
		this.instructions = instr;
		this.cover_photo = cp;
	}
}
