export type ValidSymbol = '#' | '$'
export interface GenerateConfig { 
    symbol: ValidSymbol, 
    length: number 
}

//Types annotations  in function and return
//function generateRandomID(symbol: ValidSymbol, length?: number /*| undefined*/): string{ //El "?" hace unionType de length, es opcional,
//puede ser number o undefined
    //return symbol + Math.random().toString(36).substr(2,length)
//}

/*function generateRandomID(options: GenerateConfig): string{
    return options.symbol + Math.random().toString(36).substr(2,options.length)
}*/

//Function Overload
export function generateRandomID(symbol: ValidSymbol, length: number):string
export function generateRandomID(options: GenerateConfig):string
export function generateRandomID(optionsOnSymbol: GenerateConfig | ValidSymbol): string{
    if(typeof optionsOnSymbol === 'string'){
        return optionsOnSymbol + Math.random().toString(36)
        .substr(2,length)
    }
    return optionsOnSymbol.symbol + Math.random().toString(36)
    .substr(2,optionsOnSymbol.length)
}

export function Component(options : { id: string}){
    return (target) => {
        target.id = options.id;
    };
}
