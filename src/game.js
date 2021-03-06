window.onload = function()
{
	Crafty.init(200, 200);
	Crafty.canvas.init();
	Crafty.background("#EFEFEF");
	
	var sceneNum = _GET("slide-test");
	if(sceneNum === null || sceneNum === undefined)
	{
		sceneNum = 1;
	}
	Crafty.scene("slide-test-" + sceneNum);
};

/**
 * Created by: http://gustavopaes.net
 * Created on: Nov/2009
 * 
 * Retorna os valores de parâmetros passados via url.
 *
 * @param String Nome da parâmetro.
 */
function _GET(name)
{
	var url = window.location.search.replace("?", "");
	var itens = url.split("&");

	for (n in itens)
	{
		if (itens[n].match(name))
		{
			return decodeURIComponent(itens[n].replace(name + "=", ""));
		}
	}
	return null;
}