class BooleanButton
{
	constructor(name, get, set, drawEverything, falseColour, trueColour)
	{
		this.get = get;
		this.set = set;
		this.drawEverything = drawEverything;

		this.falseColour = falseColour;
		this.trueColour = trueColour;

		this.falseId = name + "-false";
		this.toggleId = name + "-toggle";
		this.imageId = name + "-image";
		this.trueId = name + "-true";
	}

	falseAction()
	{
		this.set(false);

		this.drawEverything();
	}

	toggleAction()
	{
		this.set(!this.get());

		this.drawEverything();
	}

	trueAction()
	{
		this.set(true);

		this.drawEverything();
	}

	draw()
	{
		if (get())
		{
			setColour(this.falseId, "inherit");
			setSource(this.imageId, C.booleanImages.right);
			setColour(this.trueId, this.trueColour);
		}
		else
		{
			setColour(this.falseId, this.falseColour);
			setSource(this.imageId, C.booleanImages.left);
			setColour(this.trueId, "inherit");
		}
	}
}
