const data = require("../assets/data/names.json");
const { check, validationResult } = require("express-validator");

exports.getNames = (req, res) => {
  const body = req.body;
  const responseList = [];
  const list = data.filter((regionNames) => regionNames.region === body.region);

  if (list.length != 0) {
    const firstNames = [...list[0].male, ...list[0].female];
    const surNames = [...list[0].surnames];
    for (let index = 0; index < body.fetch_count; index++) {
      let uiName = {};
      const firstName =
        firstNames[Math.floor(Math.random() * firstNames.length)];
      const surName = surNames[Math.floor(Math.random() * surNames.length)];
      uiName.name = `${firstName} ${surName}`;
      uiName.gender =
        list[0].male.indexOf(firstName) !== -1 ? "Male" : "Female";
      uiName.phone_no = Math.floor(100000000 + Math.random() * 900000000);
      uiName.email = `${firstName.toLowerCase()}${surName.toLowerCase()}@uinames.com`;
      const credit_card = {};
      credit_card.number = `${Math.floor(
        1111 + Math.random() * 8000
      )} ${Math.floor(1111 + Math.random() * 8000)} ${Math.floor(
        1111 + Math.random() * 8000
      )}`;
      credit_card.expiry_date =
        ("0" + Math.floor(Math.random() * 12)).slice(-2) +
        "/" +
        ("0" + Math.floor(1 + Math.random() * 30)).slice(-2);

      uiName.card_details = credit_card;
      responseList.push(uiName);
    }
  }

  res.json({
    ...body,
    status: 200,
    names: responseList,
  });
};

exports.getRegions = (req, res) => {
  let regionsNames = [];
  data.forEach((regions) => {
    regionsNames.push(regions.region);
  });
  res.json({
    count: regionsNames.length,
    regions: regionsNames,
  });
};
