export type Dog = {
	name: string;
	color: string;
};

export const numberOfColors = (dogs: Dog[]): number => {
	// dogs = arrayen med hundar
	// Hundarna har ${numberOfColors(dogs)} antal unika färger.

	// hända massa stuff
	const uniqueColors: string[] = [];

	dogs.forEach((dog) => {
		//console.log(dog.color);

		// kolla om dog.color finns i uniqueColors
		// om inte så lägg till
		// annars gå vidare
		const thisColor = dog.color;
		const index = uniqueColors.indexOf(thisColor);
		// console.log(index);
		if (index === -1) uniqueColors.push(dog.color);
		//if (!colorExists) uniqueColors.push(dog.color);
	});

	return uniqueColors.length;
};

export const commonColor = (dogs: Dog[]): string => {
	// Den vanligaste färgen bland alla hundar är: ${commonColor(dogs)}

	const colors: string[] = [];
	const amounts: number[] = [];

	dogs.forEach((dog) => {
		// titta på dess färg
		// har vi sett den färgen innan?
		// hur många ggr då?

		const index = colors.indexOf(dog.color);
		//console.log(index);
		if (index === -1) {
			colors.push(dog.color);
			amounts.push(1);
		} else {
			amounts[index]++;
		}
	});
	// console.log(colors, amounts);

	const maxAmount = Math.max(...amounts);
	return colors[amounts.indexOf(maxAmount)];
};
