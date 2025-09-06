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