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
	public feeds_this_many: number;
	public preporation_time: number;
	public cover_photo: string;
	public ingredients: IIngredient[];
	public instructions: IInstruction[];

	constructor(
					t: string,
					d: string,
					ingr: IIngredient[],
					instr: IInstruction[],
					cp: string,
					feeds: number,
					pt: number
				) {
		this.title 				= t;
		this.description 		= d;
		this.ingredients 		= ingr;
		this.instructions	 	= instr;
		this.cover_photo 		= cp;
		this.feeds_this_many 	= feeds;
		this.preporation_time 	= pt;
	}

	public static createBlank(): Recipe {
		return new Recipe('', '', null, null, null, 1, 1);
	  }

}
