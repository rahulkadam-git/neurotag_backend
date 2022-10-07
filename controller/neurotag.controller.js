const Customer = require("../model/neurotag.model");
const axios = require("axios");

exports.postAllData = async (req, res) => {
  const dataLength = await Customer.count();

  const api_url =
    "https://bodyfirst.neurotags.co.in/api/v1/server/consumer/findAll";
  try {
    const response = await axios.get(api_url, {
      headers: {
        APIKEY: "0voyo057h6b5vjw4ke611mi95zurlwj5",
        APISECRET: "tgjoosm4zran8l4sw8558e2b01bnfte9",
      },
      params: {
        offset: dataLength,
      },
    });

    const records = response.data.data.records.length;
    console.log(records);

    const customer = await Customer.insertMany(records);
    return res.status(200).json(customer);
  } catch (error) {
    console.log(error);
    return res.status(500).json("not good");
  }
};

exports.getAllData = async (req, res) => {
  try {
    const allData = await Customer.find();
    return res.status(200).json(allData);
  } catch (error) {
    return res.status(500).json("something went wrong");
  }
};
