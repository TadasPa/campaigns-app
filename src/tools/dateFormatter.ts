export const parseShortDate = (date: string) => { 
    // probably would use lib like moment of datejs normaly
    // but for sake of simplicity parse manually
    // error handling also not in scope atm

    const chunks = date.split('/');
    return new Date(Number(chunks[2]), Number(chunks[0]) - 1, Number(chunks[1]));
}