http_status = 404

match http_status:
    case 200 | 201:
        print("Success");
    case 400:
        print("Bad request")
    case 404:
        print("Server Error")
    case _:
        print("Unknow")