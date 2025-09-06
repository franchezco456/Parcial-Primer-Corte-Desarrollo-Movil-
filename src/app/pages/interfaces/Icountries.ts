import { IData } from "./IData"

export interface ICountry {
    error: boolean
    msg: string
    data: Data_Country[]
}

export interface Data_Country {
    name: string
    iso2: string
    iso3: string
    unicodeFlag: string
}

export function castToData(countries: Data_Country[]): IData<Data_Country['iso3']>[]{

    return countries.map(country => {
        return {
            id: country.iso3,
            value: country.name
        };
    })

}