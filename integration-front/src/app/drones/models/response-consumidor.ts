export interface ResponseConsumidor {
    "responseMessage": string,
    "errorList": [],
    "objeto": {
        "mensagens": [
            {
                "id": number,
                "latitude": number,
                "longitude": number,
                "temperatura": number,
                "umidade": number,
                "alarmeTemperatura": string,
                "alarmeUmidade": string
            }
        ]
    }
}

