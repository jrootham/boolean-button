var value = false;

function get()
{
	return value;
}

function set(val)
{
	value = val;
}

var testButton = new BooleanButton("test", get, set, testDraw, "red", "green");

function testFalse()
{
	testButton.falseAction();
}

function testToggle()
{
	testButton.toggleAction();
}

function testTrue()
{
	testButton.trueAction();
}

function testDraw()
{
	testButton.draw();
}
