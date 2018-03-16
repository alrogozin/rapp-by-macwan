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
	public id: number;
	public title: string;
	public description: string;
	public feeds_this_many: number;
	public preporation_time: number;
	public cover_photo: string;
	public keywords: string[];
	public ingredients: IIngredient[];
	public instructions: IInstruction[];

	constructor(
					id: number,
					t: string,
					d: string,
					ingr: IIngredient[],
					instr: IInstruction[],
					feeds: number,
					pt: number,
					cp: string,
					keywords: string[]
				) {
		this.id 				= id;
		this.title 				= t;
		this.description 		= d;
		this.ingredients 		= ingr;
		this.instructions	 	= instr;
		this.cover_photo 		= cp;
		this.feeds_this_many 	= feeds;
		this.preporation_time 	= pt;
		this.keywords			= keywords;
	}

	public static createBlank(): Recipe {
		return new Recipe(-1, '', '', null, null, 1, 1, null, null);
	}

	  public static recipeFromJSON(obj: any): Recipe {
		return new Recipe(
			obj.id,
			obj.title,
			obj.description,
			obj.ingredients,
			obj.instructions,
			obj.feeds_this_many,
			obj.preporation_time,
			obj.cover_photo,
			obj.keywords
		);
	  }

}
