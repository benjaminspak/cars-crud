var services = { cars: {} };

services.endPointRoot = "http://sabioapi2.azurewebsites.net/";
services.cars.endPoint = services.endPointRoot + "api/entities/cars";
services.cars.getByID = services.cars.endPoint + "/";

services.cars.getAll = () => {
  const settings = {
    type: "GET",
    headers: {
      "sabio-auth": "SA-1391-AAA"
    },
    contentType: "application/json; charset=utf-8"
  };
  return $.ajax(services.cars.endPoint, settings);
};

services.cars.add = data => {
  const settings = {
    data: JSON.stringify(data),

    type: "POST", //POST, PUT, DELETE
    headers: {
      "sabio-auth": "SA-1391-AAA"
    },
    contentType: "application/json; charset=utf-8"
  };
  return $.ajax(services.cars.endPoint, settings);
};

services.cars.update = data => {
  const settings = {
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
    type: "PUT",
    headers: {
      "sabio-auth": "SA-1391-AAA"
    }
  };
  return $.ajax(services.cars.getByID + data.id, settings);
};

services.cars.delete = data => {
  const settings = {
    type: "DELETE",
    headers: {
      "sabio-auth": "SA-1391-AAA"
    }
    // contentType: "application/json; charset=utf-8"
  };
  return $.ajax(services.cars.getByID + data, settings);
};
