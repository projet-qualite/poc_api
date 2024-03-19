import Toto from "../app/models/toto"

(async () => {
	await Toto.sync({ alter: true });
})();
