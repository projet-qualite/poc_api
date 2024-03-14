import Toto from "../app/models/toto"

(async () => {
	console.log("await Toto.sync({ alter: true });")
	await Toto.sync({ alter: true });
})();
